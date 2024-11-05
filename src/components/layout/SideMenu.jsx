'use client'
import React from 'react' 
import {Homeicon, OfficeIcon, OrderIcon, OrderManagementIcon, PowerIcon, SettingIcon, StorageIcon } from '@/components/Icons';
import { AiOutlineClose } from "react-icons/ai";
import Link from 'next/link'; 
const links = [
  {
    path: '/',
    name: 'Dashboard',
    icon: <Homeicon className="fill-gray group-hover:filter-[contrast(0)]" />
  },
  {
    path: '/new-order',
    name: 'New Order',
    icon: <OrderIcon className="fill-gray group-hover:filter-[contrast(0)]" />
  },
  {
    path: '/order-management',
    name: 'Order Management',
    icon: <OrderManagementIcon className=" fill-gray group-hover:filter-[contrast(0)]" />
  },
  // {
  //   path: '/office-management',
  //   name: 'Office Management',
  //   icon: <OfficeIcon className="fill-gray w-8 h-8 group-hover:filter-[contrast(0)]" />
  // },
  {
    path: '/storage',
    name: 'Storage',
    icon: <StorageIcon className="fill-gray w-8 h-8 group-hover:filter-[contrast(0)]" />
  }, 
]

export const SideMenu = ({resMenu, setResMenu}) => {
  const router = '/';

  // close menu on click links
  const closeResMenu = () => {
    setResMenu(false);
  }
 
 

  return (
    <aside className={`
      2xl:w-[240px] xl:w-[200px] w-[300px] fixed bg-[rgb(249,250,252)] xl:bg-transparent z-50 min-h-screen xl:min-h-auto pr-6 xl:pr-0 pt-5 transition-all duration-300 pb-20 sideMenu
      ${resMenu ? ' show' : ' '}
    `}>
      <div className="">
        <div className="flex justify-between items-start gap-3 pl-5 lg:px-5">
          <Link href={'/'} className='inline-block hover:bg-transparent'>
            <img src="/images/logo.png" className='w-auto lg:h-16 h-10' alt="caterring" />
          </Link>
          <button className="text-2xl xl:hidden" type='button' onClick={()=>setResMenu(!resMenu)}>
          <AiOutlineClose />
          </button> 
        </div>
        <ul className="flex flex-col gap-2 mt-5">
          {
            links.map((link, index)=>{
              return (
                <li key={index}>
                  <Link href={link.path} onClick={closeResMenu} className={`text-sm xl:text-base text-gray w-full py-2.5 px-5 rounded-tr-full rounded-br-full flex items-center justify-start text-left font-medium hover:bg-slate-50  group gap-3 nav__link h-14
                      ${router.pathname == link.path ? '!bg-white' : ''}
                    `}>
                      <span className="block w-8">
                      {link.icon}
                      </span>
                      <span className='leading-[1.2]'>{link.name}</span> 
                  </Link>
                </li>  
              )
            })
          }
           
        </ul>

        <ul className="flex flex-col gap-2 lg:mt-[100%] mt-[50%] lg:pb-20">
          <li>
            <Link href={"/settings"} onClick={closeResMenu} className={`text-sm lg:text-base text-gray w-full py-2.5 px-5 rounded-tr-full rounded-br-full flex items-center justify-start text-left font-medium hover:bg-slate-50  group gap-3 nav__link h-14
                ${router.pathname == '/settings' ? '!bg-white' : ''}
              `}>
                <span className="block w-8">
                  <SettingIcon className="fill-gray w-8 h-8 group-hover:filter-[contrast(0)]" />
                </span>
                <span className='leading-[1.2]'>Settings</span> 
            </Link>
          </li>  
          <li>
            <button className={`text-sm lg:text-base text-gray w-full py-2.5 px-5 rounded-tr-full rounded-br-full flex items-center justify-start text-left font-medium hover:bg-slate-50  group gap-3 nav__link h-14
                ${router.pathname == '/login' ? '!bg-white' : ''}
              `}>
                <span className="block w-8">
                  <PowerIcon className="fill-gray w-8 h-8 group-hover:filter-[contrast(0)]" />
                </span>
                <span className='leading-[1.2]'>Log Out</span> 
            </button>
          </li>  
        </ul>
        {/* 
          <li key={index}>
                  <Link href={link.path} className='text-sm text-gray-600 w-full h-24 shadow-md bg-bg_grey p-2 rounded-xl flex items-center justify-center text-center font-semibold hover:bg-slate-200 hover:text-primary group leading-[1.2] nav__link'>
                    <span className="flex flex-col gap-1 w-full"> 
                      {link.icon}
                      <span>{link.name}</span>
                    </span>
                  </Link>
                </li>  
        */}
      </div>
    </aside>
  )
}
