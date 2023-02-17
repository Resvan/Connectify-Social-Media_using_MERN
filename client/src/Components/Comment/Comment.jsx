import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import React from 'react';

const Comment = () => {
    const comments = [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
            name: "John Doe",
            userId: 1,
            profilePicture:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 2,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
            name: "Jane Doe",
            userId: 2,
            profilePicture:
                "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
    ];

  return (
      <Box>
          <Box sx={{ display: "flex", marginLeft:"1rem"}}>
              <Avatar sx={{ width: 30, height: 30, marginY:"auto" }}/>
              <TextField id="outlined-basic" placeholder="What's on your mind ?"  variant="outlined"  sx={{marginLeft:"1rem",width:"90%", height:"1rem"}} />
          </Box>
          <Box sx={{ marginTop: "2rem", marginLeft: "85%", marginBottom:"1rem" }}>
              <Button variant='contained' size='small' >submit</Button>
          </Box>
          <Divider />
          <Box sx={{
              margin:"1rem",
              maxHeight: "10rem",
              overflowY: "scroll",
              "&::-webkit-scrollbar": {
                  display: "none"
              }
          }}>
            {
              comments.map(comment => (
                  <Card sx={{ marginBottom: "0.5rem" }}>
                      <Stack justifyContent="space-between" direction="row" sx={{ margin: "1rem" }}>
                          <Box sx={{display:"flex"}}>
                              <Avatar sx={{ width: 30, height: 30 }} />
                              <Typography variant='span' sx={{ marginTop: "0.3rem", marginLeft: "1rem" }}>user name</Typography>
                          </Box>
                          <Box>
                              <Typography variant='p'>1 hour ago</Typography> 
                              <IconButton aria-label="settings">
                                  <MoreVertIcon />
                              </IconButton>
                          </Box>
                      </Stack>
                      <Box sx={{margin:"1rem"}}>
                          <Typography variant='p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Typography>
                      </Box>
                      <Box>
                          
                      </Box>
                  </Card>
              ))
              }
          </Box>
    </Box>
  )
}

export default Comment
