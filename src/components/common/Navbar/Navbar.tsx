import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GradientBtn from "../../buttons/GradientBtn";
import Search from "../Search/Search";
import { useAppDispatch } from "../../../redux/hooks";
import { authShow } from "../../../redux/features/auth/authPopupSlice";

const Navbar = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: Partial<{
  isSidebarOpen: any;
  setIsSidebarOpen: any;
}>) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <nav className="fixed inset-x-0 top-0 z-50 shadow-lg bg-primary">
      <div className="   container   h-[70px] flex justify-between items-center py-4 sm:px-[24px] px-[12px] z-20">
        <div className="flex items-center flex-grow h-5 gap-3 xl:w-1/3 ">
          <div
            className="flex flex-col gap-1 xl:hidden"
            onClick={() => setIsSidebarOpen((prevState: any) => !prevState)}
          >
            <div className="bg-white w-5 h-[2px]"></div>
            <div className="bg-white w-5 h-[2px]"></div>
            <div className="bg-white w-5 h-[2px]"></div>
          </div>

          <Link className="hidden min-[1185px]:block ml-14" to="/">
            <img
              className="h-12 mx-auto"
              src="/assets/imgs/common/logo.png"
              alt="logo"
            />
          </Link>
          <Link className="hidden min-[1185px]:hidden lg:block ml-6" to="/">
            <img
              className="h-12 mx-auto"
              src="/assets/imgs/common/logo-1.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="justify-center flex-grow flex-shrink-0 hidden lg:flex">
          <Search />
        </div>
        <div className="flex items-center justify-end flex-shrink-0 xl:w-1/3 ">
          <div className="flex items-center sm:gap-[22px] gap-3">
            <Link className="transition-transform hover:scale-105" to="/">
              <img src="/assets/vectors/navbar/earth.svg" alt="earth" />
            </Link>
            <Link className="transition-transform hover:scale-105" to="/">
              <img
                className="h-6"
                src="/assets/imgs/home/cart.png"
                alt="cart"
              />
            </Link>

            <div className="w-[1px] h-[22px] bg-white bg-opacity-50 sm:block hidden"></div>
            <Link
              className="text-base font-semibold text-white transition-colors hover:text-opacity-75"
              to="/"
              onClick={() => {
                dispatch(authShow());
              }}
            >
              Login
            </Link>
            <Link
              to=""
              onClick={() => {
                dispatch(authShow());
              }}
            >
              <GradientBtn label="Register" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
