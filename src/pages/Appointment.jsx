import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../contexts/AppContext'
import { assets } from '../assets/assets'
import RelatedDoc from '../components/RelatedDoc'


const Appointment = () => {

  const { docId } = useParams()
  const { doctors, currencySymbol } = useContext(AppContext)

  const daysofWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const [docInfo, setdocinfo] = useState(null)
  const [docSlots, setDoctorSlot] = useState([]);

  const [indexSlot, setIndexslot] = useState(0)
  const [timeslot, settimeslot] = useState('')


  const fetchDoctorinfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setdocinfo(docInfo);

  }

  const getSlotsAvilable = async () => {
    setDoctorSlot([])

    //get current date
    let today = new Date()
    for (let i = 0; i < 7; i++) {
      //get date with index
      let currdate = new Date(today);
      currdate.setDate(today.getDate() + i)

      //set end time of date
      let endtime = new Date()
      endtime.setDate(today.getDate() + i)
      endtime.setHours(21, 0, 0, 0)

      // set hrs
      if (today.getDate() === currdate.getDate()) {
        currdate.setHours(currdate.getHours() > 10 ? currdate.getHours() + 1 : 10)
        currdate.setMinutes(currdate.getMinutes() > 30 ? 30 : 0)
      } else {
        currdate.setHours(10)
        currdate.setMinutes(0)
      }

      let timeslots = []

      while (currdate < endtime) {
        let formattingtime = currdate.toLocaleString([], { hour: `2-digit`, minute: `2-digit` })
        //add slot
        timeslots.push({
          datetime: new Date(currdate),
          time: formattingtime
        })
        //increment time
        currdate.setMinutes(currdate.getMinutes() + 30) //ie.30
      }

      setDoctorSlot(prev => ([...prev, timeslots]))
    }
  }

  useEffect(() => {
    fetchDoctorinfo();
  }, [doctors, docId])

  useEffect(() => {
    getSlotsAvilable()
  }, [docInfo])

  useEffect(() => {
    console.log(docSlots)
  }, [docSlots])


  return docInfo && (
    <div>
      {/*------ doctor details*/}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
        </div>

        <div className='flex-1 border border-gray-500 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0  mt-[-80px] sm:mt-0'>
          {/**---- doctor info like name, degree and experienc */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.name}
            <img className='w-4' src={assets.verified_icon} alt="" />
          </p>

          <div className='flex items-center gap-2 text-sm mt-1 text-gray-700'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full '>{docInfo.experience}</button>
          </div>

          {/**----doctor about */}
          <div >
            <p className='flex items-center gap-1 text:sm font-medium text-gray-900 mt-3'>
              About <img src={assets.info_icon} alt="" /></p>

            <p className='text-sm text-gray-800 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <p className='text-gray-600 font-medium mt-4'>
            Appointment Fees: <span>{currencySymbol}{docInfo.fees}</span>
          </p>

        </div>
      </div>

      { /* ---------------- BOOKING SLOTS*/}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700 '>
        <p>Slots Booking</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            docSlots.length && docSlots.map((item, index) => (
              <div onClick={() => setIndexslot(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${indexSlot === index ? 'bg-primary text-white' : 'border border-gray-300'}`} key={index}>
                <p>{item[0] && daysofWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>

        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4 font-semibold'>
            {docSlots.length && docSlots[indexSlot].map((item,index) =>(

                  <p onClick={() => settimeslot(item.time)}className={`text-sm font-light flex-shrink-0  px-6 py-2 rounded-full cursor-pointer ${item.time === timeslot ? 'bg-primary text-white': 'text-gray-700 border border-gray-400'}`}key={index}>
                    {item.time.toLowerCase()}
                  </p>
            ))}
        </div>

        <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book Your Appoinment</button>
      </div>

      {/**------------------------------------------different related doctors */}
      <RelatedDoc docId={docId} speciality={docInfo.speciality}/>
    </div>
  )
}

export default Appointment

