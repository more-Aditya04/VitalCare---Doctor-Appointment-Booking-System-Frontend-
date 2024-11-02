import React, { useState } from 'react'

const UserLogin = () => {

  const [state, setstate] = useState('Sign Up')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [name, setname] = useState('')

  const onSubmithandler = async (event) => {
    event.preventDefault()
  }
  return (
    <form  className='min-h-[80vh] flex items-centre'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-700 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign Up' ? "sign up" : "log in"} to book your appointment</p>
        
        {
          state === "Sign Up" && 
          <div className='w-full'>
            <p>Full Name</p>
            <input className='border border-zinc-400 rounded w-full p-2 mt-1' type="text" onChange={(e) => setname(e.target.value)} value={name}  required />
          </div>
        }


        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-400 rounded w-full p-2 mt-1' type="email" onChange={(e) => setemail(e.target.email)} value={email} required />
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-400 rounded w-full p-2 mt-1' type="password" onChange={(e) => setpassword(e.target.password)} value={password} required />
        </div>
        <button className='bg-black text-white w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? "Create Account" : "Login"}</button>

        {
          state === 'Sign Up'
            ? <p>Already have a account? <span onClick={() => setstate('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
            : <p>Create a new account? <span onClick={() => setstate('Sign Up')} className='text-primary underline cursor-pointer'>click here</span></p>
        }
      </div>


    </form>
  )
}

export default UserLogin
