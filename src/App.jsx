import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homepage'
import Doctors from './pages/doctors'
import UserLogin from './pages/UserLogin'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProfilePage from './pages/ProfilePage'
import Appointment from './pages/Appointment'
import MyAppointment from './pages/MyAppointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>

      <Routes>   {/* species path for different components*/}
        <Route path='/' element={<HomePage />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/profile-Page' element={<ProfilePage />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
        <Route path='/my-appointment' element={<MyAppointment/>} />
        
      </Routes >
      <Footer/>

    </div>
  )
}

export default App
