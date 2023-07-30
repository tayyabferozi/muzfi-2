import { Outlet } from 'react-router-dom';
import Select from '../../components/common/select';
import Tabs from '../../components/common/tabs';
import { Checkbox } from '../../components/pages/Create-Post/Listing/shipping';

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
        <div className=' flex items-center p-2.5 bg-zinc-100 rounded-lg justify-between'>
          <Checkbox label='Send me post reply notifications' />
          <a
            href='/'
            className='flex items-center gap-2 text-sm font-medium text-right text-blue-700'
          >
            Connect accounts to share your post{' '}
            <img src='/assets/vectors/common/info.svg' alt='' />
          </a>
        </div>
      </div>
    </div>
  );
}
const options = [
  { label: 'one', action: '' },
  { label: 'two', action: '' },
  { label: 'three', action: '' },
];
