import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[rgb(238,234,234)] flex justify-center items-center p-4'>
        <form method='POST' action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#795656]'>Contact</p>
                <p className='py-4'>// Submit the form below or shoot me an email - contact.patryk.romanski@gmail.com</p>
            </div>
            <input className='p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2' type="email" placeholder='Email' name='email' />
            <textarea className='p-2' name="message" placeholder='Message' rows="10"></textarea>
            <button className='font-bold border-2 border-[#795656] bg-[#d4d4d4] hover:text-white hover:bg-[#795656] hover:border-[#795656] px-4 py-4 my-8 mx-auto flex items-center duration-300'>Let's colaborate!</button>
        </form>
    </div>
  )
}

export default Contact