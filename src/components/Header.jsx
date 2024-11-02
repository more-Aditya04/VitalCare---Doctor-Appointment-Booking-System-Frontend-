import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
      {/*---------------LEFT SIDE SECTION-------------*/}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-2xl md:text-3xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
          Quick Appointments <br /> with Best Doctors
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-medium'>
          <img className='w-29' src={assets.group_profiles} alt="" />
          <p>Welcome to Vital Care , Simply go through our India's best trusted Doctors , book your appointment schedule</p>
        </div>
        <a href="#speciality" className='flex items-center gap-2 bg-black px-8 py-3 rounded-full text-white text-sm m-auto md:m-0 hover:scale-105 transition-all duration-400 '>
          Book Appointment Now <img className='w-3' src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* ----------RIGHT SECTION PART */}
      <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
      </div>
    </div>
  )
}

export default Header
