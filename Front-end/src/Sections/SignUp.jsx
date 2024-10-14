import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const backendUrl = import.meta.env.VITE_BACKEND_URL; 

function SignUp() {


    const[userName,setUserName] = useState("");
    const[password,setPassword] = useState("");
    const[email,setEmail] = useState("");

    const navigate = useNavigate();

    const submitUser = (e)=>{
        e.preventDefault();

        const newUser = {
          userName,
          password,
          email
        }

        axios.post(`${backendUrl}/user/add`,newUser).then(()=>{
          alert("User Added")
          navigate('/login')
        }).catch((err)=>{
          alert(err)
        })
    }


  return (
    <section id='Landing' className='mt-28 w-[1450px] h-[550px] flex xl:flex-row flex-col gap-10 max-container '>

          <div className='flex justify-between'>
              <div className='w-[660px] h-[550px] mt-5'>

                  <h1 className='text-white font-montserrat text-8xl font-bold '>
                      <span>
                          <p>Sign Up To</p>
                          <p>Book</p>
                          <p>Your Venue</p>
                      </span>
                  </h1>

                  <div className='mt-4'>
                      <p className='text-white text-2xl'>
                        Hurry Up! Quickly  Create Your SportZ 
                      </p>
                      <p className='text-white text-2xl'>
                        Account. Start Play. Don’t Miss This 
                      </p>
                      <p className='text-white text-2xl'>
                        Chance 
                      </p>
                  </div>

              </div>

              <div className='w-[660px] h-[550px]'>
                
                <form className='w-[500px] h-[600px] border-4 border-white ml-32 rounded-[50px] bg-gradient-to-r from-[#000357] via-violet-900 to-violet-600 '>

                  <div className=' flex justify-between w-[265px] h-[43px] border-[2.5px] border-white rounded-3xl mt-10 ml-[120px]'>
                    
                    <button onClick={submitUser} className='w-[123px] h-[33px] border-2 border-white rounded-2xl bg-white my-0.5 ml-1 hover:bg-gray-200 active:bg-slate-300 focus:outline-none focus:ring focus:ring-gray-50'>
                      <p className='text-[#000235] font-bold flex justify-center mt-1 pb-1'>Sign up</p>
                    </button>
                    
                    <button className='w-[125px] h-[35px] border-2 border-white rounded-2xl mt-0.5 mr-1 hover:bg-gray-500 active:bg-slate-300 focus:outline-none focus:ring focus:ring-gray-50'>
                      <p className='text-white font-bold flex justify-center mt-1 pb-1'>Log In</p>
                    </button>

                  </div>
                  
                  <div className='flex justify-center mt-8'>
                    <p className='text-white font-extrabold text-3xl font-montserrat '>Create  An  Account</p>
                  </div>

                  <div className='grid grid-rows-3 gap-10 mt-10 ml-16 '>
                    <input type="Username" placeholder='| UserName' className='bg-gradient-to-r from-[#000357] via-[#000357e7] to-[#000357d5] w-[350px] h-[37px] pl-16 pb-0.5 border-[2.5px] border-white rounded-full text-gray-200 ' onChange={(e)=> {setUserName(e.target.value)}} required/>
                    <input type="password" placeholder='| Password' className='bg-gradient-to-r from-[#000357] via-[#000357e7] to-[#000357d5] w-[350px] h-[37px] pl-16 pb-0.5 border-[2.5px] border-white rounded-full text-gray-200' onChange={(e)=> {setPassword(e.target.value)}} required/>
                    <input type="email" placeholder='| e-mail' className='bg-gradient-to-r from-[#000357] via-[#000357e7] to-[#000357d5] w-[350px] h-[37px] pl-16 pb-0.5 border-[2.5px] border-white rounded-full text-gray-200' onChange={(e)=> {setEmail(e.target.value)}} required/>
                  </div>

                  <div >
                    <button onClick={submitUser} type='submit' className='border-2 border-white rounded-2xl bg-white w-[125px] h-[35px] text-[#000235] font-bold flex justify-center mt-10 ml-[180px] hover:bg-gray-200 active:bg-slate-300 focus:outline-none focus:ring focus:ring-gray-50 '><p className='pt-1'>Sign up</p></button>
                  </div>

                  <div className='mt-9 ml-32'>
                    <p className='text-white'>Already have an account? <a href="/login"><span className='font-bold mx-2 hover:underline'>Log in</span></a></p>   
                  </div>

                </form>
                  
              </div>

          </div>
        </section>
  )
}

export default SignUp