
import { Form, Button } from "react-bootstrap";

import React, { Component ,useCallback ,useState,useContext, useEffect} from 'react';
import { NavLink,useNavigate,Link} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from "../ContextProvider/Context";
import "./Home1Add.css";
import DatePicker from 'react-date-picker';
import Header from './Header';
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





  const onViewDataClick = useCallback(() => {
   
  }, []);

 
  const [fuel, setFuel] = useState("Crudeoil");
 
  
  
const [inpval, setInpval] = useState({
     
      code:"",
      facility:"",
      quantity:"",
      // type:type,
      // weight:weight,
      // fuel:fuel
     
  });

    const setValss = (e) => {
      setFuel(e.target.value)}


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
          
            


                let date=(dte.toLocaleDateString());

                const email = logindata.email;
           

          const data = await fetch("/process", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  
                code,facility,quantity,fuel,date,email,person
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
             
                
             });}else {
              toast.error("Fail!", {
                position: "top-center"
            });
              }

          
  }}
  const hellos =async(e)=>{
const map=he
    const datap = await fetch("/getstation", {
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
    navigate("/subprocessdash");
  }, [navigate]);

useEffect(() => {
 
  // hellos();
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
        <p className="mobile">{`Fugitive `}</p>
        <p className="combustion">Emissions</p>
      </a>
      </Link>
      
      <Link to="/subprocessemission">
      <a className="process-emissions">
        <p className="mobile2">{`Process `}</p>
        <p className="combustion2">Emissions</p>
      </a></Link>
      <div className="di">0.00</div>
      <div className="tonnes-of">Tonnes of CO2eq</div>
      <p className="this-section-captures-any-emis">
      Process Emissions are the emissions that enter the atmosphere as a result of venting or flaring activities. 
      Theses emissions are captured by collected details on the type of gas emitted and the quantity emitted. 
      </p>
      <div className="activity-captured-fuel-use">
        Activity Captured : Gas vent/Flare
      </div>
      <div className="home1-add-child7" />
 
      <div className="container1">
      <select value={fuel} onChange={setValss} className="hello" >
        <option value="co2">Co2</option>
        <option value="ch4">Ch4</option>
        <option value="Nox">Nox</option>
        <option value="Sox">Sox</option>
        

        
        
       
      </select>
      {/* <p>{`You selected ${type}`}</p> */}
    </div>

          
      <div className="home1-add-child8" />
      <div>  <DatePicker onChange={onChange} value={dte} className="dae" /></div>
    
      <Form.Group className="frame">
        <Form.Control  type="number"
              placeholder="quantity"
              name="quantity"
              onChange={setVal}
              value={inpval.quantity}
              id="quantity" />
      </Form.Group>
   
     
 
      <h2 className="stationary-combustion1">Process Emissions</h2>

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
      <h4 className="fuel">Type of gas</h4>
     
      <Button className="rectangle-buttonl" variant="primary" onClick={addCompanydata}>
        Add Data
      </Button>
      <a className="view-datas" onClick={onAddDataClick}>
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