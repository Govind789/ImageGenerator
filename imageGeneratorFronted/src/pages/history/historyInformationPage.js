// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const HistoryPage = (props)=>{
//     const [data,setData] = useState();

//     const params = useParams();
//     const id = params.historyId;

//     const customStyle = {
//         color: 'white',
//         padding: '48px'
//     }

//     const getData  = async()=>{
//         try{
//             const res = await fetch(`https://dummyjson.com/products/${id}`);
//             const obj = await res.json();
//             setData(obj);
//             console.log(obj);
//         }catch(err){
//             console.log(err);
//         }
//     }
//     useEffect(()=>{
//         getData();
//     },[]);
    
//     return(
//         <div style={customStyle}>
//             <h3>Info of: {id}</h3>
//             <img src={data?.images} alt="" />
//         </div>
//     )
// }
// export default HistoryPage;