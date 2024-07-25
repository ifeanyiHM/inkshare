"use client";
import LinkListDesktop from "@/app/_components/LinkListDesktop";
import useLink from "@/app/_context/useProduct";
import Image from "next/image";
import { ReactNode } from "react";

interface linkProps {
  children: ReactNode;
}
function Layout({ children }: linkProps) {
  const { handleAddForm, isFormClicked, handleSubmitForm, addForm } = useLink();

  return (
    <div className="xl:flex xl:gap-[1.5rem] xl:bg-[#FAFAFA] xl:mt-0 xl:pt-[1.5rem] pt-[1.5rem] md:pt-[2.5rem] mx-[1rem] md:mx-[1.5rem] md:mt-[1.5rem] mt-[1rem] bg-[#fff] rounded-[0.75rem] ">
      <LinkListDesktop />
      <div className="xl:w-[59.06%] xl:bg-white xl:rounded-[0.75rem] xl:pt-[2.5rem]">
        <h1 className="text-[1.5rem] md:text-[2rem] md:px-[2.5rem] text-[#333333] font-bold px-[1.5rem]">
          Customize your link
        </h1>
        <p className="text-[#737373] mt-[0.5rem]  px-[1.5rem] md:px-[2.5rem]">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <div className="px-[1.5rem] md:px-[2.5rem] cursor-pointer ">
          <span
            onClick={() => handleAddForm()}
            className="md:hover:bg-[#EFEBFF] mt-[2.5rem] block py-[0.688rem] rounded-lg text-center w-full border border-[#633CFF] text-[#633CFF]"
          >
            + Add new link
          </span>
        </div>
        {children}
        <hr />
        <div className="px-[1rem] md:px-[2.5rem] py-[1rem] md:py-[1.5rem] text-end">
          <button
            disabled={addForm.length === 0}
            onClick={handleSubmitForm}
            className={` ${
              isFormClicked ? "bg-[#633CFF]" : "bg-[#BEADFF]"
            }  font-semibold w-full md:w-[5.688rem] py-[0.688rem] text-[#fff] text-center rounded-lg cursor-pointer`}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Layout;
