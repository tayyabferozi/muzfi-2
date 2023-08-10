interface Props {
  icon?: string;
  children: React.ReactNode;
}

const BlueOutlineBtn = ({ icon, children }: Props) => {
  return (
    <button className="border border-solid border-red-500 rounded-md h-11 min-w-[150px] px-5 text-red-500 text-sm font-bold hover:-translate-y-1 transition-transform flex items-center gap-2 flex-shrink-0">
      {icon && <img src={icon} alt="twitter" />} {children}
    </button>
  );
};

export default BlueOutlineBtn;
