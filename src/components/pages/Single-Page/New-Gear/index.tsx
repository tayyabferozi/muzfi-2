import Carousel from './carousel';
import Details from './details';

export default function NewGearPage() {
  return (
    <section className='grid-cols-2 gap-6 lg:grid'>
      <Carousel />
      <Details />
    </section>
  );
}