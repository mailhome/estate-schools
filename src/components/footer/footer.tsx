"use client"

import Link from "next/link"
import { WidthContainer } from "../width-container"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export const Footer = () => {
    const pathname = usePathname();

    const isContact = pathname === "/contact";
    return (
        <div className={cn("bottom-0 fixed w-full h-auto py-8 bg-white", isContact && "bg-neutral-100")}>
            <WidthContainer>
                <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center justify-center gap-x-20 w-full lg:gap-y-16 md:gap-y-12 gap-y-10">
                    <div className="flex flex-col items-start justify-start 2xl:gap-y-4 xl:gap-y-4 lg:gap-y-2 md:gap-y-4 gap-y-2 text-[#8C3239] ">
                        <h1 className="2xl:text-base xl:text-base lg:text-lg md:text-xs text-xs">
                            New Estate Baptist Schools.
                        </h1>
                        <p className="2xl:text-base xl:text-base lg:text-lg md:text-xs text-xs">
                            Copyright © 2024 N.E.B.S. <br />
                            All Rights Reserved.
                        </p>
                        <div className="flex items-center justify-center 2xl:gap-x-6 xl:gap-x-6 lg:gap-x-4 md:gap-x-3 gap-x-3">
                            <Link href="">
                                <FaFacebook className="2xl:size-5 xl:size-6 md:size-4" />
                            </Link>
                            <Link href="">
                                <FaTwitter className="2xl:size-5 xl:size-6 md:size-4" />
                            </Link>
                            <Link href="">
                                <FaInstagram className="2xl:size-5 xl:size-6 md:size-4" />
                            </Link>
                            <Link href="">
                                <FaLinkedin className="2xl:size-5 xl:size-6" />
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col items-start justify-start md:gap-y-4 gap-y-2">
                        <p className="text-[#8C3239] font-semibold uppercase 2xl:text-base xl:text-base lg:text-base text-xs">
                            Newsletter
                        </p>
                        <p className="text-[#8C3239] 2xl:text-base xl:text-base lg:text-lg md:text-xs text-xs">
                            You can subscribe to our newsletter to get updates on new available courses.
                        </p>
                        <Input
                            placeholder="Email"
                            className="border-[1px] 2xl:w-full xl:w-full lg:w-9/12 md:h-8 border-[#8C3239] placeholder:text-[#8C3239]" />
                        <Button
                            type="submit"
                            className="text-white bg-[#8C3239] lg:h-8 md:h-6 h-7 2xl:text-base xl:text-md lg:text-sm md:text-xs hover:bg-[#8C3239]/80 ">
                            Submit
                        </Button>
                    </div>

                    <div className="flex flex-col items-start justify-start gap-y-4">
                        <p className="text-[#8C3239] font-semibold uppercase 2xl:text-base xl:text-base lg:text-base md:text-sm text-xs">
                            Useful links
                        </p>
                        <div className="flex flex-col items-start justify-start gap-y-2">
                            <Link
                                href="/apply-for-admission"
                                className="text-[#8C3239] hover:underline underline-offset-4 2xl:text-base xl:text-base lg:text-base  text-xs">
                                How to apply for admission
                            </Link>

                            <Link
                                href="/apply-for-admission"
                                className="text-[#8C3239] 2xl:text-base xl:text-base lg:text-base text-xs hover:underline underline-offset-4">
                                Portal
                            </Link>
                            <Link
                                href="/apply-for-admission"
                                className="text-[#8C3239] hover:underline underline-offset-4 2xl:text-base xl:text-base lg:text-base text-xs">
                                Contact us
                            </Link>
                            <Link
                                href="/apply-for-admission"
                                className="text-[#8C3239] hover:underline underline-offset-4 2xl:text-base xl:text-base lg:text-base  text-xs">
                                Terms and Conditions
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-y-4">
                        <p className="text-[#8C3239] font-semibold uppercase">
                            Tags
                        </p>
                        <div className="flex flex-col items-start justify-start gap-y-2">
                            <Link
                                href="/apply-for-admission"
                                className="text-[#8C3239] hover:underline underline-offset-4 2xl:text-base xl:text-base lg:text-base text-xs">
                                Primary
                            </Link>

                            <Link
                                href="/apply-for-admission"
                                className="text-[#8C3239] hover:underline underline-offset-4 2xl:text-base xl:text-base lg:text-base  text-xs">
                                Secondary
                            </Link>
                            <Link
                                href="/apply-for-admission"
                                className="text-[#8C3239] hover:underline underline-offset-4 2xl:text-base xl:text-base lg:text-base text-xs">
                                Contact Us
                            </Link>
                            <Link
                                href="/apply-for-admission"
                                className="text-[#8C3239] hover:underline underline-offset-4 2xl:text-base xl:text-base lg:text-base text-xs">
                                Admissions
                            </Link>
                        </div>
                    </div>
                </div>
            </WidthContainer>
        </div>
    )
}