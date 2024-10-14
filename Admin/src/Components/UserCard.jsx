import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function UserCard({nm,email,tel}) {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {nm}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                <p>e-mail :{email}</p>
                <p>Telephone No :{tel}</p>
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    );
    }