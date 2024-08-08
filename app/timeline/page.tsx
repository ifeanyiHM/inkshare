"use client";
import useLink from "@/app/_context/useProduct";
import Image from "next/image";
import Link from "next/link";
import LinkTimeline from "../_components/LinkTimeline";
import SpinnerMini from "../_components/SpinnerMini";

function PageTimeline() {
  const { submittedProfile, submittedData, blankProfile, Logout, loading } =
    useLink();

  return (
    <div className="md:bg-[#FAFAFA]  md:relative">
      <div className="md:h-[23.438rem] xl:h-[22.313rem] md:bg-[#633CFF] md:rounded-b-[2rem]"></div>
      <div
        className={`${
          submittedData.length > 3
            ? "md:mb-[-23.438rem] xl:mb-[-22.313rem]"
            : "md:mb-[-8.438rem] xl:mb-[-16.313rem]"
        } md:-translate-y-[23.438rem] xl:-translate-y-[22.313rem]  md:w-full`}
      >
        <div className="flex items-center md:justify-between gap-[1rem] px-[1.5rem] py-[1rem] md:bg-white md:m-[1.5rem] md:rounded-[0.75rem]">
          <Link
            href="/overview/addLink"
            className="border text-center border-[#633CFF] md:hover:bg-[#EFEBFF] text-[#633CFF] w-full md:w-[9.938rem] py-[0.688rem] rounded-lg"
          >
            Back to Editor
          </Link>
          <div className="flex w-full md:w-[auto] md:gap-[1rem]">
            <Link
              href="#"
              className="bg-[#633CFF] hover:bg-[#BEADFF] text-center md:w-[9.938rem] text-white w-[100%] py-[0.688rem] rounded-lg"
            >
              Share Link
            </Link>
            <div
              onClick={Logout}
              className="hidden xl:block bg-[#633CFF] hover:bg-[#BEADFF] focus:bg-[#BEADFF] xl:w-[9.938rem] font-semibold px-[1.688rem] py-[0.688rem] text-[#fff] text-center rounded-lg cursor-pointer"
            >
              <span className="flex items-center justify-center gap-[1rem] md:gap-[0.3rem]">
                {loading && <SpinnerMini />} Logout
              </span>
            </div>
          </div>
        </div>
        <div className="list-shadow md:mb-[2rem] md:mt-[6.375rem] xl:mt-[5.125rem] max-w-[63.2%] md:max-w-[21.813rem] mx-auto text-center md:bg-white md:px-[3.5rem] md:py-[3rem] md:rounded-[1.5rem]">
          <div className="mt-[3.75rem] md:mt-0 mb-[3.5rem]">
            <div className="relative flex items-center justify-center w-[100px] h-[100px] mx-auto">
              <Image
                src={blankProfile}
                alt="profile picture"
                fill
                className="rounded-[50%] border-[4px] border-[#633CFF]"
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
      <div> &nbsp;</div>
      <div className="xl:hidden flex justify-end p-[1.5rem] mt-[3rem]">
        <div
          onClick={Logout}
          className=" bg-[#633CFF] hover:bg-[#BEADFF] focus:bg-[#BEADFF] w-[9.938rem] font-semibold px-[1.688rem] py-[0.688rem] text-[#fff] text-center rounded-lg cursor-pointer"
        >
          <span className="flex items-center justify-center gap-[1rem] md:gap-[0.3rem]">
            {loading && <SpinnerMini />} Logout
          </span>
        </div>
      </div>
    </div>
  );
}

export default PageTimeline;
