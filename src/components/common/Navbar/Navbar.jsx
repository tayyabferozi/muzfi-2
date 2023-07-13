import { Link } from "react-router-dom";

import GradientBtn from "components/buttons/GradientBtn";
import Search from "components/common/Search";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div className="fixed top-0 left-0 w-screen bg-primary h-[70px] flex justify-between items-center py-4 sm:px-[24px] px-[12px] z-20">
      <div className="flex-grow xl:w-1/3 h-5 flex items-center gap-3">
        <div
          className="xl:hidden flex flex-col gap-1"
          onClick={() => setIsSidebarOpen((prevState) => !prevState)}
        >
          <div className="bg-white w-5 h-[2px]"></div>
          <div className="bg-white w-5 h-[2px]"></div>
          <div className="bg-white w-5 h-[2px]"></div>
        </div>

        <Link className="hidden min-[1185px]:block ml-14" to="/">
          <img
            className="mx-auto h-12"
            src="/assets/imgs/common/logo.png"
            alt="logo"
          />
        </Link>
        <Link className="hidden min-[1185px]:hidden lg:block ml-6" to="/">
          <img
            className="mx-auto h-12"
            src="/assets/imgs/common/logo-1.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex-shrink-0 flex-grow  lg:flex justify-center hidden">
        <Search />
      </div>
      <div className="xl:w-1/3 flex-shrink-0 flex justify-end items-center ">
        <div className="flex items-center sm:gap-[22px] gap-3">
          <Link className="hover:scale-105 transition-transform" to="/">
            <img src="/assets/vectors/navbar/earth.svg" alt="earth" />
          </Link>
          {/* <Link className="hover:scale-105 transition-transform" to="/">
            <img
              src="/assets/vectors/navbar/notification.svg"
              alt="notification"
            />
          </Link> */}
          <Link className="hover:scale-105 transition-transform" to="/">
            <img className="h-6" src="/assets/imgs/home/cart.png" alt="cart" />
          </Link>

          <div className="w-[1px] h-[22px] bg-white bg-opacity-50 sm:block hidden"></div>
          <Link
            className="text-white font-semibold text-base hover:text-opacity-75 transition-colors"
            to="/"
          >
            Login
          </Link>

          <GradientBtn label="Register" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
