"use client";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const LandingPageNavBar = () => {
  return (
    <div className="flex w-full justify-between items-center ">
      <div className="text-3xl font-semibold flex items-center gap-x-3">
        <Image src="/opal-logo.svg" width={40} height={40} alt={""} />
        <Link href="/"> Opal </Link>
      </div>
      <div className="hidden gap-x-10 items-center lg:flex">
        <Link
          href="/"
          className="bg-[#848484] py-2 px-5 font-semibold text-lg rounded-full hover:bg-[#7320DD]/80"
        >
          Home
        </Link>

        <Link href="/">Pricing</Link>

        <Link href="/">Contact</Link>
      </div>
      <div className="flex gap-x-2 items-center">
        <Link href="/sign-in">
          <Button className="text-base flex gap-x-2 hover:bg-[white]/80">
            <User fill="#000" />
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPageNavBar;
