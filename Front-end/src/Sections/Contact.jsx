import React from 'react'


function Contact() {
  return (
    <div className='flex justify-evenly w-[1330px] mt-32'>

      <div>

        <span className='text-white font-roboto font-bold text-3xl '>Contact us</span>

        <div className='w-[470px] h-[550px] bg-[#bac8d956] ml-14 rounded-2xl '>

        <div className='flex justify-start gap-16 mx-10'>
          <img src="../../Icons/map.png" alt="Address" className='h-10 w-10 mt-16' />
          <div className='text-white mt-6'>
            <p>35/A,</p>
            <p>Mahagodawatta,</p>
            <p>Kiyanduwa,</p>
            <p>Akuressa,</p>
            <p>Matara.</p>
          </div>
        </div>

        <div className='flex justify-start gap-16 mx-10 mt-4'>
          <img src="../../Icons/email.png" alt="Address" className='h-10 w-10 mt-6' />
          <p className='text-white py-7'>sportzbookings.sl@gov.com</p>
        </div>

        <div className='flex justify-start gap-16 mx-10 mt-4'>
          <img src="../../Icons/whatsapp.png" alt="Address" className='h-10 w-10 mt-6' />
          <p className='text-white py-7'>+94 7152 8956 | +94 7152 8957</p>
        </div>

        <div className='flex justify-start gap-16 mx-10 mt-4'>
          <img src="../../Icons/Facebook.png" alt="Address" className='h-10 w-10 mt-6' />
          <p className='text-white py-7'>Sportz Bookings</p>
        </div>

        <div className='flex justify-start gap-16 mx-10 mt-4'>
          <img src="../../Icons/twitter.png" alt="Address" className='h-10 w-10 mt-6' />
          <p className='text-white py-7'>Sportz Bookings</p>
        </div>

        </div>

      </div>



      <div>

        <span className='text-white font-roboto font-bold text-3xl '>Send us messages</span>

        <div className='w-[470px] h-[550px] bg-[#bac8d956] ml-24 rounded-2xl '>

          <div className='grid grid-rows-2'>
            <label htmlFor="email" className='text-white pl-10 pt-8 pb-3 '>E-mail</label>
            <input type="email" placeholder='e-mail' className='w-[400px] h-[35px] bg-[#bac8d956] rounded-xl ml-10 pl-9' />
          </div>

          <div className=''>
            <label htmlFor="text" className='text-white pl-10 pt-8 pb- '>Message</label>
            <input type="text" placeholder='Type your message here...' className='w-[400px] h-[300px] bg-[#bac8d956] rounded-xl ml-10 pl-9 mt-3 pb-60' />
          </div>

          <div>
            <button className='bg-[#1F0D46] text-white font-bold rounded-2xl w-[90px] p-1 mt-6 ml-[350px] '>Send</button>
          </div>

        </div>


      </div>

    </div>
  )
}

export default Contact





