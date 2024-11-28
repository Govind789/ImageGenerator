import { useContext } from "react";
import NavBar from "../common/navBar/navBar.js";
import PointsContext from '../../context/pointsContext.js';

const Help = ()=>{
    const contextValues = useContext(PointsContext);
    return (
        <div>
            <NavBar page = 'help' userPoints={contextValues.userPoints} setUserpoints= {contextValues.setUserpoints}/>
            <div className="help-main-container">
                
            </div>
        </div>
    )
}

export default Help;