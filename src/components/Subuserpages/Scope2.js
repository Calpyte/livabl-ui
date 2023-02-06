import { useCallback,useState,useContext ,useEffect} from "react";
import { TextField, Button } from "@mui/material";
import scope from "./Scope2.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-date-picker';
import { LoginContext } from "../ContextProvider/Context";
import { NavLink,useNavigate,Link} from "react-router-dom"
import Header from './Header';


const Scope2 = () => {
  const [usrs, setTodoss] = useState([]);
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  const { logindata } = useContext(LoginContext);
  
  let he="hello"
  let person="hello"
  const asuser = async()=>{he=(logindata.ValidUserOne.map);
    person=(logindata.ValidUserOne.fname)}
asuser();
  const [dte, onChange] = useState(new Date());
    //const [type, setType] = useState(getInitialState);

    const [fuel, setFuel] = useState("solar");
 
  
  
    const [inpval, setInpval] = useState({
         
          code:"",
          facility:"",
          quantity:""
          // type:type,
          // literdistance:literdistance,
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
    //calculation
    
    const nuclear=0.027
    const biogas=0.027
    const solar=0.027
    const igp=0.027
    const wind=0.027
    const naturalgas=0.027
    
    
    
    
    function igps(calc){
        var result=(calc*(igp))
        return result
         
    }
    function naturalgass(calc){
        var result=(calc*(naturalgas))
        return result
         
    }function solars(calc){
        var result=(calc*(solar))
        return result
         
    }function winds(calc){
        var result=(calc*(wind))
        return result
         
    }function biogass(calc){
        var result=(calc*(biogas))
        return result
         
    }function nuclears(calc){
        var result=(calc*(nuclear))
        return result
         
    }
    
    
    
    
          
                    
    let val="null"
    
    
    
    
    
      if(fuel==="igp"){
     val =igps(inpval.quantity)}
     else if(fuel==="wind"){
      val =winds(inpval.quantity)
    }
    else if(fuel==="solar"){
      val =solars(inpval.quantity)
    }else if(fuel==="naturalgas"){
      val =naturalgass(inpval.quantity)
    }else if(fuel==="nuclear"){
      val =nuclears(inpval.quantity)
    }else if(fuel==="biogas"){
      val =biogass(inpval.quantity)
    }else{
      console.log("errr");
    }
    
    
                let co2=val
               
                
    let email=he
    
    
    
                let date=(dte.toLocaleDateString());
    
    
              const data = await fetch("/energy", {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                      
                    code,facility,quantity,fuel,co2,date,email,person
                  })
              });
    
              const res = await data.json();
              
              
              
    
    
              if (res.status === 201) {
                  toast.success(" Data saved 😃!", {
                      position: "top-center"
                  });
                  setInpval({ ...inpval,  
                    
                    code:"",
                    facility:"",
                  quantity:""
                  
                   
                    
                 });}else {
                  toast.error("Fail!", {
                    position: "top-center"
                });
                  }
    
              
      }}
      const navigate = useNavigate();
   
  const onEllipseImageClick = useCallback(() => {
    // Please sync "Profile" to the project
    navigate("/subsco");
  }, [navigate]);

  const onViewDataClick = useCallback(() => {
    // Please sync "Stationary combustion dash" to the project
    navigate("/subscodash");
  }, [navigate]);
  const hellos =async(e)=>{
    const map=he
        const datap = await fetch("/energydash", {
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
      setCount((c) => c + 1) 
      }
      let element=0;
  for (let index = 0; index < usrs.length; index++) {


    element += (usrs[index].co2)
  
 }
 useEffect(() => {
 
  hellos();
setCalculation(() => count * 2);
}, [count]);

  return (<>
    <div className={scope.scope2}>
      <img className={scope.scope2Child} alt="" src="../vector-4.svg" />
      <img className={scope.scope2Item} alt="" src="../vector-4.svg" />
      <div className={scope.scope2Inner} />
      <img
        className={scope.whatsappImage20221222At9}
        alt=""
        src="../whatsapp-image-20221222-at-923-3@2x.png"
      />
      <div   className={scope.ellipseIcon}>  <Header/></div>
      <img className={scope.scope2Child1} alt="" src="../ellipse-56.svg" />
      <img className={scope.vectorIcon} alt="" src="../vector-1.svg" />
      <img className={scope.scope2Child2} alt="" src="../vector-2.svg" />
      <img
        className={scope.rectangleIcon}
        alt=""
        src="../rectangle-51@2x.png"
      /> <Link to="/subdash">
   <a className={scope.scope1}>Scope 1</a>     </Link>
        <Link to="/subsco">
     <a className={scope.scope21}>Scope 2</a>
     </Link>
     <Link to="/subscope3good">
     <a className={scope.scope3}>Scope 3</a>
     </Link>
   
      <div className={scope.rectangleDiv} />
      <a className={scope.electricity}>Electricity</a>
      <h1 className={scope.h1}>{Math.round(element)}</h1>
      <h3 className={scope.tonnesOfCo2eq}>Tonnes of CO2eq</h3>
      <h3
        className={scope.thisSectionCaptures}
      >{`This Section captures the emissions that happed due to energy consumption within the organization. The amount of the electricity purchased from different sources is accounted for and is converted into its equivalent carbon emissions. `}</h3>
      <h3 className={scope.activityCaptured}>Activity Captured : Fuel Use</h3>
      <div className={scope.siUnits}>Electricity Consumption</div>
     
 
      <TextField
        className={scope.scope2Child5}
        sx={{ width: 421 }}
        color="primary"
        variant="outlined"
        type="number"
        label="Energy Consumption"
        placeholder="Enter Amount of energy"
        size="medium"
        margin="none"
        name="quantity"
        onChange={setVal}
        value={inpval.quantity}
        id="quantity"
      />
 
        <select value={fuel} onChange={setValss}  className={scope.rectangleTextfield}>
        <option value="igp">indian grid power</option>
        <option value="solar">Solar</option>
        <option value="wind">Wind</option>
        <option value="naturalgas">Natural gas</option>
        <option value="nuclear">Nuclear</option>
        <option value="biogas">Bio gas</option>
       

        
        
       
      </select>
      
   
 
        
        <div>     <DatePicker onChange={onChange} value={dte} className={scope.scope2Child8} /></div>
      
 
      <TextField
        className={scope.scope2Child9}
        sx={{ width: 421 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Facility"
        placeholder="Facility Code"
        size="medium"
        margin="none"
        name="code"
        onChange={setVal}
        value={inpval.code}
        id="code"
      />
      <TextField
        className={scope.scope2Child10}
        sx={{ width: 421 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Facility Name"
        size="medium"
        margin="none"
        name="facility"
        onChange={setVal}
        value={inpval.facility}
        id="pass"
      />
      <h2 className={scope.facility}>{`Facility `}</h2>
      <h2 className={scope.energy}>Energy</h2>
      <h2 className={scope.date}>Date</h2>
      <Button
        className={scope.rectangleButton}
        sx={{ width: 198 }}
        variant="contained"
        color="primary"
        onClick={addCompanydata}
      >
        Add Data
      </Button>
     
      <a className={scope.viewData} onClick={onViewDataClick}>
        View Data
      </a>
      <img
        className={scope.factoryPollutionCityAirAndIcon}
        alt=""
        src="../117785factorypollutioncityairandwater-1@2x.png"
      />
      <a className={scope.measure}>Measure</a>
      <a className={scope.reduce}>Reduce</a>
      <a className={scope.offset}>Offset</a>
     <Link to="/Main">
     <Link to="/subMain">
      <a className="dashboard">Dashboard</a>        </Link> </Link>
      <ToastContainer />
    </div>
    
      </>
  );
};

export default Scope2;
