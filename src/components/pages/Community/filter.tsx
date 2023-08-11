import { Icon } from "@iconify/react";

export default function Filter() {
  return (
    <section className="grid grid-cols-2 gap-3 my-8 md:grid-cols-4">
      {data.map((_) => (
        <div
          role="button"
          key={_.label}
          className="gap-1 p-3 bg-white border rounded-lg basis-1/4 border-slate-200"
        >
          <div className="flex items-center gap-1">
            <Icon icon="carbon:location" className="text-lg text-zinc-500" />
            <p className="text-xs text-zinc-500">{_.label}</p>
          </div>
          <p className="text-sm font-medium">{_.desc} </p>
        </div>
      ))}
    </section>
  );
}

const data = [
  { label: "Categories", desc: "Keys/Painos/Synths" }, // Size, latest, hot market, age,  etc
  { label: "Sub-Communities", desc: "Gigging/Live" },
  { label: "Genre", desc: "Pop" },
  { label: "Type", desc: "Public" },
];
