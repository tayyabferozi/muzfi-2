export default function CardContainer() {
  return (
    <section>
      <p className='text-[22px] font-semibold mt-6 mb-3'>Shop Top Brands</p>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {Array.from(Array(12)).map((_) => (
          <Card key={_} />
        ))}
      </div>
    </section>
  );
}

const Card = () => {
  return (
    <div className='bg-white border rounded-lg border-slate-400/20 p-1.5 '>
      <div className='h-52 w-full bg-neutral-100 rounded-lg border backdrop-blur-[20px]'>
        <img
          className='object-cover object-bottom w-full h-full pb-3'
          src='https://s3-alpha-sig.figma.com/img/4e69/4e4c/7f055d65e3c36e6085b1c5a963281e68?Expires=1691366400&Signature=WiChpkhbWXc0aSGS3aGXnPt1S17xXIua-HiI1Tybs1-bpslmn51Ztag8crR0QOUUFH9mvrmabZyAYFoX65rYG1bQCAn-2QbsCB5K704PZ7rSCdWojZzie~hRTw2b3FzFRp2r30ZiynTxrLTpUoiAkbO1teM8CHBhJrqux-Ye6nyjeDHkcc~PiaMt8LDL0VihVbClux6YnkFl52xfvnxVoje~a432CFrFKnduxZwoehZzFIzI-V8ZlSKWBf4deYmno4mC0TUcYwP7vLtNwb6jQKTJcVGxFJQdLl3XL8SinjZgXKTvooE6NDGI-sIw0Jc~RsPsEDvhGFxUZ4Rg6cVVXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          alt=''
        />
      </div>
      <p className='text-sm font-semibold text-center pt-1.5 '>Fender</p>
    </div>
  );
};
