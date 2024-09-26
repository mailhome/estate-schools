import { IoLocationSharp } from "react-icons/io5"
import { WidthContainer } from "../width-container"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { BsPerson } from "react-icons/bs"
import Image from "next/image"
import { HeaderPrimaryLinks } from "./header-primary-links"
import { PortalContents } from "./portal-content"
import { Button } from "../ui/button"




export const HeaderPrimary = () => {
    return (
        <div>
            <div className="w-full h-fit bg-[#698474] py-2" >
                <WidthContainer>
                    <div className="flex items-center justify-between text-white">
                        <p className='flex items-center justify-start gap-x-2'>
                            <IoLocationSharp className='2xl:size-6' />
                            <p className="">57, Adisa Bashua, off Adelabu, Masha, Surulere, Lagos.</p>
                        </p>
                        <div className="flex items-center justify-center gap-x-10">
                            <div className="flex items-center justify-center 2xl:gap-x-6 xl:gap-x-6 lg:gap-x-4 md:gap-x-3 gap-x-3">
                                <Link href="">
                                    <FaFacebook className="2xl:size-4 xl:size-6 md:size-4" />
                                </Link>
                                <Link href="">
                                    <FaTwitter className="2xl:size-4 xl:size-6 md:size-4" />
                                </Link>
                                <Link href="">
                                    <FaInstagram className="2xl:size-4 xl:size-6 md:size-4" />
                                </Link>
                                <Link href="">
                                    <FaLinkedin className="2xl:size-4 xl:size-6" />
                                </Link>
                            </div>

                            <Link href="/eschools" className="flex items-center justify-center gap-x-2 text-lg">
                                <BsPerson className="2xl:size-5" />
                                <p>School</p>
                            </Link>
                        </div>
                    </div>
                </WidthContainer>
            </div>
            <div className="2xl:py-4 bg-white w-full">
                <WidthContainer className="w-full">
                    <div className="flex items-center justify-between">
                        <div className="relative 2xl:h-16 2xl:w-64">
                            <Image
                                src="/logo-primary.png"
                                alt="Logo"
                                fill
                                className="absolute"
                            />
                        </div>
                        <div className="flex items-center justify-center gap-x-14 text-nowrap">
                            <HeaderPrimaryLinks
                                href="/">
                                Home
                            </HeaderPrimaryLinks>
                            <HeaderPrimaryLinks
                                href="/">
                                About Us
                            </HeaderPrimaryLinks>
                            <HeaderPrimaryLinks
                                href="/">
                                Admission
                            </HeaderPrimaryLinks>
                            <HeaderPrimaryLinks
                                href="/">
                                Contact us
                            </HeaderPrimaryLinks>
                            <HeaderPrimaryLinks
                                href="/"
                                headerPrimaryNavigation={<PortalContents />}>
                                Portal
                            </HeaderPrimaryLinks>

                            <Link href="/register">
                                <Button className="bg-[#8C3239] text-white 2xl:h-10 2xl:px-6 lg:h-8 md:h-6 2xl:text-base xl:text-md lg:text-sm md:text-xs hover:bg-[#8C3239]/80 rounded-full">
                                    Register
                                </Button>
                            </Link>
                        </div>
                    </div>
                </WidthContainer>
            </div>
        </div>
    )
}
