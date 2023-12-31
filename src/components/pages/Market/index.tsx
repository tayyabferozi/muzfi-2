import Select from "../../common/Selectors/select";
import CardContainer from "./card-container";
import Categories from "./categories";
import ForSaleTopBar from "./for-sale-topbar";
import SimilarProduct from "./similar-product";

const ForSale = () => {
  // THIS is for (6. For Sale Page) SEE FIGMA FILE
  return (
    <div>
      <ForSaleTopBar /> <CardContainer />
      <Categories />
      <div className="text-xs font-medium capitalize text-neutral-400">
        168,874 Results
      </div>
      <div className="h-0 pb-8 mt-1 border-t border-slate-400/20" />
      <div className="flex items-center gap-3.5 flex-wrap">
        {tags.map((_) => (
          <Select
            key={_}
            options={options}
            placeholder={_}
            className="w-full bg-zinc-100"
          />
        ))}
      </div>
      <SimilarProduct />
    </div>
  );
};

export default ForSale;
const options = [{ label: "hello" }, { label: "world" }];


const tags = ["Condition", "Brands", "Price", "Location", "Buying Format"];

