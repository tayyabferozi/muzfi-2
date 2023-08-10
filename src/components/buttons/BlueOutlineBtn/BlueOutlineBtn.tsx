import clsx from "clsx";

interface Props {
  noMinW?: boolean;
  icon?: string;
  children: React.ReactNode;
}

const BlueOutlineBtn = ({ icon, noMinW, children }: Props) => {
  return (
    <button
      className={clsx(
        "border border-solid border-accentBlue-500 rounded-md h-11 px-5 text-accentBlue-500 text-sm font-bold hover:-translate-y-1 transition-transform flex items-center gap-2 flex-shrink-0",
        !noMinW && "min-w-[150px]"
      )}
    >
      {icon && <img src={icon} alt="twitter" />} {children}
    </button>
  );
};

export default BlueOutlineBtn;
