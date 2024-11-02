import React from 'react'
import Header from '../components/Header';
import Speciality from '../components/Speciality';
import DifferentDoctors from '../components/DifferentDoctors';
import Baner from '../components/Baner';

const HomePage = () => {
  return (
    <div>
      <Header/>
      <Speciality/>
      <DifferentDoctors/>
      <Baner/>
    </div>
  )
}

export default HomePage;
