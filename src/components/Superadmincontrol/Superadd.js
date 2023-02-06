
import './CompanyDetails.css'

import React, { Component ,useState, useContext} from 'react';


import axios from 'axios';
import { NavLink,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Subusradd = () =>{
  

  const [inpval, setInpval] = useState({
     
      email:""
     
     
  });


  const setVal = (e) => {
      
      const {name, value} = e.target;

      setInpval(() => {
          return {
              ...inpval,
              [name]: value,
            
          }
      })
  };

  const addCompanydata = async (e) => {
      e.preventDefault();

      const { email} = inpval;

         // name,user,currency, country, pointofcontact,productservices,id,employee,website,activity,address
         if (email === "") {
          toast.warning("email is required!", {
              position: "top-center"
          });
            }else{

        

          const data = await fetch("/addsuperadmin", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  
                  email
              })
          });

          const res = await data.json();
          


          if (res.status === 201) {
              toast.success(" Data saved 😃!", {
                  position: "top-center"
              });
              setInpval({ ...inpval,  
                
              email:"",
             
             });}else {
              toast.error(" email already there!", {
                position: "top-center"
            });
              }

          
  }}


    return(
        <>
        
        <div className="add-company-name">
        <form>
    
          <div className='danger'>
          <h3 align="center">Add Co-superadmin</h3>
         <div className='sup'> 
          <label>Superadmin  Email:</label>
            <input className='inp'
              type="text"
              placeholder="enter the Superadmin email"
              name="email"
              onChange={setVal}
              value={inpval.email}
              id="email"
            /></div>
            
            <div className="sbuuton"  >
            <button className='butttonsuper' onClick={addCompanydata}>Submit</button>
 
            </div>


            </div>
            
          
             
            
  
            <ToastContainer />
 </form>
      </div></>
  
    )}

export default Subusradd;