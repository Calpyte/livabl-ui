
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
import environment from "../../Environment";

const Mcomp = () =>{
   const [dte, onChange] = useState(new Date());
    const [usrs, setTodoss] = useState([]);
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
    const { logindata } = useContext(LoginContext);
    const cdata ={
      "JetFuel":{
        "co2": 2.49
      },
      "AviationGasoline":{
        "co2": 2.2
      },
      "OnRoadDieselFuel":{
        "co2": 2.67
      },
      "GasolinePetrol":{
        "co2": 2.27
      },
      "ResidualFuelOil":{
        "co2": 2.93
      },
      "LPG":{
        "co2": 1.61
      },
      "LNG":{
        "co2": 1.17
      },
      "CNG":{
        "co2": 0.053
      },
      "Ethanol":{
        "co2": 1.46
      },
      "Biodiesel":{
        "co2": 2.49
      },
      "EthanolGasoline":{
        "co2": 0.34
      },
      "BiodieselDiesel":{
        "co2": 2.14
      },
      "HeavygoodsvehicleEthanol":{
        "co2": 0.93
      },
      "HeavygoodsvehicleDiesel":{
        "co2": 0.71
      },
      "HeavygoodsvehicleLPG":{
        "co2": 0.42
      },
      "HeavygoodsvehicleLPG":{
        "co2": 0.42
      },
      "LightgoodsvehicleDiesel":{
        "co2": 0.38
      },
      "LightgoodsvehiclePetrol":{
        "co2": 0.32
      },
      "LightgoodsvehicleEthanol":{
        "co2": 0.32
      },
      "LightgoodsvehicleCNG":{
        "co2": 0.22
      },
      "CarDiesel":{
        "co2": 0.27
      },
      "CarPetrol":{
        "co2": 0.23
      },
      "BusGasoline":{
        "co2": 1.06
      },
      "BusEthanol":{
        "co2": 0.69
      },
      "BusDiesel":{
        "co2": 1.69
      },
      "AirLongHaul":{
        "co2": 0.61
      },
      "Rail":{
        "co2": 0.02
      },
      "Shipping":{
        "co2": 0.0528
      },
      "Road":{
        "co2": 0.3267
      },
      "AirShortHaul":{
        "co2": 1.47
      },
      "AirDomestic":{
        "co2": 1.96
      },
    }



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

  function getValue(quantity,chemicaldata,type){
    if(type === "liter") return quantity*(chemicaldata);
    else if(type === "kg") return quantity*(chemicaldata);
    else if(type === "freight") return quantity*(chemicaldata);
  }  

  const addCompanydata = async (e) => {
      // e.preventDefault(quantity,);
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


let co2 = literdistance === "liter" ? quantity*(cdata[fuel])["co2"] : literdistance === "kg" ? quantity*(cdata[fuel])["co2"]: weight * quantity* (cdata[fuel])["co2"];

          
let date=Date.parse(dte); 
          const email = logindata.email;
          const data = await fetch(environment.baseUrl + "/mobile/save", {
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


          if (data.status === 201) {
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
        const datap = await fetch(environment.baseUrl + "/mobile/get-all", {
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
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    
      const navigate = useNavigate();
      const onAddDataClick = useCallback(() => {
        navigate("/mobiledash");
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
      <Link to="/dash">
         <a className="scope-12">Scope 1</a>
        </Link>
        <Link to="/sco">
        <a className="scope-2">Scope 2</a>
        </Link>
        <Link to="/capital">
        <a className="scope-3">Scope 3</a>
        </Link>
      <section className="rectangle-section" />
      <Link to="/dash">
      <a className="stationary-c">Stationary Combustion</a>
        </Link>

        <Link to="/mobilecombustion">


        <a className="mobile-combustion">
        <p className="mobile2">{`Mobile `}</p>
        <p className="combustion2">Combustion</p>
      </a>
        </Link>

        <Link to="/fug">
      <a className="fugitive-emissions">
        <p className="mobile">{`Fugitive `}</p>
        <p className="combustion">Emissions</p>
      </a>
      </Link>
      
      <Link to="/processemission">
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
      <Link to="/Main">
      <a className="dashboard">Dashboard</a>        </Link>
 <ToastContainer/>
    </div>
    </>
  
    )}

export default Mcomp;