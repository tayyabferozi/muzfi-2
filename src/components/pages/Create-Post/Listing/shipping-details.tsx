import { Ruler } from "../../../common/ruler";
import Select from "../../../common/Selectors/select";
import { Checkbox } from "./shipping";
import { ShippingTable } from "./shipping-table";

export default function ShippingDetails() {
  return (
    <section>
      <Ruler />
      <div className="text-sm font-bold ">
        How will you deliver the item to the buyer?{" "}
        <span className="text-red-600 ">*</span>
      </div>
      <ShippingTable />
      <p className="text-[11px] font-bold mt-10 mb-1">
        Shipping Rate
        <span className="text-red-600 ">*</span>
      </p>
      <Select
        options={options}
        placeholder="USD"
        className="w-full bg-zinc-100"
      />
      <p className="text-blue-700 mt-1 mb-2 text-[10px] font-bold">
        Shipping label cost estimator
      </p>
      <Checkbox label="Offer a Combine & Save shipping rate" />
    </section>
  );
}
const options = [{ label: "hello" }, { label: "world" }];
