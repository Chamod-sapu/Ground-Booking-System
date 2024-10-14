import React from 'react'
import { booking, users } from './Index'
import Bookings from "../Components/Bookings";


function AccountDetails() {

      const addrs = users[0].address.split(',')

      const userBookings = booking.filter((el)=> el.client === users[0].user_id)
      console.log(userBookings);
      

  return (
    <div className=''>

      <p className='text-white font-bold pb-3 px-[150px] mt-32'>Account Details</p>
    
      <div className='h-[258px] w-[1065px] ml-[150px] '>

        <div className='bg-[#bac8d956] h-[258px] w-[1065px] rounded-xl flex justify-center gap-16'>
          
          <div className='h-[229px] w-[229px] '>
              <img src={users[0].image} alt="ProfilePic" className='h-[229px] rounded-full ml-1 my-3' />
          </div>

          <div className=''>
              <div className='flex justify-start gap-10 text-white mb-8 mt-11'><p className='font-bold'>Name :</p> <p className='font-semibold'> {users[0].name} </p></div>
              <div className='flex justify-start gap-10 text-white my-8'><p className='font-bold'>E-mail :</p> <p className='font-semibold'>{users[0].email}</p></div>
              <div className='flex justify-start gap-10 text-white my-5'><p className='font-bold'>Tel No :</p> <p className='font-semibold'>{users[0].telephone} </p></div>
          </div>

          <div className='flex justify-center gap-8 mt-11'>
              <span className='text-white font-bold'>Address:</span>
              <div className='text-white '>
                  <p>{addrs[0]}</p>
                  <p>{addrs[1]}</p>
                  <p>{addrs[2]}</p>
                  <p>{addrs[3]}</p>
                  <p>{addrs[4]}</p>
              </div>
          </div>
        
        </div>
      </div>

      <p className='text-white font-bold pt-10 px-[150px] pb-3'>Bookings</p>

      <div className='bg-[#bac8d956] w-[1065px] rounded-xl ml-[150px] mt-1 grid grid-cols-2 '>

        {
          userBookings.map((el)=>{
            return(
              <Bookings 
              img={el.image}
              ven={el.venue}
              from={el.fromDate}
              to={el.toDate}
              prc={el.price}

              />
            )
          })
        }

      </div>

    </div>
  )
}

export default AccountDetails