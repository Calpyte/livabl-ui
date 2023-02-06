
import React, { Component ,useCallback ,useState,useContext, useEffect} from 'react';
import axios from 'axios';
import { NavLink,useNavigate,Link} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Form, Button } from "react-bootstrap";
import { LoginContext } from "../ContextProvider/Context";
import "./Home1Add.css";
import DatePicker from 'react-date-picker';
import Header from './Header';
const Fugitive = () =>{
    const [dte, onChange] = useState(new Date());
    const [usrs, setTodoss] = useState([]);
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
    const { logindata } = useContext(LoginContext);
    
    let he="hello"
    let person="hello"
    const asuser = async()=>{he=(logindata.ValidUserOne.map);
        person=(logindata.ValidUserOne.fname)}
  
  asuser();
 
  const getInitialStates = () => {
    const type = "chiller";
    return type;
  };

  //const [type, setType] = useState(getInitialState);
  const [refrigeration, setrefrigeration] = useState(getInitialStates);
  const [refrigerant, setrefrigerant] = useState("R401A");
 
  
  
const [inpval, setInpval] = useState({
     
      code:"",
      facility:"",
      i:"",
      f:"",
      g:"",
      h:"",
      j:""
      // type:type,
      // literdistance:literdistance,
      // refrigerant:refrigerant
     
  });
  const setVals = (e) => {
    setrefrigerant(e.target.value)}
    const setValss = (e) => {
        setrefrigeration(e.target.value)}
      // const setValsss = (e) => {
      //   setType(e.target.value);}

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

      const { code,facility,i,g,f,h,j} = inpval;

         
         if (code === "") {
          toast.warning("code is required!", {
              position: "top-center"
          });}
          else if (facility === "") {
            toast.warning("Facility is required!", {
                position: "top-center"
            });
            }else{
//calculation

const R401A=	16
const R401B=	14
const R401C=	19
const R402A=	2100
const R402B=	1330
const R403B=	3444
const R404A=	3922
const R406A=	0
const R407A=	2107
const R407B=	2804
const R407C=	1774
const R407D=	1627
const R407E=	1552
const R408A=	2301
const R409A=	0
const R410A=	2088
const R410B=	2229
const R411A=	14
const R411B=	4
const R413A=	2053
const R414A=	0
const R414B=	0
const R417A=	2346
const R422A=	3143
const R422D=	2729
const R423A=	2280
const R424A=	2440
const R426A=	1508
const R428A=	3607
const R434A=	3245
const R500	=32
const R502	=0
const R504	=325
const R507	=3985
const R508A=	13214
const R508B=	13396 



function R401As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R401A)
    return result
     
}function R401Bs(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R401B)
    return result
     
}function R401Cs(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R401C)
    return result
     
}function R402As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R402A)
    return result
     
}function R402Bs(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R402B)
    return result
     
}function R403Bs(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R403B)
    return result
     
}function R404As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R404A)
    return result
     
}function R406As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R406A)
    return result
     
}function R407As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R407A)
    return result
     
}function R407Bs(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R407B)
    return result
     
}function R407Cs(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R407C)
    return result
     
}function R407Ds(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R407D)
    return result
     
}function R407Es(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R407E)
    return result
     
}function R408As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R408A)
    return result
     
}function R409As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R409A)
    return result
     
}function R410As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R410A)
    return result
     
}function R411As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R411A)
    return result
     
}function R410Bs(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R410B)
    return result
     
}function R411Bs(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R411B)
    return result
     
}function R413As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R413A)
    return result
     
}function R414As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R414A)
    return result
     
}function R414Bs(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R414B)
    return result
     
}function R422As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R422A)
    return result
     
}function R417As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R417A)
    return result
     
}function R422Ds(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R422D)
    return result
     
}function R423As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R423A)
    return result
     
}function R424As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R424A)
    return result
     
}function R426As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R426A)
    return result
     
}function R428As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R428A)
    return result
     
}function R434As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R434A)
    return result
     
}function R500s(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R500)
    return result
     
}function R502s(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R502)
    return result
     
}function R504s(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R504)
    return result
     
}function R507s(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R507)
    return result
     
}function R508As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R508A)
    return result
     
}function R508Bs(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R508B)
    return result
     
}



//in km




      
                



//calf,calg,calh,cali,calj

let val=0
  if(refrigerant==="R401A"){
 val =R401As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)}
 else if(refrigerant==="R401B"){
    val =R401Bs(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R401C"){
    val =R401Cs(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)

} else if(refrigerant==="R402A"){
    val =R402As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R402B"){
    val =R402Bs(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R403B"){
    val =R403Bs(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R404A"){
    val =R404As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R406A"){
    val =R406As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R407A"){
    val =R407As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R407B"){
    val =R407Bs(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R407C"){
    val =R407Cs(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R407D"){
    val =R407Ds(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R407E"){
    val =R407Es(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R408A"){
    val =R408As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R409A"){
    val =R409As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R410A"){
    val =R410As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R410B"){
    val =R410Bs(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R411A"){
    val =R411As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R411B"){
    val =R411Bs(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R413A"){
    val =R413As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R414A"){
    val =R414As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R414B"){
    val =R414Bs(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R417A"){
    val =R417As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R422A"){
    val =R422As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R422D"){
    val =R422Ds(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R423A"){
    val =R423As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R424A"){
    val =R424As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R426A"){
    val =R426As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R428A"){
    val =R428As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R434A"){
    val =R434As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R500"){
    val =R500s(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R502"){
    val =R502s(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R504"){
    val =R504s(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R507"){
    val =R507s(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R508A"){
    val =R508As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R508B"){
    val =R508Bs(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} 
 






const email=he;

let date=(dte.toLocaleDateString());


let co2=val
          const data = await fetch("/fug", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  
                code,facility,i,f,g,h,j,refrigerant,refrigeration,co2,date,email,person
              })
          });

          const res = await data.json();
          
          setCount((c) => c + 1)


          if (res.status === 201) {
              toast.success(" Data saved 😃!", {
                  position: "top-center"
              });
              setInpval({ ...inpval,  
                
                code:"",
                facility:"",
                i:"",
                f:"",
                g:"",
                h:"",
                j:""
                
             });}else {
              toast.error("Fail!", {
                position: "top-center"
            });
              }

          
  }}
  
  const hellos =async(e)=>{
    const map=he
        const datap = await fetch("/fugdash", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
               map
          })
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
        navigate("/subfugdash");
      }, [navigate]);
      const onAddDataClicks = useCallback(() => {
        navigate("/subfugitivetwo");
      }, [navigate]);
    
    useEffect(() => {
     
      hellos();
    setCalculation(() => count * 2);
    }, [count]);
    

    return(
        <>
        <div className="home1-hello">
         
        <div className='rectangle-1'/>
      <div className='rectangle-2'/>
      <div className='rectangle-3'/>
      <div className='rectangle-4'/>
         <img className="home1-add-child" alt="" src="../vector-4.svg" />
         <img className="home1-add-item" alt="" src="../vector-4.svg" />
         <div className="home1-add-inner" />
         <img
           className="whatsapp-image-2022-12-22-at-9"
           alt=""
           src="../whatsapp-image-20221222-at-923-3@2x.png"
         />
<div className="ellipse-icon">  <Header/></div>
         <img className="home1-add-child1" alt="" src="../ellipse-56.svg" />
         <img className="vector-icon" alt="" src="../vector-1.svg" />
         <img className="home1-add-child2" alt="" src="../vector-2.svg" />
         <div className="rectangle-div" />
         <div className="rectangle-div" />
         <div className="home1-add-child4" />
         <div className="home1-add-child5" />
         <div className="home1-add-child6" />
         <Link to="/subdash">
         <a className="scope-12">Scope 1</a>
        </Link>
        <Link to="/subsco">
        <a className="scope-2">Scope 2</a>
        </Link>
        <Link to="/subcapital">
        <a className="scope-3">Scope 3</a>
        </Link>
         <section className="rectangle-section" />
         <Link to="/subdash">
      <a className="stationary-c">Stationary Combustion</a>
        </Link>

        <Link to="/submobilecombustion">


        <a className="mobile-combustion">
        <p className="mobile">{`Mobile `}</p>
        <p className="combustion">Combustion</p>
      </a>
        </Link>

        <Link to="/subfug">
      <a className="fugitive-emissions">
        <p className="mobile2">{`Fugitive `}</p>
        <p className="combustion2">Emissions</p>
      </a>
      </Link>
      
      <Link to="/subprocessemission">
      <a className="process-emissions">
        <p className="mobile">{`Process `}</p>
        <p className="combustion">Emissions</p>
      </a></Link>
         <div className="di">{Math.round(element)}</div>
         <div className="tonnes-of">Tonnes of CO2eq</div>
         <p className="this-section-captures-any-emis">
         Fugitive Emissions are the emissions that happen with the operation of HVAC systems and handling of refrigerants. This
          section captures the refrigerant use in in the organization and calculates its corresponding emissions resulting from this activity. 
         </p>
         <div className="activity-captured-fuel-use">
           Activity Captured : Refregerant Use
         </div>
         <div className="home1-add-child7" />
    
        
         <Form.Group className="cotainer1">
           <Form.Control  type="number"
              placeholder="refrigerant used to charge new equipment"
              name="f"
              onChange={setVal}
              value={inpval.f}
              id="f" />
         </Form.Group>
       
       <div className="containpro">
           
        <select value={refrigeration} onChange={setValss} className="hello">
        <option value="chiller">Chiller</option>
        <option value="foodrefregration">Foodrefregration</option>
        <option value="freezers">Freezers</option>
        <option value="coldstorage">coldstorage</option>
        <option value="Industrialprocessrefrigeration">Industrial process refrigeration</option>
        <option value="HouseholdrefrigerationG">Household refrigeration</option>
        <option value="Refrigeratedtransport">Refrigerated transport</option>
        <option value="Domesticairconditioning">Domestic air conditioning</option>
        <option value="HVACs">HVACs</option>
        <option value="airconditioningsystems">Commercial unitary air conditioning systems</option>
        <option value="Mobileairconditioning">Mobile air conditioning</option>
        
</select>
   
           
           
          
         
         {/* <p>{`You selected ${type}`}</p> */}
       </div>
   
       <div>  <DatePicker onChange={onChange} value={dte} className="datee" /></div>
        
  
         <Form.Group className="wrape">
           <Form.Control    type="number"
              placeholder=" refrigerant capacity of theTotal equipment"
              name="g"
              onChange={setVal}
              value={inpval.g}
              id="g" />
         </Form.Group>
         {/* <p>{`You selected ${type}`}</p> */}
    
        
        
       
         <Form.Group className="frame">
           <Form.Control   type="number"
              placeholder="Total refrigerant capacity of retiring equipment"
              name="i"
              onChange={setVal}
              value={inpval.i}
              id="i" />
         </Form.Group>
    
         <Form.Group className="wrap0">
           <Form.Control  type="number"
              placeholder="Refrigerant recovered"
              name="j"
              onChange={setVal}
              value={inpval.j}
              id="j" />
         </Form.Group>
      
       <div  className="wrapper">
       <select value={refrigerant} onChange={setVals} className="hello"  >
               <option value="R401A">R-401A</option>
               <option value="R401B">R-401B</option>
               <option value="R401C">R-401C</option>
               <option value="R402A">R-402A</option>
               <option value="R402B">R-402B</option>
               <option value="R403B">R-403B</option>
               <option value="R404A">R-404A</option>
               <option value="R406A">R-406A</option>
               <option value="R407A">R-407A</option>
               <option value="R407B">R-407B</option>
               <option value="R407C">R-407C</option>
               <option value="R407D">R-407D</option>
               <option value="R407E">R-407E</option>
               <option value="R408A">R-408A</option>
               <option value="R409A">R-409A</option>
               <option value="R410A">R-410A</option>
               <option value="R410B">R-410B</option>
               <option value="R411A">R-411A</option>
               <option value="R411B">R-411B</option>
               <option value="R413A">R-413A</option>
               <option value="R414A">R-414A</option>
               <option value="R414B">R-414B</option>
               <option value="R417A">R-417A</option>
               <option value="R422A">R-422A</option>
               <option value="R422D">R-422D</option>
               <option value="R423A">R-423A</option>
               <option value="R424A">R-424A</option>
               <option value="R426A">R-426A</option>
               <option value="R428A">R-428A</option>
               <option value="R434A">R-434A</option>
               <option value="R500">R-500</option>
               <option value="R502">R-502</option>
               <option value="R504">R-504</option>
               <option value="R507">R-507</option>
               <option value="R508A">R-508A</option>
               <option value="R508B">R-508B</option>
                </select>
 
  
       </div>
        
      
    
         <h2 className="stationary-combustion1">Fugitive Emissions</h2>
         <h4 className="emission-s">Type of Refregerant Used:</h4>
         <Form.Group className="wrapper2">
           <Form.Control  type="text"
              placeholder="Facility code"
              name="code"
              onChange={setVal}
              value={inpval.code}
              id="code" />
         </Form.Group>
   
         <Form.Group className="subcat">
           <Form.Control   type="number"
              placeholder="Amount of Refrigerant bought"
              name="h"
              onChange={setVal}
              value={inpval.h}
              id="h" />
         </Form.Group>
   
   
         <Form.Group className="wrapper3">
           <Form.Control  type="text"
              placeholder="Facility Name"
              name="facility"
              onChange={setVal}
              value={inpval.facility}
              id="pass" />
         </Form.Group>
         <h4 className="facility">{`Facility `}</h4>
         <h4 className="fuel">Amount of refrigerant used to charge new equipment:</h4>
         <h4 className="fue">Type of Refregration Used</h4>
         <h4 className="fu">Refrigerant capacity of theTotal equipment</h4>
         <h4 className="dat">Amount of Refregerant Recovered from Retring Equipment</h4>
         <Button className="rectangle-buttons" variant="primary" onClick={addCompanydata}>
           Add Data
         </Button>
         <a className="view-dat" onClick={onAddDataClick}>
           View Data
         </a>
         <a className="view-daty" onClick={onAddDataClicks}>
           Fugitive Gases
         </a>
         <img
           className="factory-pollution-city-air-and-icon"
           alt=""
           src="../117785factorypollutioncityairandwater-1@2x.png"
         />
         <a className="measure">Measure</a>
         <a className="reduce">Reduce</a>
         <a className="offset">Offset</a>
         <Link to="/subMain">
      <a className="dashboard">Dashboard</a>        </Link>
    <ToastContainer/>
       </div>

</>
  
    )}

export default Fugitive;