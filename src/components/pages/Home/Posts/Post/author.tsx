export function Author({ el, idx }: { el: any; idx: number }) {
  return (
    <>
      {' '}
      <div className='flex flex-wrap items-center justify-between gap-4 mt-3'>
        <div className='flex gap-4'>
          <img
            className='w-[40px] h-[40px] rounded-[50%]'
            src={el.authorImg}
            alt={el.authorName}
          />
          <div>
            <div className='text-base font-semibold'>{el.authorName}</div>
            <div className='flex items-center gap-[3px] mt-[2px]'>
              {new Array(el.authorRating).fill(0).map((el2, idx2) => {
                return (
                  <img
                    className='w-[10px] h-[10px]'
                    key={'home-post-star' + idx + '-' + idx2}
                    src='/assets/vectors/common/star.svg'
                    alt='star'
                    title='star'
                  />
                );
              })}
              <div className='text-[10px] text-accentGray-700'>
                ({el.authorReviewsCount})
              </div>
            </div>
            {(el.type === 'prod-sale' || el.type === 'prod-gear') && (
              <div className='text-accentGray-700 text-[10px] font-medium mt-1'>
                {el.location}
              </div>
            )}

            {el.newGear && (
              <div className='text-sm font-semibold'>New Gear !</div>
            )}
          </div>
        </div>
        <div className='flex flex-col items-end justify-center'>
          {el.type === 'prod-gear' || el.type === 'prod-sale' ? (
            el.type !== 'prod-sale' && (
              <div className='flex items-center gap-[14px]'>
                <img
                  className='w-9 h-9'
                  src={`/assets/vectors/home/${
                    el.type === 'prod-gear' ? 'lock-1' : 'lock-2'
                  }.svg`}
                  alt='lock'
                />
                <div>
                  <div className='text-xs font-semibold'>{el.prodTitle}</div>
                  <div className='text-xs font-semibold text-[#F58960]'>
                    {el.prodSubtitle}
                  </div>
                  {el.goodCondition && (
                    <div className='text-xs font-semibold'>Good condition</div>
                  )}
                </div>
              </div>
            )
          ) : (
            <div className='hidden text-sm sm:block text-accentGray-700'>
              {el.location}
            </div>
          )}
        </div>
      </div>
      <div className='block mt-2 text-sm sm:hidden text-accentGray-700'>
        {el.location}
      </div>{' '}
    </>
  );
}