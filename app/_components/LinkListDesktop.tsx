import Image from "next/image";
import LinkTimeline from "./LinkTimeline";
import Link from "next/link";
import useLink from "../_context/useProduct";

function LinkListDesktop() {
  const { submittedData } = useLink();
  return (
    <div className="relative hidden xl:w-[40.94%] bg-white xl:flex items-center justify-center rounded-[0.75rem]">
      <Image src="/assets/phone.svg" alt="phone" width="307" height="631" />

      {submittedData.length > 0 ? (
        <ul className="dropdown-list absolute top-[23.75rem] list-none flex flex-col gap-[1.25rem] pl-[0.5rem] mb-[0.563rem] w-[15.813rem] h-[20rem] overflow-y-scroll">
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
                className="relative w-[full] flex items-center justify-between py-[0.58rem]"
              >
                <span className="absolute left-[1rem] bottom-[1rem]">
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
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}

export default LinkListDesktop;
