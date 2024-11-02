import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>
        {/*------left side of footer */}
        <div>
            <img className='mb-5 w-40'src={assets.logo1} alt="" />
            <p  className='w-full md:w-2/3 text-gray-700 leading-6'>Vital care is best platform for booking your appointment with Best expertise doctors and can provide full services   <br /> Address: Near Bird Valley Hotel, SambhajiNagar Pune - 411584</p>
        </div>

        {/*------Middle side of footer */}
        <div >
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-900'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

                {/**----- right side */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH </p>
                <ul className='flex flex-col gap-2 text-gray-900'>
                <li>+91 94589465</li>
                <li>vitalcare@gmail.com</li>
                </ul>
               
            </div>
      </div>


      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ VitalCare - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
