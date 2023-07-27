import Wrapper from "../../../../layouts/MainLayout/wrapper";
import Category from "../Category";
import Feeds from "../../Home/Feeds/Feeds";
import Posts from "../../Home/Posts";

export default function CommunityPage() {
  return (
    <section>
      <Category category={category} />
      <Wrapper>
        <Feeds feedTypes={feedTypes} />
      </Wrapper>
      <Posts />
    </section>
  );
}
const category = [
  { title: "Posts", icon: "tabler:category", active: true },
  { title: "Brands", icon: "eva:flash-outline" },
  { title: "Customs", icon: "cil:filter" },
  { title: "My Gear Items", icon: "bi:bag", value: "18" },
];

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
    icon: "/assets/vectors/home/topics.svg",
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
];
