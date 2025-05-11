import React from "react";
import LandingPageNavBar from "./_components/navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col py-4 px-0 w-full min-w-full">
      <LandingPageNavBar />

      {children}
    </div>
  );
};

export default Layout;
