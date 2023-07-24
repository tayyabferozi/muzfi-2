import GreyBtn from '../../buttons/GreyBtn';
import YellowBtn from '../../buttons/YellowBtn';

export default function RelatedCommunities() {
  return (
    <section>
      <p className='text-xl font-semibold pb-4'>Related Communuities</p>
      <div className='grid grid-cols-[1fr_3fr] items-center gap-2'>
        <img
          alt=''
          className='w-[54px] h-[54px] rounded-[108.49px]'
          src='https://via.placeholder.com/54x54'
        />{' '}
        <div>
          <p className='font-semibold '>Lauralee Quintero </p>
          <p className='text-neutral-400 text-sm font-medium '>Keys/Producer</p>
        </div>
        <div />
        <div className='flex gap-4'>
          <YellowBtn short label={'Join'} /> <GreyBtn label={'Reviews'} short />
        </div>
      </div>
    </section>
  );
}
