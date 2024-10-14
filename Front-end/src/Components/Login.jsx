import React from 'react'

function Login() {
  return (
    <div className='mt-28 ml-[660px] '>
        <div className='w-[660px] h-[620px] mt-5 '>
                    
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
                        <input type="Username" placeholder='| UserName' className='bg-[#000235] w-[350px] h-[37px] pl-16 pb-0.5 border-[2.5px] border-white rounded-full text-gray-200 placeholder:italic bg-gradient-to-r from-[#000357] via-[#000357e7] to-[#000357d5]' />
                        <input type="password" placeholder='| Password' className='bg-[#000235] w-[350px] h-[37px] pl-16 pb-0.5 border-[2.5px] border-white rounded-full text-gray-200 placeholder:italic bg-gradient-to-r from-[#000357] via-[#000357e7] to-[#000357d5]' />
                    </div>
                    <div >
                        <button className='border-2 border-white rounded-2xl bg-white w-[125px] h-[35px] text-[#000235] font-bold flex justify-center mt-14 ml-[180px] hover:bg-gray-200 active:bg-slate-300 focus:outline-none focus:ring focus:ring-gray-50 '><p className='pt-1'>Log In</p></button>
                    </div>

                    <div className='mt-9 ml-32'>
                        <p className='text-white'>Dont't have an account? <a href=""><span className='font-bold mx-2 hover:underline'>Sign Up</span></a></p>   
                    </div>

            </form>
        </div>
    </div>
  )
}

export default Login