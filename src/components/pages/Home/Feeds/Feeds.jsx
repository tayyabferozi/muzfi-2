import Card from "components/common/Card";
import GradientBtn from "components/buttons/GradientBtn";

const feedTypes = [
  {
    icon: "/assets/vectors/home/add.svg",
    label: "New",
  },
  {
    icon: "/assets/vectors/home/hot.svg",
    label: "Hot",
  },
  {
    icon: "/assets/vectors/home/Topics.svg",
    label: "topics",
  },
  {
    icon: "/assets/vectors/home/for-sale.svg",
    label: "For Sale",
  },
  {
    icon: "/assets/vectors/home/new-gear.svg",
    label: "New Gear",
  },
  {
    icon: "/assets/vectors/home/polls.svg",
    label: "Polls",
  },
  {
    icon: "/assets/vectors/home/add.svg",
    label: "Latest",
  },
  {
    icon: "/assets/vectors/home/add.svg",
    label: "Communities",
  },
   {
    icon: "/assets/vectors/home/add.svg",
    label: "Reviews",
  },
];

const Feeds = () => {
  return (
    <Card>

      <div className="flex flex-wrap gap-[8px] mt-[px]">
        {feedTypes.map((el, idx) => {
          return (
            <GradientBtn
              key={"home-feed-type" + idx}
              {...el}
              textSm
              iconClassName="w-[18px]"
              veryShort
            />
          );
        })}
      </div>
    </Card>
  );
};

export default Feeds;
