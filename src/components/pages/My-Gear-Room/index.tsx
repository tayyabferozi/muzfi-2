import Carousel from './carousel';
import Details from './details';

export default function MyGearRoom() {
  // This page will be 10. User Gear Page !! Not 9. Threads Etc

  return (
    <section className='grid-cols-2 gap-6 lg:grid'>
      <Carousel />
      <Details />
    </section>
  );
}
