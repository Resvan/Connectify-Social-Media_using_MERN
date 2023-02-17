import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ImageIcon from '@mui/icons-material/Image';
import DateRange from '@mui/icons-material/DateRange';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material';
import Add from '@mui/icons-material/Add';
import React from 'react';
import { useState } from 'react';

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
});

const AddPost = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Tooltip onClick={e => setOpen(true)}
                title="Addpost" sx={{
                    position: "fixed",
                    bottom: 20,
                    left: { xs: "calc(50% - 25px)", md: 30 }
                }}>
                <Fab color="primary" aria-label="add">
                    <Add />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
                    <Typography variant="h6" color="gray" textAlign="center">
                        Create Post
                    </Typography>
                    <UserBox>
                        <Avatar
                            src='data:image/png;base64,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'
                            sx={{ width: 30, height: 30 }}
                        />
                        <Typography fontFamily={500} variant="span">John Doe</Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind ?"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotionsIcon color='primary' />
                        <ImageIcon color="secondary" />
                        <VideoCameraBackIcon color="success" />
                        <PersonAddIcon color='error' />
                    </Stack>
                    <ButtonGroup
                        fullWidth
                        variant='contained' aria-label='outline primary button group'>
                        <Button>Post</Button>
                        <Button sx={{ width: "100px" }}><DateRange /></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default AddPost
