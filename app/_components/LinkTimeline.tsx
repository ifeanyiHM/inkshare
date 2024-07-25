import Link from "next/link";
import useLink from "../_context/useProduct";
import Image from "next/image";

function LinkTimeline() {
  const { submittedData } = useLink();
  return (
    <>
      {submittedData.length > 0 ? (
        <ul className="list-none flex flex-col gap-[1.25rem] mb-[0.563rem]">
          {submittedData.map((data, index) => (
            <li
              key={index}
              style={{
                backgroundColor: data.color,
              }}
              className="rounded-lg border"
            >
              <Link
                href={data.value}
                target="_blank"
                className="relative w-full flex items-center justify-between py-[0.75rem]"
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
        <p>No Link Add Yet.</p>
      )}
    </>
  );
}

export default LinkTimeline;
