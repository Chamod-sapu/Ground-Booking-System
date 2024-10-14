import React, { useEffect, useState } from 'react';
import BookingCard from '../Components/BookingCard';
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL; 

function Bookings() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        function getBookings() {
            axios.get(`${backendUrl}/Booking/`).then((res) => {
                setBookings(res.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            });
        }
        getBookings();
    }, []);

    

    return (
        <div className="w-[1330px] mt-28 ml-24">
            <p className='text-3xl font-bold p-8 text-[#000235]'>Bookings :</p>
            <div className="grid grid-cols-4 gap-[44px] ml-8">
                {
                    bookings.map((el) => {
                        return (
                            <BookingCard
                                nm={el.userName}
                                gname={el.gname}
                                fdate={el.fromDate}
                                tdate={el.toDate}
                                prc={el.price}
                                bId={el._id}
                                img={el.image} // Pass _id as gId
                                onClick={() => getBookingId(el._id)}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Bookings;
