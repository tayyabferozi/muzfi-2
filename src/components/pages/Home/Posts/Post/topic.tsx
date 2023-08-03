import Card from '../../../../common/Card';
import './Post.css';
import { Author } from './author';
import { CardFooter } from './card-footer';
import { User } from './user';

const Topic = ({ el, idx }: { el: any; idx: number }) => {
  return (
    <Card className='h-full home-post' key={'home-post' + idx}>
      <User el={el} />
      <hr />
      <Author topic el={el} idx={idx} />
      {el.prodDescription && (
        <div className='mt-4 text-xs font-medium text-accentGray-800'>
          {el.prodDescription}
        </div>
      )}
      <CardFooter el={el} idx={idx} />
    </Card>
  );
};

export default Topic;
