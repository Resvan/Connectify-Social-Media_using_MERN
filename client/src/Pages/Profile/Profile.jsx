import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Leftbar from '../../Components/Leftbar/Leftbar';
import Rightbar from '../../Components/Rightbar/Rightbar';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import React, { useState } from 'react';
import Post from '../../Components/Post/Post';
import EditProfile from '../../Components/EditProfile/EditProfile';
import AddPost from '../../Components/AddPost/AddPost';
import Edit from '@mui/icons-material/Edit';

const CoverPhoto = styled("img")({
  width: "95%",
  height: "100%",
  objectFit:"cover"
});
const ProfilePic = styled("img")({
  width: "10rem",
  height: "10rem",
  borderRadius: "50%",
  objectFit: "cover",
  position: "absolute",
  left: 0,
  right: 0,
  margin: "auto",
  top: "10rem"
});
const EditCover = styled(Fab)(({ theme }) => ({
  position: "absolute",
  right: 20,
  bottom: 0,
  [theme.breakpoints.up("md")]: {
    right: 40,
  }
}));
const EditProfilepic = styled(Fab)(({ theme }) => ({
  position: "absolute",
  left: "65%",
  [theme.breakpoints.up("md")]: {
    left:"58%"
  }
}));
const UserInfoBox = styled(Box)({
  "&::-webkit-box-shadow": `0px 0px 25px -10px rgba(0, 0, 0, 0.38)`,
  "&::-moz-box-shadow": `0px 0px 25px -10px rgba(0, 0, 0, 0.38)`,
  boxShadow: `0px 0px 25px -10px rgba(0, 0, 0, 0.38)`,
  borderRadius: "5%",
  margin: "2rem",
  padding: "1em 2rem",
});

const Profile = () => {
  const [editProfile, setEditProfile] = useState(false);
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" p={1} spacing={2} >
        <Leftbar />
        <Box flex={4} >
          <Box sx={{
            width: "100%",
            height: "15rem",
            position: "relative",
          }}>
            <CoverPhoto src='https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='cover' />
            <EditCover size='small'>
              <Edit/>
            </EditCover>
            <ProfilePic src='https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' alt='profile' />
            <Box sx={{
              position: "relative",
            }} >
              <EditProfilepic size='small' >
              <Edit />
              </EditProfilepic>
            </Box>
          </Box>
          <Box>
            <UserInfoBox minHeight="max-content">
                <Box sx={{textAlign:"center", marginTop:"2rem"}}>
                  <Box >
                  <Typography component="h1" fontWeight={600}>User Name</Typography>
                </Box>
                <Stack direction="row" justifyContent="center" spacing={2}>
                  <Typography component="h1" fontWeight={500}>100 Posts</Typography>
                  <Typography component="h1" fontWeight={500}>1k Followers</Typography>
                  <Typography component="h1" fontWeight={500}>10k Following</Typography>
                </Stack>
                  <Box sx={{marginTop:"1rem"}}>
                    <Typography variant='p' >Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry</Typography>
                  </Box>
                <Button sx={{ margin: "1rem" }} onClick={e=>setOpen(true)} variant='contained' size='small' >follow</Button>
                <EditProfile open={editProfile} setOpen={setEditProfile} />
                </Box>
            </UserInfoBox>
          </Box>
          <Post />
          <AddPost/>
        </Box>
        <Rightbar />
      </Stack>
   </Box>
  )
}

export default Profile
