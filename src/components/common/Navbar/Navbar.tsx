import { Link, useNavigate } from 'react-router-dom';
import { authShow } from '../../../redux/features/auth/authPopupSlice';
import { signin, signup } from '../../../redux/features/auth/authTypeSlice';
import { useAppDispatch } from '../../../redux/hooks';
import GradientBtn from '../../buttons/GradientBtn';
import Search from '../Search/Search';
import { useSelector } from 'react-redux';
import { selectLogin } from '../../../redux/features/auth/authLoginSlice';
import YellowBtn from '../../buttons/YellowBtn/YellowBtn';
import { Icon } from '@iconify/react';
import { useMemo } from 'react';

const Navbar = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: Partial<{
  isSidebarOpen: any;
  setIsSidebarOpen: any;
}>) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector(selectLogin);
  const navItems = useMemo(() => {
    if (isLogin)
      return [
        { icon: 'icon-park-outline:like', href: '' },
        { icon: 'ant-design:message-outlined', href: '' },
        { icon: 'icon-park-outline:add-one', href: '' },
        { icon: 'iconamoon:notification', href: '' },
      ];
    return [
      { icon: 'pajamas:earth', href: '' },
      { icon: 'iconamoon:notification', href: '' },
    ];
  }, [isLogin]);
  return (
    <nav className='fixed inset-x-0 top-0 z-50 shadow-lg bg-primary'>
      <div className='   container   h-[70px] flex justify-between items-center py-4 sm:px-[24px] px-[12px] z-20'>
        <div className='flex items-center flex-grow h-5 gap-3 xl:w-1/3 '>
          <div
            className='flex flex-col gap-1 xl:hidden'
            onClick={() => setIsSidebarOpen((prevState: any) => !prevState)}
          >
            <div className='bg-white w-5 h-[2px]'></div>
            <div className='bg-white w-5 h-[2px]'></div>
            <div className='bg-white w-5 h-[2px]'></div>
          </div>

          <Link className='hidden min-[1185px]:block ml-14' to='/'>
            <img
              className='h-12 mx-auto'
              src='/assets/imgs/common/logo.png'
              alt='logo'
            />
          </Link>
          <Link className='hidden min-[1185px]:hidden lg:block ml-6' to='/'>
            <img
              className='h-12 mx-auto'
              src='/assets/imgs/common/logo-1.png'
              alt='logo'
            />
          </Link>
        </div>
        <div className='justify-center flex-grow flex-shrink-0 hidden lg:flex'>
          <Search />
        </div>
        <div className='flex items-center justify-end flex-shrink-0 xl:w-1/3 '>
          <div className='flex items-center sm:gap-[22px] gap-3'>
            {navItems.map((_) => (
              <Link
                className='transition-transform hover:scale-105'
                to={_.href}
                key={_.href}
              >
                <Icon icon={_.icon} className='text-lg text-white' />
              </Link>
            ))}
            <div className='w-[1px] h-[22px] bg-white bg-opacity-50 sm:block hidden'></div>{' '}
            <Link className='transition-transform hover:scale-105' to={'/'}>
              <Icon
                icon={'uil:cart'}
                className='text-lg text-accentYellow-500'
              />
            </Link>
            {isLogin ? (
              <>
                <YellowBtn
                  className='flex items-center gap-2.5 font-semibold px-3'
                  label={
                    <>
                      <Icon className='text-xl' icon={'nimbus:marketing'} />{' '}
                      Sell Gear
                    </>
                  }
                />
                <div className='relative w-10 bg-white rounded-full aspect-square '>
                  <img
                    src='https://images.pexels.com/photos/127027/pexels-photo-127027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt=''
                    className='object-cover w-full h-full rounded-full ring-1 ring-zinc-300'
                  />{' '}
                  <img
                    src='/assets/vectors/common/flower.svg'
                    alt=''
                    className='absolute w-3.5 h-3.5 p-0.5 right-0 bottom-0 bg-white rounded-full'
                  />
                </div>
              </>
            ) : (
              <>
                {' '}
                <Link
                  className='text-base font-medium text-white transition-colors hover:text-opacity-75'
                  to='/'
                  onClick={() => {
                    dispatch(authShow());
                    dispatch(signin());
                  }}
                >
                  Login
                </Link>
                <Link
                  to=''
                  onClick={() => {
                    dispatch(authShow());
                    dispatch(signup());
                  }}
                >
                  <GradientBtn label='Register' />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
