export default function Categories() {
  return (
    <section className="flex gap-3.5 my-8">
      <button className="px-2.5 py-[11px] text-white text-sm font-semibold capitalize bg-gradient-to-l from-red-500 to-yellow-500 rounded-lg ">
        All Listings
      </button>
      {tags.map((_) => (
        <button className="px-2.5 py-[11px] text-sm font-semibold capitalize bg-zinc-50 border-slate-400/20 border rounded-lg ">
          {_}
        </button>
      ))}
    </section>
  );
}


const tags = ["4-Strings", "5-Strings or More", "Active Electronics", "Short Scale", "Acoustic", "Left-Handed", "Fretless", "Vintage"];