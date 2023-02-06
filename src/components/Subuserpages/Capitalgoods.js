
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
  const [transport2, settransport2] = useState("road");
  const [vehicle2, setvehicle2] = useState("bus");
  const [transport3, settransport3] = useState("road");
  const [vehicle3, setvehicle3] = useState("bus");
 
  
  
const [inpval, setInpval] = useState({
     
    energy:"",employeename:"",employeecode:"",code3:"",facility3:"",quantity2:"",code2:"",facility2:"",
    quantity:"",material:"",distance:"",facility:"",byerlocation:"",byername:"",code:""
     
  });

    const setValss = (e) => {
      settransport(e.target.value)}
      const setVals = (e) => {
        setvehicle(e.target.value)}
        const setValss2 = (e) => {
            settransport2(e.target.value)}
            const setVals2 = (e) => {
              setvehicle2(e.target.value)}
              const setValss3 = (e) => {
                settransport3(e.target.value)}
                const setVals3 = (e) => {
                  setvehicle3(e.target.value)}
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

      const {  energy,employeename,employeecode,code3,facility3,quantity2,code2,facility2,
        quantity,material,distance,facility,byerlocation,byername,code} = inpval;

         
         if (code === "") {
          toast.warning("code is required!", {
              position: "top-center"
          });}
          else if (facility === "") {
            toast.warning("Facility is required!", {
                position: "top-center"
            });
            }else if (distance === "") {
              toast.warning("distance is required!", {
                  position: "top-center"
              });}else{
//calculation
const email=he;
let date=(dte.toLocaleDateString());


          const data = await fetch("/cap", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  
                energy,employeename,employeecode,code3,facility3,vehicle2,transport2,quantity2,code2,facility2,
quantity,material,distance,vehicle,transport,facility,byerlocation,byername,code,date,person,email
              })
          });

          const res = await data.json();
          

          
          setCount((c) => c + 1)

          if (res.status === 201) {
              toast.success(" Data saved 😃!", {
                  position: "top-center"
              });
              setInpval({ ...inpval,  
                energy:"",employeename:"",employeecode:"",code3:"",facility3:"",quantity2:"",code2:"",facility2:"",
                quantity:"",material:"",distance:"",facility:"",byerlocation:"",byername:"",code:""

                
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
        navigate("/subcapdash");
      }, [navigate]);
      const onAddDataClickc = useCallback(() => {
        navigate("/subscope3good");
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
         <a className="stationary-c2"> Capital Goods</a>
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
           <p className="mobile">{`Downstream `}</p>
    
         </a></Link>
         <div className="di">{Math.round(element)}</div>
         <div className="tonnes-of">Tonnes of CO2eq</div>
         <p className="this-section-captures-any-emis">
        This
          section captures the Capital goods in in the organization and calculates its 
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
 <div className="but">            <input className='butw'
              type="text"
              placeholder="Facility code"
              name="code"
              onChange={setVal}
              value={inpval.code}
              id="code"
            /></div>
            <label className='lab'>buyername:</label>
 <div className="but">            <input className='butw'
              type="text"
              placeholder="byername"
              name="byername"
              onChange={setVal}
              value={inpval.byername}
              id="byername"
            /></div>
            <label className='lab'>buyerlocation:</label>
            
 <div className="but">            <input className='butw'
              type="text"
              placeholder="byerlocation"
              name="byerlocation"
              onChange={setVal}
              value={inpval.byerlocation}
              id="byerlocation"
            /></div>
             <label className='lab'>Facility Name:</label>
 <div className="but">            <input className='butw'
              type="text"
              placeholder="facility"
              name="facility"
              onChange={setVal}
              value={inpval.facility}
              id="pass"
            /></div>
            <label className='lab'>select mode of transport:</label>
                <div className="but">
      <select className='butg' value={transport} onChange={setValss}>
        <option value="road">Road</option>
        <option value="rail">Rail</option>
        <option value="air">Air</option>
        <option value="water">Water</option>
       
        
       
      </select>
    
    </div><label className='lab'>Select type of vehicle:</label>
                <div className="but">
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
            <label className='lab'>Distance travelled in KM:</label>
 <div className="but">            <input className='butw'
              type="number"
              placeholder="distance"
              name="distance"
              onChange={setVal}
              value={inpval.distance}
              id="distance"
            /></div>
     <label className='lab'>Material purchased:</label>
 <div className="but">            <input className='butw'
              type="text"
              placeholder="material"
              name="material"
              onChange={setVal}
              value={inpval.material}
              id="material"
            /></div>
             <label className='lab'>Quantity:</label>
 <div className="but">            <input className='butw'
              type="number"
              placeholder="quantity"
              name="quantity"
              onChange={setVal}
              value={inpval.quantity}
              id="quantity"
            /></div>
          
          <h1 className="hc">Vehicles</h1>
          <label className='lab'>Facility Name:</label>
 <div className="but">            <input className='butw'
              type="text"
              placeholder="facility2"
              name="facility2"
              onChange={setVal}
              value={inpval.facility2}
              id="pass2"
            /> </div>
            <label className='lab'>Facility code:</label>
 <div className="but">            <input className='butw'
              type="text"
              placeholder="Facility code"
              name="code2"
              onChange={setVal}
              value={inpval.code2}
              id="code2"
            /></div>
             
            <label className='lab'>Distance travelled in KM:</label>
 <div className="but">            <input className='butw'
              type="number"
              placeholder="distance travelled in KM:"
              name="quantity2"
              onChange={setVal}
              value={inpval.quantity2}
              id="quantity2"
            /></div>
                  <label className='lab'>Select mode of transport:</label>
                <div className="but">
      <select className='butg' value={transport2} onChange={setValss2}>
        <option value="road">Road</option>
        <option value="rail">Rail</option>
        <option value="air">Air</option>
        <option value="water">Water</option>
       
        
       
      </select>
    
    </div><label className='lab'>Select type of vehicle:</label>
                <div className="but">
      <select className='butg' value={vehicle2} onChange={setVals2}>
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
          <h1 className="hc">building as facilities</h1>
          <label className='lab'>Facility Name:</label>
 <div className="but">            <input className='butw'
              type="text"
              placeholder="facility"
              name="facility3"
              onChange={setVal}
              value={inpval.facility3}
              id="pass3"
            /> </div>
            <label className='lab'>Facility code:</label>
 <div className="but">            <input className='butw'
              type="text"
              placeholder="Facility code"
              name="code3"
              onChange={setVal}
              value={inpval.code3}
              id="code3"
            /></div>
            <label className='lab'>size of building:</label>
 <div className="but">            <input className='butw'
              type="text"
              placeholder="size of building:"
              name="employeecode"
              onChange={setVal}
              value={inpval.employeecode}
              id="employeecode"
            /></div>
            <label className='lab'>Location:</label>
 <div className="but">            <input className='butw'
              type="text"
              placeholder="Location"
              name="employeename"
              onChange={setVal}
              value={inpval.employeename}
              id="employeename"
            /></div>
            <label className='lab'>Energy consumption in kw:</label>
 <div className="but">            <input className='butw'
              type="text"
              placeholder="energy"
              name="energy"
              onChange={setVal}
              value={inpval.energy}
              id="energy"
            /></div>
  
            <div className="--my" align="center" >
      
            {/* <p>next page<NavLink to="/dash">Go</NavLink></p> */}
            </div>
         
         </form>
      </div></div>
    
        
        
     
     
        
      
    
         <h2 className="stationary-combustion1">Capital Goods</h2>

       
   
         <Button className="butscc" variant="primary" onClick={addCompanydata}>
           Add Data
         </Button>
         <a className="butvieww"onClick={onAddDataClick}>
           View Data
         </a>
         <a className="bucaptial"onClick={onAddDataClickc}>
         <h3>  Goods</h3>
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