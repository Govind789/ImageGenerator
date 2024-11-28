import { useContext } from "react";
import NavBar from "../common/navBar/navBar.js";
import "./homePage.css";
import PointsContext from '../../context/pointsContext.js';

const HomePage = ()=>{
    const contextValues = useContext(PointsContext);
    return (
        <div>
            <NavBar page = 'HomePage' userPoints={contextValues.userPoints} setUserpoints= {contextValues.setUserpoints}/>
            <div className="homepage-main-container">
                <div className="ImageGenerator"></div>
                <div className="history"></div>
                <div className=""></div>
            </div>
        </div>
    )
}

export default HomePage;