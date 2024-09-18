"use client"

import Link from "next/link"
import { Logo } from "./logo"
import { Button } from "./ui/button"
import { HeaderLinks } from "./header-links"
import { PortalContents } from "./portal-content"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { ChevronUp, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { UseScrollTop } from "@/hooks/use-scroll-top"
import { WidthContainer } from "./width-container"
import { usePathname } from "next/navigation"


const school_routes = [
    {
        label: "Nur. & Primary School",
        href: "/primary"
    },

    {
        label: "Secondary",
        href: "/secondary"
    },
]

const mobileRoutes = [
    {
        label: "Staff Login",
        href: "/staff-login"
    },
    {
        label: "Student Login",
        href: "/student-login"
    },
]

export const HeaderNoScroll = () => {
    const [isMobile, setIsMobile] = useState(false);

    const pathname = usePathname();

    const scrolled = UseScrollTop();

    return (
        <div className={cn("py-5 z-50 fixed bg-white w-full", !scrolled && "bg-transparent")}>
            <WidthContainer className="flex items-center justify-between">
                <Logo />
                <div className="flex items-center justify-center 2xl:gap-x-16 xl:gap-x-10 lg:gap-x-8 gap-x-6">
                    <div className="hidden md:flex items-center justify-center gap-x-4">
                        {school_routes.map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                className="">
                                <Button className={cn("text-[#8C3239] bg-white lg:h-8 md:h-6 2xl:text-base xl:text-md lg:text-sm md:text-xs hover:bg-white/80", scrolled && "bg-[#8C3239] text-white")}>
                                    {route.label}
                                </Button>
                            </Link>
                        ))}
                    </div>

                    <div className={cn("hidden xl:flex items-center justify-end 2xl:gap-x-12 xl:gap-x-8")}>
                        <HeaderLinks
                            href="/">
                            Home
                        </HeaderLinks>
                        <HeaderLinks
                            href=""
                            headerNavigation={<PortalContents />}>
                            Portal
                        </HeaderLinks>
                        <HeaderLinks
                            href="/contact">
                            contact
                        </HeaderLinks>
                    </div>

                    <div className="xl:hidden w-full">
                        <Sheet>
                            <SheetTrigger>
                                <Menu className={cn("lg:size-8 md:size-7 text-white", scrolled && "text-[#8C3239]")} />
                            </SheetTrigger>
                            <SheetContent className="md:w-screen">
                                <div className="relative flex items-start justify-start flex-col gap-y-10 w-full mt-10">
                                    <Link
                                        href="/"
                                        className=" uppercase text-[#8C3239] lg:text-lg md:text-lg font-semibold">
                                        Home
                                    </Link>
                                    <div
                                        onClick={() => setIsMobile((value) => !value)}
                                        className="flex items-center justify-between w-full relative">
                                        <div className="uppercase text-[#8C3239] lg:text-lg md:text-lg font-semibold">
                                            Portal
                                        </div>
                                        <ChevronUp className={cn("lg:size-8 text-[#8C3239]", isMobile && "-rotate-180")} />

                                        {isMobile && (
                                            <div className="flex items-start top-10 justify-start flex-col absolute gap-y-2">
                                                {mobileRoutes.map((route) => (
                                                    <Link
                                                        key={route.href}
                                                        href={route.href}
                                                        className="text-[#8C3239] 2xl:text-lg">
                                                        {route.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <Link
                                        href="/contact"
                                        className={cn("uppercase text-[#8C3239] lg:text-lg md:text-lg font-semibold", isMobile && "absolute mt-48")}>
                                        Contact
                                    </Link>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </WidthContainer>
        </div>
    )
}