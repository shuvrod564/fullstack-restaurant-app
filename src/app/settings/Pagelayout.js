'use client'
import Link from 'next/link';
import React, { useState } from 'react'; 
import { FaAngleDown, FaRegCircleUser } from "react-icons/fa6";
import { IoStorefrontOutline } from "react-icons/io5";

const settingsData = [
  {
    category: "Accounts",
    icon: <FaRegCircleUser className='text-2xl md:text-4xl lg:text-5xl text-gray' />,
    links: [
      { to: "/account-setup", icon: <FaRegCircleUser className='text-xl md:text-xl lg:text-2xl' />, label: "Accounts Setup" },
      { to: "/settings/users", icon: <FaRegCircleUser className='text-xl md:text-xl lg:text-2xl' />, label: "Users" }
    ]
  },
  {
    category: "Members",
    icon: <FaRegCircleUser className='text-2xl md:text-4xl lg:text-5xl text-gray' />,
    links: [
      { to: "/settings/supplier", icon: <FaRegCircleUser className='text-xl md:text-xl lg:text-2xl' />, label: "Suppliers" },
      { to: "/outlets", icon: <FaRegCircleUser className='text-xl md:text-xl lg:text-2xl' />, label: "Outlets" }
    ]
  },
  {
    category: "Storage setup",
    // icon: <AppstoreOutlined className='text-2xl md:text-4xl lg:text-5xl text-gray' />,
    links: [
      { to: "/settings/products", icon: <IoStorefrontOutline className='text-xl md:text-xl lg:text-2xl' />, label: "Physical storages" },
      { to: "/categories", icon: <IoStorefrontOutline className='text-xl md:text-xl lg:text-2xl' />, label: "Categories" }
    ]
  },
  {
    category: "Finance",
    // icon: <DollarOutlined className='text-2xl md:text-4xl lg:text-5xl text-gray' />,
    links: [
      { to: "/currences", icon: <IoStorefrontOutline className='text-xl md:text-xl lg:text-2xl' />, label: "Currency" },
      { to: "/fees", icon: <IoStorefrontOutline className='text-xl md:text-xl lg:text-2xl' />, label: "Additional fees" }
    ]
  }
];

const Pagelayout = () => {
  const [resSettings, setResSettings] = useState({});
  console.log(resSettings);
  const toggleSettings =(index) => {
    setResSettings((prevState) => ({
      ...prevState, 
      [index]: !prevState[index]
    }))
  }
  

  return (
    <div className=''>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-7">
        {settingsData.map((section, index) => (
          <div key={index} >
            <div className="flex flex-col gap-2">
              <div className="md:bg-[#EDEFF1] bg-white flex md:block gap-4 items-center justify-between pl-5 md:p-8 lg:py-12 xl:py-16 text-center rounded-lg md:rounded-bl-none md:rounded-br-none md:mb-4">
                <span className="flex md:block gap-4">
                  {/* {section.icon} */}
                  <h2 className='text-xl md:text-2xl font-semibold md:mt-3 text-[#666c85]'>{section.category}</h2>
                </span>
                <button type='button' onClick={()=>toggleSettings(index)} className="border-l border-slate-200 h-20 w-10 md:hidden">
                  <FaAngleDown className='text-lg text-primary' />
                </button>
              </div>
              <div className={`md__settings md:block ${resSettings[index] ? 'show' : ''}`}> 
                {section.links.map((link, linkIndex) => (
                  <Link key={linkIndex} href={link.to} className="border border-[#EDEFF1] bg-slate-50 md:bg-[#EDEFF1] px-4 md:px-5 py-5 rounded-xl flex items-center gap-4 shadow-sm mb-2">
                    {link.icon}
                    <h2 className='text-base md:text-lg font-medium text-gray'>{link.label}</h2>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Pagelayout;
