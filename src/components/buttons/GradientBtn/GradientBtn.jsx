import clsx from "clsx";

import "./GradientBtn.css";

const GradientBtn = ({
  className,
  textClassName,
  iconClassName,
  textLight,
  lg,
  icon,
  label,
  textSm,
  veryShort,
}) => {
  return (
    <button
      className={clsx(
        "gradient-btn  flex items-center justify-center",

        lg
          ? "h-[52px] py-3 px-[14px] gap-[10px] rounded-lg"
          : veryShort
          ? "py-1 px-[5px] gap-1 rounded-[3px]"
          : "py-2 px-3 gap-[6px] rounded-lg",
        className
      )}
    >
      {icon && (
        <div>
          <img className={clsx(iconClassName)} src={icon} alt={label} />
        </div>
      )}
      <div
        className={clsx(
          "btn-text text-white",
          lg ? "font-bold text-lg" : "",
          textLight ? "font-light" : "font-semibold",
          textClassName,
          textSm ? "text-[9px]" : "text-sm"
        )}
      >
        {label}
      </div>
    </button>
  );
};

export default GradientBtn;
