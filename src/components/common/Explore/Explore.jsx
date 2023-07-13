import Card from "components/common/Card";
import TopGearRooms from "./TopGearRooms";
import SubCommunities from "./SubCommunities/SubCommunities";
import Reviews from "./Reviews";
import Reviews2 from "./Reviews2";
import { Link } from "react-router-dom";

const links = [
  "About Us",
  "Accessibility",
  "Help Center",
  "Privacy and Terms",
  "Advertising",
  "Business Services",
];

const Explore = () => {
  return (
    <Card className="rounded-b-none lg:h-full lg:mt-0">
      <TopGearRooms />

      <div className="my-6">
        <hr />
      </div>

      <SubCommunities />

      <div className="my-6">
        <hr />
      </div>

      <Reviews2 />

      <img className="w-full mt-4" src="/assets/imgs/home/ad-3.png" alt="ad" />

      <div className="my-6">
        <hr />
      </div>

      <Reviews />

      <div className="my-6">
        <hr />
      </div>

      <img className="mx-auto" src="/assets/imgs/home/users.png" alt="users" />
      <div className="mt-[18px] flex items-center justify-center gap-2">
        <div className="text-[26px] text-[#1D1929] font-bold">184.3K</div>
        <div className="text-accentGray-700 font-medium">Followers</div>
      </div>
      <div className="text-center font-medium">Active now on your profile</div>

      <div className="my-6">
        <hr />
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {links.map((el, idx) => {
          return (
            <Link
              className="text-accentGray-700"
              to="/"
              key={"footer-link" + idx}
            >
              {el}
            </Link>
          );
        })}
      </div>
    </Card>
  );
};

export default Explore;
