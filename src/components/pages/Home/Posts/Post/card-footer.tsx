export function CardFooter({ el, idx }: { el: any; idx: number }) {
  return (
    <div className='flex justify-between items-center mt-[18px]'>
      <div className='flex items-center sm:gap-[50px] gap-4'>
        <div className='flex gap-[6px] cursor-pointer'>
          <img src='/assets/vectors/common/heart.svg' alt='heart' />
          <div className='font-medium text-accentGray-800'>{el.likes}</div>
        </div>
        <div className='flex gap-[6px] cursor-pointer'>
          <img src='/assets/vectors/common/comment.svg' alt='comment' />
          <div className='font-medium text-accentGray-800'>{el.comments}</div>
        </div>
      </div>
      <div className='flex gap-[14px]'>
        {el.tags.map((el2: any, idx2: any) => {
          return (
            <div
              key={'home-post-tags-star' + idx + '-' + idx2}
              className='px-2 py-1 text-sm font-medium bg-accentGray-400 rounded-3xl'
            >
              {el2}
            </div>
          );
        })}
      </div>
    </div>
  );
}
