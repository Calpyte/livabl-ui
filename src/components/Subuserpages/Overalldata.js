
// import React, { Component ,useCallback ,useState,useContext, useEffect} from 'react';
// import axios from 'axios';
// import { NavLink,useNavigate} from "react-router-dom"
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Dropdown from 'react-bootstrap/Dropdown';
// import { Form, Button } from "react-bootstrap";
// import { LoginContext } from "../ContextProvider/Context";
// import "./Home1Add.css";
// import DatePicker from 'react-date-picker';
// import Header from './Header';
// const Fugitive = () =>{
//     const [dte, onChange] = useState(new Date());
//     const [usrs1, setTodoss1] = useState([]);
//     const [usrs, setTodoss] = useState([]);
//     const [usrs2, setTodoss2] = useState([]);
//     const [usrs3, setTodoss3] = useState([]);
//     const [usrs4, setTodoss4] = useState([]);
//     const [usrs5, setTodoss5] = useState([]);
//     const [usrs6, setTodoss6] = useState([]);
//     const [usrs7, setTodoss7] = useState([]);
//     const [count, setCount] = useState(0);
//     const [calculation, setCalculation] = useState(0);
//     const { logindata } = useContext(LoginContext);
//     
//     let he="hello"
//     let person="hello"
//     const asuser = async()=>{he=(logindata.ValidUserOne.map);
//         person=(logindata.ValidUserOne.fname)}
  
//   asuser();
// let em=0
// const hellos =async(e)=>{
//     const map=he
//         const datap = await fetch("/getstation", {
//           method: "POST",
//           headers: {
//               "Content-Type": "application/json"
//           },
//           body: JSON.stringify({
//                map
//           })
//       });
//       const res = await datap.json();

//       setTodoss(res);
//       //////
//       const datap1 = await fetch("/getstation", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//              map
//         })
//     });
//     const res1 = await datap1.json();
//     
//     setTodoss1(res1);
// /////



// const datap2 = await fetch("/getstation", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//          map
//     })
// });
// const res2 = await datap2.json();
// 
// setTodoss2(res2);
// ////
// const datap3 = await fetch("/getstation", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//          map
//     })
// });
// const res3 = await datap3.json();
// 
// setTodoss3(res3);
// ////

// const datap4 = await fetch("/getstation", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//          map
//     })
// });
// const res4 = await datap4.json();
// 
// setTodoss4(res4);

// ////
// const datap5 = await fetch("/getstation", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//          map
//     })
// });
// const res5 = await datap5.json();
// 
// setTodoss5(res5);
// ////
// const datap6 = await fetch("/getstation", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//          map
//     })
// });
// const res6 = await datap6.json();
// 
// setTodoss6(res6);

// ///////////////
// const datap7 = await fetch("/getstation", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//          map
//     })
// });
// const res7 = await datap7.json();
// 
// setTodoss7(res7);








//       }
//       let element = 0 ;
    
//       for (let index = 0; index < usrs.length; index++) {
    
    
//          element += (usrs[index].co2)
//         
//       }


//       //////////////////////////////////////////////////////
     
          
      
          
//           let element1 = 0;
        
//           for (let index = 0; index < usrs.length; index++) {
        
        
//              element1 += (usrs1[index].co2)
//             
//           }
         
//       //////////////////////////////////////////////////////

  
//   let element2 = 0;

//   for (let index = 0; index < usrs.length; index++) {


//      element2 += (usrs2[index].co2)
//     
//   }
//   ///      //////////////////////////////////////////////////////

  
        
      
//       let element3 = 0;
    
//       for (let index = 0; index < usrs.length; index++) {
    
    
//          element3 += (usrs3[index].co2)
//         
//       }
//       ///      //////////////////////////////////////////////////////

    
           
      
          
//           let element4 = 0;
        
//           for (let index = 0; index < usrs.length; index++) {
        
        
//              element4 += (usrs4[index].co2)
//             
//           }
//           ///const hellos =async(e)=>{      //////////////////////////////////////////////////////


   

  
//   let element5 = 0;

//   for (let index = 0; index < usrs.length; index++) {


//      element5 += (usrs5[index].co2)
//     
//   }
//   ///      //////////////////////////////////////////////////////


        
  
      
//       let element6 = 0;
    
//       for (let index = 0; index < usrs.length; index++) {
    
    
//          element6 += (usrs6[index].co2)
//         
//       }
//       ///      //////////////////////////////////////////////////////

     
        
     
//           let element7 = 0;
        
//           for (let index = 0; index < usrs.length; index++) {
        
        
//              element7 += (usrs7[index].co2)
//             
//           }
//           em=element+element1+element2+element3+element4+element5+element6+element7



    
   
     
//       hellos();

  

//     return(
//         <>
       
// <h1>{em}</h1>
// </>
  
//     )}

// export default Fugitive;