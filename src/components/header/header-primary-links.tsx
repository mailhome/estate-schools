"use client"

import { UseScrollTop } from '@/hooks/use-scroll-top';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

interface HeaderPrimaryLinksProps {
    href: string;
    headerPrimaryNavigation?: React.ReactElement;
    children?: string;
}
export const HeaderPrimaryLinks = ({
    href,
    children,
    headerPrimaryNavigation
}: HeaderPrimaryLinksProps) => {
    const [open, setOpen] = useState(false);

    const pathname = usePathname();

    const showHeaderNavigation = headerPrimaryNavigation && open;

    const scrolled = UseScrollTop();

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className='w-full relative ' >
            {headerPrimaryNavigation ? (
                <div
                    className={cn("text-[#8C3239] uppercase flex items-center font-semibold 2xl:text-base xl:text-base justify-center", scrolled && "")}>
                    {children}
                    {headerPrimaryNavigation ? (
                        <ChevronUp className={cn(open && "-rotate-180")} />
                    ) : null}

                </div>) : (
                <Link
                    href={href}
                    className={cn("text-[#8C3239] 2xl:text-base xl:text-base uppercase flex items-center font-semibold justify-center hover:border-b-4 border-[#8C3239] w-full", scrolled && "")} >
                    {children}
                </Link>
            )}


            {showHeaderNavigation && (
                <div className="absolute 2xl:w-[120px] xl:w-[100px] cursor-pointer  shadow-md bg-neutral-300">
                    <div className="absolute bg-transparent w-full h-4 top-0">
                        {headerPrimaryNavigation}
                    </div>
                </div>
            )}
        </div>
    )
}
