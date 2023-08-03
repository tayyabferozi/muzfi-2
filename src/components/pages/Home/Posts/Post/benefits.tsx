export function Benefits({ el, idx }: { el: any; idx: number }) {
  return (
    <div className='mt-[18px] flex sm:flex-row flex-col items-center justify-center gap-[18px]'>
      {data.map((_) => (
        <div
          key={_.label}
          className='w-full py-3 px-[18px] text-center bg-accentGray-400 rounded-lg text-accentGray-300 text-[10px] font-semibold'
        >
          {_.label}
          <div className='flex justify-center items-center gap-[3px] mt-[2px]'>
            {Array.from(Array(5)).map((el2, idx2) => {
              return (
                <img
                  className='w-[10px] h-[10px]'
                  key={'home-post-usability-star' + idx + '-' + idx2}
                  src='/assets/vectors/common/star.svg'
                  alt='star'
                  title='star'
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

const data = [
  { label: 'Usability' },
  { label: 'Expectation' },
  { label: 'Performance' },
  { label: 'Performance' },
];
