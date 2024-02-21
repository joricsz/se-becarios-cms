import { NavLink, useLocation } from 'react-router-dom';
import Greeting from '../components/dashboard/Greeting';
import UserInfo from '../components/global/UserInfo';
import { useSignOutContext } from '../hooks/useSignOutContext';
import {
  HiOutlineArchive,
  HiOutlineClock,
  HiOutlineCog,
  HiOutlineFolderOpen,
  HiOutlineLogout,
  HiOutlinePlusCircle,
  HiOutlineViewBoards,
} from 'react-icons/hi';

function Home() {
  const { isSignOutClicked, setIsSignOutClicked } =
    useSignOutContext();

  const location = useLocation();

  const pageHeight = window.innerHeight;
  function isActiveLink(path) {
    return location.pathname === path;
  }
  return (
    <div className=" mt-[5rem] flex h-full w-full flex-col items-center justify-center gap-4">
      <UserInfo type="home" />
      <Greeting type="home" />
      <h1 className="mt-[0.5rem] text-[1rem] font-medium">
        What do you want to do today?
      </h1>
      {/* NAV */}
      <nav
        className="  flex-row items-center justify-center gap-[3.5rem]
      overflow-auto text-black lg:flex"
      >
        <section
          className={`mt-[2rem] grid grid-cols-1 items-center justify-center gap-[1rem] p-2 text-[1.15rem]`}
        >
          <NavLink
            to="/create-article"
            className={`bg-brand-light rounded-8 shadow-sm-btn2 create-article p-3 duration-300 ease-in hover:scale-105 ${
              !isActiveLink('/create-article')
                ? 'hover:fill-brand-blue hover:text-brand-blue'
                : ''
            } flex items-center justify-center gap-2 ${
              isActiveLink('/create-article')
                ? 'text-brand-yellow'
                : ''
            }`}
          >
            <HiOutlinePlusCircle className="-mt-[2px] h-auto w-[24px]" />
            <p>Create Article</p>
          </NavLink>

          {/* <NavLink
            to="/recent-activities"
            className={`recent-activities  ${
              !isActiveLink('/recent-activities')
                ? 'hover:fill-brand-blue hover:text-brand-blue'
                : ''
            }  flex items-center justify-center gap-2  ${
              isActiveLink('/recent-activities')
                ? 'text-brand-yellow'
                : ''
            }`}
          > */}
          {/* <HiOutlineClock className="-mt-[4px] ml-11 h-auto w-[24px] " />
            <p>Recent Activities</p>
          </NavLink> */}

          <NavLink
            to="/manage-content"
            className={`bg-brand-light rounded-8 shadow-sm-btn2 manage-content p-3 duration-300 ease-in hover:scale-105 ${
              !isActiveLink('/manage-content')
                ? 'hover:fill-brand-blue hover:text-brand-blue'
                : ''
            }  flex items-center justify-center gap-2 ${
              isActiveLink('/manage-content')
                ? 'text-brand-yellow'
                : ''
            }`}
          >
            <HiOutlineFolderOpen className="-mt-[4px] h-auto w-[24px]" />
            <p>Manage Content</p>
          </NavLink>

          <NavLink
            to="/post-archives"
            className={`bg-brand-light rounded-8 shadow-sm-btn2 post-archives p-3 duration-300 ease-in hover:scale-105 ${
              !isActiveLink('/post-archives')
                ? 'hover:fill-brand-blue hover:text-brand-blue'
                : ''
            }  flex items-center justify-center gap-2 ${
              isActiveLink('/post-archives')
                ? 'text-brand-yellow'
                : ''
            }`}
          >
            <HiOutlineArchive className="-mt-[4px] h-auto w-[24px]" />
            <p>Post Archives</p>
          </NavLink>

          <NavLink
            to="/settings"
            className={`bg-brand-light rounded-8 shadow-sm-btn2 settings p-3 duration-200 ease-in hover:scale-105 ${
              !isActiveLink('/settings')
                ? 'hover:fill-brand-blue hover:text-brand-blue'
                : ''
            }  flex items-center justify-center gap-2 ${
              isActiveLink('/settings')
                ? 'text-brand-yellow'
                : ''
            }`}
          >
            <HiOutlineCog className="-mt-[4px] h-auto w-[24px]" />
            <p>Settings</p>
          </NavLink>

          <NavLink
            // to="/sign-out"
            className="sign-out hover:fill-brand-red-dark hover:text-brand-red-dark text-brand-red my-[3rem]  flex items-center justify-center gap-2 duration-200 ease-in hover:scale-105"
            onClick={() =>
              setIsSignOutClicked(!isSignOutClicked)
            }
          >
            <HiOutlineLogout className="-mt-[4px] h-[24px] w-auto" />
            <p>Sign Out</p>
          </NavLink>
        </section>
      </nav>
    </div>
  );
}

export default Home;