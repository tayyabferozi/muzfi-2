import Tab from "./Tab";

const tabs = [
  {
    to: "/settings/account",
    icon: "/assets/imgs/settings/account.png",
    label: "Account",
  },
  {
    to: "/settings/profile",
    icon: "/assets/vectors/settings/profile.svg",
    label: "Profile",
  },
  {
    to: "/settings/subscription",
    icon: "/assets/vectors/settings/subscription.svg",
    label: "Subscriptions",
  },
  {
    to: "/settings/notifications",
    icon: "/assets/vectors/settings/notifications.svg",
    label: "Notifications",
  },
  {
    to: "/settings/chat",
    icon: "/assets/vectors/settings/chat.svg",
    label: "Chat & Messaging",
  },
  {
    to: "/settings/safety",
    icon: "/assets/vectors/settings/safety.svg",
    label: "Safety & Privacy",
  },
];

const Tabs = () => {
  return (
    <>
      <div className="overflow-x-auto overflow-y-hidden hidden-scrollbar">
        <div className="flex gap-[14px] mt-3">
          {tabs.map((el, idx) => {
            return <Tab key={"setting-tab" + idx} {...el} />;
          })}
        </div>
      </div>
      <div className="border-t border-solid border-accentGray-600 w-full h-1 mt-4"></div>
    </>
  );
};

export default Tabs;
