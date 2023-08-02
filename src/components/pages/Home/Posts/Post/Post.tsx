import './Post.css';
import Listing from './listing';
import NewGear from './new-gear';
import Poll from './poll';
import Topic from './topic';

const Post = ({ el, idx }: { el: any; idx: number }) => {
  return (
    <>
      <NewGear el={el} idx={idx} />
      <Listing el={el} idx={idx} />
      <Topic el={el} idx={idx} />
      <Poll el={el} idx={idx} />
    </>
  );
};

export default Post;
