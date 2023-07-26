import { Outlet } from 'react-router-dom';
import Select from '../../components/common/select';
import Tabs from '../../components/common/tabs';

export default function TabsWrapper() {
  return (
    <div>
      <p className='text-black text-[22px] font-semibold'>Create a post</p>
      <div className='flex justify-between my-3'>
        <Select options={options} placeholder='Choose a Category' />
        <Select options={options} placeholder='Choose  Sub Category' />
        <Select options={options} placeholder='Choose Community' />
      </div>
      <div className='bg-white border rounded-lg  border-slate-400 border-opacity-20 p-2.5'>
        <Tabs />
        <Outlet />
      </div>
    </div>
  );
}
const options = [
  { label: 'one', action: '' },
  { label: 'two', action: '' },
  { label: 'three', action: '' },
];
