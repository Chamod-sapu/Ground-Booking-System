import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Checkbox from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';

import axios from "axios";
import { useNavigate } from 'react-router-dom';


const backendUrl = import.meta.env.VITE_BACKEND_URL; 

const defaultValue = dayjs().set('hour', 0).set('minute', 0).startOf('minute');

function AddGround() {

    const [currency, setCurrency] = useState('LKR');

    const navigate = useNavigate();

    const facilitiesList = [
        'Ground Staff',
        'Changing Room',
        'Power',
        'Washroom',
        'Car Park',
        'Floodlights'
    ];

    const[image,setImage] = useState('');
    const[name,setName] = useState('');
    const[price,setPrice] = useState('');
    const[sport,setSport] = useState('');
    const[location,setLocation] = useState('');
    const[capacity,setCapacity] = useState('');
    const[fromT,setFromT] = useState('');
    const[toT,setToT] = useState('');

    const [facilities, setFacilities] = useState({
        'Ground Staff': false,
        'Changing Room': false,
        'Power': false,
        'Washroom': false,
        'Car Park': false,
        'Floodlights': false
    });

    const selectedFacilities = facilitiesList.filter(facility => facilities[facility]);
    
        
    const fromTime = (value, view) =>{
        view.preventDefault;
        view === 'minutes' && value.minute() >= 45;
        let fDate = value.$d;
        let fTime = fDate.toString().split(' ')[4];
        setFromT(fTime);
        console.log(fTime);
    }
    const toTime = (value, view) =>{
        view.preventDefault;
        view === 'minutes' && value.minute() >= 45;
        let tDate = value.$d;
        let tTime = tDate.toString().split(' ')[4];
        setToT(tTime)
        console.log(tTime);
    }

        const handleChange = (event) => {
            setFacilities({
            ...facilities,
            [event.target.name]: event.target.checked
            });
        };

        

        console.log(facilities);
        const handleSubmit = async (event) => {
            event.preventDefault();
            
        
            const formData = new FormData();
            formData.append('name', name);
            formData.append('location', location);
            formData.append('sport', sport);
            formData.append('capacity', capacity);
            formData.append('fromTime', fromT);
            formData.append('toTime', toT);
            formData.append('price', price);
            formData.append('image', image); // Add image file here

            selectedFacilities.forEach(facility => formData.append('facilities', facility)); // Append facilities

            try {
                const response = await axios.post(`${backendUrl}/Ground/add`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                alert('Ground Added');
            } catch (err) {
                alert(err);
            }

            navigate('/grounds')
    };


return (
    <> 
        <h1 className='text-3xl pl-16 py-7 font-bold text-[#000235] mt-16'>Add A Ground:</h1>

        <div className=''>
            <form action="" className='border border-[#000235] rounded-xl w-[830px] ml-[290px] mt-3 p-4'>
            <div className='flex justify-start gap-10'>
                <div className="add-img-upload flex-col w-48">
                    <input
                        onChange={(e) => {
                            setImage(e.target.files[0]);
                        }}
                        type="file"
                        id="image"
                        hidden
                        required
                        
                    />
                    <label htmlFor="image">
                            <img
                            src="./src/Images/image.png"
                            className='w-48'
                            alt=""
                            />
                    </label>
                    <p className='text-center text-[#000235]'>Upload image</p>
                </div>
                <div>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1 },
                        }}
                        noValidate
                        autoComplete="off"
                        >
                    </Box>
                    <div className='flex justify-start gap-9'>
                    <TextField
                        id="outlined-textarea"
                        label="Name"
                        className='w-64'
                        placeholder="Ground Name"
                        onChange={(e)=>setName(e.target.value)}
                        multiline
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Price"
                        className='w-64'
                        placeholder="Ground Price"
                        onChange={(e)=>setPrice(e.target.value)}
                        multiline
                    />
                    </div>
                    <div className='flex justify-start gap-9 mt-6'>
                    <TextField
                        id="outlined-textarea"
                        label="Sport"
                        className='w-64'
                        placeholder="Sport"
                        onChange={(e)=>setSport(e.target.value)}
                        multiline
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Capacity"
                        className='w-64'
                        placeholder="Capacity"
                        onChange={(e)=>setCapacity(e.target.value)}
                        multiline
                    />
                    
                    </div>
                    <div className='mt-6'>
                    <TextField
                        id="outlined-textarea"
                        label="District"
                        className='w-64  '
                        placeholder="Location"
                        onChange={(e)=>setLocation(e.target.value)}
                        multiline
                    />
                    </div>
                </div>
            </div>
                <div className='flex justify-start gap-9 mt-4 ml-[168px]'>
                    <div className='w-72'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                                components={['TimePicker', 'DateTimePicker', 'DateTimeRangePicker']}
                            >
                                <DemoItem label="From">
                                    <TimePicker
                                        defaultValue={defaultValue}
                                        shouldDisableTime={fromTime}
                                    />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                    <div className='w-72'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                                components={['TimePicker', 'DateTimePicker', 'DateTimeRangePicker']}
                            >
                                <DemoItem label="To">
                                    <TimePicker
                                        defaultValue={defaultValue}
                                        shouldDisableTime={toTime}
                                    />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                </div>

                
                <div className='border rounded border-slate-300 w-52 mt-6 ml-[168px] text-[#000235]'>
                        <Typography id="sandwich-group" level="body-lg" fontWeight="lg" mb={1}>
                            Ground Facilities
                        </Typography>
                        <div role="group" aria-labelledby="sandwich-group">
                            <List size="sm">
                            {facilitiesList.map(facility => (
                                <ListItem key={facility}>
                                    <Checkbox
                                        label={facility}
                                        name={facility}
                                        checked={facilities[facility]}
                                        onChange={handleChange}
                                    />
                                </ListItem>
                            ))}
                            </List>
                        </div>
                        <div>
                            <button onClick={handleSubmit} className='bg-[#000235] text-white w-32 rounded-xl ml-[400px]'>Add</button>
                        </div>
                </div>
            </form>
        </div>

    </>
)
}

export default AddGround