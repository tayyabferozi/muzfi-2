import Search from '../../common/Search/Search';
import Categories from './Categories';
import Feeds from './Feeds';
import Posts from './Posts';

const Home = () => {
  /// ADD Logic for 2 different Homepages Based on User being logged in

  /// Guest Homepage is Currently here, spacing is good. Follow the same spacing.

  /// ADD Member SignedIN Homepage(1-2. Homepage) with logic once user log's in

  return (
    <div className='gap-6 lg:flex'>
      <div className='flex-grow min-[1700px]:max-w-[850px] 2xl:max-w-[700px] min-[1350px]:max-w-[675px] xl:max-w-[585px] min-[1150px]:max-w-[675px] lg:max-w-[600px] sm:w-[calc(100vw-48px)] w-[calc(100vw-48px)]  mx-auto'>
        <div className='mb-5 lg:hidden'>
          <Search />
        </div>
        <Categories />
        <Feeds feedTypes={feedTypes} />
        <Posts />
      </div>
    </div>
  );
};

export default Home;

const feedTypes = [
  {
    icon: '/assets/vectors/home/add.svg',
    label: 'New',
  },
  {
    icon: '/assets/vectors/home/hot.svg',
    label: 'Hot',
  },
  {
    icon: '/assets/vectors/home/topics.svg',
    label: 'topics',
  },
  {
    icon: '/assets/vectors/home/for-sale.svg',
    label: 'For Sale',
  },
  {
    icon: '/assets/vectors/home/new-gear.svg',
    label: 'New Gear',
  },
  {
    icon: '/assets/vectors/home/polls.svg',
    label: 'Polls',
  },
  {
    icon: '/assets/vectors/home/add.svg',
    label: 'Latest',
  },
  {
    icon: '/assets/vectors/home/add.svg',
    label: 'Communities',
  },
  {
    icon: '/assets/vectors/home/add.svg',
    label: 'Reviews',
  },
];
