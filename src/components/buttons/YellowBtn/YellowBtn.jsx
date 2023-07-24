import { Link } from 'react-router-dom';
import clsx from 'clsx';

const YellowBtn = ({ className, short, label }) => {
  return (
    <Link
      className={clsx(
        'text-black text-base font-semibold flex items-center justify-center rounded-md hover:bg-accentYellow-600/80 bg-accentYellow-600 transition-colors',
        short ? 'h-[30px] px-3 text-sm' : 'h-[38px] ',
        className
      )}
      to='/'
    >
      {label}
    </Link>
  );
};

export default YellowBtn;
