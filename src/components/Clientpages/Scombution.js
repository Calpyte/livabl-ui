import Header from './Header';
import { Form, Button } from "react-bootstrap";

import React, { Component ,useCallback ,useState,useContext, useEffect} from 'react';
import { NavLink,useNavigate,Link} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from "../ContextProvider/Context";
import "./Home1Add.css";
import DatePicker from 'react-date-picker';
import environment from '../../Environment';

const Scomp = () =>{
  const [dte, onChange] = useState(new Date());
  const [usrs, setTodoss] = useState([]);
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  const { logindata } = useContext(LoginContext);
  const cdata = {
    "Crudeoil": {
      "co2": 3100.59,
      "ch4": 0.423,
      "no2": 0.02538
    },
    "Browncoalbriquettes": {
      "co2": 3100.59,
      "ch4": 0.423,
      "no2": 0.02538
    },
    "NaturalGasLiquids": {
      "co2": 2837.64,
      "ch4": 0.442,
      "no2": 0.02652
    },
    "Orimulsion": {
      "co2": 2117.5,
      "ch4": 0.275,
      "no2": 0.0165
    },
    "Motorgasoline": {
      "co2": 3069.99,
      "ch4": 0.443,
      "no2": 0.02658
    },
    "Jetgasoline": {
      "co2": 3101,
      "ch4": 0.443,
      "no2": 0.02658
    },
    "Jetkerosene": {
      "co2": 3153.15,
      "ch4": 0.443,
      "no2": 0.02658
    },
    "Otherkerosene": {
      "co2": 3149.22,
      "ch4": 0.438,
      "no2": 0.02628
    },
    "Gas/Dieseloil": {
      "co2": 3186.3,
      "ch4": 0.43,
      "no2": 0.0258
    },
    "Shaleoil": {
      "co2": 2792.73,
      "ch4": 0.381,
      "no2": 0.02286
    },
    "Residualfueloil": {
      "co2": 3126.96,
      "ch4": 0.404,
      "no2": 0.02424
    },
    "PetroleumGases": {
      "co2": 2984.63,
      "ch4": 0.2365,
      "no2": 0.00473
    },
    "Aviationgasoline": {
      "co2": 3101,
      "ch4": 0.423,
      "no2": 0.02538
    },
    "Ethane": {
      "co2": 2858.24,
      "ch4": 0.232,
      "no2": 0.00464
    },
    "Naphtha": {
      "co2": 3261.85,
      "ch4": 0.445,
      "no2": 0.0267
    },
    "Bitumen": {
      "co2": 3244.14,
      "ch4": 0.402,
      "no2": 0.02412
    },
    "Lubricants": {
      "co2": 2946.66,
      "ch4": 0.402,
      "no2": 0.02412
    },
    "Petroleumcoke": {
      "co2": 3168.75,
      "ch4": 0.325,
      "no2": 0.0195
    },
    "Refineryfeedstocks": {
      "co2": 3151.9,
      "ch4": 0.43,
      "no2": 0.0258
    },
    "Refinerygas": {
      "co2": 2851.2,
      "ch4": 0.2475,
      "no2": 0.00495
    },
    "Paraffinwaxes": {
      "co2": 2946.66,
      "ch4": 0.402,
      "no2": 0.02412
    },
    "WhiteSpiritSBP": {
      "co2": 2946.66,
      "ch4": 0.402,
      "no2": 0.02412
    },
    "Otherpetroleumproducts": {
      "co2": 2946.66,
      "ch4": 0.402,
      "no2": 0.02412
    },
    "Anthracite": {
      "co2": 2624.61,
      "ch4": 0.267,
      "no2": 0.04005
    },
    "Cookingcoal": {
      "co2": 2667.72,
      "ch4": 0.282,
      "no2": 0.0423
    },
    "Otherbituminouscoal": {
      "co2": 2440.68,
      "ch4": 0.258,
      "no2": 0.0387
    },
    "Subbituminouscoal": {
      "co2": 1816.29,
      "ch4": 0.189,
      "no2": 0.02835
    },
    "Lignite": {
      "co2": 1201.9,
      "ch4": 0.119,
      "no2": 0.01785
    },
    "Oilshaleandtarsands": {
      "co2": 952.3,
      "ch4": 0.089,
      "no2": 0.01335
    },
    "coalbriquettes": {
      "co2": 2018.25,
      "ch4": 0.207,
      "no2": 0.03105
    },
    "Patentfuel": {
      "co2": 2018.25,
      "ch4": 0.207,
      "no2": 0.03105
    },
    "Cokeovencoke": {
      "co2": 3017.4,
      "ch4": 0.282,
      "no2": 0.0423
    },
    "Lignitecoke": {
      "co2": 3017.4,
      "ch4": 0.282,
      "no2": 0.0423
    },
    "Gascoke": {
      "co2": 3017.4,
      "ch4": 0.141,
      "no2": 0.00282
    },
    "Coaltar": {
      "co2": 2259.6,
      "ch4": 0.28,
      "no2": 0.042
    },
    "Gasworksgas": {
      "co2": 1718.28,
      "ch4": 0.1935,
      "no2": 0.00387
    },
    "Cokeovengas": {
      "co2": 1718.28,
      "ch4": 0.1935,
      "no2": 0.00387
    },
    "Blastfurnacegas": {
      "co2": 642.2,
      "ch4": 0.01235,
      "no2": 0.000247
    },
    "Oxygensteelfurnacegas": {
      "co2": 1284.92,
      "ch4": 0.0353,
      "no2": 0.000706
    },
    "Naturalgas": {
      "co2": 2692.8,
      "ch4": 0.24,
      "no2": 0.0048
    },
    "Municipal": {
      "co2": 917,
      "ch4": 3,
      "no2": 0.04
    },
    "Wasteoils": {
      "co2": 2946.66,
      "ch4": 12.06,
      "no2": 0.1608
    },
    "WoodorWoodwaste": {
      "co2": 1747.2,
      "ch4": 4.68,
      "no2": 0.0624
    },
    "Sulphitelyes": {
      "co2": 1124.54,
      "ch4": 0.0354,
      "no2": 0.023
    },
    "Otherprimarysolidbiomassfuels": {
      "co2": 1160,
      "ch4": 3.48,
      "no2": 0.0464
    },
    "Charcoal": {
      "co2": 3304,
      "ch4": 5.9,
      "no2": 0.0295
    },
    "Biogasoline": {
      "co2": 1911.6,
      "ch4": 0.27,
      "no2": 0.0162
    },
    "Biodiesels": {
      "co2": 1911.6,
      "ch4": 0.27,
      "no2": 0.0162
    },
    "Otherliquidbiofuels": {
      "co2": 2181.04,
      "ch4": 0.274,
      "no2": 0.01644
    },
    "Landfillgas": {
      "co2": 2751.84,
      "ch4": 0.252,
      "no2": 0.00504
    },
    "Sludgegas": {
      "co2": 2751.84,
      "ch4": 0.252,
      "no2": 0.00504
    },
    "Otherbiogas": {
      "co2": 2751.84,
      "ch4": 0.252,
      "no2": 0.00504
    },
    "Municipalwaste": {
      "co2": 1160,
      "ch4": 3.48,
      "no2": 0.0464
    },
    "Peat": {
      "co2": 1034.56,
      "ch4": 0.0976,
      "no2": 0.013664
    },
    "Industrialwastes": {
      "co2": "NA",
      "ch4": "NA",
      "no2": "NA"
    }
  }
  
  let he="hello"
  let person="hello"
const asuser = async()=>{he=(logindata.ValidUserOne.map);
  person=(logindata.ValidUserOne.fname)}

asuser();

  const onViewDataClick = useCallback(() => {
  }, []);
  const getInitialState = () => {
    const type = "Boilers";
    return type;
  };
  const getInitialStates = () => {
    const type = "kg";
    return type;
  };

  const [type, setType] = useState(getInitialState);
  const [weight, setWeight] = useState(getInitialStates);
  const [fuel, setFuel] = useState("Crudeoil");
 
  
  
const [inpval, setInpval] = useState({
     
      code:"",
      facility:"",
      quantity:"",
      // type:type,
      // weight:weight,
      // fuel:fuel
     
  });
  const setVals = (e) => {
    setWeight(e.target.value)}
    const setValss = (e) => {
      setFuel(e.target.value)}
      const setValsss = (e) => {
        setType(e.target.value);}

  const setVal = (e) => {
    
    
      const {name, value} = e.target;

      setInpval(() => {
          return {
              ...inpval,
              [name]: value,
            
          }
      })
  };

  function getValue(calc,chemicaldata,type){
    if(type === "kg") return [calc*(chemicaldata["co2"]/1000),calc*(chemicaldata["ch4"]/1000),calc*(chemicaldata["no2"]/1000)];
    else return [calc*(chemicaldata["co2"]),calc*(chemicaldata["ch4"]),calc*(chemicaldata["no2"])];
  }  

const addCompanydata = async (e) => {
      e.preventDefault();
      const { code,facility,quantity } = inpval;
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
  let val=["null","null","null"];
  val = getValue(inpval.quantity,cdata[fuel],weight);
  let co2=val[0];
  let ch4=val[1];
  let no2=val[2];
  const email=logindata.email;
  let date=Date.parse(dte);
  let token = localStorage.getItem('token');
  const data = await fetch(environment.baseUrl + "stationary/save", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "Authorization": token,
              },
              body: JSON.stringify({
                code,facility,quantity,type,weight,fuel,co2,ch4,no2,date,email,person 
              })
          });
          const res = await data.json();

          // console.log(weight)
          setCount((c) => c + 1)
          if (data.status === 201) {
              toast.success(" Data saved 😃!", {
                  position: "top-center"
              });
              setInpval({ ...inpval,  
                code:"",
                facility:"",
                quantity:"",
                // type:"",
                // weight:"",
                // fuel:""
             });}
             else {
              toast.error("Fail!", {
                position: "top-center"
              });
             }     
  }}

  const hellos =async(e)=>{
  const datap = await fetch("/stationary/by-user?email=" + logindata.email, {
      method: "GET"
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
    navigate("/homeview");
  }, [navigate]);

useEffect(() => {
hellos();
setCalculation(() => count * 2);
}, [count]);


    return(
        
        
        
<div className="home1-hello">

<div className='rectangle-1'/>
      <div className='rectangle-2'/>
      <div className='rectangle-3'/>
      <div className='rectangle-4'/>

              {/* <img className="home1-vew-child3" alt="" src="../rectangle-52@2x.png" /> */}
      {/* <img className="home1-vew-child4" alt="" src="../rectangle-52@2x.png" />
      <img className="home1-vew-child5" alt="" src="../rectangle-52@2x.png" />
      <img className="home1-vew-child" alt="" src="../rectangle-52@2x.png" /> */}

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
      <a className="stationary-c2">Stationary Combustion</a>
        </Link>

        <Link to="/mobilecombustion">


        <a className="mobile-combustion">
          
        <p className="mobile">{`Mobile `}</p>
        <p className="combustion">Combustion</p>
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
        This section captures any emissions made from stationary combustion
        sources that are either owned or operated by the reporting organization.
        Combustion processes involve the use of fuels. Hence Fuel consumption
        data along with fuel characteristics is captured as measure of
        emissions.
      </p>
   
      <div className="activity-captured-fuel-use">
        Activity Captured : Fuel Use
      </div>
      <div className="home1-add-child7" />
 
      <div className="container1">
      <select value={fuel} onChange={setValss} className="hello" >
        <option value="Crudeoil">Crude oil</option>
        <option value="Orimulsion">Orimulsion</option>
        <option value="NaturalGasLiquids">Natural Gas Liquids</option>
        <option value="Motorgasoline">Motorgasoline</option>
        <option value="Aviationgasoline">Aviationgasoline</option>
        <option value="Jetgasoline">Jetgasoline</option>
        <option value="Jetkerosene">Jetkerosene</option>
        <option value="Otherkerosene">Other kerosene</option>
        <option value="Shaleoil">Shale oil</option>
        <option value="Gas/Dieseloil">Gas/Diesel oil</option>
        <option value="Residualfueloil">Residual fuel oil</option>
        <option value="Ethane">Ethane</option>
        <option value="Refineryfeedstocks">Refinery feedstocks</option>
        <option value="Refinerygas">Refinery gas</option>
        <option value="Paraffinwaxes">Paraffin waxes</option>
        <option value="WhiteSpiritSBP">White Spirit/SBP</option>
        <option value="Otherpetroleumproducts">Other petroleum products</option>
        <option value="Anthracite">Anthracite</option>
        <option value="Cookingcoal">Cooking coal</option>
        <option value="Otherbituminouscoal">Other bituminous coal</option>
        <option value="Subbituminouscoal">Sub bituminous coal</option>
        <option value="Lignite">Lignite</option>
        <option value="Oilshaleandtarsands">Oilshaleandtarsands</option>
        <option value="Browncoalbriquettes">Browncoalbriquettes</option>
        <option value="Patentfuel">Patentfuel</option>
        <option value="Cokeovencoke">Cokeovencoke</option>
        <option value="Lignitecoke">Lignitecoke</option>
        <option value="Gascoke">Gascoke</option>
        <option value="Coaltar">Coaltar</option>
        <option value="Gasworksgas">Gasworksgas</option>
        <option value="Cokeovengas">Cokeovengas</option>
        <option value="Blastfurnacegas">Blastfurnacegas</option>
        <option value="Oxygensteelfurnacegas">Oxygensteelfurnacegas</option>
        <option value="Naturalgas">Naturalgas</option>
        <option value="Industrialwastes">Industrialwastes</option>
        <option value="Wasteoils">Wasteoils</option>
        <option value="WoodorWoodwaste">WoodorWoodwaste</option>
        <option value="Naphtha">Naphtha</option>
        <option value="Bitumen">Bitumen</option>
        <option value="Lubricants">Lubricants</option>
        <option value="Petroleumcoke">Petroleumcoke</option>
        <option value="Sulphitelyes">Sulphite lyes (Black liqour)</option>
        <option value="Otherprimarysolidbiomassfuels">Other primary solid biomass fuels</option>
        <option value="Charcoal">Charcoal</option>
        <option value="Biogasoline">Biogasoline</option>
        <option value="Biodiesels">Biodiesels</option>
        <option value="Otherliquidbiofuels">Otherliquidbiofuels</option>
        <option value="Landfillgas">Landfillgas</option>
        <option value="Sludgegas">Sludgegas</option>
        <option value="Otherbiogas">Otherbiogas</option>
        <option value="Peat">Peat</option>
      </select>
      {/* <p>{`You selected ${type}`}</p> */}
    </div>
    <div>     <DatePicker onChange={onChange} value={dte} className="datee" /></div>
             <div className="wrapper" >
      
      <select value={type} onChange={setValsss} className="hello1" >
        <option value="Boilers">Boilers</option>
        <option value="Furnace">Furnace</option>
        <option value="Heaters">Heaters</option>
        <option value="Kilns">Kilns</option>
        <option value="OvensFlares">OvensFlares</option>
        <option value="Thermaloxiders">Thermaloxiders</option>
         <option value="Dryers">Dryers</option>
        <option value="otherequipment">OtherEquipment</option>
       
      </select>
      {/* <p>{`You selected ${type}`}</p> */}
    </div>
      <div className="home1-add-child8" />
   
      <Form.Group className="frame">
        <Form.Control  type="number"
              placeholder="quantity"
              name="quantity"
              onChange={setVal}
              value={inpval.quantity}
              id="quantity" />
      </Form.Group>
      <div  className="wrapper90">
      <select value={weight} onChange={setVals} className="hello3">
        <option value="kg">Kilogram</option>
        <option value="tone">Ton</option>
        </select>
      {/* <p>{`You selected ${type}`}</p> */}
    </div>
     
   
 
      <h2 className="stationary-combustion1">Stationary Combustion</h2>
      <h4 className="emission-s">Emission Source</h4>
      <Form.Group className="wrapper2">
        <Form.Control type="text" placeholder="Facility Code"  name="code"
              onChange={setVal}
              value={inpval.code}
              id="code" />
      </Form.Group>
      <Form.Group className="wrapper3">
        <Form.Control type="text" placeholder="Facility Name"  name="facility"
              onChange={setVal}
              value={inpval.facility}
              id="pass" />
      </Form.Group>
      <h4 className="facility">{`Facility `}</h4>
      <h4 className="fuel">Fuel</h4>
      <h4 className="dat">SI Unit</h4>
      <Button className="rectangle-buttons" variant="primary" onClick={addCompanydata}>
        Add Data
      </Button>
      <a className="view-data" onClick={onAddDataClick}>
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
      <Link to="/Main">
      <Link to="/Main">
      <a className="dashboard">Dashboard</a>        </Link>        </Link>       </Link>
    
 <ToastContainer/>
    </div>
   
  
    )}

export default Scomp;