"use client"

import { StaticImageData } from "next/image"
import { useEffect, useState } from "react";

// Interface for image data
interface ImageData {
    src: StaticImageData;
}

const image_data = [
    {
        src: "/slide.jpg",
    },

    {
        src: "/slide5.jpg",
    },

    {
        src: "/slide.jpg",
    }
]

export const ImageSlider = ({
    src
}: ImageData) => {
    // State to keep track of the current image index
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // State to determine if the image is being hovered over
    const [isHovered, setIsHovered] = useState(false)

    // Function to show the previous slide
    const prevSlide = (): void => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + image_data.length) % image_data.length
        );
    };

    // Function to show the next slide
    const nextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % image_data.length);
    };

    // useEffect hook to handle automatic slide transition
    useEffect(() => {
        // Start interval for automatic slide change if not hovered
        if (!isHovered) {
            const interval = setInterval(() => {
                nextSlide();
            }, 3000);

            // Cleanup the interval on component unmount
            return () => {
                clearInterval(interval);
            };
        }
    }, [isHovered]);

    // Handle mouse over event
    const handleMouseOver = (): void => {
        setIsHovered(true);
    };

    // Handle mouse leave event
    const handleMouseLeave = (): void => {
        setIsHovered(false);
    };



    return (
        <div className="">
            Image Slider
        </div>
    )
}