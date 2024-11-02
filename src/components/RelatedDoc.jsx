import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../contexts/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoc = ({speciality, docId}) => {

    const {doctors} = useContext(AppContext)
    const navigation = useNavigate()
    const[relateddoctor, setrelateddoctor] = useState([])

    useEffect(() => {
        if(doctors.length > 0 && speciality) {
            const doctordata = doctors.filter((doc) => doc.speciality === speciality && doc._id  !== docId)
            setrelateddoctor(doctordata)
        }
    },[doctors,speciality,docId]);

  return (
    <div className='flex flex-col items-center gap-5 my-16 text-gray-800 md:mx-10'>
            <h1 className='text-3xl font-medium'> Specialized Doctors to Book Your Appointment</h1>
            <p className='sm:w-1/3 text-center text-sm'>Go through the different list of India's Best trusted Doctors</p>

            <div className='w-full grid grid-cols-auto gap-5 pt-5 gap-y-6  px-3 sm:px-0'>
                {relateddoctor.slice(0, 5).map((item, index) => (
                    <div onClick={()=> {navigation(`/appointment/${item._id}`); scrollTo(0,0)}}className='border border-blue-250 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-600 ' key={index}>

                        <img className='bg-red-50' src={item.image} alt="" />

                        <div className='p-5'>
                            <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                            </div>

                            <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        </div>
                    </div>

                ))}
            </div>
            <button onClick={() => {navigation('/doctors'); scrollTo(0,0)}} className='bg-blue-100 text-gray-800 px-12 py-3 rounded-full mt-10'>More</button>
        </div>
  )
}

export default RelatedDoc