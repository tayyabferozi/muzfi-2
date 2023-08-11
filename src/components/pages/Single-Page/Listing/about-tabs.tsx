import * as Tabs from '@radix-ui/react-tabs';

export default function AboutTabs() {
  return (
    <Tabs.Root defaultValue={tabs.at(0)} className='py-5'>
      <Tabs.List className='pl-10'>
        {tabs.map((tab) => (
          <Tabs.Trigger
            className='relative px-6 pt-3 pb-2 group rounded-t-xl text-zinc-600 aria-selected:bg-white aria-selected:text-black aria-selected:font-bold'
            value={tab}
            key={tab}
          >
            {tab}
            <div className='absolute bottom-0 hidden shadow-[-10px_0_white] w-10 h-6 group-aria-selected:block rounded-bl-xl left-full' />
            <div className='absolute bottom-0 hidden w-10 shadow-[10px_0_white] h-6 group-aria-selected:block rounded-br-xl right-full' />
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <Tabs.Content
        value={tabs.at(0)!}
        className='px-6 py-4 bg-white rounded-xl'
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. <br />
        <br /> Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Tabs.Content>
      <Tabs.Content
        value={tabs.at(1)!}
        className='px-6 py-4 bg-white rounded-xl'
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium,
        ipsum assumenda ipsa vero non porro, aliquam cumque tenetur quia
        quisquam corporis exercitationem voluptatem cum perferendis dicta
        eligendi necessitatibus repellat dolores?
      </Tabs.Content>
    </Tabs.Root>
  );
}

const tabs = ['About this listing', 'Product specs'];
