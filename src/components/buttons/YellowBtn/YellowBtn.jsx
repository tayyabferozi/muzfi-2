import { Link } from "react-router-dom";
import clsx from "clsx";

const YellowBtn = ({ className, short, label }) => {
  return (
    <Link
      className={clsx(
        "text-black text-base font-semibold  flex items-center justify-center rounded-md bg-orange-100 hover:bg-accentYellow-600 transition-colors",
        short ? "h-[30px] px-3 text-sm" : "h-[38px] px-[20px]",
        className
      )}
      to="/"
    >
      {label}
    </Link>
  );
};

export default YellowBtn;
