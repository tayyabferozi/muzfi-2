import { ProductCard } from './product-card';

export default function SimilarProduct() {
  return (
    <section>
      <p className='text-[22px] font-semibold mt-6 mb-3'>Shop Top Brands</p>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {Array.from(Array(12)).map((_) => (
          <ProductCard key={_} />
        ))}
      </div>
    </section>
  );
}
