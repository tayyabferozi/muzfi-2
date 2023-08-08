import clsx from "clsx";
import GradientBtn from "../../buttons/GradientBtn";
import CreatePost from "./create-post-popover";

interface Props {
  fullWidth?: boolean;
  noPost?: boolean;
  placeholder?: string;
}

const Search = ({ fullWidth, placeholder, noPost }: Props) => {
  return (
    <div className="flex gap-[10px] w-full">
      <div className="relative border-solid border-[1px] border-accentGray-600 h-[40px] rounded-lg overflow-hidden flex-grow">
        <img
          className="absolute left-4 top-2/4 -translate-y-2/4"
          src="/assets/vectors/common/search.svg"
          alt="search"
        />
        <input
          className={clsx(
            "h-full block outline-none pl-14 pr-4",
            fullWidth ? "w-full" : "w-[30rem]"
          )}
          type="search"
          placeholder={placeholder || "Search..."}
        />
      </div>
      {!noPost && (
        <CreatePost>
          <GradientBtn
            iconClassName="w-5 h-5"
            textClassName="text-sm"
            className="flex-shrink-0 h-[40px]"
            icon="/assets/vectors/common/add-white.svg"
            label=" New Post"
          />
        </CreatePost>
      )}
    </div>
  );
};

export default Search;
