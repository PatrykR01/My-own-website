import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[rgb(238,234,234)]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-black-600 font-bold'>Hello, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#795656]'>Patryk Romański</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#857575]'>I am a FullStack Developer and Video Editor</h2>
            <p className='text-[#857575] py-4 max-w-[700px]'>I can give You the best design and the best feature for Your website. Or maybe, do You want to edit Your video? No problem! Come to me!</p>
            <div>
                <button className='bg-[#d4d4d4] group text-[#795656] border-2 border-[#795656] px-6 py-3 my-2 flex items-center hover:bg-[#795656] hover:text-white hover:border-[#795656] duration-300'>
                    View Work <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-2' />
                </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home