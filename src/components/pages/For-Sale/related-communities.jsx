import GreyBtn from 'components/buttons/GreyBtn/GreyBtn';
import YellowBtn from 'components/buttons/YellowBtn/YellowBtn';

export default function RelatedCommunities() {
  return (
    <section>
      <p class='text-xl font-semibold pb-4'>Related Communuities</p>
      <div className='grid grid-cols-[1fr_3fr] items-center gap-2'>
        <img
          alt=''
          class='w-[54px] h-[54px] rounded-[108.49px]'
          src='https://via.placeholder.com/54x54'
        />{' '}
        <div>
          <p class='font-semibold '>Lauralee Quintero </p>
          <p class='text-neutral-400 text-sm font-medium '>Keys/Producer</p>
        </div>
        <div />
        <div className='flex gap-4'>
          <YellowBtn short label={'Join'} /> <GreyBtn label={'Reviews'} short />
        </div>
      </div>
    </section>
  );
}
