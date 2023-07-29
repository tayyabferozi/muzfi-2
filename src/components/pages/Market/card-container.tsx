export default function CardContainer() {
  return (
    <section>
      <p className='text-[22px] font-semibold mt-6 mb-3'>Shop Top Brands</p>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8'>
        {brands.map((record) => (
          <Card title={record.title} img={record.img} />
        ))}
      </div>
    </section>
  );
}

const Card = (props: any) => {
  return (
    <div className='bg-white border rounded-lg border-orange-400/20 p-1.5 '>
      <div className='h-20 w-full bg-neutral-100 rounded-lg border backdrop-blur-[20px]'>
        <img
          className='object-cover object-bottom w-full h-full pb-3'
          src={props.img}
          alt=''
        />
      </div>
      <p className='text-sm font-semibold text-center pt-1 '>{props.title}</p>
    </div>
  );
};


const brands = [
  { title: "Fender", img: "assets/imgs/brands/fender.png" },
  { title: "Tama", img: "assets/imgs/brands/tama.png" },
  { title: "Fodera", img: "assets/imgs/brands/fodera.png" },
  { title: "Ibanez", img: "assets/imgs/brands/pearl.png" },
  { title: "Yahama", img: "assets/imgs/brands/mxr.png" },
  { title: "Epiphone", img: "assets/imgs/brands/korg.png" },
  { title: "PRS", img: "assets/imgs/brands/nord.png" },
  { title: "Schecter", img: "assets/imgs/brands/fender.png" },
];
