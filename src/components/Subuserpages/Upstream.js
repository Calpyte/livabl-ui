import "../CompanyForm.scss";
import { Form, Button } from "react-bootstrap";
import Header from './Header';
import React, { Component ,useCallback ,useState,useContext, useEffect} from 'react';
import { NavLink,useNavigate,Link} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from "../ContextProvider/Context";
import "./Home1Add.css";
import DatePicker from 'react-date-picker';

const Scomp = () =>{
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
     
    distance:"",material:"",quantity:"",code:"",byername:"",byerlocation:"",facility:"",facility2:"",code2:"",
    waste:"",dispose:"",quantity2:"",facility3:"",
    code3:"",employeecode:"",employeename:"",from:"",to:"",employeecode2:"",employeename2:"",distance2:"",
    facility4:"",code4:"",from2:"",to2:"",distance3:"",period:"",asset:""
     
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
   

      const {  distance,material,quantity,code,byername,byerlocation,facility,facility2,code2,waste,dispose,quantity2,facility3,
        code3,employeecode,employeename,from,to,employeecode2,employeename2,distance2
        ,facility4,code4,from2,to2,distance3,period,asset} = inpval;

         
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

          const data = await fetch("/upstream", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  
                distance,material,quantity,code,byername,byerlocation,facility,transport,vehicle,facility2,code2,waste,dispose,quantity2,facility3,
                code3,employeecode,employeename,from,to,employeecode2,employeename2,distance2,transport2,
                vehicle2,facility4,code4,from2,to2,distance3,transport3,period,asset,vehicle3,person,email,date
              })
          });

          const res = await data.json();
          

          setCount((c) => c + 1)


          if (res.status === 201) {
              toast.success(" Data saved 😃!", {
                  position: "top-center"
              });
              setInpval({ ...inpval,  
                
                distance:"",material:"",quantity:"",code:"",byername:"",byerlocation:"",facility:"",facility2:"",code2:"",
                waste:"",dispose:"",quantity2:"",facility3:"",
                code3:"",employeecode:"",employeename:"",from:"",to:"",employeecode2:"",employeename2:"",distance2:"",
                facility4:"",code4:"",from2:"",to2:"",distance3:"",period:"",asset:""

                
             });}else {
              toast.error("Fail!", {
                position: "top-center"
            });
              }

          
  }}
  const hellos =async(e)=>{
const map=he
    const datap = await fetch("/upstream/get-all", {
      method: "GET",
      // headers: {
      //     "Content-Type": "application/json"
      // },
      // body: JSON.stringify({
      //      map
      // })
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
    navigate("/subupdash");
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
         <Link to="/franchise">
         <a className="mobile-combustion">
           <p className="mobile1">{`Franchise `}</p>
           <p className="combustion1"></p>
         </a>
         </Link>
         <Link to="/upstream">
         <a className="fugitive-emissions">
           <p className="mobile2">{`Upstream `}</p>
           <p className="combustion"></p>
         </a>
         </Link>    
              <Link to="/downstream">

         <a className="process-emissions">
           <p className="mobile">{`Downstream `}</p>
    
         </a></Link>
      <div className="di">0.00</div>
      <div className="tonnes-of">Tonnes of CO2eq</div>
      <p className="this-section-captures-any-emis">
      This
          section captures the Upstream in in the organization and calculates its 
          corresponding emissions resulting from this activity. 
      </p>
      <div className="activity-captured-fuel-use">
        Activity Captured : Gas vent/Flare
      </div>
      <div className="home1-add-child7" />
 
     

          
      <div className="home1-add-child8" />
      <div>  <DatePicker onChange={onChange} value={dte} className="butdate" /></div>
    
     
   <div className="flexible">
   <div className="add-company-name">
        <form>
       
          
         
          
          <label className="lab">Facility code:</label>
            <div className="but"><input className="butw"
              type="text"
              placeholder="Facility code"
              name="code"
              onChange={setVal}
              value={inpval.code}
              id="code"
            /></div>
            <label className="lab">byername:</label>
            <div className="but"><input className="butw"
              type="text"
              placeholder="byername"
              name="byername"
              onChange={setVal}
              value={inpval.byername}
              id="byername"
            /></div>
            <label className="lab">buyerlocation:</label>
            
            <div className="but"><input className="butw"
              type="text"
              placeholder="byerlocation"
              name="byerlocation"
              onChange={setVal}
              value={inpval.byerlocation}
              id="byerlocation"
            /></div>
             <label className="lab">Facility Name:</label>
            <div className="but"><input className="butw"
              type="text"
              placeholder="facility"
              name="facility"
              onChange={setVal}
              value={inpval.facility}
              id="pass"
            /></div>
            <label className="lab">select mode of transport:</label>
             <div className="but">
      <select className="butg" value={transport} onChange={setValss}>
        <option value="road">Road</option>
        <option value="rail">Rail</option>
        <option value="air">Air</option>
        <option value="water">Water</option>
       
        
       
      </select>
    
    </div><label className="lab">select type of vehicle:</label>
             <div className="but">
      <select className="butg" value={vehicle} onChange={setVals}>
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
            <label className="lab">distance travelled in KM:</label>
            <div className="but"><input className="butw"
              type="number"
              placeholder="distance"
              name="distance"
              onChange={setVal}
              value={inpval.distance}
              id="distance"
            /></div>
     <label className="lab">material:</label>
            <div className="but"><input className="butw"
              type="text"
              placeholder="material"
              name="material"
              onChange={setVal}
              value={inpval.material}
              id="material"
            /></div>
             <label className="lab">quantity:</label>
            <div className="but"><input className="butw"
              type="number"
              placeholder="quantity"
              name="quantity"
              onChange={setVal}
              value={inpval.quantity}
              id="quantity"
            /></div>
          
          <h1 className="hc">waste generated</h1>
          <label className="lab">Facility Name:</label>
            <div className="but"><input className="butw"
              type="text"
              placeholder="facility2"
              name="facility2"
              onChange={setVal}
              value={inpval.facility2}
              id="pass2"
            /> </div>
            <label className="lab">Facility code:</label>
            <div className="but"><input className="butw"
              type="text"
              placeholder="Facility code"
              name="code2"
              onChange={setVal}
              value={inpval.code2}
              id="code2"
            /></div>
             <label className="lab">type of waste generated:</label>
            <div className="but"><input className="butw"
              type="text"
              placeholder="waste"
              name="waste"
              onChange={setVal}
              value={inpval.waste}
              id="waste"
            />   </div>
            <label className="lab">method of dispose:</label>
            <div className="but"><input className="butw"
              type="string"
              placeholder="dispose"
              name="dispose"
              onChange={setVal}
              value={inpval.dispose}
              id="dispose"
            /></div>
            <label className="lab">quantity:</label>
            <div className="but"><input className="butw"
              type="number"
              placeholder="quantity"
              name="quantity2"
              onChange={setVal}
              value={inpval.quantity2}
              id="quantity2"
            /></div>
          <h1 className="hc">Business travel </h1>
          <label className="lab">Facility Name:</label>
            <div className="but"><input className="butw"
              type="text"
              placeholder="facility"
              name="facility3"
              onChange={setVal}
              value={inpval.facility3}
              id="pass3"
            /> </div>
            <label className="lab">Facility code:</label>
            <div className="but"><input className="butw"
              type="text"
              placeholder="Facility code"
              name="code3"
              onChange={setVal}
              value={inpval.code3}
              id="code3"
            /></div>
            <label className="lab">employee code:</label>
            <div className="but"><input className="butw"
              type="text"
              placeholder="employee code"
              name="employeecode"
              onChange={setVal}
              value={inpval.employeecode}
              id="employeecode"
            /></div>
            <label className="lab">name of the employee:</label>
            <div className="but"><input className="butw"
              type="text"
              placeholder="name of the employee"
              name="employeename"
              onChange={setVal}
              value={inpval.employeename}
              id="employeename"
            /></div>
            <label className="lab">From:</label>
            <div className="but"><input className="butw"
              type="text"
              placeholder="from"
              name="from"
              onChange={setVal}
              value={inpval.from}
              id="from"
            /></div>
            <label className="lab">To:</label>
            <div className="but"><input className="butw"
              type="text"
              placeholder="to"
              name="to"
              onChange={setVal}
              value={inpval.to}
              id="to"
            /></div>
             <label className="lab">distance travelled in KM:</label>
            <div className="but"><input className="butw"
              type="number"
              placeholder="distance"
              name="distance2"
              onChange={setVal}
              value={inpval.distance2}
              id="distance2"
            /></div>
            <label className="lab">select mode of transport:</label>
             <div className="but">
      <select className="butg" value={transport2} onChange={setValss2}>
        <option value="road">Road</option>
        <option value="rail">Rail</option>
        <option value="air">Air</option>
        <option value="water">Water</option>
       
        
       
      </select>
    
    </div><label className="lab">select type of vehicle:</label>
             <div className="but">
      <select className="butg" value={vehicle2} onChange={setVals2}>
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
    <h1 className="hc">Employee commuting</h1>
    <label className="lab">Facility Name:</label>
            <div className="but"><input className="butw"
              type="text"
              placeholder="facility"
              name="facility4"
              onChange={setVal}
              value={inpval.facility4}
              id="pass4"
            /> </div>
            <label className="lab">Facility code:</label>
            <div className="but"><input className="butw"
              type="text"
              placeholder="Facility code"
              name="code4"
              onChange={setVal}
              value={inpval.code4}
              id="code4"
            /></div>
            <label className="lab">employee code:</label>
            <div className="but"><input className="butw"
              type="text"
              placeholder="employee code"
              name="employeecode2"
              onChange={setVal}
              value={inpval.employeecode2}
              id="employeecode2"
            /></div>
                <label className="lab">name of the employee:</label>
            <div className="but"><input className="butw"
              type="text"
              placeholder="name of the employee"
              name="employeename2"
              onChange={setVal}
              value={inpval.employeename2}
              id="employeename2"
            /></div>
            <label className="lab">From:</label>
            <div className="but"><input className="butw"
              type="text"
              placeholder="from"
              name="from2"
              onChange={setVal}
              value={inpval.from2}
              id="from2"
            /></div>
            <label className="lab">To:</label>
            <div className="but"><input className="butw"
              type="text"
              placeholder="to"
              name="to2"
              onChange={setVal}
              value={inpval.to2}
              id="to2"
            /></div>
             <label className="lab">distance travelled in KM:</label>
            <div className="but"><input className="butw"
              type="number"
              placeholder="distance"
              name="distance3"
              onChange={setVal}
              value={inpval.distance3}
              id="distance3"
            /></div>
            <label className="lab">select mode of transport:</label>
             <div className="but">
      <select className="butg" value={transport3} onChange={setValss3}>
        <option value="road">Road</option>
        <option value="rail">Rail</option>
        <option value="air">Air</option>
        <option value="water">Water</option>
       
        
       
      </select>
    
    </div><label className="lab">select type of vehicle:</label>
             <div className="but">
      <select className="butg" value={vehicle3} onChange={setVals3}>
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

    <h1 className="hc">Leased assets </h1>

             <label className="lab">Type of leased asset:</label>
            <div className="but"><input className="butw"
              type="text"
              placeholder="type of leased asset"
              name="asset"
              onChange={setVal}
              value={inpval.asset}
              id="asset"
            /></div>
             <label className="lab">Lease period:</label>
            <div className="but"><input className="butw"
              type="number"
              placeholder="period"
              name="period"
              onChange={setVal}
              value={inpval.period}
              id="period"
            /></div>
            
  
        
        
          </form>
      </div>
   </div>
     
 
      <h2 className="stationary-combustion1">Upstream</h2>

      
      <Button className="butsc" variant="primary" onClick={addCompanydata}>
        Add Data
      </Button>
      <a className="butview" onClick={onAddDataClick}>
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

export default Scomp;