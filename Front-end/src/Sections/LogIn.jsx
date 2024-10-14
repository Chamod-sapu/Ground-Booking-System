import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const backendUrl = import.meta.env.VITE_BACKEND_URL; 

function LogIn() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submitToHome = (e) => {
        e.preventDefault();
        axios.post(`${backendUrl}/User/login`, { userName, password })
            .then(result => {
                console.log(result);
                if (result.status === 200) {
                    navigate('/home');
                    localStorage.setItem('userName', userName);
                } else {
                    alert(result.data);
                }
            })
            .catch((err) => {
                console.log(err);
                alert("An error occurred while logging in.");
            });
    }

    return (
        <section id='Landing' className='mt-28 w-[1450px] h-[550px] flex xl:flex-row flex-col gap-10 max-container '>
            <div className='flex justify-between'>
                <div className='w-[660px] h-[550px] mt-5'>
                    <h1 className='text-white font-montserrat text-8xl font-bold '>
                        <span>
                            <p>Hey Athlete!</p>
                            <p>LogIn &</p>
                            <p>Book Venues</p>
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
                    <form className='w-[500px] h-[600px] border-4 border-white ml-32 rounded-[50px] bg-gradient-to-r from-[#000357] via-violet-900 to-violet-600'>
                        <div className=' flex justify-between w-[265px] h-[43px] border-[2.5px] border-white rounded-3xl mt-10 ml-[120px]'>
                            <button className='w-[123px] h-[33px] border-2 border-white rounded-2xl my-0.5 ml-1 hover:bg-gray-500 active:bg-slate-300 focus:outline-none focus:ring focus:ring-gray-50'>
                                <p className='text-white font-bold flex justify-center mt-1 pb-1'>Sign up</p>
                            </button>
                            <button className='w-[123px] h-[33px] border-2 border-white rounded-2xl bg-white my-0.5 mr-1 hover:bg-gray-200 active:bg-slate-300 focus:outline-none focus:ring focus:ring-gray-50'>
                                <p className=' text-[#000235] font-bold flex justify-center mt-1 pb-1'>Log In</p>
                            </button>
                        </div>
                        <div className='flex justify-center mt-8'>
                            <p className='text-white font-extrabold text-3xl font-montserrat '>Member Log In</p>
                        </div>
                        <div className='grid grid-rows-2 gap-16 mt-14 ml-16 '>
                            <input type="text" placeholder='| UserName' onChange={(e) => setUserName(e.target.value)} className='bg-[#000235] w-[350px] h-[37px] pl-16 pb-0.5 border-[2.5px] border-white rounded-full text-gray-200 placeholder:italic bg-gradient-to-r from-[#000357] via-[#000357e7] to-[#000357d5]' required/>
                            <input type="password" placeholder='| Password' onChange={(e) => setPassword(e.target.value)} className='bg-[#000235] w-[350px] h-[37px] pl-16 pb-0.5 border-[2.5px] border-white rounded-full text-gray-200 placeholder:italic bg-gradient-to-r from-[#000357] via-[#000357e7] to-[#000357d5]' required/>
                        </div>
                        <div >
                            <button onClick={submitToHome} type='submit' className='border-2 border-white rounded-2xl bg-white w-[125px] h-[35px] text-[#000235] font-bold flex justify-center mt-14 ml-[180px] hover:bg-gray-200 active:bg-slate-300 focus:outline-none focus:ring focus:ring-gray-50'><p className='pt-1'>Log In</p></button>
                        </div>
                        <div className='mt-9 ml-32'>
                            <p className='text-white'>Don't have an account? <a href=""><span className='font-bold mx-2 hover:underline'>Sign Up</span></a></p>   
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default LogIn;
