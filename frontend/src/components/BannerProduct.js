

import React, { useEffect, useState } from 'react'

import ade1 from "../assest/banner/ade1.jpg"
import image10  from "../assest/banner/image10.webp"

import image1 from "../assest/banner/image1.png"
import image2  from "../assest/banner/image2.png"
import image3 from "../assest/banner/image3.png"
import image4  from "../assest/banner/image4.png"
import image5 from "../assest/banner/image5.png"
import image6 from "../assest/banner/image6.png"
import image7 from "../assest/banner/image7.png"
import image9 from "../assest/banner/image9.png"
import image8 from "../assest/banner/image8.png"
import image11 from "../assest/banner/image11.png"
import image12 from "../assest/banner/image12.png"


import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";


const BannerProduct = () => {
    const [currentImage, setCurrentImage] = useState(0)

    const images = [
        image10,
        ade1,
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
     
    ]

    const nextImage = () => {
        if (images.length - 1 > currentImage) {
            setCurrentImage(prev => prev + 1)
        }
    }

    const preveImage = () => {
        if (currentImage !== 0) {
            setCurrentImage(prev => prev - 1)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (images.length - 1 > currentImage) {
                nextImage()
            } else {
                setCurrentImage(0)
            }
        }, 5000)

        return () => clearInterval(interval)
    }, [currentImage])

    return (
        <div className='container mx-auto px-4 rounded '>
            <div className='h-56 md:h-72 w-full bg-slate-200 relative'>
                <div className='absolute z-10 h-full w-full flex items-center justify-between'>
                    <button onClick={preveImage} className='bg-white shadow-md rounded-full p-1'>
                        <FaAngleLeft />
                    </button>
                    <button onClick={nextImage} className='bg-white shadow-md rounded-full p-1'>
                        <FaAngleRight />
                    </button>
                </div>

                <div className='flex h-full w-full overflow-hidden'>
                    {
                        images.map((imageURl, index) => {
                            return (
                                <div className='w-full h-full min-w-full min-h-full transition-all' key={imageURl} style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                                    <img src={imageURl} className='w-full h-full object-cover' />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default BannerProduct



