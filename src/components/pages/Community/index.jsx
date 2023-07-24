import React from 'react';
import Category from './category';
import BrowseCategories from './browse-by-category';
import Filter from './filter';
import Wrapper from 'layouts/MainLayout/wrapper';

const Community = () => {
  // ADD Communities Page(2. Browse Communities) Here ----- This is the "Browse" Tab on Left Panel

  // Once a Specific Communitity is Clicked, User will be redirected to Community Page (Single)

  return (
    <div>
      <Category />
      <Wrapper>
        <BrowseCategories />
        <Filter />
      </Wrapper>
    </div>
  );
};

export default Community;
