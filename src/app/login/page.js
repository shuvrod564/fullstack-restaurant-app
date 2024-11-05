import LoginForm from "./loginForm";
import Image from "next/image";
 


export const metadata = {
    title: "Login",
    description: "",
  };

const page = () => {
   

  return (
    <div className='min-h-screen w-full flex items-center justify-center p-4'>
        <div className="w-full max-w-[420px] bg-white pt-7 pb-12 px-6 md:px-10 lg:px-14 rounded-xl">
          <Image
            src={'/images/logo.png'}
            alt="logo"
            width={150}
            height={60}
            className="mx-auto mb-3 md:mb-4"
          />
            <h2 className="text-2xl sm:text-2xl lg:text-3xl text-black text-center font-bold">Login</h2>
            <LoginForm />
        </div>
    </div>
  )
}

export default page