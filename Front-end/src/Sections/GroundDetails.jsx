import { grounds } from "./Index";
import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL; 

function GroundDetails() {

        const [from, setFrom] = useState(dayjs(''));
        const [to, setTo] = useState(dayjs(''));
        const [ground, setGround] = useState(null);

        const navigate =  useNavigate();

        const gId = localStorage.getItem('gId');
        console.log(gId);

        useEffect(() => {
          function getGround() {
            axios.get(`${backendUrl}/Ground/get/${gId}`).then((res) => {
              setGround(res.data.ground);
              console.log(res.data.ground);
            }).catch((err) => {
              alert(err.message);
            });
          }
          getGround();
        }, [gId]);

        console.log(ground);

        if (!ground) {
          return <div>Loading...</div>;
        }

              
        const totalPrice = ground.price;
        const image = ground.image;
        const gname = ground.name;
              
        localStorage.setItem('gname',gname);
        localStorage.setItem('fromDate',from);
        localStorage.setItem('toDate',to);
        localStorage.setItem('totalPrice',totalPrice);
        localStorage.setItem('image',image);


        const pay = async()=>{
            
            navigate("/pay");

        }

        return (
          <div>
            <div className="w-[1390px] h-[600px] bg-[#bac8d956] mt-32 -ml-9 rounded-3xl flex justify-start">
              <div className="flex justify-start">
                <img src={`${backendUrl}${image}`} alt="ground Img" className="w-[600px] h-[530px] rounded-xl m-5" />
              </div>
              <div className="text-white">
                <div>
                  <p className="text-4xl font-bold p-4 underline">{ground.name}</p>
                  <div className="flex justify-start gap-2 ml-4"><p className="font-bold">Sport </p>: <p>{ground.sport}</p></div>
                  <div className="flex justify-start gap-2 ml-4"><p className="font-bold">Location(District) </p>: <p>{ground.location}</p></div>
                  <div className="flex justify-start gap-2 ml-4"><p className="font-bold">Capacity </p>: <p>{ground.capacity}</p></div>
                  <div className="flex justify-start gap-2 ml-4"><p className="font-bold">Timing </p>: <p>{ground.fromTime} - {ground.toTime}</p></div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-[#bac8d956] ml-4 mt-4 w-72 h-[325px] rounded-xl">
                    <p className="font-bold text-2xl text-center pr-3">Facilities</p>
                    {ground.facilities.map((facility, index) => (
                      <ul className="mt-5">
                        <li className="list-disc ml-10"><div key={index} className="flex justify-start gap-4 ml-6 mt-3">{facility}</div></li>
                      </ul>
                    ))}
                  </div>
                  <div>
                    <div className="bg-[#bac8d956] flex justify-center py-2 rounded-xl w-[420px] h-20 mt-4 ml-3">
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker', 'DatePicker']}>
                          <DatePicker label="From" value={from} onChange={(newValue) => setFrom(newValue)} className="w-40" />
                          <DatePicker label="To" value={to} onChange={(newValue) => setTo(newValue)} className="w-36" />
                        </DemoContainer>
                      </LocalizationProvider>
                    </div>
                    <div className="h-[236px] w-[420px] bg-[#bac8d956] ml-3 mt-2 rounded-xl">
                      <p className="text-white text-2xl font-bold text-center pt-4">Booking Summary</p>
                      <div className="flex justify-start gap-[208px] ml-4 mt-6"><p>Ground Price</p><p>Rs. {ground.price}</p></div>
                      <div className="flex justify-start gap-[208px] ml-4 mt-6 text-slate-400 text-sm"><p>VAT included, where applicable</p></div>
                      <button onClick={pay} className="bg-[#000235] text-white font-bold text-center w-48 p-2 rounded-3xl ml-[102px] mt-6">Book Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
}

export default GroundDetails;
