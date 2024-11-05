'use client'
import React, { useEffect, useState } from 'react'
import { SideMenu } from './SideMenu' 
import Header from './Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { usePathname } from 'next/navigation';

const Layout = ({propsChildren}) => {
    const pathname = usePathname(); 
    
  const [resMenu, setResMenu] = useState(false);
//   console.log(resMenu);
  

  useEffect(()=>{
    const width=window.innerWidth;
    if(width<1280){ 
        setResMenu(false);
    }else{ 
        setResMenu(true);
    }
    window.addEventListener('resize',()=>{
        const width=window.innerWidth;
        if(width<1280){ 
            setResMenu(false);
        }else{ 
            setResMenu(true);
        }
    })
    return ()=>{
        window.removeEventListener('resize',()=>{
            const width=window.innerWidth;
            if(width<1280){ 
                setResMenu(false);
            } else{ 
                setResMenu(true);
            }
        })
    }
 }, []);

 if (pathname == '/login') {
    return (
        <>{propsChildren}</>
    )
 }

  return (
    <main className='flex flex-nowrap'>
        <SideMenu resMenu={resMenu} setResMenu={setResMenu} />
        <div className="2xl:pl-[280px] xl:pl-[250px] w-full pt-3 pb-4 lg:px-10  sm:px-5 px-3">
          <Header resMenu={resMenu} setResMenu={setResMenu} />
          <>{propsChildren}</>
        </div>
        <ToastContainer />
    </main>
  )
}

export default Layout