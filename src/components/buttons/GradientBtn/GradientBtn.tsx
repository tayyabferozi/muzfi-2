import clsx from 'clsx';
import { useAppDispatch } from "../../../redux/hooks";
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
}: Partial<{
  className: any;
  textClassName: any;
  iconClassName: any;
  textLight: any;
  lg: any;
  short: boolean;
  icon: any;
  label: any;
  textSm: any;
  veryShort: any;
}>) => {
  const dispatch = useAppDispatch();
  return (
    <button
      className={clsx(
        "bg-gradient-to-l from-red-500 gap-1.5 to-yellow-500 text-white rounded-md px-3 h-10 flex items-center justify-center",
        className
      )}
     
    >
      {icon && (
        <div>
          <img className={clsx(iconClassName)} src={icon} alt={label} />
        </div>
      )}
      <p className="text-sm font-medium leading-tight text-white capitalize">
        {label}
      </p>
    </button>
  );
};

export default GradientBtn;
