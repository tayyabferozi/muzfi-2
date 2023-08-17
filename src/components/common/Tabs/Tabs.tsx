import Tab, { TabProps } from "./Tab";

interface Props {
  withSearch?: true;
  tabsData: TabProps[];
}

const Tabs = ({ tabsData, withSearch }: Props) => {
  return (
    <>
      <div className="overflow-x-auto overflow-y-hidden hidden-scrollbar">
        <div className="flex gap-[14px] mt-3">
          {tabsData.map((el, idx) => {
            return <Tab key={"setting-tab" + idx} {...el} />;
          })}
          {withSearch && (
            <div className="relative flex-grow min-w-[200px]">
              <img
                className="absolute left-3 top-1/2 -translate-y-1/2"
                src="/assets/vectors/common/search-2.svg"
                alt="search"
              />
              <input
                type="search"
                placeholder="Search all 75 items"
                className="bg-white h-11 border border-solid border-accentGray-600 outline-none rounded-md block w-full text-base ps-12 pe-3 placeholder:text-accentGray-700"
              />
            </div>
          )}
        </div>
      </div>
      <div className="border-t border-solid border-accentGray-600 w-full h-1 mt-4"></div>
    </>
  );
};

export default Tabs;
