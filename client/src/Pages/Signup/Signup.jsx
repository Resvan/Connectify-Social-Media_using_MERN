import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <Grid container sx={{
            height: "100vh",
            backgroundColor: "rgb(193, 190, 255)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Grid item xs={12} md={6}>
                <Card sx={{
                    marginTop: { xs: "6rem", sm: "0" }
                }}>
                    <Stack direction="row">
                        <Box flex={1} sx={{
                            padding: "3rem",
                            display: { xs: "none", sm: "flex" },
                            flexDirection: "column",
                            gap: "1.5rem",
                            justifyContent: "center"
                        }} >
                            <Typography variant='h4' color="#555" fontWeight="bold" >
                                Register
                            </Typography>
                            <TextField
                                error={false}
                                id="standard-basic"
                                label="User Name"
                                variant="standard"
                            />
                            <TextField
                                id="standard-basic"
                                label="Email"
                                type="email"
                                variant="standard"
                            />
                            <TextField
                                id="standard-number-input"
                                label="Phone"
                                type="number"
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <TextField
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
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
                                variant="contained">
                                Signup
                            </Button>
                        </Box>
                        <Box flex={1} sx={{
                            background: `linear-gradient(rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)),  url(${"https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"}), center`,
                            backgroundSize: "cover",
                            height: "70vh",
                            padding: "3rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: '1.5rem',
                            color: "white"
                        }}>
                            <Typography fontWeight={500} variant='h2' lineHeight={1} >
                                Lama Social.
                            </Typography>
                            <Typography variant='p' >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </Typography>
                            <Typography variant='span' fontSize={14} >
                                Do you have an account ?
                            </Typography>
                            <Link to="/login">
                            <Button sx={{
                                width: "50%",
                                backgroundColor: "white",
                                color: "rebeccapurple",
                                fontWeight: "bold",
                                cursor: "pointer",
                                "&:hover": {
                                    backgroundColor: "white"
                                }
                            }}
                                    variant="contained">
                                    Login
                                </Button>
                            </Link>
                        </Box>
                    </Stack>
                </Card>
                <Card>
                    <Box flex={1} sx={{
                        padding: "3rem",
                        display: { xs: "flex", sm: "none" },
                        flexDirection: "column",
                        gap: "1.5rem",
                        justifyContent: "center"
                    }} >
                        <Typography variant='h4' color="#555" fontWeight="bold" >
                            Signup
                        </Typography>
                        <TextField
                            error={false}
                            id="standard-basic"
                            label="User Name"
                            variant="standard"
                        />
                        <TextField
                            id="standard-basic"
                            label="Email"
                            type="email"
                            variant="standard"
                        />
                        <TextField
                            id="standard-password-input"
                            label="Phone"
                            type="number"
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
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
                            variant="contained">Signup</Button>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Signup
