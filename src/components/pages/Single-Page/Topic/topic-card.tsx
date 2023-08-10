import Card from '../../../common/Card/Card';
import Author from './author';
import Vote from './vote';

export default function TopicCard() {
  return (
    <Card className='flex gap-2'>
      <Vote />
      <div className='grow'>
        <Author />
      </div>
    </Card>
  );
}
