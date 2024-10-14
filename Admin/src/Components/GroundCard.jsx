import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function GroundCard({ nm, sprt, lct, cap, prc, gId, img }) {
    const navigate = useNavigate();

    const backendUrl = import.meta.env.VITE_BACKEND_URL; // Accessing env variable

    const updateGround = async () => {
        if (gId) {
            localStorage.setItem('gId', gId);
            navigate('/updateground');
        } else {
            alert('No booking ID found');
        }
    };

    const deleteGround = async () => {
        if (gId) {
            try {
                await axios.delete(`${backendUrl}/Ground/delete/${gId}`);
                alert('Ground Successfully Deleted');
            } catch (err) {
                alert(err.message);
            }
        } else {
            alert('No booking ID found');
        }
    };

    return (
        <div className='z-40'>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea className='z-10 h-[385px]'>
                    <CardMedia
                        className='h-56'
                        component="img"
                        height="140"
                        image={`${backendUrl}${img}`} // Use correct backend URL
                        alt="Ground Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {nm}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <div className='flex justify-start gap-8'><p>Sport :</p><p>{sprt}</p></div>
                            <div className='flex justify-start gap-3'><p>Location :</p><p>{lct}</p></div>
                            <div className='flex justify-start gap-3'><p>Capacity :</p><p>{cap}</p></div>
                            <div className='flex justify-start gap-9'><p>Price :</p><p>Rs.{prc}</p></div>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={updateGround} size="small" color="primary">
                        Edit
                    </Button>
                    <Button onClick={deleteGround} size="small" color="primary">
                        DELETE
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}
