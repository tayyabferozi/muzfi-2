import AboutTabs from '../Listing/about-tabs';
import ThumbGallery from '../Listing/carousel';
import CommentSection from '../Listing/comment-section';
import Details from '../Listing/details';
import PaymentSection from '../Listing/payment-section';
import SimilarProduct from '../Listing/similar-product';

export default function NewGearPage() {
  return (
    <section>
      <div className='grid-cols-2 gap-6 lg:grid'>
        <ThumbGallery />
        <Details isListing />
      </div>
      <AboutTabs />
      <PaymentSection />
      <CommentSection />
      <SimilarProduct />
    </section>
  );
}
