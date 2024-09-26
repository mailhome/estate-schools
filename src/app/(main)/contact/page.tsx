import { WidthContainer } from '@/components/width-container'
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp, IoMailOutline } from "react-icons/io5";
import React from 'react'
import ContactForm from '@/components/contact/contact-form';

const ContactPage = () => {
    return (
        <div className='bg-[#DCA47C] w-full h-[30vh]'>
            <WidthContainer>
                <div className="mt-40">
                    <h1 className='text-white font-black 2xl:text-6xl xl:text-5xl lg:text-xl md:text-3xl text-2xl'>
                        Contact us
                    </h1>
                </div>
                <div className="w-full h-screen 2xl:mt-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 ">
                        <div className="flex items-start justify-start flex-col gap-y-6">
                            <h1 className='text-xl font-[400]'>
                                Send us a message
                            </h1>
                            <p className='flex items-center justify-start gap-x-4'>
                                <FaPhoneAlt className='text-[#8C3239]2xl:size-6' />
                                08085577083, 08132866693
                            </p>
                            <p className='flex items-center justify-start gap-x-4'>
                                <IoLocationSharp className='text-[#8C3239]2xl:size-8' />
                                <p>57, Adisa Bashua, off Adelabu, Masha, Surulere, Lagos.</p>
                            </p>
                            <p className='flex items-center justify-start gap-x-4'>
                                <IoMailOutline className='text-[#8C3239]2xl:size-8' />
                                <p>info@nebschools.com,
                                    admin@nebschools.com</p>
                            </p>
                        </div>


                        <div className="flex items-start justify-start flex-col gap-y-4">
                            <h1 className='text-[#8C3239]font-semibold text-3xl'>
                                Get in Touch
                            </h1>
                            <p className='text-neutral-500 2xl:text-md'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tempore ipsum excepturi quisquam, neque ipsa nulla iusto optio rem beatae dolorem modi, aperiam obcaecati itaque sint fugit saepe maiores voluptatem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis architecto aspernatur veritatis doloremque modi ullam facere ex, dolore praesentium pariatur nisi unde molestiae vel voluptatibus in recusandae eum corrupti odio.
                            </p>
                            <div className="w-full h-fit">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </WidthContainer>
        </div>

    )
}

export default ContactPage
