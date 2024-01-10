import NavBar from '../components/global/NavBar';
import NavBarMobile from '../components/global/NavBarMobile';
import PageTitle from '../components/global/PageTitle';
import AdminList from '../components/settings/AdminList';
import SuperAdminList from '../components/settings/SuperAdminList';

function Settings() {
  return (
    <div className="flex flex-col justify-start lg:flex-row">
      <div className="navs">
        <NavBar />
        <NavBarMobile />
      </div>

      <div className="content mt-[10rem] flex w-[100%] flex-col gap-[5rem] px-9 md:mb-[5rem] md:px-16 lg:ml-[21rem] lg:mt-[8rem]">
        <PageTitle title="Settings" />
        <div className="heading">
          <h2 className="pb-2 text-left text-[1.25rem] font-medium md:text-[1.5rem]">
            Manage Accounts
          </h2>
          <div className="rounded-8 bg-brand-gray w-[100%] py-[0.05rem] opacity-[25%]"></div>
        </div>
        {/* <div className="admin-lists flex flex-col gap-[2rem] xl:flex-row"> */}
        <div className="content flex flex-col justify-around gap-[4rem] xl:flex-row">
          <SuperAdminList />
          <AdminList />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Settings;
