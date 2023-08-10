interface Props {
  label?: string;
}

const Switch = ({ label }: Props) => {
  return (
    <div className="flex items-center justify-center">
      <label htmlFor="toggleB" className="flex items-center cursor-pointer">
        <div className="relative">
          <input type="checkbox" id="toggleB" className="sr-only" />
          <div className="block bg-[#DDDDDD] w-14 h-8 rounded-full"></div>
          <div className="dot absolute left-1 top-1 bg-[white] w-6 h-6 rounded-full transition"></div>
        </div>
        {label && (
          <div className="ml-3 text-[#DDDDDD] font-medium">{label}</div>
        )}
      </label>
    </div>
  );
};

export default Switch;
