"use client";
import { ReactNode } from "react";
import Navigation from "../_components/Navigation";

interface OverviewProps {
  children: ReactNode;
}
function layout({ children }: OverviewProps) {
  return (
    <div className="bg-[#FAFAFA] md:py-[1.5rem] h-full pb-[1rem]">
      <Navigation />
      <div>{children}</div>
    </div>
  );
}

export default layout;
