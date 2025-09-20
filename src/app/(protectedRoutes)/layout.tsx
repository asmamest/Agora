import React  from 'react'
import { onAuthentificateUser } from '@/actions/auth'
import { redirect } from 'next/navigation'
import  Sidebar  from '@/components/ReusableComponent/LayoutComponents/Sidebar'
import Header from '@/components/ReusableComponent/LayoutComponents/Header'

type Props = {
    children: React.ReactNode
}

const Layout = async ({ children}: Props) => {
    const userExist = await onAuthentificateUser()

    if (!userExist.user){
        redirect('/sign-in')
    }


    return (
    <div className='flex w-full min-h-screen'>
        {/* SIDEBAR */}
        <Sidebar  />
        <div className="flex flex-col w-full h-screen overflow-auto px-4 scrollbar-hide container mx_auto">
            {/* HEADER */}
            <Header user={userExist.user}/>
            {children}
        </div>
    </div>
    )
}

