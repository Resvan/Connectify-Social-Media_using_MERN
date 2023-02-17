import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Article from '@mui/icons-material/Article';
import Comment from '../Comment/Comment';
import React from 'react'
import { useState } from 'react';

const Post = () => {
    const [commentOpen, setCommentOpen] = useState(false);
    
    return (
            <Card sx={{
                marginTop: 3,
                boxShadow: `-1px 6px 5px 3px rgba(0,0,0,0.25)`
            }} >
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq0W2Devh5khkgIF3t-2T2zCm95r71Bc9n1g&usqp=CAU"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
                </IconButton>
                <IconButton aria-label="comment" onClick={()=>setCommentOpen(!commentOpen)}>
                    <Article/>
                </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
            </CardActions>
                {commentOpen && <Comment/>}
            </Card>
    )
}

export default Post
