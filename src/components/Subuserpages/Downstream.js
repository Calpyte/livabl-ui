
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
   
  const [transport, settransport] = useState("road");
  const [vehicle, setvehicle] = useState("bus");
 
  
  
const [inpval, setInpval] = useState({
     
    distance:"",material:"",quantity:"",code:"",byername:"",byerlocation:"",facility:"",code2:""
    ,byername2:"",byerlocation2:"",facility2:"",finalproduct:"",
quantity2:"",process:"",material2:"",productname:"",usagetime:"",
productname2:"",disposal:"",lease:"",namefranchise:"",location:""
,franchiseperiod:"",location2:"",investment:""
     
    
  });

    const setValss = (e) => {
      settransport(e.target.value)}
      const setVals = (e) => {
        setvehicle(e.target.value)}
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

      const {distance,material,quantity,code,byername,byerlocation,facility,code2,byername2,byerlocation2,facility2
        ,finalproduct,quantity2,process,material2,productname,usagetime,productname2,disposal,lease,namefranchise,location
        ,franchiseperiod,location2,investment} = inpval;

         
//          if (code === "") {
//           toast.warning("code is required!", {
//               position: "top-center"
//           });}
//           else if (facility === "") {
//             toast.warning("Facility is required!", {
//                 position: "top-center"
//             });
//             }else if (distance === "") {
//               toast.warning("distance is required!", {
//                   position: "top-center"
//               });}else{
// //calculation

const email=he;
let date=(dte.toLocaleDateString());

          const data = await fetch("/downstream", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  
                distance,material,quantity,code,byername,byerlocation,facility,transport,vehicle,code2,byername2,byerlocation2,facility2
,finalproduct,quantity2,process,material2,productname,usagetime,productname2,disposal,lease,namefranchise,location
,franchiseperiod,location2,person,date,email  ,investment     })
          });

          const res = await data.json();
          

          setCount((c) => c + 1)


          if (res.status === 201) {
              toast.success(" Data saved 😃!", {
                  position: "top-center"
              });
              setInpval({ ...inpval,  
                
                distance:"",material:"",quantity:"",code:"",byername:"",byerlocation:"",facility:"",code2:""
                ,byername2:"",byerlocation2:"",facility2:"",finalproduct:"",
            quantity2:"",process:"",material2:"",productname:"",usagetime:"",
            productname2:"",disposal:"",lease:"",namefranchise:"",location:""
            ,franchiseperiod:"",location2:"",investment:""
                
             });}else {
              toast.error("Fail!", {
                position: "top-center"
            });
              }

          
  }
  const hellos =async(e)=>{
    const map=he
        const datap = await fetch("/downdash", {
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
        navigate("/subdowndash");
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
         <a className="scope-1">Scope 1</a>
        </Link>
        <Link to="/subsco">
        <a className="scope-2">Scope 2</a>
        </Link>
        <Link to="/subcapital">
        <a className="scope-32">Scope 3</a>
        </Link>
         <section className="rectangle-section" />
         <Link to="/subcapital">
         <section className="rectangle-section" />
         <a className="stationary-c"> Capital Goods</a>
</Link>
         <Link to="/subfranchise">
         <a className="mobile-combustion">
           <p className="mobile1">{`Franchise `}</p>
           <p className="combustion1"></p>
         </a>
         </Link>
         <Link to="/subupstream">
         <a className="fugitive-emissions">
           <p className="mobile">{`Upstream `}</p>
           <p className="combustion"></p>
         </a>
         </Link>    
              <Link to="/subdownstream">

         <a className="process-emissions">
           <p className="mobile2">{`Downstream `}</p>
    
         </a></Link>
         <div className="di">{Math.round(element)}</div>
         <div className="tonnes-of">Tonnes of CO2eq</div>
         <p className="this-section-captures-any-emis">
         This
          section captures the Downstream in in the organization and calculates its 
          corresponding emissions resulting from this activity. 
         </p>
         <div className="activity-captured-fuel-use">
           Activity Captured : Capital Goods
         </div>
         <div className="home1-add-child7" />
    
        
       
       
      
   
       <div>  <DatePicker onChange={onChange} value={dte} className="butdate" /></div>
        
  <div  className="flexible">
  <div className="add-company-name">
        <form>
       

          
          <label className='lab'>Facility code:</label>
             <div className="but">   <input className='butw'
              type="text"
              placeholder="Facility code"
              name="code"
              onChange={setVal}
              value={inpval.code}
              id="code"
            /></div>
            <label className='lab'>buyername:</label>
             <div className="but">   <input className='butw'
              type="text"
              placeholder="byername"
              name="byername"
              onChange={setVal}
              value={inpval.byername}
              id="byername"
            /></div>
            <label className='lab'>buyer location:</label>
            
             <div className="but">   <input className='butw'
              type="text"
              placeholder="byerlocation"
              name="byerlocation"
              onChange={setVal}
              value={inpval.byerlocation}
              id="byerlocation"
            /></div>
             <label className='lab'>Facility Name:</label>
             <div className="but">   <input className='butw'
              type="text"
              placeholder="facility"
              name="facility"
              onChange={setVal}
              value={inpval.facility}
              id="pass"
            /></div>
           
            <label className='lab'>distance travelled in KM:</label>
             <div className="but">   <input className='butw'
              type="number"
              placeholder="distance"
              name="distance"
              onChange={setVal}
              value={inpval.distance}
              id="distance"
            /></div>
     <label className='lab'>material:</label>
             <div className="but">   <input className='butw'
              type="text"
              placeholder="material"
              name="material"
              onChange={setVal}
              value={inpval.material}
              id="material"
            /></div>
             <label className='lab'>quantity:</label>
             <div className="but">   <input className='butw'
              type="number"
              placeholder="quantity"
              name="quantity"
              onChange={setVal}
              value={inpval.quantity}
              id="quantity"
            /></div>
          <h1 className="hc" >processing of sold goods</h1 >


          <label className='lab'>Facility code:</label>
             <div className="but">   <input className='butw'
              type="text"
              placeholder="Facility code"
              name="code2"
              onChange={setVal}
              value={inpval.code2}
              id="code2"
            /></div>
            <label className='lab'>buyername:</label>
             <div className="but">   <input className='butw'
              type="text"
              placeholder="byername"
              name="byername2"
              onChange={setVal}
              value={inpval.byername2}
              id="byername2"
            /></div>
            <label className='lab'>buyer location:</label>
            
             <div className="but">   <input className='butw'
              type="text"
              placeholder="byerlocation"
              name="byerlocation2"
              onChange={setVal}
              value={inpval.byerlocation2}
              id="byerlocation2"
            /></div>
             <label className='lab'>Facility Name:</label>
             <div className="but">   <input className='butw'
              type="text"
              placeholder="facility"
              name="facility2"
              onChange={setVal}
              value={inpval.facility2}
              id="facility2"
            /></div>
         
          <label className='lab'>material:</label>
             <div className="but">   <input className='butw'
              type="text"
              placeholder="material"
              name="material2"
              onChange={setVal}
              value={inpval.material2}
              id="material2"
            /> </div>
             <label className='lab'>quantity:</label>
             <div className="but">   <input className='butw'
              type="number"
              placeholder="quantity"
              name="quantity2"
              onChange={setVal}
              value={inpval.quantity2}
              id="quantity2"
            /></div>
             <label className='lab'>processing performed:</label>
             <div className="but">   <input className='butw'
              type="text"
              placeholder="process"
              name="process"
              onChange={setVal}
              value={inpval.process}
              id="process"
            /></div>
            <label className='lab'>Final product:</label>
             <div className="but">   <input className='butw'
              type="text"
              placeholder="finalproduct"
              name="finalproduct"
              onChange={setVal}
              value={inpval.finalproduct}
              id="finalproduct"
            /></div>
             <label className='lab'>select mode of transport:</label>
             <div className='but'>
      <select className='butg' value={transport} onChange={setValss}>
        <option value="road">Road</option>
        <option value="rail">Rail</option>
        <option value="air">Air</option>
        <option value="water">Water</option>
       
        
       
      </select>
    
    </div>
    <label className='lab'>select type of vehicle:</label>
             <div className='but'>
      <select className='butg' value={vehicle} onChange={setVals}>
        <option value="twowheelerpetrol">two wheeler petrol</option>
        <option value="twowheelerelectric">two wheeler electric</option>
        <option value="carpetrol">car petrol</option>
        <option value="carelectric">car electric</option>
        <option value="truck">truck</option>
        <option value="bus">bus</option>
        <option value="van">van</option>
        <option value="auto">auto</option>
        <option value="airplane">airplane</option>
        <option value="train">train</option>
        <option value="ship">ship</option>
        <option value="boat">boat</option>
        <option value="combinevahicle">combinevahicle</option>
     
   
       
        
       
      </select>
    
    </div>
             <h1 className="hc" >Use of sold products </h1 >
             <label className='lab'>name of the product:</label>
             <div className="but">   <input className='butw'
              type="text"
              placeholder="product name"
              name="productname"
              onChange={setVal}
              value={inpval.productname}
              id="productname"
            /></div>
            <label className='lab'>Time of usage:</label>
             <div className="but">   <input className='butw'
              type="text"
              placeholder="usage time"
              name="usagetime"
              onChange={setVal}
              value={inpval.usagetime}
              id="usagetime"
            /></div>
            <h1 className="hc" >End of life treatment of sold products </h1 >
            <label className='lab'>name of the product:</label>
             <div className="but">   <input className='butw'
              type="text"
              placeholder="product name"
              name="productname2"
              onChange={setVal}
              value={inpval.productname2}
              id="productname2"
            /></div>
            <label className='lab'>Method of disposal:</label>
             <div className="but">   <input className='butw'
              type="text"
              placeholder="disposal method"
              name="disposal"
              onChange={setVal}
              value={inpval.disposal}
              id="disposal"
            /></div>
              <h1 className="hc" >Downstream leased assets </h1 >

<label className='lab'>lease period:</label>
             <div className="but">   <input className='butw'
              type="text"
              placeholder="lease period"
              name="lease"
              onChange={setVal}
              value={inpval.lease}
              id="lease"
            /></div>
            <h1 className="hc" >Franchises </h1 >
            <label className='lab'>name of franchise:</label>
             <div className="but">   <input className='butw'
              type="text"
              placeholder="name of franchise"
              name="namefranchise"
              onChange={setVal}
              value={inpval.namefranchise}
              id="namefranchise"
            /></div>
            <label className='lab'>Location:</label>
             <div className="but">   <input className='butw'
              type="text"
              placeholder="disposal method"
              name="location"
              onChange={setVal}
              value={inpval.location}
              id="location"
            /></div>
            <label className='lab'>Period of franchise:</label>
             <div className="but">   <input className='butw'
              type="text"
              placeholder="period of franchise"
              name="franchiseperiod"
              onChange={setVal}
              value={inpval.franchiseperiod}
              id="franchiseperiod"
            /></div>
            <h1 className="hc" >Investments</h1 >
            <label className='lab'>type of investment:</label>
             <div className="but">   <input className='butw'
              type="text"
              placeholder="disposal method"
              name="investment"
              onChange={setVal}
              value={inpval.investment}
              id="investment"
            /></div>
            <label className='lab'>Location:</label>
             <div className="but">   <input className='butw'
              type="text"
              placeholder="disposal method"
              name="location2"
              onChange={setVal}
              value={inpval.location2}
              id="location2"
            /></div>



            <div className="--my" align="center" >
        
            {/* <p>next page<NavLink to="/dash">Go</NavLink></p> */}
            </div>
            <ToastContainer />
              </form>
      </div></div>
    
        
        
     
     
        
      
    
         <h2  className="stationary-combustion1">Down Stream</h2 >

       
   
         <Button className="butd" variant="primary" onClick={addCompanydata}>
           Add Data
         </Button>
         <a className="butviewd "onClick={onAddDataClick}>
           View Data
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