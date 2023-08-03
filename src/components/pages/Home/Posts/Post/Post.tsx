import './Post.css';
import Listing from './listing';
import NewGear from './new-gear';
import Poll from './poll';
import Topic from './topic';

const Post = ({ el, idx }: { el: any; idx: number }) => {
  if (el.type === 'prod-gear') return <NewGear el={el} idx={idx} />;
  if (el.type === 'prod-sale') return <Listing el={el} idx={idx} />;
  if (el.type === 'prod-poll') return <Poll el={el} idx={idx} />;
  return <Topic el={el} idx={idx} />;
};

export default Post;
