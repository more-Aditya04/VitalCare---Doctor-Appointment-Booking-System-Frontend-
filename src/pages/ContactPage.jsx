import React from 'react'
import { assets } from '../assets/assets'

const ContactPage = () => {

  return (

    <div>
         <div className='text-center text-2xl pt-10 text-gray-700'>
      <p className='text-gray-700 font-semibold'>CONTACT US</p>    
    </div>
    
    <div className='my-10 flex flex-col justify-center md:flex-row gap-10  mb-28 text-sm'>
      <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

      <div className='flex flex-col justify-center items-start gap-5'>
        <p className='font-semibold text-lg text-gray-800 '>ADDRESS</p>
        <p className='text-gray-600'>Near Bird Valley Hotel,<br /> SambhajiNagar Pune - 411584</p>
        <p className='text-gray-600'>Tel: +91 94589465</p>
        <p className='text-gray-600'>Email: vitalcare@gmail.com</p>
        <p className='text-gray-700 ' >FOR MORE INFO PLEASE CLICK BELOW BUTTON</p>
        <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-150'>Explore More</button>
      </div>
    </div>
    </div>
   
  )
}

export default ContactPage
