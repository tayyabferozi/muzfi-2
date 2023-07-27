import React from 'react'
import SidebarItems from "./SidebarItems";
import { Link, NavLink, useLocation } from "react-router-dom";
import GradientBtn from "../../buttons/GradientBtn";
const SidebarPanel = () => {
  return (
    <div className="px-3 rounded-lg py-4 bg-primary">
      <Link className="block mb-6 xl:hidden" to="/">
        <img
          className="mx-auto"
          src="/assets/imgs/common/logo.png"
          alt="logo"
        />
      </Link>

      <SidebarItems />

      <div className="mt-[20px]">
        <button className="bg-transparent rounded-lg border-2 border-solid border-accentYellow-300 hover:bg-accentYellow-100 transition-colors w-full flex justify-center items-center gap-[10px] h-[45px]">
          <img
            className="h-5"
            src="/assets/vectors/sidebar/plus.svg"
            alt="add"
          />
          <div className="text-md text-accentYellow-500">Invite Users</div>
        </button>
      </div>

      <div>
        <div className="mt-[20px]">
          <GradientBtn className="w-full" lg label="Sell Gear" />
        </div>
      </div>
    </div>
  );
}

export default SidebarPanel