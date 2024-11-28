import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
import HomePage from "./pages/homePage/homePage.js";
import ImageGenerator from "./pages/imagegenerator/imageGenerator.js";
import PointsContext from './context/pointsContext.js';

import "./globalStyles.css";

import {createBrowserRouter,Navigate,RouterProvider} from "react-router-dom";
import Signup from "./pages/signup/signup.js";
import Login from "./pages/login/login.js";
import ContactUs from "./pages/contactUs/contactUs.js";
import Help from "./pages/help/help.js";
import HistoryCard from "./pages/history/historyCard.js";

// const parent = document.getElementById("root");
// const root = ReactDOM.createRoot(parent);

const App = ()=>{
    const [userPoints,setUserPoints] = useState();
    const [isLoggedIn,setIsLoggedin] = useState(()=>{
        if(localStorage.getItem('authorization'))
            return true;
        else
            return false;
    });

    const login = ()=> {
        setIsLoggedin(true);
    }

    const logout = ()=> {
        localStorage.removeItem('authorization');
        setIsLoggedin(false);
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element : <HomePage />,
        },
        {
            path: '/home',
            element: <HomePage />
        },
        {
            path: '/imageGenerator',
            element: isLoggedIn? <ImageGenerator /> :<Navigate to='/login'/>
        },
        {
            path: '/history',
            element: isLoggedIn? <HistoryCard />:<Navigate to='/login'/>
        },
        {
            path: '/signup',
            element: <Signup/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/contactUs',
            element: isLoggedIn? <ContactUs />:<Navigate to='/login'/>
        },
        {
            path: '/help',
            element: <Help />
        },
    ]);

    return (
        <PointsContext.Provider value={{
            userPoints:userPoints,
            setUserPoints: setUserPoints,
            isLoggedIn : isLoggedIn,
            login,
            logout
            }}>
            <RouterProvider router={router} />
        </PointsContext.Provider>
    )
};

export default App;





