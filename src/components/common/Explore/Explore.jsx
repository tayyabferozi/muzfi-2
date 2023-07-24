import Card from 'components/common/Card';
import TopGearRooms from './TopGearRooms';
import SubCommunities from './SubCommunities/SubCommunities';
import Reviews from './Reviews';
import Reviews2 from './Reviews2';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ExploreMenu from 'components/pages/For-Sale/explore-menu';
import { Ruler } from '../ruler';

const links = [
  'About Us',
  'Accessibility',
  'Help Center',
  'Privacy and Terms',
  'Advertising',
  'Business Services',
];

const Explore = () => {
  const { pathname } = useLocation();
  return (
    <Card className='rounded-b-none lg:h-full lg:mt-0'>
      {pathname === '/for-sale' ? (
        <ExploreMenu />
      ) : (
        <>
          <TopGearRooms />
        </>
      )}

      <Ruler />

      <SubCommunities />

      <div className='my-6'>
        <hr />
      </div>

      <Reviews2 />

      <img className='w-full mt-4' src='/assets/imgs/home/ad-3.png' alt='ad' />

      <Ruler />

      <Reviews />

      <Ruler />

      <img className='mx-auto' src='/assets/imgs/home/users.png' alt='users' />
      <div className='mt-[18px] flex items-center justify-center gap-2'>
        <div className='text-[26px] text-[#1D1929] font-bold'>184.3K</div>
        <div className='font-medium text-accentGray-700'>Followers</div>
      </div>
      <div className='font-medium text-center'>Active now on your profile</div>

      <Ruler />

      <div className='flex flex-wrap justify-center gap-6'>
        {links.map((el, idx) => {
          return (
            <Link
              className='text-accentGray-700'
              to='/'
              key={'footer-link' + idx}
            >
              {el}
            </Link>
          );
        })}
      </div>
    </Card>
  );
};

export default Explore;
