import Card from 'components/common/Card';
import GradientBtn from 'components/buttons/GradientBtn';

const Feeds = ({ feedTypes }) => {
  return (
    <Card>
      <div className='flex flex-wrap gap-[8px] mt-[px]'>
        {feedTypes.map((el, idx) => {
          return (
            <GradientBtn
              key={'home-feed-type' + idx}
              {...el}
              textSm
              iconClassName='w-[18px]'
              veryShort
            />
          );
        })}
      </div>
    </Card>
  );
};

export default Feeds;
