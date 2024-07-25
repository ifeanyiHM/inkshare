import Image from "next/image";

function page() {
  return (
    <div className="py-[2.906rem] md:py-[5.156rem] xl:py-[3.906rem] xl:px-[7.5rem] mx-[1.5rem] md:mx-[2.5rem] px-[1.25rem] bg-[#FAFAFA] rounded-[0.75rem] my-[1.5rem] md:mb-[2.5rem]">
      <div className="relative flex items-center justify-center w-[7.798rem] h-[5rem] mx-auto md:w-[15.596rem] md:h-[10.188rem]">
        <Image
          src="/assets/add.svg"
          alt="add link"
          fill
          className="object-contain"
        />
      </div>
      <h2 className="my-[1.5rem] md:mt-[2.5rem] text-[1.25rem] md:text-[2rem] font-bold text-[#333333] text-center">
        Let&apos;s get you started
      </h2>
      <p className="text-[#737373] text-center leading-[1.5rem]">
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We&apos;re here to help you
        share your profiles with everyone!
      </p>
    </div>
  );
}

export default page;
