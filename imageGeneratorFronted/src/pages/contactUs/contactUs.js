import { useContext } from "react";
import NavBar from "../common/navBar/navBar.js";
import './contactUs.css'
import PointsContext from '../../context/pointsContext.js';


const ContactUs = ()=>{
    const contextValues = useContext(PointsContext);
    return (
        <div>
            <NavBar page = 'contactUs' userPoints={contextValues.userPoints} setUserpoints= {contextValues.setUserpoints}/>
            <div className="contact-main container">
                
            </div>
        </div>
    )

}

export default ContactUs;