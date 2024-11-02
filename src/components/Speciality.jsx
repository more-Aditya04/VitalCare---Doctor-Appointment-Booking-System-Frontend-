import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom' // Link basicslly used to navigate the different links betewwen diff pages

const Speciality = () => {
    return (
        <div className='flex flex-col items-center gap-5 py-16 text-gray-950' id='speciality'>
            <h1 className='text-3xl font-medium'>Find Different Speciality as you want</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply go through below given specialist Doctors according to your need</p>

            <div className='flex sm:justify-center gap-5 pt-6 w-full overflow-scroll'>
                {specialityData.map((item, doc) => (
                    <Link onClick={() => scrollTo(0,0)} className='flex flex-col items-centre text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-300' key={doc} to={`/doctors/${item.speciality}`}>
                        <img className='w-17 sm:w-24 mb-2' src={item.image} alt="" />
                        <p>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Speciality
