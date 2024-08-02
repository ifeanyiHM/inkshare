"use client";

import LinkListDesktop from "@/app/_components/LinkListDesktop";
import useLink from "@/app/_context/useProduct";
import { useBrowserStorageState } from "@/app/Hooks/useBrowserStorageState";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function Acc() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [isImageUploaded, setIsImageUploaded] = useBrowserStorageState<boolean>(
    false,
    "isImageUploaded"
  );

  const router = useRouter();

  const { setSubmittedProfile, imageFile, setImageFile, setBlankProfile } =
    useLink();

  async function handleAddProfile(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!firstName || !lastName) {
      setError(true);
      return;
    }

    setSubmittedProfile({
      firstName,
      lastName,
      email,
      imageFile,
    });

    // setFirstName("");
    // setLastName("");
    // setEmail("");
    router.push("/timeline");
  }

  function imageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setImageFile(URL.createObjectURL(e.target.files[0]));
      setIsImageUploaded(true);
      setBlankProfile(URL.createObjectURL(e.target.files[0]));
    }
  }

  return (
    <div className="xl:flex xl:gap-[1.5rem] xl:mt-0 xl:pt-[1.5rem] pt-[1.5rem] md:pt-[2.5rem] mx-[1rem] md:mx-[1.5rem] md:mt-[1.5rem] mt-[1rem] xl:bg-[#fafafa] bg-white rounded-[0.75rem] ">
      <LinkListDesktop />
      <div className="xl:w-[59.06%] xl:bg-white xl:rounded-[0.75rem] xl:pt-[2.5rem]">
        <h1 className="text-[1.5rem] md:text-[2rem] md:px-[2.5rem] text-[#333333] font-bold px-[1.5rem]">
          Profile details
        </h1>
        <p className="text-[#737373] mt-[0.5rem]  px-[1.5rem] md:px-[2.5rem]">
          Add your details to create a personal touch to your profile.
        </p>
        <form action="" onSubmit={handleAddProfile}>
          <div className="flex flex-col gap-[1.5rem]  px-[1.5rem] mt-[2.5rem] mb-[1.5rem]">
            <div className="bg-[#FAFAFA] rounded-[0.75rem] p-[1.25rem] md:flex md:items-center md:gap-[1rem]">
              <p className="text-[#737373] md:w-[40%]">Profile picture</p>
              <div className="md:w-[57.33%] md:flex md:items-center md:gap-[1.5rem]">
                <div className="pt-[1rem] pb-[1.5rem] md:p-0">
                  <label htmlFor="img" className="relative cursor-pointer">
                    <input
                      type="file"
                      id="img"
                      onChange={imageUpload}
                      accept="image/png, image/jpeg"
                      className="hidden"
                    />
                    <div className="relative w-[12.063rem] h-[12.063rem]">
                      <div className="rounded-[0.75rem] relative w-[12.063rem] h-[12.063rem]">
                        <Image
                          src={imageFile}
                          alt="profile picture"
                          fill
                          className="rounded-[0.75rem] object-cover"
                        />
                      </div>

                      <div
                        className={`${
                          isImageUploaded ? "flex" : "hidden"
                        } absolute bottom-0 rounded-[0.75rem]  items-center justify-center py-[3.812rem] px-[2.438rem] bg-[#00000080]`}
                      >
                        <Image
                          src="/assets/overlap-pic.svg"
                          alt="ovelapping image icon"
                          width="116"
                          height="72"
                          className="rounded-[0.75rem] block"
                        />
                      </div>
                    </div>
                  </label>
                </div>
                <p className="text-[#737373] text-[0.75rem]">
                  {" "}
                  Image must be below 1024x1024px. Use PNG or JPG format.
                </p>
              </div>
            </div>
            <div className="bg-[#FAFAFA] rounded-[0.75rem] p-[1.25rem] flex flex-col gap-[0.75rem] md:mb-[9.625rem]">
              <div className="md:flex relative md:items-center md:gap-[1rem]">
                <label
                  className="md:w-[40%] text-[#333333] block text-[0.75rem] mb-[0.25rem]"
                  htmlFor="firstname"
                >
                  First name*
                </label>
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  className={`${
                    !firstName && error
                      ? "border-[#FF3939]"
                      : "border-[#D9D9D9]"
                  } box md:w-[57.33%] active:border-[#633CFF] hover:border-[#633CFF] outline-none px-[1rem] py-[0.75rem] block w-full h-[3rem] border border-[#D9D9D9] rounded-lg text=[#333333]`}
                  type="text"
                  placeholder="Ben"
                />
                <p
                  className={`${
                    !firstName && error ? "block" : "hidden"
                  }  absolute text-[#FF3939] text-[0.75rem] right-[1rem] bottom-[0.9rem]`}
                >
                  Can&apos;t be empty
                </p>
              </div>
              <div className="md:flex relative md:items-center md:gap-[1rem]">
                <label
                  className="md:w-[40%] text-[#333333] block text-[0.75rem] mb-[0.25rem]"
                  htmlFor="lastName"
                >
                  Last name*
                </label>
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  className={`${
                    !lastName && error ? "border-[#FF3939]" : "border-[#D9D9D9]"
                  } box md:w-[57.33%] active:border-[#633CFF] hover:border-[#633CFF] outline-none px-[1rem] py-[0.75rem] block w-full h-[3rem] border border-[#D9D9D9] rounded-lg text=[#333333]`}
                  type="text"
                  placeholder="Wright"
                />
                <p
                  className={`${
                    !lastName && error ? "block" : "hidden"
                  }  absolute text-[#FF3939] text-[0.75rem] right-[1rem] bottom-[0.9rem]`}
                >
                  Can&apos;t be empty
                </p>
              </div>
              <div className="md:flex  md:items-center md:gap-[1rem]">
                <label
                  className="md:w-[40%] text-[#333333] block text-[0.75rem] mb-[0.25rem]"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="box md:w-[57.33%] active:border-[#633CFF]  outline-none px-[1rem] py-[0.75rem] block w-full h-[3rem] border border-[#D9D9D9] rounded-lg text=[#333333]"
                  type="text"
                  placeholder="ben@example.com"
                />
              </div>
            </div>
          </div>

          <hr />
          <div className="px-[1rem] md:px-[2.5rem] py-[1rem] md:py-[1.5rem] text-end">
            <button className="bg-[#633CFF] font-semibold w-full md:w-[5.688rem] py-[0.688rem] text-[#fff] text-center rounded-lg">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Acc;
