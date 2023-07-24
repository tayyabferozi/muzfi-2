import { Link } from 'react-router-dom';
import clsx from 'clsx';

const GreyBtn = ({
  className,
  short,
  label,
}: {
  className?: any;
  short: any;
  label: any;
}) => {
  return (
    <Link
      className={clsx(
        'text-base font-medium flex items-center justify-center rounded-md bg-accentGray-400 hover:bg-accentGray-500 text-accentGray-700 transition-colors',
        short ? 'h-[30px] px-3 text-sm' : 'h-[38px] px-[20px]',
        className
      )}
      to='/'
    >
      {label}
    </Link>
  );
};

export default GreyBtn;