
import { Form, Button } from "react-bootstrap";
import React, { Component ,useCallback ,useState,useContext, useEffect} from 'react';
import axios from 'axios';
import { NavLink,useNavigate,Link} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { LoginContext } from "../ContextProvider/Context";
import "./Home1Add.css";
import DatePicker from 'react-date-picker';
import Header from './Header';
const Mcomp = () =>{
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
    const type = "liter";
    return type;
  };

  //const [type, setType] = useState(getInitialState);
  const [literdistance, setliterdistance] = useState(getInitialStates);
  const [fuel, setFuel] = useState("null");
  const [mode, setMode] = useState("null");
  const [air, setair] = useState("null");
 
  const [rail, setrail] = useState("null");
  const [road, setroad] = useState("null");
  const [water, setwater] = useState("null");
  const [nonroad, setnonroad] = useState("null");
  const [air2, setair2] = useState("null");



 
  
  

  const setValrail = (e) => {
    setrail(e.target.value)}
    const setValair2 = (e) => {
        setair2(e.target.value)}
        const setValroad = (e) => {
            setroad(e.target.value)}
            const setValnonroad = (e) => {
                setnonroad(e.target.value)}
                const setValwater = (e) => {
                    setwater(e.target.value)}
  
const [inpval, setInpval] = useState({
     
      code:"",
      facility:"",
      quantity:"",
      subcat:"",
      category:"",
      weight:""
      // type:type,
      // literdistance:literdistance,
      // fuel:fuel
     
  });
  const setVals = (e) => {
    setliterdistance(e.target.value)}
    const setValss = (e) => {
      setFuel(e.target.value)}
      const setValsss = (e) => {
        setMode(e.target.value)}
        const setV = (e) => {
            setair(e.target.value)}
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

      const { code,facility,quantity ,category,subcat,weight} = inpval;

         
         if (code === "") {
          toast.warning("code is required!", {
              position: "top-center"
          });}
          else if (facility === "") {
            toast.warning("Facility is required!", {
                position: "top-center"
            });
            }else if (quantity === "") {
              toast.warning("quantity is required!", {
                  position: "top-center"
              });}else{
//calculation

const JetFuel	       =  2.49
const AviationGasoline=	2.2
const GasolinePetrol	=2.27
const OnRoadDieselFuel=	2.67
const ResidualFuelOil =	2.93
const LPG=	1.61
const CNG=	0.053
const LNG=	1.17
const Ethanol	=1.46
const Biodiesel	=2.49
const EthanolGasoline=	0.34
const BiodieselDiesel=	2.14

const BusEthanol	=0.69
const BusDiesel	=1.69
const BusGasoline	=1.06
const CarPetrol	=0.23
const CarDiesel	=0.27
const LightgoodsvehicleCNG 	=0.22
const LightgoodsvehicleLPG 	=0.21
const LightgoodsvehicleEthanol	=0.32
const LightgoodsvehiclePetrol	=0.32
const LightgoodsvehicleDiesel	=0.38
const HeavygoodsvehiclePetrol	=0.6
const HeavygoodsvehicleDiesel	=0.71
const HeavygoodsvehicleLPG 	=0.42
const HeavygoodsvehicleEthanol	=0.39

const AirDomestic	=1.96
const AirShortHaul	=1.47
const AirLongHaul	=0.61
const Rail	=0.02
const Road	=0.3267
const Shipping	=0.0528

function jetFuels(calc){
    var result=(calc*(JetFuel))
    return result
     
}
function AviationGasolines(calc){
    var result=(calc*(AviationGasoline))
    return result
     
}function GasolinePetrols(calc){
    var result=(calc*(GasolinePetrol))
    return result
     
}function OnRoadDieselFuels(calc){
    var result=(calc*(OnRoadDieselFuel))
    return result
     
}function ResidualFuelOils(calc){
    var result=(calc*(ResidualFuelOil))
    return result
     
}function LPGs(calc){
    var result=(calc*(LPG))
    return result
     
}function CNGs(calc){
    var result=(calc*(CNG))
    return result
     
}function LNGs(calc){
    var result=(calc*(LNG))
    return result
     
}function Ethanols(calc){
    var result=(calc*(Ethanol))
    return result
     
}function Biodiesels(calc){
    var result=(calc*(Biodiesel))
    return result
     
}function EthanolGasolines(calc){
    var result=(calc*(EthanolGasoline))
    return result
     
}
function BiodieselDiesels(calc){
    var result=(calc*(BiodieselDiesel))
    return result
     
}
//distance
function BusEthanols(calc){
    var result=(calc*(BusEthanol))
    return result
     
}
function BusDiesels(calc){
    var result=(calc*(BusDiesel))
    return result
     
}function BusGasolines(calc){
    var result=(calc*(BusGasoline))
    return result
     
}function CarPetrols(calc){
    var result=(calc*(CarPetrol))
    return result
     
}function CarDiesels(calc){
    var result=(calc*(CarDiesel))
    return result
     
}function LightgoodsvehicleCNGs(calc){
    var result=(calc*(LightgoodsvehicleCNG))
    return result
     
}function LightgoodsvehicleLPGs(calc){
    var result=(calc*(LightgoodsvehicleLPG))
    return result
     
}function LightgoodsvehicleEthanols(calc){
    var result=(calc*(LightgoodsvehicleEthanol))
    return result
     
}function LightgoodsvehiclePetrols(calc){
    var result=(calc*(LightgoodsvehiclePetrol))
    return result
     
}function LightgoodsvehicleDiesels(calc){
    var result=(calc*(LightgoodsvehicleDiesel))
    return result
     
}function HeavygoodsvehiclePetrols(calc){
    var result=(calc*(HeavygoodsvehiclePetrol))
    return result
     
}
function HeavygoodsvehicleDiesels(calc){
    var result=(calc*(HeavygoodsvehicleDiesel))
    return result
     
}
function HeavygoodsvehicleLPGs(calc){
    var result=(calc*(HeavygoodsvehicleLPG))
    return result
     
}function HeavygoodsvehicleEthanols(calc){
    var result=(calc*(HeavygoodsvehicleEthanol))
    return result
     
}


//freight
function AirDomestics(calc,cal){
    var result=((calc*AirDomestic)*cal)
    return result
     
}
function Shippings(calc,cal){
    var result=((calc*Shipping)*cal)
    return result
     
}function Roads(calc,cal){
    var result=((calc*Road)*cal)
    return result
     
}function Rails(calc,cal){
    var result=((calc*Rail)*cal)
    return result
     
}function AirLongHauls(calc,cal){
    var result=((calc*AirLongHaul)*cal)
    return result
     
}function AirShortHauls(calc,cal){
    var result=((calc*AirShortHaul)*cal)
    return result
     
}




      
                
let val="jbhkb"




if(literdistance==="liter"){
if(fuel==="BiodieselDiesel"){
    val =BiodieselDiesels(inpval.quantity)}
    else if(fuel==="EthanolGasoline"){
     val =EthanolGasolines(inpval.quantity)
   }else if(fuel==="null"){
    val =0
  }
   else if(fuel==="Biodiesel"){
     val =Biodiesels(inpval.quantity)
   }else if(fuel==="Ethanol"){
     val =Ethanols(inpval.quantity)
   }else if(fuel==="LNG"){
     val =LNGs(inpval.quantity)
   }else if(fuel==="CNG"){
     val =CNGs(inpval.quantity)
   }else if(fuel==="LPG"){
     val =LPGs(inpval.quantity)
   }else if(fuel==="ResidualFuelOil"){
     val =ResidualFuelOils(inpval.quantity)
   }else if(fuel==="OnRoadDieselFuel"){
     val =OnRoadDieselFuels(inpval.quantity)
   }else if(fuel==="GasolinePetrol"){
     val =GasolinePetrols(inpval.quantity)
   }else if(fuel==="AviationGasoline"){
     val =AviationGasolines(inpval.quantity)
   }else if(fuel==="JetFuel"){
     val =jetFuels(inpval.quantity)
   }else{
     console.log("errr");
   }
   
}else if(literdistance==="km"){
    if(mode==="HeavygoodsvehicleEthanol"){
        val =HeavygoodsvehicleEthanols(inpval.quantity)}
        else if(mode==="HeavygoodsvehicleLPG"){
         val =HeavygoodsvehicleLPGs(inpval.quantity)
       } else if(mode==="null"){
        val =0
      }
       else if(mode==="HeavygoodsvehicleDiesel"){
         val =HeavygoodsvehicleDiesels(inpval.quantity)
       }else if(mode==="LightgoodsvehicleDiesel"){
         val =LightgoodsvehicleDiesels(inpval.quantity)
       }else if(mode==="LightgoodsvehiclePetrol"){
         val =LightgoodsvehiclePetrols(inpval.quantity)
       }else if(mode==="LightgoodsvehicleEthanol"){
         val =LightgoodsvehicleEthanols(inpval.quantity)
       }else if(mode==="LightgoodsvehicleLPG"){
         val =LightgoodsvehicleLPGs(inpval.quantity)
       }else if(mode==="LightgoodsvehicleCNG"){
         val =LightgoodsvehicleCNGs(inpval.quantity)
       }else if(mode==="CarDiesel"){
         val =CarDiesels(inpval.quantity)
       }else if(mode==="CarPetrol"){
         val =CarPetrols(inpval.quantity)
       }else if(mode==="BusGasoline"){
         val =BusGasolines(inpval.quantity)
       }else if(mode==="BusEthanol"){
         val =BusEthanols(inpval.quantity)
       }else if(mode==="HeavygoodsvehiclePetrol"){
         val =HeavygoodsvehiclePetrols(inpval.quantity)
       }
       else if(mode==="BusDiesel"){
         val =BusDiesels(inpval.quantity)
       }else{
         console.log("errr");
       }
}
    else{


if(air==="AirShortHaul"){
    val =AirShortHauls(inpval.quantity,inpval.weight)}
    else if(air==="Rail"){
     val =Rails(inpval.quantity,inpval.weight)
   } else if(air==="null"){
    val =0;
  }
   else if(air==="Road"){
     val =Roads(inpval.quantity,inpval.weight)
   }else if(air==="Shipping"){
     val =Shippings(inpval.quantity,inpval.weight)
   }else if(air==="AirDomestic"){
     val =AirDomestics(inpval.quantity,inpval.weight)
   }else if(air==="AirLongHaul"){
     val =AirLongHauls(inpval.quantity,inpval.weight)
   }else{
     console.log("errr");
   }
   

    }





let co2=val
           
            
let date=(dte.toLocaleDateString());

const email = logindata.email;





    

          const data = await fetch("/mcomp", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  
                code,facility,quantity,literdistance,fuel,co2,category,subcat,mode,date,email,air,weight,person,road,nonroad,rail,water,air2
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
              quantity:"",
              subcat:"",
               category:"",
               weight:""
                // type:"",
                // literdistance:"",
                // fuel:""
                
             });}else {
              toast.error("Fail!", {
                position: "top-center"
            });
              }

          
  }}
  
  const hellos =async(e)=>{
    const map=he
        const datap = await fetch("/getmobile", {
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
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    
      const navigate = useNavigate();
      const onAddDataClick = useCallback(() => {
        navigate("/submobiledash");
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
        <p className="mobile2">{`Mobile `}</p>
        <p className="combustion2">Combustion</p>
      </a>
        </Link>

        <Link to="/subfug">
      <a className="fugitive-emissions">
        <p className="mobile">{`Fugitive `}</p>
        <p className="combustion">Emissions</p>
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
      This section captures any emissions made from mobile combustion
       sources that are either owned or operated by the reporting organisation.  Mobile combustion sources include any cars, 
       forklifts, trucks etc that is used for business operations. 
      Emissions from these mobile sources are captured by collecting the fuel consumption of these mobile vehicles. 
      </p>
      <div className="activity-captured-fuel-use">
        Activity Captured : Fuel Use
      </div>
      <div className="home1-add-child7" />
 
      <div className="container1">
      <select value={fuel} onChange={setValss} className="hello" >
      <option value="null">null</option>
        <option value="JetFuel">JetFuel</option>
        <option value="AviationGasoline">AviationGasoline</option>
        <option value="OnRoadDieselFuel">On-RoadDieselFuel</option>
        <option value="GasolinePetrol">GasolinePetrol</option>
        <option value="ResidualFuelOil">ResidualFuelOil</option>
        <option value="LPG">LPG</option>
        <option value="LNG">LNG</option>
        <option value="CNG">CNG</option>
        <option value="Ethanol">Ethanol</option>
        <option value="Biodiesel">Biodiesel</option>
        <option value="EthanolGasoline">EthanolGasoline</option>
        <option value="BiodieselDiesel">BiodieselDiesel</option>
        

        
        
       
      </select>
      {/* <p>{`You selected ${type}`}</p> */}
    </div>
  <div>  <DatePicker onChange={onChange} value={dte} className="datee" /></div>
    <div className="containpro">
        
    <select value={mode} onChange={setValsss} className="hello">
    <option value="null">null</option>

        <option value="HeavygoodsvehicleEthanol">HeavygoodsvehicleEthanol</option>
        <option value="HeavygoodsvehicleLPG">HeavygoodsvehicleLPG</option>
        <option value="HeavygoodsvehicleDiesel">HeavygoodsvehicleDiesel</option>
        <option value="LightgoodsvehicleDiesel">LightgoodsvehicleDiesel</option>
        <option value="LightgoodsvehiclePetrol">LightgoodsvehiclePetrol</option>
        <option value="LightgoodsvehicleEthanol">LightgoodsvehicleEthanol</option>
        <option value="LightgoodsvehicleLPG">LightgoodsvehicleLPG</option>
        <option value="LightgoodsvehicleCNG">LightgoodsvehicleCNG</option>
        <option value="CarDiesel">CarDiesel</option>
        <option value="CarPetrol">CarPetrol</option>
        <option value="BusGasoline">BusGasoline</option>
        <option value="BusEthanol">BusEthanol</option>
        <option value="BusDiesel">BusDiesel</option>
        
       
      </select>

        
        
       
      
      {/* <p>{`You selected ${type}`}</p> */}
    </div>


          
             <Form.Group className="wrapper">
        <Form.Control  type="text"
              placeholder="category"
              name="category"
              onChange={setVal}
              value={inpval.category}
              id="category" />
      </Form.Group>
      <Form.Group className="wrape">
        <Form.Control   type="number"
              placeholder="weight"
              name="weight"
              onChange={setVal}
              value={inpval.weight}
              id="weight" />
      </Form.Group>
      {/* <p>{`You selected ${type}`}</p> */}
 
     
     
    
      <Form.Group className="frame">
        <Form.Control  type="number"
              placeholder="quantity/distance"
              name="quantity"
              onChange={setVal}
              value={inpval.quantity}
              id="quantity" />
      </Form.Group>
      <div  className="wrapper90">
      <select value={literdistance} onChange={setVals} className="hello3">
        <option value="liter">liter</option>
        <option value="km">kilometer</option>
        <option value="freight">Freight combustion</option>
        
        </select>
      {/* <p>{`You selected ${type}`}</p> */}
    </div>
    <div  className="wrap90">
    <select value={air} onChange={setV} className="hello3">
    <option value="null">Null</option>

        <option value="AirLongHaul">AirLongHaul</option>
        <option value="Shipping">Shipping</option>
        <option value="Road">Road</option>
        <option value="Rail">Rail</option>
        <option value="AirShortHaul">AirShortHaul</option>
        <option value="AirLongHaul">AirLongHaul</option>
        <option value="AirDomestic">AirDomestic</option>
        
        
       
      </select>
    </div>
     
   <div className="space">.</div>
 
      <h4 className="stationary-combustion1">Mobile Combustion</h4>
      <h4 className="emission-s">Category</h4>
      <Form.Group className="wrapper2">
        <Form.Control  type="text"
              placeholder="Facility code"
              name="code"
              onChange={setVal}
              value={inpval.code}
              id="code" />
      </Form.Group>

      <Form.Group className="subcat">
        <Form.Control  type="text"
              placeholder="subcategory"
              name="subcat"
              onChange={setVal}
              value={inpval.subcat}
              id="subcat" />
      </Form.Group>


      <Form.Group className="wrapper3">
        <Form.Control  type="text"
              placeholder="facility name"
              name="facility"
              onChange={setVal}
              value={inpval.facility}
              id="pass" />
      </Form.Group>
     
           

             <div className="t1"> 
             <h4 >Road:</h4>

      <select value={road} onChange={setValroad} className="hello3"> 
      <option value="null">Null</option>
        <option value="twowheeler">Two wheeler</option>
        <option value="truck">Truck</option>
        <option value="car">Car</option>
        <option value="bus">Bus</option>
        <option value="van">Van</option>
        <option value="auto">Auto</option>
        <option value="combinationvechicle">Combination vechicle</option>
        
       
      </select>
      {/* <p>{`You selected ${type}`}</p> */}
    </div>
    

<div className="t2"><h4>Non Road:</h4>
<select value={nonroad} onChange={setValnonroad} className="hello3">
<option value="null">Null</option>

<option value="Constructionequipment">Construction equipment</option>
<option value="Agriculturalequipment">Agricultural equipment</option>
<option value="Forklift">Forklift</option>
<option value="other">other</option>



</select>
{/* <p>{`You selected ${type}`}</p> */}
</div>

<div className="t3"> <h4>Water born:</h4>
<select value={water} onChange={setValwater} className="hello3">
<option value="null">Null</option>

<option value="ship">Ships</option>
<option value="boat">boat</option>



</select>
{/* <p>{`You selected ${type}`}</p> */}
</div> 


<div className="t4"><h4>Rail:</h4>
<select value={rail} onChange={setValrail} className="hello3">
<option value="null">Null</option>

<option value="freight">freight</option>
<option value="commute">commute</option>



</select>
{/* <p>{`You selected ${type}`}</p> */}
</div>


<div className="t5"><h4>Air:</h4>
<select value={air2} onChange={setValair2} className="hello3">
<option value="null">Null</option>

<option value="commercial">freight</option>
<option value="Executivejets">Executive jets</option>



</select>
{/* <p>{`You selected ${type}`}</p> */}
</div>
          
      <h4 className="facility">{`Facility `}</h4>
      <h4 className="fuel">Fuel</h4>
      <h4 className="fue">Type of Transport</h4>
      <h4 className="fu">Weight</h4>
      <h4 className="dat">Input Type</h4>
      <Button className="rectangle-buttons" variant="primary" onClick={addCompanydata}>
        Add Data
      </Button>
      <a className="view-dat" onClick={onAddDataClick}>
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

export default Mcomp;