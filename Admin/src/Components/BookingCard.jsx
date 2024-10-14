import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL; 

export default function BookingCard({ nm, gname, fdate, tdate, prc, bId,img }) {
    console.log(bId);

    const deleteBooking = async () => {
        if (bId) {
            await axios.delete(`${backendUrl}/Booking/delete/${bId}`)
                .then(() => {
                    alert('Booking Successfully Deleted');
                }).catch((err) => {
                    alert(err.message);
                });
        } else {
            alert('No booking ID found');
        }
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={`${backendUrl}${img}`}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {gname}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <p>User: {nm}</p>
                        <p>From: {fdate}</p>
                        <p>To: {tdate}</p>
                        <p>Price: {prc}</p>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={deleteBooking} size="small">Delete</Button>
                </CardActions>
            </CardActionArea>
        </Card>
    );
}
