import React from 'react'
import { assets } from '../assets/assets'

const AboutPage = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-800'>
        <p>ABOUT <span className='text-gray-800  font-medium'>US</span></p>
      </div>

      <div className='my-11 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-700 '>
          <p>Welcome to Vital Care - your trusted partner in healthcare access. We are dedicated to making healthcare simple, convenient, and accessible for everyone. Vital Care is a one-stop platform designed to connect patients with healthcare providers, allowing users to effortlessly book appointments with their preferred doctors, specialists, and healthcare professionals.</p>

          <p>Our mission is to bridge the gap between patients and healthcare providers by offering a seamless appointment booking experience. We understand the challenges of finding the right healthcare provider and managing appointments, which is why we've created a streamlined, user-friendly platform to help you manage your healthcare needs efficiently</p>

          <b className='text-gray-900'>Our Vision</b>
          <p>To empower individuals by providing them with timely access to quality healthcare services, enhancing overall health outcomes and well-being.</p>
        </div>
      </div>

      <div className='text-xl my-4  '>
        <p className='text-gray-600 font-semibold'>WHY TO CHOOSE VITAL CARE</p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
    <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-black hover:text-white transition-all duration-200 text-gray-600 cursor-pointer'>
          <b>Wide Network of Trusted Providers:</b>
          <p>We partner with a vast network of verified healthcare providers across multiple specialties. Whether you need a general check-up, specialist consultation, or mental health support..</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-black hover:text-white transition-all duration-200 text-gray-600 cursor-pointer'>
          <b>24/7 Accessibility:</b>
          <p>Access your healthcare needs at any time from any device. With Vital Care, you have the flexibility to book, reschedule, or cancel appointments whenever you need.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-black hover:text-white transition-all duration-200 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle</p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
