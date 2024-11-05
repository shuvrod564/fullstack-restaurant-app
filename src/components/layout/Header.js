'use client'
import React from 'react'     
import { Link } from 'next/link';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { usePathname, useRouter } from 'next/navigation';
import { CgLogOut } from "react-icons/cg";
import axios from 'axios';
import { toast } from 'react-toastify';

 
const Header = ({resMenu, setResMenu}) => {
  const router = usePathname();  
  const routerpush = useRouter();
  

  // handle logout options
  const handleLogout = async () => {
    try {
      const response = await axios.get('/api/logout');
      console.log('logout clicked', response);
      toast.success(response.data.message);
      routerpush.push('/login');
    } catch (error) {
      toast.error(error.message);
    }
  }

 
  return (
    <nav className='pb-3 flex justify-between items-center'>
      <button className="text-2xl xl:hidden" type='button' onClick={()=>setResMenu(!resMenu)}>
        {/* <MenuOutlined /> */}
      </button>
      <h1 className='text-base md:text-xl lg:text-2xl font-bold text-black leading-[1.12] max-w-[140px] md:max-w-full capitalize'>
        { router == '/' && <span>Dashboard</span> }
        { router == '/new-order' && <span>Add New Order</span> }
        { router == '/edit-order' && <span>Edit Order</span> }
        { router == '/order-management' && <span>Order Management</span> }
        { router == '/office-management' && <span>Office Management</span> }
        { router == '/storage' && <span>Storage</span> }
        { router == '/product-detail' && <span>Product Detail</span> }
        { router == '/settings' && <span>All Settings</span> }
        { router == '/pending-payment' && <span>Pending Invoice</span> }
        { router == '/payment' && <span>Payment</span> }
        {/* setting pages title */}
        { router == '/account-setup' && <span>Account Setup</span> }
        { router == '/settings/users' && <span>Users Mangement</span> }
        { router == '/settings/users/create' && <span>Add new user</span> }
        { router == '/settings/users/*' && <span>Edit user</span> }
        { router == '/settings/supplier' && <span>Suppliers Mangement</span> }
        { router == '/settings/products' && <span>Product Mangement</span> }
        { router == '/settings/products/create' && <span>Add New Product</span> }
        { router == '/outlets' && <span>Outlets Mangement</span> }
        { router == '/categories' && <span>Categories Mangement</span> }
        { router == '/currences' && <span>Currency Mangement</span> }
        { router == '/fees' && <span>Fees Mangement</span> }
      </h1>
      
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-dark shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
            <span className="hidden sm:block text-right">
              <span className="block text-sm font-semibold">Jhon Deo</span>
              <span className="block text-xs font-light">Admin</span>
            </span>
            <img src="/images/admin.webp" className="w-12 h-12 object-cover rounded-full" alt="" />  
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-44 origin-top-right rounded-md shadow-sm border border-white/5 bg-white p-1 text-sm/6 text-dark transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button type='button' onClick={handleLogout} className="group flex w-full text-base items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-black/5"> 
              <CgLogOut className='text-xl text-black' />
              Logout 
            </button>
          </MenuItem> 
        </MenuItems>
      </Menu>
    </nav>
  )
}

export default Header