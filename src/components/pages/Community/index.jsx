import React from 'react';
import Category from './category';
import BrowseCategories from './browse-by-category';

const Community = () => {
  // ADD Communities Page(2. Browse Communities) Here ----- This is the "Browse" Tab on Left Panel

  // Once a Specific Communitity is Clicked, User will be redirected to Community Page (Single)

  return (
    <div>
      <Category />
      <BrowseCategories />
    </div>
  );
};

export default Community;
