"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [createPassword, setCreatePassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [passwordType, setPasswordType] = useState<boolean>(false);

  const router = useRouter();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !createPassword) {
      setError(true);
      return;
    }

    if (createPassword !== confirmPassword) {
      setError(true);
      return;
    }

    if (createPassword.length < 8) {
      setError(true);
      return;
    }

    if (!emailRegex.test(email)) {
      setError(true);
      return;
    }

    router.push("/overview/addLink");
  }
  return (
    <div className="p-[2rem] flex flex-col gap-[4rem] md:gap-[3.188rem] md:bg-[#FAFAFA] md:items-center md:justify-center ">
      <div className="logo">
        <Image
          src="/assets/linkshare-logo.svg"
          alt="sharelink logo"
          width="182"
          height="40"
        />
      </div>
      <div className="md:bg-[#fff] md:w-[29.75rem] md:rounded-lg md:p-[2.5rem]">
        <h1 className="font-bold text-[1.5rem] md:text-[2rem] leading-9 text-[#333333]">
          Create account
        </h1>
        <p className="text-[#737373] text-[1rem] md:mt-[0.5rem]">
          Let&apos;s get you started sharing your links!
        </p>
        <form onSubmit={handleSubmit} className="mt-[2.5rem]">
          <div className="flex flex-col gap-[1.5rem]">
            <div className="relative">
              <label
                className="block text-[0.75rem] text-[#333333] mb-[0.25rem]"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className={`${
                  (!email && error) || (!emailRegex.test(email) && error)
                    ? "border-[#FF3939]"
                    : "border-[#D9D9D9]"
                } box active:border-[#633CFF] hover:border-[#633CFF] outline-none px-[2.75rem] py-[0.75rem] block w-full h-[3rem] border border-[#D9D9D9] rounded-lg text=[#333333]`}
                type="text"
                placeholder="e.g. alex@email.com"
              />
              <p
                className={`${
                  (!email && error) || (!emailRegex.test(email) && error)
                    ? "block"
                    : "hidden"
                }  absolute pl-[0.5rem] text-[#FF3939] text-[0.75rem] md:pl-[0] md:right-[1rem] md:bottom-[0.9rem]`}
              >
                {(!email && "Can't be empty") ||
                  (!emailRegex.test(email) && "Please enter a valid Email")}
              </p>
              <Image
                className="absolute bottom-[1rem] left-[1rem]"
                src="/assets/email-icon.svg"
                alt="email icon"
                width="16"
                height="16"
              />
            </div>
            <div className="relative">
              <label
                className="block text-[0.75rem] text-[#333333] mb-[0.25rem]"
                htmlFor="password"
              >
                Create password
              </label>
              <input
                onChange={(e) => setCreatePassword(e.target.value)}
                className={`${
                  (!createPassword && error) ||
                  (createPassword !== confirmPassword && error)
                    ? "border-[#FF3939]"
                    : "border-[#D9D9D9]"
                } box active:border-[#633CFF] hover:border-[#633CFF] outline-none px-[2.75rem] py-[0.75rem] block w-full h-[3rem] border border-[#D9D9D9] rounded-lg text=[#333333]`}
                type={passwordType ? "text" : "password"}
                placeholder="At least 8 characters"
              />
              <p
                className={`${
                  (!createPassword && error) ||
                  (createPassword !== confirmPassword && error) ||
                  (createPassword.length < 8 && error)
                    ? "block"
                    : "hidden"
                }  absolute pl-[0.5rem] text-[#FF3939] text-[0.75rem] md:pl-[0] md:right-[1rem] md:bottom-[0.9rem]`}
              >
                {(!createPassword && "Please check again") ||
                  (createPassword !== confirmPassword &&
                    "Password does not match")}
              </p>

              <Image
                className="absolute bottom-[1rem] left-[1rem]"
                src="/assets/password-icon.svg"
                alt="email icon"
                width="16"
                height="16"
              />
            </div>
            <div className="relative">
              <label
                className="block text-[0.75rem] text-[#333333] mb-[0.25rem]"
                htmlFor="password"
              >
                Confirm password
              </label>
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="   border-[#D9D9D9] box active:border-[#633CFF] hover:border-[#633CFF] outline-none px-[2.75rem] py-[0.75rem] block w-full h-[3rem] border border-[#D9D9D9] rounded-lg text=[#333333]"
                type={passwordType ? "text" : "password"}
                placeholder="At least 8 characters"
              />

              <Image
                className="absolute bottom-[1rem] left-[1rem]"
                src="/assets/password-icon.svg"
                alt="email icon"
                width="16"
                height="16"
              />
              <p
                onClick={() => setPasswordType((p) => !p)}
                className="
                  absolute cursor-pointer pl-[0.5rem] text-[#333333] text-[0.75rem] md:pl-[0] md:right-[1rem] md:bottom-[0.9rem]"
              >
                {confirmPassword.length > 1 && (passwordType ? "hide" : "show")}
              </p>
            </div>
          </div>
          <p
            className={`${
              createPassword.length < 8 && error
                ? "text-[#FF3939]"
                : "text-[#737373]"
            } text-[#737373] mt-[1.5rem]`}
          >
            Password must contain at least 8 characters
          </p>
          <button className="box hover:bg-[#BEADFF] active:bg-[#BEADFF] block w-full h-[3rem] bg-[#633CFF] rounded-lg my-[1.5rem]  text-center font-semibold text-[#fff] ">
            Create new account
          </button>
        </form>
        <div className="md:flex md:gap-[0.3rem] items-center justify-center">
          <p className="text-center text-[#737373]">Already have an account?</p>
          <Link className="block text-center text-[#633CFF]" href="/">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
