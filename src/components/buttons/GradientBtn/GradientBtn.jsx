import clsx from 'clsx';

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
        'bg-gradient-to-l from-red-500 gap-1.5 to-yellow-500 text-white rounded-md px-3 h-10 flex items-center justify-center',
        className
      )}
    >
      {icon && (
        <div>
          <img className={clsx(iconClassName)} src={icon} alt={label} />
        </div>
      )}
      <p className='text-sm font-semibold leading-tight text-gray-200 capitalize'>
        {label}
      </p>
    </button>
  );
};

export default GradientBtn;
