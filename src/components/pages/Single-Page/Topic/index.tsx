import React from 'react';
import CommentSection from '../Listing/comment-section';
import SimilarProduct from '../Listing/similar-product';
import TopicCard from './topic-card';

const TopicPage = () => {
  // This will be 9 Thread Single Page: topics page
  return (
    <section>
      <TopicCard />
      <CommentSection />
      <SimilarProduct />
    </section>
  );
};

export default TopicPage;
