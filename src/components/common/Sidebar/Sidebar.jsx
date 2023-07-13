import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";

import GradientBtn from "components/buttons/GradientBtn";

import "./Sidebar.css";

const navItems = [
  { to: "/", icon: "/assets/imgs/home/home.png", label: "Home" },
  {
    to: "/browse",
    icon: "/assets/imgs/home/singers.png",
    label: "Browse",
  },
  {
    to: "/for-sale",
    icon: "/assets/imgs/home/market.png",
    label: "For Sale",
  },
  {
    to: "/subscribe",
    icon: "/assets/imgs/home/policy.png",
    label: "Subscribe",
  },
  {
    to: "/gear-catalog",
    icon: "/assets/imgs/home/gear.png",
    label: "Gear Catalog",
  },
  {
    to: "/about-us",
    icon: "/assets/imgs/home/about.png",
    label: "About us",
  },
  {
    to: "/policy",
    icon: "/assets/imgs/home/options.png",
    label: "Policy",
  },
];

const topics = [
  {
    to: "/",
    icon: "/assets/vectors/sidebar/music.svg",
    label: "Keyboard / Piano",
  },
  { to: "/", icon: "/assets/vectors/sidebar/music.svg", label: "Guitar" },
  { to: "/", icon: "/assets/vectors/sidebar/music.svg", label: "Bass Guitar" },
  { to: "/", icon: "/assets/vectors/sidebar/music.svg", label: "Drums" },
  { to: "/", icon: "/assets/vectors/sidebar/music.svg", label: "Horns / Wind" },
  { to: "/", icon: "/assets/vectors/sidebar/music.svg", label: "Live Sound" },
  { to: "/", icon: "/assets/vectors/sidebar/music.svg", label: "Recording" },
];

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div
      className={clsx(
        "fixed bg-accentGray-500 top-[70px] xl:static xl:h-[unset] h-[calc(100vh-70px)] w-[270px] overflow-auto flex-shrink-0 z-10",
        isSidebarOpen ? "left-0" : "-left-[300px]"
      )}
      id="main-layout-sidebar"
    >
      <div className="">
        <div
          className="pb-9 xl:hidden block text-white text-5xl absolute top-2 right-3"
          onClick={() => setIsSidebarOpen((prevState) => !prevState)}
        >
          &times;
        </div>

        <div className="px-6 py-7 rounded-lg bg-primary">
          <Link className="xl:hidden mb-6 block" to="/">
            <img
              className="mx-auto"
              src="/assets/imgs/common/logo.png"
              alt="logo"
            />
          </Link>

          <div>
            {navItems.map((el, idx) => {
              return (
                <NavLink
                  className="flex items-center gap-5 mb-[18px] p-3 relative transition-colors rounded-lg hover:bg-primary-700"
                  to={el.to}
                  key={"sidebar-nav-item" + idx}
                >
                  <img
                    className="right-arrow absolute -right-2 transition-opacity"
                    src="/assets/vectors/sidebar/right-arrow.svg"
                    alt="right-arrow"
                  />
                  <div className="">
                    <img className="w-[30px] h-[30px] "src={el.icon} alt={el.label} />
                  </div>
                  <div className="text-white font-semibold transition-colors">
                    {el.label}
                  </div>
                </NavLink>
              );
            })}
          </div>

          <div className="mt-[30px]">
            <button className="bg-transparent rounded-lg border-2 border-solid border-accentYellow-300 hover:bg-accentYellow-100 transition-colors w-full flex justify-center items-center gap-[14px] h-[52px]">
              <img src="/assets/vectors/sidebar/add.svg" alt="add" />
              <div className="text-lg text-accentYellow-500">Invite Users</div>
            </button>
          </div>

          <div className="mt-[40px]">
            <p className="text-white text-sm font-light text-center">
              Create an account to follow your favorite communities and start
              taking part in conversations.
            </p>

            <div className="mt-[20px]">
              <GradientBtn className="w-full" lg label="Sell Gear" />
            </div>
          </div>
        </div>

        <div className="mt-10 px-6 py-7 rounded-lg bg-primary">
          <h4 className="text-white mb-3">Topics</h4>
          {topics.map((el, idx) => {
            return (
              <Link
                to={el.to}
                className="flex items-center gap-[14px] p-3 rounded-lg transition-colors hover:bg-primary-700"
                key={"sidebar-topic-item" + idx}
              >
                <div>
                  <img src={el.icon} alt={el.label} />
                </div>
                <div className="text-white text-base font-semibold">
                  {el.label}
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 px-6 py-7 rounded-lg bg-primary">
          <div>
            <img
              className="w-full"
              src="/assets/imgs/home/ad-1.png"
              alt="instrument"
            />
          </div>
          <div className="mt-4">
            <img
              className="w-full"
              src="/assets/imgs/home/ad-2.png"
              alt="instrument"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
