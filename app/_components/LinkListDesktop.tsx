"use client";
import Image from "next/image";
import Link from "next/link";
import useLink from "../_context/useProduct";

function LinkListDesktop() {
  const { submittedData, submittedProfile, blankProfile, blankListImg } =
    useLink();
  return (
    <div className="relative hidden xl:w-[40.94%] bg-white xl:flex items-center justify-center rounded-[0.75rem]">
      <div className="absolute top-[6.344rem]">
        {submittedData.length > 0 || submittedProfile !== null ? (
          <div>
            <Image
              src="/assets/phonee.svg"
              alt="phone"
              width="307"
              height="631"
            />
          </div>
        ) : (
          <div>
            <Image
              src="/assets/phone.svg"
              alt="phone"
              width="307"
              height="631"
            />
          </div>
        )}
        {submittedData.length > 0 || submittedProfile !== null ? (
          <div className=" absolute top-[3.969rem] flex flex-col justify-center items-center  w-full  mx-auto text-center  ">
            <div className="mb-[3rem]">
              <div className="relative flex items-center justify-center w-[96px] h-[96px] mx-auto">
                <Image
                  src={blankProfile}
                  alt="profile picture"
                  fill
                  className="rounded-[50%]  border-[#633CFF] "
                />
              </div>
              <h1 className="mt-[1.5rem] text-[1.3rem] font-bold text-[#333333]">
                <span>{submittedProfile?.firstName || "Ben"}</span>{" "}
                {submittedProfile?.lastName || "Wright"}
              </h1>
              <p className="text-[#737373]">
                {submittedProfile?.email || "ben@example.com"}
              </p>
            </div>

            <ul className="dropdown-list list-none flex flex-col gap-[1.25rem] pl-[0.5rem] mb-[0.563rem] w-[15.813rem] h-[19.4rem] rounded-lg overflow-y-scroll">
              {submittedData.map((data, index) => (
                <li
                  key={index}
                  style={{
                    backgroundColor: data.color,
                  }}
                  className="rounded-lg border "
                >
                  <Link
                    href={data.value}
                    target="_blank"
                    className="relative w-[full] flex items-center justify-between py-[0.63rem]"
                  >
                    <span className="absolute left-[1rem] bottom-[0.9rem]">
                      <Image
                        src={data.src}
                        alt={data.name}
                        width="16"
                        height="18"
                      />
                    </span>
                    <span
                      className={`${
                        data.color === "#fff" ? "text-[#333333]" : "text-white"
                      }  pl-[2.75rem]`}
                    >
                      {data.name}{" "}
                    </span>
                    <span className=" pr-[1.313rem] ">
                      <Image
                        src={
                          data.color !== "#fff"
                            ? "/assets/arrow-right.svg"
                            : "/assets/arr-right.svg"
                        }
                        alt="arrow right"
                        width="16"
                        height="16"
                      />
                    </span>
                  </Link>
                </li>
              ))}
              {Array.from(
                { length: blankListImg },
                (_, index) => index + 1
              ).map((blankList) => (
                <li
                  key={blankList}
                  className="rounded-lg border  w-[full] h-[2.75rem]  py-[0.813rem] bg-[#EEEEEE]"
                ></li>
              ))}
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default LinkListDesktop;
