import { Icon } from "@iconify/react";
import Select from "../../common/Selectors/select";

import SortbySelect from "../../common/Selectors/sortbyselect";


export default function ForSaleTopBar() {
  return (
    <section>
      <div className="flex gap-4 p-2 bg-white border rounded-lg border-slate-400/20">
        <button className="flex items-center gap-1 p-3 border rounded-md h-11 bg-zinc-100 border-slate-400/20">
          <Icon icon={"ic:round-menu"} className="text-lg" />
          <p className="text-sm font-medium">Categories</p>
        </button>
        <div className="text-sm font-semibold text-zinc-600 [&>button]:px-3">
          <button className="text-white rounded-md h-11 bg-gradient-to-l from-red-500 to-yellow-500">
            Shop
          </button>
          <button>My Store</button>
        </div>
        <SortbySelect
          options={options}

          placeholder="Best Match"

          className="w-full bg-zinc-100"
        />
        <div className="flex items-center grow border rounded-md bg-zinc-100 p-2.5 gap-3  border-slate-400/20">
          <Icon icon={"iconamoon:search"} />
          <input
            placeholder="Search all 75 items"
            className="w-full bg-transparent outline-none"
          />
        </div>
      </div>
    </section>
  );
}


const options = [
  { label: "Best Match" },
  { label: "Most Recent First" },
  { label: "Price Low to High" },
  { label: "Price High to Low" },
];

