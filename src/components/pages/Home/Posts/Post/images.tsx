export function Images({
  idx,
  imgs,
  length,
}: {
  imgs: any;
  length: number;
  idx: number;
}) {
  if (!imgs) return null;
  return (
    <div className='flex flex-wrap gap-2 mt-3 sm:flex-nowrap'>
      {imgs?.map((el2: any, idx2: any) => {
        return (
          <div
            className='relative flex-grow h-[90px]'
            key={'home-post-img' + idx + '-' + idx2}
          >
            {idx2 === length - 1 && (
              <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-xl font-semibold text-white img-overlay'>
                +45
              </div>
            )}
            <img
              className='object-cover w-full h-full shadow-md rounded-xl '
              src={el2}
              alt='product'
            />
          </div>
        );
      })}
    </div>
  );
}
