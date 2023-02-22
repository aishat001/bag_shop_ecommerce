import { ArrowBack, ArrowForward, ArrowForwardIos, ArrowLeft, ArrowRight } from '@mui/icons-material'
import React, { useState } from 'react'
import "./Slider.scss"

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1)
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1)
    }

    const data = [
        "https://media.istockphoto.com/id/1345809682/photo/young-beautyful-woman-with-linen-eco-bag-on-city-background.jpg?s=612x612&w=0&k=20&c=RZGzFxNfChXa8Zzpi_ecLmzQX9bl6Lky3RDWyp3swvA=",
       "https://images.unsplash.com/photo-1618249807726-2f381c277de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxXWkZQNUYzVVYzMHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
       "https://images.unsplash.com/photo-1495091932580-1e3d65691a5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMDEyOTIxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        "https://media.istockphoto.com/id/1400112193/photo/young-model-girl-on-the-street-holding-white-eco-bag-and-mobile-phone-mock-up.jpg?s=612x612&w=0&k=20&c=6E63ZwIL9Bt1nqYZFAPa51Uf3I4vBFMJEeiVqrqw1mY=",

    ]

  return (
    <div className='slider relative overflow-x-hidden'>
        <div className='slider_container w-[400vw] flex' style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        
        <img src={data[0]} alt="" className=''/>
        <img src={data[1]} alt="" className=''/>
        <img src={data[2]} alt="" className=''/>
        <img src={data[3]} alt="" className=''/>
        </div>

        <div className='absolute top-[50%] left-auto right-auto flex justify-center w-[100%]'>
        <button className='bg-black text-white py-2 px-3 md:py-5 md:px-8 text-xl md:text-3xl'>Shop Now</button>

        </div>



        <div className='icons absolute  flex justify-center gap-5 left-[0] right-[0] m-auto top-[80%] md:top-[70%]'>
            <ArrowBack className='icon !w-[30px] !h-[30px] md:!w-[50px] md:!h-[50px]' onClick={prevSlide}/>
            <ArrowForward className='icon !w-[30px] !h-[30px] md:!w-[50px] md:!h-[50px]' onClick={nextSlide}/>
        </div>
    </div>
  )
}

export default Slider