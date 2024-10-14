import React, { useEffect, useState } from 'react'
import GroundCard from '../Components/GroundCard'
import axios from "axios";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const backendUrl = import.meta.env.VITE_BACKEND_URL; 

function Grounds() {

    const[grounds, setGrounds] = useState([]);
    const[gId,setGId] = useState(null);

    console.log(grounds);

    useEffect(()=>{
        function getGrounds() {
        axios.get(`${backendUrl}/Ground/`).then((res)=>{
            setGrounds(res.data);
            console.log(res.data);

        }) .catch((err) =>{
            alert(err.message);
        })
        }
        getGrounds();
    },[])

    const handleClick = async(groundId)=>{
        setGId(groundId);
        localStorage.setItem("gId", gId);
    }



return (
    <>
        <div className='ml-[1450px] mt-8  fixed'>
            <Box sx={{ '& > :not(style)': { m: 1 } }} >
                <Fab color="primary" aria-label="add" href='/addground'>
                    <AddIcon />
                </Fab>
            </Box>
        </div>

        <div className="w-[1330px] mt-5 ml-24">

            <p className='text-3xl font-bold p-8 mt-16 text-[#000235]'>Grounds :</p>

            <div className="grid grid-cols-4 gap-[44px] ">
                
                {
                grounds.map((el) => {
                    return(
                        <GroundCard 
                            nm={el.name}
                            sprt={el.sport}
                            lct={el.location}
                            cap={el.capacity}
                            gId={el._id}
                            img={el.image}
                            prc={el.price}
                            index ={el.index}
                            onClick = {()=>{handleClick(el._id)}}
                        />
                        )
                    })
                }
                    
            </div>

        </div>

        

    </>
)
}

export default Grounds