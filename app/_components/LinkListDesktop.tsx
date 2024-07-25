import Image from "next/image";

function LinkListDesktop() {
  return (
    <div className="hidden xl:w-[40.94%] bg-white xl:flex items-center justify-center rounded-[0.75rem]">
      <Image src="/assets/phone.svg" alt="phone" width="307" height="631" />
    </div>
  );
}

export default LinkListDesktop;
