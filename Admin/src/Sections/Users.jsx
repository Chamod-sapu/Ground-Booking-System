import React, { useEffect, useState } from 'react'
import UserCard from '../Components/UserCard'
import axios from "axios";


function Users() {

    const[users, setUsers] = useState([]);

    useEffect(()=>{
        function getUsers() {
        axios.get("http://localhost:8070/User/").then((res)=>{
            setUsers(res.data);
            console.log(res.data);

        }) .catch((err) =>{
            alert(err.message);
        })
        }
        getUsers();
    },[])

return (
<div className="w-[1330px] mt-28 ml-24">
    <p className='text-3xl font-bold p-8 text-[#000235]'>Users :</p>

    <div className="grid grid-cols-4 gap-[44px] ">
        
        {
        users.map((el) => {
            return(
                <UserCard 
                    nm={el.userName}
                    email={el.email}
                    tel={el.telephone}
                    //img={el.images[0]}
                    index ={el.index}
                />
                )
            })
        }
            
    </div>

    </div>


    // <div><UserCard/></div>
)
}

export default Users