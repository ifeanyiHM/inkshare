"use client";
import useLink from "@/app/_context/useProduct";
import Image from "next/image";
import Link from "next/link";
import LinkTimeline from "../_components/LinkTimeline";

function PageTimeline() {
  const { submittedData, submittedProfile, imageFile } = useLink();

  return (
    <div className="md:bg-[#FAFAFA] md:h-[100vh] md:relative">
      <div className="md:h-[23.438rem] xl:h-[22.313rem] md:bg-[#633CFF] md:rounded-b-[2rem]"></div>
      <div className="md:absolute md:w-full md:top-0">
        <div className="flex md:justify-between gap-[1rem] px-[1.5rem] py-[1rem] md:bg-white md:m-[1.5rem] md:rounded-[0.75rem]">
          <Link
            href="/overview/addLink"
            className="border text-center border-[#633CFF] text-[#633CFF] w-full md:w-[9.938rem] py-[0.688rem] rounded-lg"
          >
            Back to Editor
          </Link>
          <Link
            href="#"
            className="bg-[#633CFF] text-center md:w-[9.938rem] text-white w-full py-[0.688rem] rounded-lg"
          >
            Share Link
          </Link>
        </div>
        <div className="list-shadow md:mt-[6.375rem] xl:mt-[5.125rem] max-w-[63.2%] md:max-w-[21.813rem] mx-auto text-center md:bg-white md:px-[3.5rem] md:py-[3rem] md:rounded-[1.5rem]">
          <div className="mt-[3.75rem] md:mt-0 mb-[3.5rem]">
            <div className="relative flex items-center justify-center w-[100px] h-[100px] mx-auto">
              <Image
                src={imageFile}
                alt="profile picture"
                fill
                className="rounded-[50%] border-[4px] border-[#633CFF] "
              />
            </div>
            <h1 className="mt-[1.563rem] mb-[0.5rem] text-[2rem] font-bold text-[#333333]">
              <span>{submittedProfile?.firstName || "Ben"}</span>{" "}
              {submittedProfile?.lastName || "Wright"}
            </h1>
            <p className="text-[#737373]">
              {submittedProfile?.email || "ben@example.com"}
            </p>
          </div>
          <LinkTimeline />
        </div>
      </div>
    </div>
  );
}

export default PageTimeline;
