import React, { useState } from 'react'
import { assets } from '../assets/assets'
const ProfilePage = () => {
  const [userdata, setuserdata] = useState({
    name: "Avinash Mehta",
    image: assets.profile_pic,
    email: 'avinashmeh11@gmail.com',
    phone: '+34 5446757',
    Address: {
      lane1: "flat no-22 Villa Palace",
      lane2: "HP road, Pune"
    },
    gender: 'Male',
    DOB: '22/03/2002'

  })

  const [isEdit, setisedit] = useState(false) // if true name of user will not visisble
  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img className='w-36 rounded' src={userdata.image} alt="" />

      {
        isEdit
          ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4 'type="text" value={userdata.name} onChange={e => setuserdata(prev => ({ ...prev, name: e.target.value }))} />
          : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userdata.name}</p>
      }

      <hr className='bg-zinc-500 h-[1px] border-none'/>
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3  text-neutral-800'>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userdata.email}</p>
          <p className='font-medium'>Phone:</p>

          {
            isEdit
              ? <input className='bg-gray-100 max-w-52' type="text" value={userdata.phone} onChange={e => setuserdata(prev => ({ ...prev, phone: e.target.value }))} />
              : <p className='text-blue-400'>{userdata.phone}</p>
          }
          <p className='font-medium'>Address:</p>
          {
            isEdit
              ? <p>
                <input className='bg-gray-50'onChange={(e) => setuserdata(prev => ({ ...prev, Address: { ...prev.Address, lane1: e.target.value } }))} value={userdata.Address.lane1} type="text" />
                <br />
                <input className='bg-gray-50'onChange={(e) => setuserdata(prev => ({ ...prev, Address: { ...prev.Address, lane2: e.target.value } }))} value={userdata.Address.lane2} type="text" />
              </p>
              : <p className='text-gray-700'>
                {userdata.Address.lane1}
                <br />
                {userdata.Address.lane2}
              </p>  
          }
        </div>
      </div>

      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>

          {
            isEdit
              ? <select className='max-w-20 bg-gray-100' onChange={(e) => setuserdata(prev => ({ ...prev, gender: e.target.value }))} value={userdata.gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              : <p className='text-gray-700'>{userdata.gender}</p>
          }

          <p className='font-medium'>Birth Date:</p>
          {
            isEdit
              ? <input className='max-w-28 bg-gray-100' type="date" onChange={(e) => setuserdata(prev => ({ ...prev, gender: e.target.value }))} value={userdata.DOB} />
              : <p className='text-gray-800'>{userdata.DOB}</p>
          }

        </div>
      </div>

      <div className='mt-10'>
        {
          isEdit
          ? <button className='border border-primary px-8 py-2 rounded-full hover:bg-black hover:text-white transition-all' onClick={() =>setisedit(false)}>Save Information</button>
          : <button className='border border-primary px-8 py-2 rounded-full  hover:bg-black hover:text-white transition-all' onClick={() =>setisedit(true)}>Edit</button>
        }
      </div>
    </div>
  )
}

export default ProfilePage
