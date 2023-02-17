import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Signup from '../../Pages/Signup/Signup';
import Profile from '../../Pages/Profile/Profile';
import { Box, createTheme, ThemeProvider } from "@mui/material";
import React from 'react'
const User = () => {
    const currentUser = true;
    const darkTheme = createTheme({
        palette: {
            mode: 'light'
        }
    })

    const Layout = () => {
        return (
            <>
                <ThemeProvider theme={darkTheme}>
                    <Box bgcolor={"background.default"} color={"text.primary"} >
                        <Navbar />
                        <Outlet />
                    </Box>
                </ThemeProvider>
           </>
        )
    }

    const ProtuctedRoute = ({ children }) => {
        if (!currentUser) {
            return <Navigate to="/login" />
        }

        return children
    }

    
  return (
      <Routes>
          <Route
              path='/'
              element= {
                  <ProtuctedRoute>
                      <Layout />
                  </ProtuctedRoute>
              } >
              <Route path='/' element={<Home />} />
              <Route path='/profile/:id' element={<Profile />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}

export default User
