
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
import environment from '../../Environment';

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
  const [inpval, setInpval] = useState({
     
    name:"",
    time:"",
    franchiseperiod:"",product:"",disposal:"",asset:"",period:"",franchisename:"",investment:"",location:""
   
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

    const {name,product,time,disposal,asset,period,franchisename,franchiseperiod,investment,location} = inpval;

       // name,user,currency, country, pointofcontact,productservices,id,employee,website,activity,address
       if (name === "") {
        toast.warning("name is required!", {
            position: "top-center"
        });}
        else if (time === "") {
          toast.warning("password is required!", {
              position: "top-center"
          });}else if (product === "") {
            toast.warning("password is required!", {
                position: "top-center"
            });
          }else if (asset === "") {
              toast.warning("password is required!", {
                  position: "top-center"
              });
            }else if (period === "") {
              toast.warning("password is required!", {
                  position: "top-center"
              });
            }else if (franchiseperiod === "") {
              toast.warning("password is required!", {
                  position: "top-center"
              });
            }else if (investment === "") {
              toast.warning("password is required!", {
                  position: "top-center"
              });
            }else if (location === "") {
              toast.warning("password is required!", {
                  position: "top-center"
              });
            }else{

      const email = logindata.email;
      let date=Date.parse(dte);

        const data = await fetch(environment.baseUrl + "/franchise/save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                
              name,product,time,disposal,asset,period,franchisename,franchiseperiod,investment,location,email,date,person
            })
        });

        const res = await data.json();
        


        if (data.status === 201) {
            toast.success(" Data saved 😃!", {
                position: "top-center"
            });
            setInpval({ ...inpval,  
              
              name:"",
              time:"",
              franchiseperiod:"",product:"",disposal:"",asset:"",period:"",franchisename:"",investment:"",location:""
           });}else {
            toast.error(" name already there!", {
              position: "top-center"
          });
            }

        
}}
  const hellos =async(e)=>{
    const map=he
      //   const datap = await fetch("/franchisedash", {
      //     method: "POST",
      //     headers: {
      //         "Content-Type": "application/json"
      //     },
      //     body: JSON.stringify({
      //          map
      //     })
      // });
      const datap = await fetch(environment.baseUrl + "/franchise/get-all")
      const res = await datap.json();
      
      setTodoss(res);
      }
      let element = 0 ;
    
      for (let index = 0; index < usrs.length; index++) {
    
    
         element += (usrs[index].co2)
        
      }

    
      const navigate = useNavigate();
      const onAddDataClick = useCallback(() => {
        navigate("/franchdash");
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
         /><div className="ellipse-icon">  <Header/></div>
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
        <a className="scope-32">Scope 3</a>
        </Link>
         <section className="rectangle-section" />
         <Link to="/capital">
         <section className="rectangle-section" />
         <a className="stationary-c"> Capital Goods</a>
</Link>
         <Link to="/franchise">
         <a className="mobile-combustion">
           <p className="mobile2">{`Franchise `}</p>
           <p className="combustion1"></p>
         </a>
         </Link>
         <Link to="/upstream">
         <a className="fugitive-emissions">
           <p className="mobile">{`Upstream `}</p>
           <p className="combustion"></p>
         </a>
         </Link>    
              <Link to="/downstream">

         <a className="process-emissions">
           <p className="mobile">{`Downstream `}</p>
    
         </a></Link>
         <div className="di">{Math.round(element)}</div>
         <div className="tonnes-of">Tonnes of CO2eq</div>
         <p className="this-section-captures-any-emis">
         This
          section captures the Franchise in in the organization and calculates its 
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
       
      
          
          <label className='lab'>Name of the product:</label>
            <div className="but">   <input className='butw'
              type="text"
              placeholder="enter the user name"
              name="name"
              onChange={setVal}
              value={inpval.name}
              id="name"
            /></div>
             <label className='lab'>times of usage:</label>
            <div className="but">   <input className='butw'
              type="text"
              placeholder="set the password"
              name="time"
              onChange={setVal}
              value={inpval.time}
              id="time"
            /></div>
            <label className='lab'>Name of the product:</label>
            <div className="but">   <input className='butw'
              type="text"
              placeholder="product"
              name="product"
              onChange={setVal}
              value={inpval.product}
              id="product"
            /></div>
            <label className='lab'>Method of disposal:</label>
            <div className="but">   <input className='butw'
              type="text"
              placeholder="disposal"
              name="disposal"
              onChange={setVal}
              value={inpval.disposal}
              id="disposal"
            /></div>
            <label className='lab'>Type of leased asset:</label>
            <div className="but">   <input className='butw'
              type="text"
              placeholder="asset"
              name="asset"
              onChange={setVal}
              value={inpval.asset}
              id="asset"
            /></div>
            <label className='lab'>Lease period:</label>
            <div className="but">   <input className='butw'
              type="text"
              placeholder="period"
              name="period"
              onChange={setVal}
              value={inpval.period}
              id="period"
            /></div>
            <label className='lab'>Name of the franchise:</label>
            <div className="but">   <input className='butw'
              type="text"
              placeholder="franchisename"
              name="franchisename"
              onChange={setVal}
              value={inpval.franchisename}
              id="franchisename"
            /></div>
            <label className='lab'>Location Period of franchise:</label>
            <div className="but">   <input className='butw'
              type="text"
              placeholder="franchiseperiod"
              name="franchiseperiod"
              onChange={setVal}
              value={inpval.franchiseperiod}
              id="franchiseperiod"
            /></div>
             <label className='lab'>Type of investment:</label>
            <div className="but">   <input className='butw'
              type="text"
              placeholder="investment"
              name="investment"
              onChange={setVal}
              value={inpval.investment}
              id="eperiod"
            /></div>
            <label className='lab'>Location:</label>
            <div className="but">   <input className='butw'
              type="text"
              placeholder="location/no"
              name="location"
              onChange={setVal}
              value={inpval.location}
              id="fra"
            /></div>
          
             
            
  
          
       </form>
      </div>
</div>
    
        
        
     
     
        
      
    
         <h2  className="stationary-combustion1">Franchise</h2 >

       
   
         <Button className="butf" variant="primary" onClick={addCompanydata}>
           Add Data
         </Button>
         <a className="butviewf "onClick={onAddDataClick}>
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

export default Fugitive;