"use client"

import { UseScrollTop } from '@/hooks/use-scroll-top';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'

interface HeaderLinksProps {
    href: string;
    headerNavigation?: React.ReactElement;
    children?: string;
}
export const HeaderLinks = ({
    href,
    children,
    headerNavigation
}: HeaderLinksProps) => {
    const [open, setOpen] = useState(false);

    const showHeaderNavigation = headerNavigation && open;

    const scrolled = UseScrollTop();

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className='w-full relative hover:border-b-4 border-[#8C3239]' >
            {headerNavigation ? (
                <div
                    className={cn("text-white font-semibold uppercase flex items-center 2xl:text-lg xl:text-base justify-center", scrolled && "text-[#8C3239]")}>
                    {children}
                    {headerNavigation ? (
                        <ChevronUp className={cn(open && "-rotate-180")} />
                    ) : null}

                </div>) : (
                <Link
                    href={href}
                    className={cn("text-white 2xl:text-lg xl:text-base font-semibold uppercase flex items-center justify-center", scrolled && "text-[#8C3239]")} >
                    {children}
                </Link>
            )}


            {showHeaderNavigation && (
                <div className="absolute 2xl:w-[120px] xl:w-[100px] cursor-pointer border-[1px] shadow-md bg-neutral-300">
                    <div className="absolute bg-transparent w-full h-4 top-0">
                        {headerNavigation}
                    </div>
                </div>
            )}
        </div>
    )
}
