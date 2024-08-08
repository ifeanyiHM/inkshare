"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(
    function () {
      router.push("/overview/addLink");
    },
    [router]
  );
}
