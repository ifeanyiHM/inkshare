"use client";
import { regex } from "@/app/_context/LinkShareContext";
import useLink from "@/app/_context/useProduct";
import Image from "next/image";

function LinkPage() {
  const {
    addForm,
    handleRemoveForm,
    handleSubmitLink,
    openDropdownIndex,
    setOpenDropdownIndex,
    selectedItems,
    handleSelectItem,
    inputValues,
    inputError,
    handleInputChange,
    itemList,
    errorMessage,
  } = useLink();

  const URL_TYPE = regex;

  return (
    <>
      <form
        className="my-[1.5rem] flex flex-col gap-[1.5rem]"
        onSubmit={handleSubmitLink}
      >
        {addForm.map((number, formIndex) => (
          <div
            key={formIndex}
            className="bg-[#FAFAFA] rounded-[0.75rem] p-[1.25rem] mx-[1.5rem]  md:mx-[2.5rem]"
          >
            <div className="flex items-center justify-between text-[#737373] ">
              <div className="flex items-center justify-between gap-[0.5rem]">
                <Image
                  src="/assets/equal.svg"
                  alt="equal"
                  width="12"
                  height="6"
                />
                <span className="font-bold">Link #{number}</span>
              </div>
              <span onClick={() => handleRemoveForm(formIndex)}>Remove</span>
            </div>
            <div className="mt-[0.75rem] flex flex-col gap-[0.75rem] text-[#333333]">
              <div>
                <label
                  htmlFor="platform"
                  className="block text-[0.75rem] mb-[0.25rem]"
                >
                  Platform
                </label>
                <div className="relative">
                  <div
                    onClick={() =>
                      setOpenDropdownIndex(
                        openDropdownIndex === formIndex ? null : formIndex
                      )
                    }
                    className="relative w-full flex items-center justify-between py-[0.75rem]  bg-[#fff] rounded-lg border border-[#D9D9D9]"
                  >
                    {selectedItems[formIndex] !== undefined ? (
                      <>
                        <div className="icon-filter absolute left-[1rem] bottom-[1rem]">
                          <Image
                            src={itemList[selectedItems[formIndex]].src}
                            alt={itemList[selectedItems[formIndex]].name}
                            width="16"
                            height="16"
                          />
                        </div>
                        <span className="block pl-[2.75rem]">
                          {itemList[selectedItems[formIndex]].name}
                        </span>
                      </>
                    ) : (
                      <>
                        <div className="icon-filter absolute left-[1rem] bottom-[1rem] ">
                          <Image
                            src={itemList[0].src}
                            alt="github"
                            width="16"
                            height="16"
                          />
                        </div>
                        <span className="block pl-[2.75rem]">
                          {itemList[0].name}
                        </span>
                      </>
                    )}

                    <div className="pr-[1.313rem] ">
                      <Image
                        className={
                          openDropdownIndex === formIndex
                            ? "transform rotate-180"
                            : "transform-none"
                        }
                        src="/assets/angle-down.svg"
                        alt="angle down"
                        width="12"
                        height="6"
                      />
                    </div>
                  </div>

                  {openDropdownIndex === formIndex && (
                    <div className="shadow dropdown-list bg-[#fff] absolute w-full z-10 top-[3.7rem] h-[10rem] xl:h-[15rem] rounded-lg overflow-y-scroll py-[0.75rem]">
                      {itemList.map((item, itemIndex) => (
                        <>
                          <div
                            key={itemIndex}
                            onClick={() =>
                              handleSelectItem(formIndex, itemIndex)
                            }
                            className="relative cursor-pointer"
                          >
                            <div className="icon-filter absolute left-[1rem] bottom-[0.3rem]">
                              <Image
                                src={item.src}
                                alt="github"
                                width="16"
                                height="16"
                              />
                            </div>

                            <span className="block pl-[2.75rem]">
                              {item.name}
                            </span>
                          </div>
                          {itemIndex < itemList.length - 1 && (
                            <hr className="bg-[#D9D9D9] text-[#D9D9D9] my-[0.75rem] ml-[1rem] mr-[0.5rem]" />
                          )}
                        </>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="link"
                  className="block text-[0.75rem] mb-[0.25rem]"
                >
                  Link
                </label>

                <div className="relative">
                  <input
                    className={` ${
                      (!inputValues[formIndex] && inputError) ||
                      (!URL_TYPE.test(inputValues[formIndex]) && inputError)
                        ? "border-[#FF3939]"
                        : "border-[#D9D9D9]"
                    }  box block w-full h-[3rem] active:border-[#633CFF] outline-none bg-[#fff] rounded-lg pl-[2.75rem] border border-[#D9D9D9]`}
                    type="text"
                    placeholder="e.g. https://www.github.com/johnappleseed"
                    value={inputValues[formIndex] || ""}
                    onChange={(e) =>
                      handleInputChange(formIndex, e.target.value)
                    }
                  />
                  <div className="absolute left-[1rem] bottom-[1rem]">
                    <Image
                      src="/assets/link-bold.svg"
                      alt="link"
                      width="16"
                      height="16"
                    />
                  </div>
                  <p
                    className={`${
                      (!inputValues[formIndex] && inputError) ||
                      (!URL_TYPE.test(inputValues[formIndex]) && inputError)
                        ? "block"
                        : "hidden"
                    }  absolute pl-[0.5rem] text-[#FF3939] text-[0.75rem] md:pl-[0] md:right-[1rem] md:bottom-[0.9rem]`}
                  >
                    {errorMessage}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </form>
    </>
  );
}

export default LinkPage;
