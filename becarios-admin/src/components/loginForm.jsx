import Button from './Button';

function loginForm() {
  return (
    <div className="main-div flex flex-row justify-around gap-10">
      <div className="brand-img bg-login rounded-login hidden h-[100vh] w-[50%] bg-cover  xl:block"></div>
      <div className="overlay-black bg-gradient-overlay rounded-login absolute left-0 top-0 z-10 hidden h-[100vh] w-[50%] xl:block"></div>
      <div className="overlay-gradient rounded-login absolute left-0 top-0 z-10 hidden h-[100vh] w-[50%] bg-[rgba(0,0,0,0.75)] px-[7rem] py-[10rem] text-center leading-[60px] xl:block"></div>
      <div className="brand-info rounded-login absolute left-0 top-0 z-50 hidden h-[100vh] w-[50%] px-[7rem] py-[10rem] text-center leading-[60px] xl:block">
        <h1 className="text-[40px] font-bold text-white xl:text-[56px] 2xl:mt-[5%]">
          WELCOME TO
        </h1>
        <h1 className="bg-gradient-text mb-[40px] bg-clip-text text-[46px] font-bold text-transparent xl:text-[56px]">
          ESCOLARIO
        </h1>
        <h2 className="text-[28px] leading-[36px] text-white xl:text-[36px] xl:leading-[44px]">
          The Premier University
        </h2>
        <h2 className=" mb-[80%] text-[28px] leading-[36px] text-white xl:text-[36px] xl:leading-[44px] 2xl:mb-[60%]">
          News Article Platform
        </h2>
        <p className="mb-[-2rem] text-[18px] font-medium text-white">
          Founded by
        </p>
        <p className="bg-gradient-text mb-[80%] bg-clip-text text-[18px] font-semibold text-transparent xl:text-[21px]">
          UST - Becarios de Santo Tomas
        </p>
      </div>

      <form
        action=""
        className="mx-auto  mt-[25%] flex flex-col items-center self-center xl:mt-[-10rem]"
      >
        <h1 className="mb-10 text-[1.75rem] font-bold">ADMIN LOGIN</h1>
        <div className="credentials flex w-[20rem] flex-col justify-center lg:w-[27rem]">
          <label htmlFor="username" className="mb-2">
            UST College Email
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="juan.delacruz.med@ust.edu.ph"
            className=" bg-brand-input shadow-shadow-db rounded-8 mb-5 p-2.5"
          />
          <label htmlFor="password" className=" mb-2">
            Password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Enter your password here"
            className=" bg-brand-input shadow-shadow-db rounded-8 mb-5 p-2.5"
          />
          <p className="mb-2 cursor-pointer self-center text-gray-500">
            Forgot Password?
          </p>
          <Button action="Log In" />
        </div>
      </form>
    </div>
  );
}

export default loginForm;
