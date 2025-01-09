export const LoginForm = () => {
  return (
    <div className=" rounded-md flex items-center justify-center flex-col w-full md:max-lg:w-[70%] xl:w-[60%] gap-6 2xl:gap-8 h-full ">
      <div className="items-center  w-full flex flex-col">
        <img src="ThriftStop-logo.png" className="w-32 h-32 2xl:w-60 2xl:h-60 " />
        <h1 className="font-bold text-[24px] 2xl:text-[48px]">WELCOME BACK</h1>
        <p className="text-[#827D7D] text-sm 2xl:text-[24px]">
          Please login to you account
        </p>
      </div>
      <div className="flex items-center flex-col gap-1 w-full  ">
        <div className="flex items-center flex-col gap-4 w-full">
          <input
            type="text"
            className="shadow-sm rounded-md p-2 2xl:p-4 bg-[#f2f2f2] w-full"
            placeholder="Email address"
          />
          <input
            type="password"
            className="shadow-sm rounded-md p-2 2xl:p-4 bg-[#f2f2f2] w-full"
            placeholder="Password"
          />
        </div>
        <a href="" className="self-end text-[#827D7D] text-sm 2xl:text-[24px]">
          Forgot password?
        </a>
      </div>
      <div className="flex items-center flex-col gap-4 w-full">
        <button className="w-full bg-[#FF914D] text-sm 2xl:text-[24px] p-2 2xl:p-4 rounded-md text-white">
          Login
        </button>
        <div className="flex items-center gap-2 w-full px-4">
          <hr className="flex-grow border-t border-[#827D7D]" />
          <h1 className="text-[#827D7D] text-sm 2xl:text-[24px]">Or login with</h1>
          <hr className="flex-grow border-t border-[#827D7D]" />
        </div>
        <div className="flex justify-start items-center  gap-2 w-full">
          <button className="w-full bg-[#f4f4f4] p-2 2xl:p-4 rounded-md flex items-center justify-center gap-2 border ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
               className="h-4 2xl:h-6 w-4 2xl:w-6"
              viewBox="0 0 48 48"
            >
              <linearGradient
                id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                x1="9.993"
                x2="40.615"
                y1="9.993"
                y2="40.615"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#2aa4f4"></stop>
                <stop offset="1" stop-color="#007ad9"></stop>
              </linearGradient>
              <path
                fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
              ></path>
              <path
                fill="#fff"
                d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
              ></path>
            </svg>
            <h1 className="text-sm 2xl:text-lg">Facebook</h1>
          </button>
          <button className="w-full bg-[#f4f4f4] p-2 2xl:p-4 rounded-md flex items-center justify-center gap-2 border ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
            className="h-4 2xl:h-6 w-4 2xl:w-6"
              viewBox="0 0 48 48"
            >
              <path
                fill="#4caf50"
                d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
              ></path>
              <path
                fill="#1e88e5"
                d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
              ></path>
              <polygon
                fill="#e53935"
                points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
              ></polygon>
              <path
                fill="#c62828"
                d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
              ></path>
              <path
                fill="#fbc02d"
                d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
              ></path>
            </svg>
            <h1 className="text-sm 2xl:text-lg">Gmail</h1>
          </button>
        </div>
        <h1 className="text-sm 2xl:text-[24px]">Don’t have an accunt? <a href="" className="text-[#FF914D] ">Signup</a></h1>
      </div>
    </div>
  );
};
