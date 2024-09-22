import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import { WidthContainer } from "./width-container"

export const Hero = () => {
    return (
        <WidthContainer className="">
            <div className="grid lg:grid-cols-2 grid-cols-1 w-full items-center lg:justify-center justify-start 2xl:gap-x-20 xl:gap-x-16  2xl:py-48 2xl:mb-40 xl:mt-32 lg:my-36 my-24  lg:py-12 gap-y-4 h-full">
                <div className="flex flex-col items-start justify-start 2xl:gap-y-16 xl:gap-y-8 lg:gap-y-10 md:gap-y-4 gap-y-2 lg:order-first order-last md:mt-40 2xl:mt-20">
                    <h1 className="2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-4xl text-white font-semibold leading-[10rem] md:text-center 2xl:w-auto xl:w-auto lg:w-auto md:w-8/12 2xl:ml-0 xl:ml-0 lg:ml-0 md:-mt-40  mx-auto">Welcome to NEBS</h1>
                    <p className="2xl:text-lg xl:text-lg lg:text-md  md:text-lg text-xs  2xl:leading-[2rem] xl:leading-8 font-[100] text-white 2xl:w-9/12 2xl:text-left xl:text-left lg:text-left text-center 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 -mt-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eius voluptas, fugit minima corrupti beatae voluptates rem facere sunt velit, magnam aperiam, ab voluptatem commodi possimus. Aliquid, atque. Rem, nisi.</p>
                    <div className="flex flex-col justify-start items-start 2xl:gap-y-6 xl:gap-y-6 gap-y-4 2xl:w-11/12 xl:w-11/12 lg:w-11/12 md:w-full 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 mt-2">
                        <div className="grid  grid-cols-12 2xl:gap-x-10 xl:gap-x-10 lg:gap-x-2 md:gap-x-4 gap-x-4 w-full">
                            <Link
                                href="/entrance"
                                className="col-span-6">
                                <Button className="text-[#8C3239] bg-white lg:h-10 md:h-8 h-7 2xl:text-lg xl:text-base lg:text-sm md:text-xs text-xs hover:bg-white/80 w-full">
                                    Entrance Application
                                </Button>
                            </Link>
                            <Link
                                href="/entrance"
                                className="col-span-6">
                                <Button className="text-[#8C3239] bg-white lg:h-10 md:h-8 h-7 2xl:text-lg xl:text-base lg:text-sm md:text-xs hover:bg-white/80 w-full text-xs ">
                                    Virtual Learning Application
                                </Button>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 w-full">
                            <Link
                                href="/entrance"
                                className="col-span-12">
                                <Button className="text-[#8C3239] bg-white lg:h-10 md:h-8 h-7 2xl:text-lg xl:text-base lg:text-sm md:text-xs text-xs  hover:bg-white/80 w-full">
                                    Virtual Learning Application
                                </Button>
                            </Link>
                        </div>

                    </div>
                </div>

                <div className=" 2xl:w-10/12 xl:w-11/12 flex items-center justify-center relative 2xl:h-[500px] xl:h-[500px] lg:w-10/12 lg:h-[390px] 2xl:ml-20 xl:ml-16 lg:ml-12 md:h-[320px] md:w-8/12 w-full h-[300px] 2xl:mt-0 xl:mt-0 lg:-mt-4  pt-8 md:ml-28 md:mt-24">
                    <Image
                        src="/hero.png"
                        alt="Hero Image"
                        fill
                        className="absolute" />
                </div>
            </div>
        </WidthContainer>
    )
}