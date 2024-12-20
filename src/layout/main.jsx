import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'

export default function MainLayout() {
    return (
        <div className="w-screen h-dvh bg-[#219ebc] overflow-x-hidden">
            <Header/>
            <div className="h-[90dvh] flex flex-col overflow-hidden">
                <Outlet />
            </div>
        </div>
    )
}
