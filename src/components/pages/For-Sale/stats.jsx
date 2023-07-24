import { cn } from 'helpers/utils';

export default function Stats({ stat, className }) {
  return (
    <section className={cn('flex justify-between', className)}>
      {stat.map((_) => (
        <div key={_.head}>
          <p class='text-center text-xl font-semibold'>{_.value}</p>
          <p class='text-center text-neutral-400 text-xs font-medium'>
            {_.head}
          </p>
        </div>
      ))}
    </section>
  );
}
