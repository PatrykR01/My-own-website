import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import GitHub from '../assets/github.png'
import JavaScript from '../assets/javascript.png'
import Node from '../assets/node.png'
import ReactJS from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import SASS from '../assets/sass.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-[rgb(238,234,234)] w-full h-screen'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
            <p className='text-4xl font-bold inline border-b-4 border-[#795656]'>Skills</p>
            <p className='py-4'>// These are technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={HTML} alt="Logo_of_html" />
              <p className='my-4 font-bold'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={CSS} alt="Logo_of_css" />
              <p className='my-4 font-bold'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={SASS} alt="Logo_of_sass" />
              <p className='my-4 font-bold'>SCSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={JavaScript} alt="Logo_of_js" />
              <p className='my-4 font-bold'>JavaScript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={ReactJS} alt="Logo_of_reactjs" />
              <p className='my-4 font-bold'>ReactJS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={Node} alt="Logo_of_nodejs" />
              <p className='my-4 font-bold'>NodeJS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={Tailwind} alt="Logo_of_tailwind" />
              <p className='my-4 font-bold'>Tailwind CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={GitHub} alt="Logo_of_github" />
              <p className='my-4 font-bold'>GitHub</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Skills