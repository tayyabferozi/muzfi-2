import GradientBtn from '../../../buttons/GradientBtn';
import Card from '../../../common/Card/Card';

const Feeds = ({ feedTypes }: { feedTypes: any }) => {
  return (
    <Card>
      <div className='flex flex-wrap gap-[8px] mt-[px]'>
        {feedTypes.map((el: any, idx: any) => {
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
