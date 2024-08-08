"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { supabase } from "../lib/supabase";
import SpinnerMini from "../_components/SpinnerMini";
import useLink from "../_context/useProduct";

export default function Home() {
  // const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [passwordType, setPasswordType] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const { loading, setLoading, email, setEmail } = useLink();

  const router = useRouter();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");

    try {
      setLoading(true);

      if (!email || !password) {
        setError(true);
        return;
      }

      if (!emailRegex.test(email)) {
        setError(true);
        return;
      }

      let { data: dataUser, error: authError } =
        await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        });

      if (authError) {
        setMessage("The email or password you entered is incorrect.");
        setError(false);
      } else if (dataUser) {
        router.refresh();

        setEmail("");
        setPassword("");
      }
    } catch (err) {
      console.log(err);
      setError(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-[2rem] flex flex-col gap-[4rem] md:gap-[3.188rem] md:bg-[#FAFAFA] md:items-center md:justify-center md:h-[100vh]">
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
          Login
        </h1>
        <p className="text-[#737373] text-[1rem] md:mt-[0.5rem]">
          Add your details below to get back into the app
        </p>
        <form onSubmit={handleSubmit} className="mt-[2.5rem]">
          <div className="flex flex-col gap-[1.5rem]">
            <div className="relative">
              <label
                className={`${
                  (!email && error) || (!emailRegex.test(email) && error)
                    ? "text-[#FF3939]"
                    : "text-[#333333]"
                } block text-[0.75rem] mb-[0.25rem] `}
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
                  (!emailRegex.test(email) && "Invalid email")}
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
                className={`${
                  !password && error ? "text-[#FF3939]" : "text-[#333333]"
                } block text-[0.75rem] mb-[0.25rem]`}
                htmlFor="password"
              >
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className={`${
                  !password && error ? "border-[#FF3939]" : "border-[#D9D9D9]"
                } box active:border-[#633CFF] hover:border-[#633CFF]  outline-none px-[2.75rem] py-[0.75rem] block w-full h-[3rem] border border-[#D9D9D9] rounded-lg text=[#333333]`}
                type={passwordType ? "text" : "password"}
                placeholder="Enter your password"
              />
              <p
                className={`${
                  !password && error ? "block" : "hidden"
                }  absolute pl-[0.5rem] text-[#FF3939] text-[0.75rem] md:pl-[0] md:right-[1rem] md:bottom-[0.9rem]`}
              >
                Please check again
              </p>
              <p
                onClick={() => setPasswordType((p) => !p)}
                className="
                  absolute cursor-pointer  text-[#333333] text-[0.75rem] pl-[0] right-[1rem] bottom-[0.9rem]"
              >
                {password.length > 1 && (passwordType ? "hide" : "show")}
              </p>
              <Image
                className="absolute bottom-[1rem] left-[1rem]"
                src="/assets/password-icon.svg"
                alt="email icon"
                width="16"
                height="16"
              />
            </div>
          </div>
          {message && (
            <p className=" text-[#FF3939] text-[0.8rem] md:text-[1rem] mt-[1rem] mb-[-0.5rem]">
              {message}
            </p>
          )}
          <button className="box hover:bg-[#BEADFF] active:bg-[#BEADFF] block w-full h-[3rem] bg-[#633CFF] rounded-lg my-[1.5rem]  text-center font-semibold text-[#fff] ">
            <span className="flex items-center justify-center gap-[1rem]">
              {loading && <SpinnerMini />} Login
            </span>
          </button>
        </form>
        <div className="md:flex md:gap-[0.3rem] items-center justify-center">
          <p className="text-center text-[#737373]">
            Don&apos;t have an account?
          </p>
          <Link
            className="block text-center text-[#633CFF]"
            href="/CreateAccount"
          >
            create one
          </Link>
        </div>
      </div>
    </div>
  );
}
