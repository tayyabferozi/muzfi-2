import { Icon } from '@iconify/react';
import { cn } from 'helpers/utils';

export default function Category({ category }) {
  return (
    <section className='flex items-center gap-4'>
      {category.map((_) => (
        <CategoryCard {..._} />
      ))}
    </section>
  );
}

const CategoryCard = ({ title, icon, value, active }) => {
  return (
    <div
      role='button'
      className={cn(
        'text-sm font-semibold flex items-center gap-2.5 box-border  bg-zinc-100 capitalize text-neutral-400 border border-slate-400 px-2.5 py-3 rounded-lg',
        {
          'bg-gradient-to-l from-red-500 to-yellow-500 text-white border-0':
            active,
        }
      )}
    >
      <Icon icon={icon} width={20} /> {title}
    </div>
  );
};
