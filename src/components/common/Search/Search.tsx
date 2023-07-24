import GradientBtn from '../../buttons/GradientBtn';

const Search = () => {
  return (
    <div className='flex gap-[10px]'>
      <div className='relative border-solid border-[1px] border-accentGray-600 h-[40px] rounded-lg overflow-hidden flex-grow'>
        <img
          className='absolute left-4 top-2/4 -translate-y-2/4'
          src='/assets/vectors/common/search.svg'
          alt='search'
        />
        <input
          className='h-full w-[30rem] block outline-none pl-14 pr-4'
          type='search'
          placeholder='Search...'
        />
      </div>
      <GradientBtn
        iconClassName='w-5 h-5'
        textClassName='text-sm'
        className='flex-shrink-0 h-[40px]'
        icon='/assets/vectors/common/add-white.svg'
        label=' New Post'
      />
    </div>
  );
};

export default Search;
