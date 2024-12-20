import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    const [showSmMenue, setShowSmMenue] = useState(false);
    return (
        <>
            <div className="h-[10vh] border-b border-t md:border-t-0 flex flex-row border-[#023047] z-50">
                <Link to="/" className="flex-1 md:w-2/6 border-r border-[#023047] flex items-center px-5 space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>
                    <p className="font-medium text-sm hidden md:flex">PEED.DEV</p>
                </Link>
                <div className="w-9/12 flex md:hidden flex-row">
                    <button onClick={()=>setShowSmMenue(prev=>!prev)} className="items-center justify-between px-6 flex-1 border-r border-[#023047]">
                        <p className="font-medium uppercase text-sm">Navigation</p>
                    </button>
                </div>
                <div className="w-4/6 hidden md:flex flex-row ">
                    <NavLink end to="/" className={({ isActive }) => `${isActive ? 'border-b-8 bg-[#8ecae6]' : 'border-b-0'} flex items-center justify-between px-6 flex-1 border-r border-[#023047]`}>
                        <p className="text-sm font-semibold">Home page</p>
                        <div className="h-2 w-2 bg-gray-900 rounded-full" />
                    </NavLink>
                    <NavLink to="/projects" className={({ isActive }) => `${isActive ? 'border-b-8 bg-[#8ecae6]' : 'border-b-0'} flex items-center justify-between px-6 flex-1 border-r border-[#023047]`}>
                        <p className="text-sm font-semibold">Projects</p>
                        <div className="h-2 w-2 bg-gray-900 rounded-full" />
                    </NavLink>
                    <NavLink to="/testimonials" className={({ isActive }) => `${isActive ? 'border-b-8 bg-[#8ecae6]' : 'border-b-0'} flex items-center justify-between px-6 flex-1 border-r border-[#023047]`}>
                        <p className="text-sm font-semibold">Testimonials</p>
                        <div className="h-2 w-2 bg-gray-900 rounded-full" />
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `${isActive ? 'border-b-8 bg-[#8ecae6]' : 'border-b-0'} flex items-center justify-between px-6 flex-1 border-[#023047]`}>
                        <p className="text-sm font-semibold">Contact now</p>
                        <div className="h-2 w-2 bg-gray-900 rounded-full" />
                    </NavLink>
                </div>
            </div>
            <div className={`absolute w-full  bg-[#219ebc] ${ showSmMenue ? 'right-0' : "right-[100vw]"} transition-all delay-75 duration-200 overflow-hidden flex flex-col space-y-5 border-b border-[#023047] z-40 md:hidden`}>
                <NavLink onClick={()=>setShowSmMenue(prev=>!prev)} end to="/" className={({ isActive }) => `${isActive ? 'border-b-8 bg-[#8ecae6] py-5' : 'border-b-0'} flex items-center justify-between px-6 flex-1 border-r border-[#023047] pt-5`}>
                    <p className="text-sm font-semibold">Home page</p>
                    <div className="h-2 w-2 bg-gray-900 rounded-full" />
                </NavLink>
                <NavLink onClick={()=>setShowSmMenue(prev=>!prev)} to="/projects" className={({ isActive }) => `${isActive ? 'border-b-8 bg-[#8ecae6] py-5' : 'border-b-0'} flex items-center justify-between px-6 flex-1 border-r border-[#023047]`}>
                    <p className="text-sm font-semibold">Projects</p>
                    <div className="h-2 w-2 bg-gray-900 rounded-full" />
                </NavLink>
                <NavLink onClick={()=>setShowSmMenue(prev=>!prev)} to="/testimonials" className={({ isActive }) => `${isActive ? 'border-b-8 bg-[#8ecae6] py-5' : 'border-b-0'} flex items-center justify-between px-6 flex-1 border-r border-[#023047]`}>
                    <p className="text-sm font-semibold">Testimonials</p>
                    <div className="h-2 w-2 bg-gray-900 rounded-full" />
                </NavLink>
                <NavLink onClick={()=>setShowSmMenue(prev=>!prev)} to="/contact" className={({ isActive }) => `${isActive ? 'border-b-8 bg-[#8ecae6] py-5' : 'border-b-0'} flex items-center justify-between px-6 flex-1 border-[#023047] pb-5`}>
                    <p className="text-sm font-semibold">Contact now</p>
                    <div className="h-2 w-2 bg-gray-900 rounded-full" />
                </NavLink>
            </div>
        </>
    )
}
