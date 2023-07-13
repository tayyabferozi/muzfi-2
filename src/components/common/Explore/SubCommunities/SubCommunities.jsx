import LightBlueBtn from "components/buttons/LightBlueBtn";

const subCommunities = [
  {
    img: "/assets/imgs/home/user-img-1.png",
    name: "TeamFender",
    memNum: "2.3k",
  },
  {
    img: "/assets/imgs/home/user-img-3.png",
    name: "ISeeNord",
    memNum: "1.6k",
  },
  {
    img: "/assets/imgs/home/user-img-1.png",
    name: "TeamFender",
    memNum: "2.3k",
  },
  {
    img: "/assets/imgs/home/user-img-3.png",
    name: "ISeeNord",
    memNum: "1.6k",
  },
];

const SubCommunities = () => {
  return (
    <div>
      <h4 className="mb-5 text-base">Popular Sub-Communities</h4>

      <div>
        {subCommunities.map((el, idx) => {
          return (
            <div
              className="flex items-start gap-[14px] mb-[18px]"
              key={"home-popular-sub-communicaties" + idx}
            >
              <img
                className="w-[36px] h-[36px] rounded-[50%] flex-shrink-0"
                src={el.img}
                alt={el.name}
              />
              <div className="mt-[2px] flex-grow flex justify-between items-center">
                <div>
                  <div className="text-xs font-semibold">{el.name}</div>
                  <div className="text-xs text-accentGray-700">
                    {el.memNum} members
                  </div>
                </div>
                <div className="cursor-pointer">
                  <img src="/assets/vectors/home/add-user.svg" alt="add user" />
                </div>
              </div>
            </div>
          );
        })}

        <LightBlueBtn label="View All" />
      </div>
    </div>
  );
};

export default SubCommunities;
