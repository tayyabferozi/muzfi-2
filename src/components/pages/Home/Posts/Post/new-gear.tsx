import Card from '../../../../common/Card';
import './Post.css';
import { Author } from './author';
import { Benefits } from './benefits';
import { CardFooter } from './card-footer';
import { Images } from './images';
import { User } from './user';

const NewGear = ({ el, idx }: { el: any; idx: number }) => {
  if (el.type !== 'prod-gear') return;
  return (
    <Card className='h-full home-post' key={'home-post' + idx}>
      <User el={el} />
      <hr />
      <Author el={el} idx={idx} />

      <div className='mt-7'>
        <div className='text-center'>
          <div className='text-xs font-semibold'>{el.postTitle}</div>
        </div>
      </div>
      <Benefits el={el} idx={idx} />

      {el.prodDescription && (
        <div className='mt-4 text-xs font-medium text-accentGray-800'>
          {el.prodDescription}
        </div>
      )}
      <Images imgs={el.imgs} length={el.imgs?.length} idx={idx} />
      <CardFooter el={el} idx={idx} />
    </Card>
  );
};

export default NewGear;
