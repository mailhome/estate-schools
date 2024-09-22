import { Footer } from '@/components/footer/footer'
import { HeaderNoScroll } from '@/components/header/headerNoScroll'
import React, { ReactNode } from 'react'

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className='min-h-full flex flex-col'>
            <HeaderNoScroll />
            <div className="flex flex-col items-start justify-start">
                {children}
            </div>
            <Footer />

        </div>
    )
}

export default MainLayout
