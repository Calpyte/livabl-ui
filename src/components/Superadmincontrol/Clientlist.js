
import { Form, Button } from "react-bootstrap";
import Header from './Header';
import React, { Component ,useCallback ,useState,useContext, useEffect} from 'react';
import { NavLink,useNavigate,Link} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from "../ContextProvider/Context";
import "./Home1Add.css";

const Scomp = () =>{

  const [usrs, setTodoss] = useState([]);
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  const { logindata } = useContext(LoginContext);
  
  let he="hello"
const asuser = async()=>{he=(logindata.ValidUserOne.email)}

asuser();

 
  const [active, setFuel] = useState("active");
  const [ractive, setrFuel] = useState("active");
 
  
  
const [inpval, setInpval] = useState({
     
    email:"",
    pass:""
  });
  const [inpvals, setInpvals] = useState({
     
    remail:""
  });
    const setValss = (e) => {
      setFuel(e.target.value)}
      const setValsss = (e) => {
        setrFuel(e.target.value)}
  

  const setVal = (e) => {
    
    
      const {name, value} = e.target;

      setInpval(() => {
          return {
              ...inpval,
              [name]: value,
            
          }
      })
  };
  
  const setVals = (e) => {
    
    
    const {name, value} = e.target;

    setInpvals(() => {
        return {
            ...inpval,
            [name]: value,
          
        }
    })
};

  const addCompanydata = async (e) => {
      e.preventDefault();

      const {email,pass } = inpval;

         
         if (email === "") {
          toast.warning("code is required!", {
              position: "top-center"
          });}
          else if (pass === "") {
            toast.warning("Facility is required!", {
                position: "top-center"
            });
            }else{
          
            


             

            const eemail=he;
            

          const data = await fetch("/adminaddusr", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  
                email,pass,active,eemail
              })
          });

          const res = await data.json();
          
          setCount((c) => c + 1)
          


          if (res.status === 201) {
              toast.success(" User Added 😃!", {
                  position: "top-center"
              });
              setInpval({ ...inpval,  
                
                email:"",
                pass:""
                
             });}else {
              toast.error("User Already exists!", {
                position: "top-center"
            });
              }

          
  }}
  const hellos =async(e)=>{
    const datap = await fetch("/user/by-type?type=0", {
      method: "GET",
      headers: {
          "Content-Type": "application/json"
      }
  });
  
  const res = await datap.json();
  
  setTodoss(res);
  }
  let element = 0 ;

  for (let index = 0; index < usrs.length; index++) {


     element += (usrs[index].co2)
    
  }


  const navigate = useNavigate();
  const onAddDataClick = useCallback(() => {
    navigate("/processdash");
  }, [navigate]);


  const raddCompanydata = async (e) => {
    e.preventDefault();
   
    const { remail} = inpvals;

      
       if (remail === "") {
        toast.warning("email is required!", {
            position: "top-center"
        });}
      else{



        const data = await fetch("/adminremusr", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                
                remail,ractive
            })
        });

        const res = await data.json();
        
        setCount((c) => c + 1)

        if (res.status === 201) {
            toast.success(" Data saved 😃!", {
                position: "top-center"
            });
            setInpvals({ ...inpvals,  
              
            remail:"",
        
           });}else {
            toast.error(" Please Check the Email!", {
              position: "top-center"
          });
            }

        
}}

let i=0


useEffect(() => {
 
  hellos();
setCalculation(() => count * 2);
}, [count]);


    return(
        
         
        
      <div className="home1-hello">
         
      

      <div className="home1-add-inner" />
      <img
        className="whatsapp-image-2022-12-22-at-9"
        alt=""
        src="../whatsapp-image-20221222-at-923-3@2x.png"
      />
     <div className="ellipse-icon">  <Header/></div>
      <h2 className="subuser">Client list</h2>
      <Link to="/cli"><a className="measure">Clients</a></Link> 
      <Link to="/client"><a className="reduce">Clientcontrol</a></Link>
      <Link to="/superadd"><a className="offset">Addsuperadmin</a></Link>
      <Link to="/clidet"><a className="dashboard">Client details</a></Link> 

<table className="clienttable">
<thead>
  <tr>
    <th>S.NO</th>
    <th>Email</th>
    <th>Active Status</th>
   
  </tr>
</thead>
      <tbody>
      {usrs.length > 0  ? usrs.map
    (todo => (
        <tr>
        <td  key="{qaait}">{i=i+1}</td>
        <td  key="{qantiy}">{todo.email}</td>
        <td  key="{quantity">{todo.isActive+""}</td>
       
       
        </tr>
        )) : (<tr><td><p>You have no users</p></td></tr>)}
      </tbody>
</table>



 <ToastContainer/>

    </div>
        
   
   
  
    )
  }

export default Scomp;