import { UseScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
    const scrolled = UseScrollTop();

    return (
        <Link
            href="/"
            className="flex items-center justify-center gap-x-1">
            <div className="relative 2xl:h-[80px] 2xl:w-[100px] xl:w-[90px] xl:h-[70px] lg:w-[70px] lg:h-[50px] md:w-[70px] md:h-[50px] h-[50px] w-[70px]">
                <Image
                    src="/logo.png"
                    alt="logo"
                    fill
                    className="absolute" />
            </div>
            <div className={cn("hidden xl:flex flex-col items-start justify-start text-white", scrolled && "text-[#8C3239]")}>
                <h1 className="2xl:text-xl xl:text-md font-semibold uppercase ">Welcome to Nebs</h1>
                <p className="2xl:text-md text-sm">New Estate Baptist Schools</p>
            </div>
        </Link>
    )
}