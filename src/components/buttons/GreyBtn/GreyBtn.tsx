import { Link } from "react-router-dom";
import clsx from "clsx";

interface Props {
  className?: any;
  short?: any;
  label?: any;
  icon?: React.ReactNode;
}

const GreyBtn = ({ className, short, label, icon }: Props) => {
  console.log(!className?.includes("px-"));

  return (
    <Link
      className={clsx(
        "font-medium flex items-center justify-center rounded-md bg-accentGray-400 hover:bg-accentGray-500 text-accentGray-700 transition-colors text-sm border border-solid border-[rgba(134, 145, 168, 0.20)]",
        short ? "h-[30px] text-sm" : "h-[38px]",
        !className?.includes("px-") && (short ? "px-3" : "px-5"),
        className
      )}
      to="/"
    >
      {label && label} {icon && icon}
    </Link>
  );
};

export default GreyBtn;
