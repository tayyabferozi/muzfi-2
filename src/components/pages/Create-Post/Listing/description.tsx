import YellowBtn from "../../../buttons/YellowBtn/YellowBtn";
import Select from "../../../common/Selectors/select";
import Uploader from "../../../common/uploader";
import { TextField } from "../../../text-field";

export default function Description() {
  return (
    <section>
      <p>
        <span className="font-semibold ">Upload photos of your gear </span>
        <span className="font-semibold text-red-600 ">*</span>
      </p>
      <ul className="list-disc list-inside ">
        <li> Use original photos for used gear.</li>
        <li>
          Screenshots or pictures from other sites, sellers or manufacturers are
          not allowed.
        </li>
        <li>Square photos are best, and they should be 620x620px or bigger.</li>
      </ul>
      <Uploader className="my-5" />
      <p className="font-semibold ">Select a condition and describe the item</p>
      <p className=" text-[11px] font-semibold my-1">
        Condition
        <span className="text-red-600">*</span>
      </p>
      <Select
        options={options}
        placeholder="Brand"
        className="w-full bg-zinc-100"
      />
      <p className="text-blue-700 text-[10px] my-1">
        How to determine the condition
      </p>
      <TextField />
      <p className="text-sm font-semibold ">This item is sold "As-Described"</p>
      <p className="text-xs ">
        Items sold "As-Described" are excluded from your shop return policy. You
        are still obligated to write accurate and detailed descriptions, provide
        good photos, and deliver these items to the buyer in the described
        condition.
      </p>
      <p className="py-3 font-semibold">
        Embed a YouTube video on your listing
      </p>
      <p className=" text-[11px] font-semibold my-1">
        Paste a link to a YouTube video
      </p>
      <Select
        options={options}
        placeholder="Brand"
        className="w-full bg-zinc-100"
      />
      <YellowBtn label={"Continue"} className="px-8 my-8 w-fit" />
    </section>
  );
}
const options = [{ label: "hello" }, { label: "world" }];
