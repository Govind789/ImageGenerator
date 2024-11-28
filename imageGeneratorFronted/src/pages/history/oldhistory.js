// // import React from "react";
// import NavBar from "../common/navBar/navBar.js";
// import { useState,useEffect } from "react";
// import "./history.css";

// const dummyData = [
//     {
//         id: '1',
//         title:'flower',
//         date:'21-02-24',
//     },
//     {
//         id: '2',
//         title:'Electronics',
//         date:'22-02-24',
//     }
// ]

// // const changeTitle = ()=> { 
// //     console.log('title changed');
// // }
// // const changeDescription = ()=> {
// //     console.log('description changed');
// // }
// // const temp = ()=> {
// //     changeTitle();
// //     changeDescription();
// // }


// const History = ()=>{
//     const[title,setTitle] = useState("Images");
//     const[description,setDescription] = useState("These are Images");

//     useEffect(()=>{
//         console.log('nothing = every time when the page is re-rendered');
//     },)
//     useEffect(()=>{
//         console.log('empty - only when the page is rendered first time');
//     },[])
//     useEffect(()=>{
//         console.log('title changed');
//     },[title])
    
//     useEffect(()=>{
//         console.log('title or description change');
//     },[title,description])

//     return(
//         <div>
//             <NavBar/>
//             <div className="history-main-container">
//                 {/* <button onClick={changeTitle}> Change Title</button>
//                 <button onClick={temp}>Change Title and description</button>
//                 <button onClick={changeDescription}>Change Description</button> */}

//                 <input value={title} onChange={(e)=> {setTitle(e.target.value)}}/>
//                 <input value={description} onChange={(e)=> {setDescription(e.target.value)}} />

//                 <h3>Title = {title}</h3>
//                 <h3>Description = {description}</h3>

//                 {/* <div>
//                     {
//                         dummyData.map((elem)=> {
//                             return (
//                                 <div key={elem.id}>
//                                     <h1>{elem.title}</h1>
//                                     <p>{elem.date}</p>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div> */}
//             </div>
//         </div>
//     )
// }

// // export default History;