import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../contexts/AppContext';

const Doctors = () => {

  const { speciality } = useParams();
  const [filterDoctor, setFilterDoctor] = useState([]);
  const [showfilter, setshowfilter] = useState(false)

  const navigation = useNavigate()

  const { doctors } = useContext(AppContext);

  const applyFilterDoctor = () => {
    if (speciality) {
      setFilterDoctor(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoctor(doctors)
    }
  }

  useEffect(() => {
    applyFilterDoctor()
  }, [doctors, speciality])

  return (
    <div>
      <p className='text-gray-700'>Go through the specialist doctors.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showfilter ? 'bg-primary text-white' : ''}`} onClick={()=> setshowfilter(prev => !prev)}>Filters</button>
        <div className={` flex-col gap-4 text-sm text-gray-700 ${showfilter ? 'flex' : 'hidden sm:flex'}` }>
          <p onClick={() => speciality === 'Pediatricians' ? navigation('/doctors'): navigation('/doctors/Pediatricians')}className={ `w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded transition-all cursor-pointer${speciality === "Pediatricians" ? "bg-indigo-100 text-black" : "" }`}>Pediatricians</p>
          <p onClick={() => speciality === 'General physician' ? navigation('/doctors'): navigation('/doctors/General physician')}className={ `w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded transition-all cursor-pointer${speciality === "General physician" ? "bg-indigo-100 text-black" : "" }`}>General physician</p>
          <p onClick={() => speciality === 'Gynecologist' ? navigation('/doctors'): navigation('/doctors/Gynecologist')}className={ `w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded transition-all cursor-pointer${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : "" }`}>Gynecologist</p>
          <p onClick={() => speciality === 'Dermatologist' ? navigation('/doctors'): navigation('/doctors/Dermatologist')}className={ `w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded transition-all cursor-pointer${speciality === "Dermatologist" ? "bg-indigo-100 text-black" : "" }`}>Dermatologist</p>
          <p onClick={() => speciality === 'Neurologist' ? navigation('/doctors'): navigation('/doctors/Neurologist')}className={ `w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded transition-all cursor-pointer${speciality === "Neurologist" ? "bg-indigo-100 text-black" : "" }`}>Neurologist</p>
          <p onClick={() => speciality === 'Gastroenterologist' ? navigation('/doctors'): navigation('/doctors/Gastroenterologist')}className={ `w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded transition-all cursor-pointer${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black" : "" }`}>Gastroenterologist</p>
        </div>

        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterDoctor.map((item, index) => (
              <div onClick={() => navigation(`/appointment/${item._id}`)} className='border border-blue-250 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-600 ' key={index}>

                <img className='bg-red-50' src={item.image} alt="" />

                <div className='p-5'>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                  </div>

                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>

            ))
          }

        </div>
      </div>

    </div>
  )
}

export default Doctors

