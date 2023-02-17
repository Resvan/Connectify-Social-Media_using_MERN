import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';
import React, { useState } from 'react';

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});



const EditProfile = ({open, setOpen}) => {
    const [profileEdit, setProfileEdit] = useState(true);
    return (
        <>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    height: "80vh", width: { sm: '100vw', md: "50vw" }
                }} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
                    <Stack direction="row" spacing={2}>
                        <Box >
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={e => setProfileEdit(true)}  >
                                        <ListItemText primary="Edit Profile" />
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                                <ListItem disablePadding>
                                    <ListItemButton onClick={e => setProfileEdit(false)} >
                                        <ListItemText primary="Change Password" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                        {
                            profileEdit &&

                            <Box flex={1} sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1.5rem",
                                justifyContent: "center"
                            }} >
                                <TextField
                                    error={false}
                                    id="standard-basic"
                                    label="User Name"
                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width: "100%" }}
                                    id="standard-multiline-static"
                                    multiline
                                    rows={3}
                                    placeholder="Bio"
                                    variant="standard"
                                />
                                <Button sx={{
                                    width: "50%",
                                    backgroundColor: "#938eef",
                                    color: "white",
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    "&:hover": {
                                        backgroundColor: "rebeccapurple"
                                    }
                                }}
                                    variant="contained">Edit</Button>
                            </Box>
                        }
                        {
                            !profileEdit &&

                            <Box flex={1} sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1.5rem",
                                justifyContent: "center"
                            }} >
                                <TextField
                                    id="standard-basic"
                                    label="Password"
                                    variant="standard"
                                    />
                                    <TextField
                                        id="standard-basic"
                                        label="New password"
                                        variant="standard"
                                    />
                                    <TextField
                                        id="standard-basic"
                                        label="Confirm new password"
                                        variant="standard"
                                    />
                                <Button sx={{
                                    width: "50%",
                                    backgroundColor: "#938eef",
                                    color: "white",
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    "&:hover": {
                                        backgroundColor: "rebeccapurple"
                                    }
                                }}
                                    variant="contained">submit</Button>
                            </Box>
                        }
                    </Stack>
                </Box>
            </StyledModal>
        </>
    )
}

export default EditProfile
