
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
  const [inpval, setInpval] = useState({
     
    period2:"",vendorlocation2:"",vendorname2:"",name2:"",code2:"",quantity:"",purchased:"",vendorlocation:"",
    vendorname:"",namegoods:"",codegoods:"",serviceavailed:""
     
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

      const {period2,vendorlocation2,vendorname2,name2,code2,quantity,purchased,vendorlocation,vendorname,namegoods,serviceavailed,codegoods} = inpval;

         // name,user,currency, country, pointofcontact,productservices,id,employee,website,activity,address
         if (name2 === "") {
          toast.warning("name is required!", {
              position: "top-center"
          });}
          else if (code2 === "") {
            toast.warning("password is required!", {
                position: "top-center"
            });}else if (quantity === "") {
              toast.warning("password is required!", {
                  position: "top-center"
              });
            }else if (purchased === "") {
                toast.warning("password is required!", {
                    position: "top-center"
                });
              }else if (vendorlocation === "") {
                toast.warning("password is required!", {
                    position: "top-center"
                });
              }else{

                const email = logindata.email;
        let date=(dte.toLocaleDateString());

          const data = await fetch("/goodsscope3", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  
                period2,vendorlocation2,vendorname2,name2,code2,quantity,purchased,vendorlocation,
                vendorname,namegoods,codegoods,serviceavailed,email,person,date
              })
          });

          const res = await data.json();
          


          if (res.status === 201) {
              toast.success(" Data saved 😃!", {
                  position: "top-center"
              });
              setInpval({ ...inpval,  
                
                period2:"",vendorlocation2:"",vendorname2:"",name2:"",code2:"",quantity:"",purchased:"",vendorlocation:"",
    vendorname:"",namegoods:"",codegoods:"",serviceavailed:""
             });}else {
              toast.error(" name already there!", {
                position: "top-center"
            });
              }

          
  }}
  const hellos =async(e)=>{
    const map=he
        const datap = await fetch("/goodsscope3dash", {
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
        navigate("/subsc3godash");
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
           <p className="mobile">{`Downstream `}</p>
    
         </a></Link>
         <div className="di">{Math.round(element)}</div>
         <div className="tonnes-of">Tonnes of CO2eq</div>
         <p className="this-section-captures-any-emis">
         This
          section captures the goods in in the organization and calculates its 
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
        <div className='but'>    <input className='butw'
              type="text"
              placeholder=""
              name="codegoods"
              onChange={setVal}
              value={inpval.codegoods}
              id="codegoods"
            /></div>
             <label className='lab'>Facility Name:</label>
        <div className='but'>    <input className='butw'
              type="text"
              placeholder=""
              name="namegoods"
              onChange={setVal}
              value={inpval.namegoods}
              id="namegoods"
            /></div>
            <label className='lab'>vendor Name:</label>
        <div className='but'>    <input className='butw'
              type="text"
              placeholder=""
              name="vendorname"
              onChange={setVal}
              value={inpval.vendorname}
              id="vendorname"
            /></div>
            <label className='lab'>Vendor location:</label>
        <div className='but'>    <input className='butw'
              type="text"
              placeholder=""
              name="vendorlocation"
              onChange={setVal}
              value={inpval.vendorlocation}
              id="vendorlocation"
            /></div>
            <label className='lab'>Material purchased:</label>
        <div className='but'>    <input className='butw'
              type="text"
              placeholder=""
              name="purchased"
              onChange={setVal}
              value={inpval.purchased}
              id="purchased"
            /></div>
            <label className='lab'>Quantity:</label>
        <div className='but'>    <input className='butw'
              type="text"
              placeholder=""
              name="quantity"
              onChange={setVal}
              value={inpval.quantity}
              id="quantity"
            /></div>
            <h3 className='hc'>purchased service:</h3>
            <label className='lab'>facility code:</label>
        <div className='but'>    <input className='butw'
              type="text"
              placeholder=""
              name="code2"
              onChange={setVal}
              value={inpval.code2}
              id="code2"
            /></div>
            <label className='lab'>Facility Name:</label>
        <div className='but'>    <input className='butw'
              type="text"
              placeholder=""
              name="name2"
              onChange={setVal}
              value={inpval.name2}
              id="name2"
            /></div>
             <label className='lab'>vendor name:</label>
        <div className='but'>    <input className='butw'
              type="text"
              placeholder=""
              name="vendorname2"
              onChange={setVal}
              value={inpval.vendorname2}
              id="vendorname2"
            /></div>
            <label className='lab'>vendor Location:</label>
        <div className='but'>    <input className='butw'
              type="text"
              placeholder=""
              name="vendorlocation2"
              onChange={setVal}
              value={inpval.vendorlocation2}
              id="vendorlocation2"
            /> </div>
            <label className='lab'>service availed:</label>
        <div className='but'>    <input className='butw'
              type="text"
              placeholder=""
              name="serviceavailed"
              onChange={setVal}
              value={inpval.serviceavailed}
              id="serviceavailed"
            /></div>
          <label className='lab'>Period of service:</label>
        <div className='but'>    <input className='butw'
              type="text"
              placeholder=""
              name="period2"
              onChange={setVal}
              value={inpval.period2}
              id="period2"
            /></div>
          
             
            
  
           
         
         </form>
      </div>
</div>
    
        
        
     
     
        
      
    
         <h2  className="stationary-combustion1">Goods</h2 >

       
   
         <Button className="butgoo" variant="primary" onClick={addCompanydata}>
           Add Data
         </Button>
         <a className="butviewgoo "onClick={onAddDataClick}>
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