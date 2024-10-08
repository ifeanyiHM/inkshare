"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SpinnerMini from "./SpinnerMini";
import useLink from "../_context/useProduct";

function Navigation() {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(false);

  const { loading, Logout } = useLink();

  const pathName = usePathname();
  const links = [
    { href: "/overview/addLink", src: "/assets/link.svg", title: "Links" },
    {
      href: "/overview/addAccount",
      src: "/assets/user.svg",
      title: "Profile Details",
    },
  ];

  useEffect(function () {
    const mq = window.matchMedia("(min-width: 760px)");
    if (mq.matches) {
      setIsDesktopView(true);
    }
  }, []);

  return (
    <div className="flex justify-between items-center py-[1rem] pl-[1.5rem] pr-[1rem] bg-[#fff] md:mx-[1.5rem]   md:rounded-[0.75rem]">
      <div>
        <Link href="/">
          <Image
            src={`/assets/${
              !isDesktopView
                ? "link-share-logo-small.svg"
                : "linkshare-logo.svg"
            }`}
            alt="linkshare logo"
            width={!isDesktopView ? "27" : "146"}
            height={!isDesktopView ? "27" : "32"}
          />
        </Link>
      </div>
      <div className="flex items-center">
        {links.map((link, index) => {
          const isActive = pathName.startsWith(link.href);
          return (
            <div key={index}>
              <Link
                href={link.href}
                className={`${
                  isActive ? "filter" : ""
                }  px-[1.688rem] py-[0.688rem] md:py-[0.813rem] block rounded-lg md:flex md:items-center md:gap-[0.5rem]`}
              >
                <Image
                  src={link.src}
                  alt="linkshare loo"
                  width="20"
                  height="20"
                />
                <span className="text-[#888888] hidden md:block font-semibold hover:text-[#633CFF]">
                  {link.title}
                </span>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="xl:flex xl:gap-[1rem]">
        <div className="px-[1rem] md:px-[1.688rem] py-[0.688rem] border border-[#633CFF] md:hover:bg-[#EFEBFF] rounded-lg">
          <Link href="/timeline">
            {!isDesktopView ? (
              <Image
                src="/assets/eye.svg"
                alt="preview"
                width="20"
                height="20"
              />
            ) : (
              <span className="text-[#633CFF] font-semibold">Preview</span>
            )}
          </Link>
        </div>

        <div
          onClick={Logout}
          className="hidden xl:block bg-[#633CFF] hover:bg-[#BEADFF] focus:bg-[#BEADFF] font-semibold px-[1.688rem] py-[0.688rem] text-[#fff] text-center rounded-lg cursor-pointer"
        >
          <span className="flex items-center justify-center gap-[1rem] md:gap-[0.3rem]">
            {loading ? <SpinnerMini /> : "Logout"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
