import React from 'react';
import { IoMdNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
const NavBar = () => {
  return (
    <div className='h-16 w-full flex flex-row items-center justify-between p-4 bg-black bg-opacity-80'>
        <h1 className='text-red-500 text-3xl font-bold'>Netflix</h1>
        <div className='flex flex-row items-center space-x-6 text-white mr-10'>
            <CiSearch size={24}/>
            <IoMdNotifications size={24}/>
        </div>
    </div>
  )
}

export default NavBar