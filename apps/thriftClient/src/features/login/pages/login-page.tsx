import { LoginForm } from "../component/login-form"

export const LoginPage = () =>{

    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen w-full bg-[#FFFBFB] " >
            <div className="hidden lg:block h-full w-full overflow-hidden   rounded-lg ">
                <img src="login-side.png" className="object-cover object-top  w-full h-full " />
            </div>
            <div className="flex items-center justify-center p-4">
                <LoginForm/>
            </div>
        </div>
    )
}