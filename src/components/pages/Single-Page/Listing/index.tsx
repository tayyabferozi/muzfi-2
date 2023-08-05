import Carousel from './carousel';
import Details from './details';

export default function ListingPage() {
  // This page will be 10. User Gear Page !! Not 9. Threads Etc

  return (
    <section>
      <div className='grid-cols-2 gap-6 lg:grid'>
        <Carousel />
        <Details />
      </div>
    </section>
  );
}
