import Search from "components/common/Search/Search";
import Categories from "./Categories";
import Feeds from "./Feeds";
import Posts from "./Posts";

const Home = () => {
  return (
    <div className="lg:flex gap-6">
      <div className="flex-grow min-[1700px]:max-w-[850px] 2xl:max-w-[700px] min-[1350px]:max-w-[675px] xl:max-w-[585px] min-[1150px]:max-w-[675px] lg:max-w-[600px] sm:w-[calc(100vw-48px)] w-[calc(100vw-48px)]  mx-auto">
        <div className="lg:hidden mb-5">
          <Search />
        </div>
        <Categories />
        <Feeds />
        <Posts />
      </div>
    </div>
  );
};

export default Home;
