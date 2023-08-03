import React from 'react';

import Categories from './Categories';
import Feeds from './Feeds';
import Posts from './Posts';
import User from './User';

const Home = () => {
  /// ADD Logic for 2 different Homepages Based on User being logged in

  /// Guest Homepage is Currently here, spacing is good. Follow the same spacing.

  /// ADD Member SignedIN Homepage(1-2. Homepage) with logic once user log's in

  return (
    <React.Fragment>
      <User />
      <Categories />
      <Feeds feedTypes={feedTypes} />
      <Posts />
    </React.Fragment>
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
    icon: '/assets/vectors/home/add.svg',
    label: 'My Communities',
  },
];
