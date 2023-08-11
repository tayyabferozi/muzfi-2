import Card from '../../../common/Card/Card';
import Author from './author';
import PostFooter from './post-footer';
import Vote from './vote';

export default function TopicCard() {
  return (
    <Card className='flex gap-2'>
      <Vote />
      <div className='grow'>
        <Author />
        <div>
          <p className='text-lg font-medium'>Is 55/45 equity split okay?</p>
          <p className='text-xs font-medium'>
            I have a very strong finance/business background and decided to
            pursue an idea and search for a co- founder. I searched my entire
            network but couldn't find a suitable person that I would like to
            work with for many years. I casually asked my younger brother, who
            is a 25-year-old software engineer, and he said he was interested.
            We are very close and are basically best friends. We negotiated a
            55% (me) and 45% (him) equity split. Is this okay or will this split
            be perceived negatively by YC?
          </p>
          <PostFooter />
        </div>
      </div>
    </Card>
  );
}
