import { Icon } from '@iconify/react';
import { cn } from 'helpers/utils';

export default function Category() {
  return (
    <section>
      {category.map((_) => (
        <CategoryCard {..._} />
      ))}
    </section>
  );
}

const category = [
  { title: 'Search by Category', icon: 'tabler:category', active: true },
  { title: 'Brands', icon: 'eva:flash-outline' },
  { title: 'Customs', icon: 'cil:filter' },
  { title: 'My Gear Items', icon: 'bi:bag', value: '18' },
];

const CategoryCard = ({ title, icon, value, active }) => {
  return (
    <div
      className={cn('text-sm font-semibold capitalize px-2.5 py-3 rounded-lg')}
    >
      <Icon icon={icon} width={20} />
    </div>
  );
};
