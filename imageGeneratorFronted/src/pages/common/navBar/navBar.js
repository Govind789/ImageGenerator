import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import PointsContext from '../../../context/pointsContext.js';
const cssName = require('../navBar/navBar.css');

const NavBar = (props)=>{
    const contextValues = useContext(PointsContext);
    const page = props.page;
    const [redirect, setRedirect] = useState(false);

    const customColor = (e)=>{
        return { color: page === e?'red':cssName};
    }

    const logincol = ()=>{
        return { 
            backgroundColor: contextValues.isLoggedIn?'rgb(22, 200, 25)' : 'red',
            padding: '4px', 
            color: 'brown'
        };
    }

    const handleLogin = () => {
        setRedirect(true);
    }
    const handleLogout = () => {
        contextValues.logout();
        setRedirect(true);
    }

    return(
        <div className="header-parent-container">
            <div className="left">
                <Link to="/home" style={customColor('HomePage')}>Home</Link>
                <Link to="/imageGenerator" style={customColor('imageGenerator')}>Image Generator</Link>
                <Link to="/history" style={customColor('history')}>History</Link>
                <Link to="/contactUs" style={customColor('contactUs')}>Contact Us</Link>
                <Link to="/help" style={customColor('help')}>Help</Link>
                <Link to="/signup" style={customColor('signup')}>Signup</Link>
                <Link to="/login" style={customColor('login')}>Login</Link>
            </div>
            <div className="islogin-main">
                <div className="right" style={logincol()}>
                </div>
                {contextValues.isLoggedIn ?
                    <button onClick={handleLogout}>Logout</button>
                    : <button onClick={handleLogin}>Login</button>
                }
                {redirect && <Navigate to='/login' />}
            </div>
        </div>
    )
}

export default NavBar;


