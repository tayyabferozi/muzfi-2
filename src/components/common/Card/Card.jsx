import clsx from 'clsx';

const Card = ({ noMt, className, children }) => {
  return (
    <div
      className={clsx(
        'border-[1px] border-solid border-accentGray-600 rounded-lg bg-white p-[18px]',
        !noMt && 'mt-6',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
