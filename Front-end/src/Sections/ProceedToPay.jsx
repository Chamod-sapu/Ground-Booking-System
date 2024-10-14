import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const backendUrl = import.meta.env.VITE_BACKEND_URL; 

function ProceedToPay() {

  const [userName, setUserName] = useState('');
  const [gname, setGname] = useState('');
  const [gId, setGId] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    setUserName(localStorage.getItem('userName'));
    setGname(localStorage.getItem('gname'));
    setGId(localStorage.getItem('gId'));
    setFromDate(localStorage.getItem('fromDate'));
    setToDate(localStorage.getItem('toDate'));
    setPrice(localStorage.getItem('totalPrice'));
    setImage(localStorage.getItem('image'));
  }, []);

  const navigate = useNavigate();

  const submitBooking = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('userName', userName);
    formData.append('gname', gname);
    formData.append('gId', gId);
    formData.append('fromDate', fromDate);
    formData.append('toDate', toDate);
    formData.append('price', price);
    formData.append('image', image);

    console.log([...formData.entries()]); // Log formData contents

    try {
        const response = await axios.post(`${backendUrl}/Booking/add`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        alert('Your Booking Successful');
        navigate('/listofgrounds'); // Redirect to a success page or any other page
    } catch (err) {
        alert(err.message);
    }
};


  return (
    <section id='Landing' className='mt-28 w-[1450px] h-[550px] flex xl:flex-row flex-col gap-10 max-container '>

          <div className='flex justify-between'>
              <div className='w-[660px] h-[550px] mt-5'>

                  <h1 className='text-white font-montserrat text-8xl font-bold '>
                      <span>
                          <p>Checkout Now</p>
                          <p> And Play</p>
                          <p>Your Game</p>
                      </span>
                  </h1>

                  <div className='mt-6'>
                      <p className='text-white text-lg'>
                        After The Payment, You Will Get The Property To Your Sports.  
                      </p>
                      <p className='text-white text-lg'>
                        You Have Already Agreed With Our Rules And Regulations.
                      </p>
                      <p className='text-white text-lg'>
                        If You Want Additional Facilities, Go Back And Choose. 
                      </p>
                  </div>

              </div>

              <div className='w-[660px] h-[650px]'>
                
                <div className='w-[500px] h-[620px] ml-32 rounded-[50px] bg-white backdrop-opacity-10 backdrop-invert bg-white/15'>

                  <p className='text-white pl-16 py-7'>Choose your payment method</p>

                  <form className='w-[400px] h-[520px] ml-[50px] '>

                  <fieldset className='flex justify-evenly '>

                    <div className='flex justify-between h-10 w-16'>
                      <input id="draft" className="peer/draft " type="radio" name="status" checked />
                      <label for="draft" className="peer-checked/draft:text-sky-500"><img src="../Icons/visa.png" alt="visa" className='h-8 mt-1 ml-2'/></label>
                    </div>

                    <div className='flex justify-between h-10 w-16'>
                      <input id="published" className="peer/published" type="radio" name="status" />
                      <label for="published" className="peer-checked/published:text-sky-500"><img src="../Icons/card.png" alt="visa" className='h-8 mt-1 ml-2 '/></label>
                    </div>

                    <div className='flex justify-between h-10 w-16'>
                      <input id="published" className="peer/published" type="radio" name="status" />
                      <label for="published" className="peer-checked/published:text-sky-500"><img src="../Icons/american-express.png" alt="visa" className='h-8 mt-1 ml-2 '/></label>
                    </div>

                  </fieldset>

                  <div className='grid grid-rows-4 gap-2'>

                    <div className='grid grid-rows-2 gap-0.5 my-3 ml-8'>
                      <label for="name" className="peer-checked/published:text-sky-500 text-white text-xs mt-2">Card holder name*</label>
                      <input required type="name" placeholder='Card holder name' className='w-[350px] rounded-lg pl-10 text-xs ' />
                    </div>

                    <div className='grid grid-rows-2 gap-0.5 my-3 ml-8'>
                      <label for="name" className="peer-checked/published:text-sky-500 text-white text-xs mt-2">Card number*</label>
                      <input required type="name" placeholder='Card number' className='w-[350px] rounded-lg pl-10 text-xs ' />
                    </div>

                    <div className='flex justify-evenly -ml-4'> 

                      <div className='grid grid-rows-2 gap-0.5 my-3 ml-8'>
                        <label for="name" className="peer-checked/published:text-sky-500 text-white text-xs mt-2">Expiration month*</label>
                        <input required type="name" placeholder='Month' className='w-[150px] rounded-lg pl-10 text-xs ' />
                      </div>

                      <div className='grid grid-rows-2 gap-0.5 my-3 ml-8'>
                        <label for="name" className="peer-checked/published:text-sky-500 text-white text-xs mt-2">Expiration year*</label>
                        <input required type="name" placeholder='Year' className='w-[150px] rounded-lg pl-10 text-xs ' />
                      </div>

                    </div>

                    <div className='grid grid-rows-2 gap-0.5 my-3 ml-9'>
                      <label for="name" className="peer-checked/published:text-sky-500 text-white text-xs mt-2">CVN*</label>
                      <input required type="name" placeholder='CVN' className='w-[90px] rounded-lg pl-6 text-xs ' />
                    </div>

                    <hr className='border-t-[2px] border-white ml-1' />

                    <div className='grid grid-cols-2 gap-5 w-[350px] h-[30px] bg-white rounded-lg ml-9 mt-5 pt-1.5 text-xs backdrop-opacity-10 backdrop-invert bg-white/40 text-white'>
                      <p className='pl-6'>Total Amount</p><p className='pl-20'>Rs.100,000</p>
                    </div>
                    
                    <div >
                      <button onClick={submitBooking} className='border-2 border-[#1F0D46] rounded-lg bg-[#1F0D46] w-[125px] h-[35px] text-white font-bold flex justify-center mt-10 ml-[140px] hover:bg-[#1f0d4693] active:bg-slate-300 focus:outline-none focus:ring focus:ring-gray-50 '><p className='pt-1'>Checkout now</p></button>
                    </div>

                  </div>
                    


                  </form>
                </div>  
              </div>

          </div>

        </section>
  )
}

export default ProceedToPay