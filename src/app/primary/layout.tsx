import { Footer } from '@/components/footer/footer';
import { ReactNode } from 'react';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className='min-h-screen flex flex-col'>
            <div className="flex flex-col h-[120vh] items-start justify-between">
                {children}
            </div>

        </div>
    )
}

export default MainLayout
