import GradientBtn from '../../../buttons/GradientBtn';
import GreyBtn from '../../../buttons/GreyBtn';

const topGearRooms = [
  {
    img: '/assets/imgs/home/user-img-1.png',
    name: 'Lauralee Quintero',
    role: 'Keys/Producer',
  },
  {
    img: '/assets/imgs/home/user-img-2.png',
    name: 'Lauralee Quintero',
    role: 'Keys/Producer',
  },
];

const TopGearRooms = () => {
  return (
    <div>
      <h4 className='mb-5 text-base'>Top Gear Rooms</h4>

      <div>
        {topGearRooms.map((el, idx) => {
          return (
            <div
              className='flex items-start gap-[14px] mb-5'
              key={'home-top-gear' + idx}
            >
              <img
                className='w-[36px] h-[36px] rounded-[50%] flex-shrink-0'
                src={el.img}
                alt={el.name}
              />
              <div className='mt-[2px] flex-grow flex justify-between items-center'>
                <div>
                  <div className='text-xs font-semibold'>{el.name}</div>
                  <div className='text-xs text-accentGray-700'>{el.role}</div>

                  <div className='flex gap-[20px] mt-3'>
                    <GradientBtn
                      textLight
                      className='px-5 h-[30px] '
                      short
                      label='Room'
                    />
                    <GreyBtn short label='Reviews' />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopGearRooms;
