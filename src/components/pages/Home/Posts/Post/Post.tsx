import { useState } from 'react';

import './Post.css';
import clsx from 'clsx';
import friendlyTime from '../../../../../helpers/friendlyTime';
import GradientBtn from '../../../../buttons/GradientBtn';
import YellowBtn from '../../../../buttons/YellowBtn';
import Card from '../../../../common/Card';

const Post = ({ el, idx }: { el: any; idx: number }) => {
  const [isExpandedState, setIsExpandedState] = useState(false);

  return (
    <Card className='h-full home-post' key={'home-post' + idx}>
      <div className='flex items-center justify-between mb-4'>
        <div className='flex flex-wrap items-center gap-4 sm:flex-nowrap'>
          <div className='flex items-center gap-2'>
            <img
              className='w-[25px] h-[25px] rounded-[50%]'
              src={el.userImg}
              alt='user'
            />

            <div className='text-sm font-semibold'>{el.username}</div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='text-xs text-accentGray-700'>•</div>
            <div className='text-xs text-accentGray-700'>
              Posted by {el.author}
            </div>
            <div className='text-xs text-accentGray-700'>•</div>
            <div className='text-xs text-accentGray-700'>
              {friendlyTime(el.time)}
            </div>
          </div>
        </div>
        <div className='flex gap-2'>
          <YellowBtn short label='Join' />
          <img
            className='cursor-pointer'
            src='/assets/vectors/common/menu-vertical.svg'
            alt='menu'
          />
        </div>
      </div>
      <hr />
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
            {(el.type === 'prod-bid' || el.type === 'prod-sale') && (
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
          {el.type === 'prod-sale' || el.type === 'prod-bid' ? (
            el.type !== 'prod-bid' && (
              <div className='flex items-center gap-[14px]'>
                <img
                  className='w-9 h-9'
                  src={`/assets/vectors/home/${
                    el.type === 'prod-sale' ? 'lock-1' : 'lock-2'
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
      </div>

      {el.type === 'prod-sale' && (
        <>
          <div className='mt-7'>
            <div className='text-center'>
              <div className='text-2xl font-medium'>{el.postTitle}</div>
              {/* <div className="text-base font-medium">{el.postSubtitle}</div>
              <div className="text-[10px] font-medium">{el.condition}</div> */}
            </div>
          </div>
          <div className='mt-[18px] flex sm:flex-row flex-col items-center justify-center gap-[18px]'>
            <div className='w-full py-3 px-[18px] text-center max-w-[100px] bg-accentGray-400 rounded-lg text-accentGray-300 text-[10px] font-semibold'>
              Usability
              <div className='flex justify-center items-center gap-[3px] mt-[2px]'>
                {new Array(el.usability).fill(0).map((el2, idx2) => {
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
            <div className='w-full py-3 px-[18px] text-center max-w-[100px] bg-accentGray-400 rounded-lg text-accentGray-300 text-[10px] font-semibold'>
              Expectation
              <div className='flex justify-center items-center gap-[3px] mt-[2px]'>
                {new Array(el.expectation).fill(0).map((el2, idx2) => {
                  return (
                    <img
                      className='w-[10px] h-[10px]'
                      key={'home-post-expectation-star' + idx + '-' + idx2}
                      src='/assets/vectors/common/star.svg'
                      alt='star'
                      title='star'
                    />
                  );
                })}
              </div>
            </div>
            <div className='w-full py-3 px-[18px] text-center max-w-[100px] bg-accentGray-400 rounded-lg text-accentGray-300 text-[10px] font-semibold'>
              Performance
              <div className='flex justify-center items-center gap-[3px] mt-[2px]'>
                {new Array(el.performance).fill(0).map((el2, idx2) => {
                  return (
                    <img
                      className='w-[10px] h-[10px]'
                      key={'home-post-performance-star' + idx + '-' + idx2}
                      src='/assets/vectors/common/star.svg'
                      alt='star'
                      title='star'
                    />
                  );
                })}
              </div>
            </div>
            <div className='w-full py-3 px-[18px] text-center max-w-[100px] bg-accentGray-400 rounded-lg text-accentGray-300 text-[10px] font-semibold'>
              Performance
              <div className='flex justify-center items-center gap-[3px] mt-[2px]'>
                {new Array(el.performance).fill(0).map((el2, idx2) => {
                  return (
                    <img
                      className='w-[10px] h-[10px]'
                      key={'home-post-performance-star' + idx + '-' + idx2}
                      src='/assets/vectors/common/star.svg'
                      alt='star'
                      title='star'
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}

      {el.type !== 'prod-sale' && el.type !== 'prod-bid' && (
        <>
          {el.postTitle && (
            <div className='mt-3 text-2xl font-medium'>{el.postTitle}</div>
          )}

          {el.postText && (
            <div className='mt-3 text-base font-normal'>
              {isExpandedState ? (
                <>
                  {el.postText}{' '}
                  {el.postText.length > 194 && (
                    <span
                      className='cursor-pointer text-accentYellow-500'
                      onClick={() => setIsExpandedState(false)}
                    >
                      Read less
                    </span>
                  )}
                </>
              ) : (
                <>
                  {el.postText.slice(0, 194)}
                  {el.postText.length > 194 && (
                    <>
                      ...{' '}
                      <span
                        className='cursor-pointer text-accentYellow-500'
                        onClick={() => setIsExpandedState(true)}
                      >
                        Read more
                      </span>
                    </>
                  )}
                </>
              )}
            </div>
          )}

          {el.options && (
            <div className='mt-[18px]'>
              {el.options.map((el2: any, idx2: any) => {
                return (
                  <div
                    className='flex items-center bg-accentGray-400 text-lg py-4 px-3 rounded-[10px] mb-[10px]'
                    key={'home-post-option' + idx + '-' + idx2}
                  >
                    <input
                      className="relative float-left mr-1 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-black checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-black checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-black checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-black dark:checked:after:border-black dark:checked:after:bg-black dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-black dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type='radio'
                      name='flexRadioDefault'
                      id={el2}
                    />
                    <label
                      className='mt-px inline-block pl-[0.15rem] hover:cursor-pointer'
                      htmlFor={el2}
                    >
                      {el2}
                    </label>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}

      {el.type === 'prod-bid' && (
        <>
          <div className='flex justify-center pt-9'>
            <div>
              <div className='text-base font-semibold'>{el.prodTitle}</div>
              <div className='text-sm font-semibold text-accentRed-400'>
                {el.prodSubtitle}
              </div>
            </div>
          </div>
          <div className='flex justify-between sm:flex-row flex-col flex-wrap gap-[10px] mt-3'>
            <div
              className={clsx(
                'w-full max-w-[354px] bg-accentGray-400 py-2 px-9 mx-auto rounded-lg flex flex-wrap justify-between items-center',
                el.brownBtns &&
                  'bg-accentGray-900 border-solid border border-[rgba(251, 188, 5, 0.50)]'
              )}
            >
              <div className='text-center'>
                <div className='text-base font-semibold'>
                  $ {el.askingPrice}
                </div>
                <div className='text-[10px] text-accentGray-700 font-semibold'>
                  Asking Price
                </div>
              </div>
              <div className='text-center'>
                <div className='text-base font-semibold'>{el.bidsCount}</div>
                <div className='text-[10px] text-accentGray-700 font-semibold'>
                  Bids
                </div>
              </div>
              <div className='text-center'>
                <div className='text-base font-semibold'>{el.days}</div>
                <div className='text-[10px] text-accentGray-700 font-semibold'>
                  Days
                </div>
              </div>
            </div>
            <div className='w-full max-w-[166px] mx-auto flex flex-col gap-2 justify-between items-center'>
              <div className='flex gap-2'>
                <button
                  className={clsx(
                    'border border-solid border-accentYellow-300 transition-transform hover:scale-105 bg-accentGray-900 rounded-lg w-8 h-8 inline-flex justify-center items-center'
                  )}
                >
                  <img
                    className='w-5 h-5'
                    src='/assets/vectors/common/heart.svg'
                    alt='heart'
                  />
                </button>

                <button className='h-8 transition-transform hover:scale-105 bg-accentGray-900 rounded-lg border border-solid border-accentYellow-300 text-[10px] font-medium px-4'>
                  Make an offer
                </button>
              </div>

              {el.brownBtns ? (
                <button className='h-8 commit-btn w-full transition-transform hover:scale-105 bg-black rounded-lg text-[10px] font-medium text-white flex items-center justify-center py-[10px] px-7 gap-5'>
                  <img src='/assets/vectors/common/cart.svg' alt='cart' />
                  Commit
                </button>
              ) : (
                <GradientBtn
                  className='flex-grow w-full'
                  icon='/assets/vectors/common/cart.svg'
                  label='Add to cart'
                  textClassName='text-[9px] font-light ms-2'
                  textLight
                />
              )}
            </div>
          </div>
        </>
      )}

      {el.prodDescription && (
        <div className='mt-4 text-xs font-medium text-accentGray-800'>
          {el.prodDescription}
        </div>
      )}

      {el.imgs && (
        <div className='flex flex-wrap gap-2 mt-3 sm:flex-nowrap'>
          {el.imgs?.map((el2: any, idx2: any) => {
            return (
              <div
                className='relative flex-grow h-[74px]'
                key={'home-post-img' + idx + '-' + idx2}
              >
                {idx2 === el.imgs.length - 1 && (
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
      )}

      {el.type === 'poll' && (
        <div className='flex items-center justify-between mt-2'>
          <div className='text-sm font-medium text-accentGray-700'>
            {el.votesCount} votes
          </div>
          <div className='text-sm font-medium text-accentGray-700'>
            {el.timeLeft}
          </div>
        </div>
      )}

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
    </Card>
  );
};

export default Post;
