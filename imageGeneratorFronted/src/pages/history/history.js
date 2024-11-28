// import NavBar from "../common/navBar/navBar.js";
// import { useState,useEffect, useContext } from "react";
// import "./history.css";
// import HistoryCard from "./historyCard.js";
// import PointsContext from '../../context/pointsContext.js';

// const History = (props)=>{
//     const contextValues = useContext(PointsContext);
    
//     const [data,setData] = useState([]);

//     const [searchText,setsearchText] = useState();
    
//     const getData = async()=> {
//         try{
//             const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
//             const obj = await res.json();
//             setData(obj.products);
//         }catch(err){
//             console.log(err);
//         }
//     }
    
//     useEffect(()=>{
//         getData();
//     },[searchText]);

//     return(
//         <div>
//             <NavBar page="history" userPoints = {contextValues.userPoints} setUserPoints={contextValues.setUserPoints} />
//             <div className="history-main-container">
//             <input type="text" className="search-box-input" onChange={(e)=>{setsearchText(e.target.value)}}/>
//                 {
//                     data.map((item)=>{
//                         return <HistoryCard item = {item}/>
//                     })         
//                 }
//             </div>
//         </div>
//     )
// }

// export default History;