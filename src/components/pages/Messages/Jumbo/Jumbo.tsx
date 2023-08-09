import Jumbotron from "../../../common/Jumbotron/Jumbotron";

const Jumbo = () => {
  return (
    <Jumbotron className="flex items-center">
      <div>
        <div className="text-sm sm:text-[22px] font-semibold mb-2">
          Messages
        </div>
        <p className="text-accentGray-200 text-xs sm:text-sm">
          Find, Review, Rate and Add to your Gear room
        </p>
      </div>
    </Jumbotron>
  );
};

export default Jumbo;
