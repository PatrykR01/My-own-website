import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[rgb(238,234,234)] text-black'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-col-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#795656] '>About</p>
                <div></div>
                </div>

                <div className='max-w-[1000px] w-full grid sm:grid-col-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi! I am Patryk Romański, nice to meet You! Please, take a look around.</p>
                    </div>
                    <div>
                        <p>I am passionate about designing new websites and building them from scratches. I love too video editing. I specialize in creating high value content for new websites that can give a lot of new feelings and new clients for each one whose decide to make a new one site. What are You waiting for? Come with me and something nice!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About