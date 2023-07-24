import React from 'react';
import Category from './category';
import BrowseCategories from './browse-by-category';
import Filter from './filter';
import News from './news';
import Wrapper from '../../../layouts/MainLayout/wrapper';

const Community = () => {
  // ADD Communities Page(2. Browse Communities) Here ----- This is the "Browse" Tab on Left Panel

  // Once a Specific Communitity is Clicked, User will be redirected to Community Page (Single)

  return (
    <div>
      <Category category={category} />
      <Wrapper>
        <BrowseCategories />
        <Filter />
        <News />
      </Wrapper>
    </div>
  );
};

export default Community;

const category = [
  { title: 'Search by Category', icon: 'tabler:category', active: true },
  { title: 'Brands', icon: 'eva:flash-outline' },
  { title: 'Customs', icon: 'cil:filter' },
  { title: 'My Gear Items', icon: 'bi:bag', value: '18' },
];
