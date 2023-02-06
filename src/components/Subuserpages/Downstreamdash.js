import { useCallback ,useEffect,useState,useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home1View.css";
import { LoginContext } from "../ContextProvider/Context";
import DatePicker from 'react-date-picker';
import Header from './Header';
const Home1View = () => {
    const [value, onChange] = useState(new Date());
  const [usrs, setTodoss] = useState([]);
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  const { logindata } = useContext(LoginContext);
  
  let he="hello"
const asuser = async()=>{he=(logindata.ValidUserOne.map)}

asuser();

  const navigate = useNavigate();

  const onAddDataClick = useCallback(() => {
    navigate("/subfug");
  }, [navigate]);
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
      let element=0;
  for (let index = 0; index < usrs.length; index++) {


    element += (usrs[index].co2)
  
 }
 useEffect(() => {
 
  hellos();
setCalculation(() => count * 2);
}, [count]);
let i=0;

  return (
    <div className="home1-view">
      
      <img className="home1-view-child" alt="" src="../vector-4.svg" />
      <img className="home1-view-item" alt="" src="../vector-4.svg" />
      <div className="home1-view-inner" />
      <img
        className="whatsapp-image-2022-12-22-at-9"
        alt=""
        src="../whatsapp-image-20221222-at-923-3@2x.png"
      />
     <div className="ellipse-icon">  <Header/></div>
      <img className="home1-view-child1" alt="" src="../ellipse-56.svg" />
      <img className="vector-icon" alt="" src="../vector-1.svg" />
      <img className="home1-view-child2" alt="" src="../vector-2.svg" />
      <div className="rectangle-div" />
      <img className="rectangle-icon" alt="" src="../rectangle-52@2x.png" />
      <img className="home1-view-child3" alt="" src="../rectangle-52@2x.png" />
      <img className="home1-view-child4" alt="" src="../rectangle-52@2x.png" />
      <img className="home1-view-child5" alt="" src="../rectangle-52@2x.png" />
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
      <p className="p">{Math.round(element)}</p>
      <p className="tonnes-of-co2eq">Tonnes of CO2eq</p>
      <div className="home1-view-child6" />
      <div className="line-div" />
      <div className="home1-view-child7" />
      <div className="home1-view-child8" />
      <div className="home1-view-child9" />
      <div className="home1-view-child10" />
      <div className="home1-view-child11" />
      <div className="home1-view-child12" />
      <div className="home1-view-child13" />

    
      <div className="home1-view-child14" />
      <div className="home1-view-child15" />
      <div className="home1-view-child16" />
      <div className="home1-view-child17" />
      <p className="total-em">Total Emissions</p>
      <p className="tonnes-of-co2eq1">Tonnes of CO2eq</p>
      <p className="total-composition-of-carbon-fo">{`Total Composition of Carbon Footprint by Source of Emission `}</p>
      <a className="add-data" onClick={onAddDataClick}>
        Add Data
      </a>
      <img
        className="factory-pollution-city-air-and-icon"
        alt=""
        src="../117785factorypollutioncityairandwater-1@2x.png"
      />
      <Link className="measure" to="/home1add">
        Measure
      </Link>
      <Link className="reduce" to="/home1add">
        Reduce
      </Link>
      <Link className="offset" to="/home1add">
        Offset
      </Link>
     <Link to="/subMain">
      <a className="dashboard">Dashboard</a>        </Link>
      <table class="down1">

	



<thead>
  <tr>
    <th>S.NO</th>
    <th>facality code</th>
    <th>buyername</th>
    <th>buyer location</th>
    <th>Facility Name:</th>
    <th>distance travelled in KM</th>
    <th>material</th>
    <th>quantity</th>
    

  <th>date</th>

  </tr>
</thead>




      <tbody>
      {usrs.length > 0  ? usrs.map
    (todo => (
        <tr>
        <td  key="{qaait}">{i=i+1}</td>
        <td  key="{quantity}">{todo.code}</td>
        <td  key="{quantit}">{todo.byername}</td>
        <td  key="{quantity">{todo.byerlocation}</td>
        <td  key="{quantit}">{todo.facility}</td>
        <td  key="quantity">{todo.distance}</td>
        <td  key="{quantt}">{todo.material}</td>
        <td  key="{quantit}">{todo.quantity}</td>
     
    
        <td  key="quantity">{todo.date}</td>
    
    
        </tr>
        )) : (
          <p>You have no data</p>
        )}
      </tbody>


      
    

</table>

<table class="down2">

	



<thead>
  <tr>
    <th>S.NO</th>
    <th>facality code</th>
    <th>buyername</th>
    <th>buyer location</th>
    <th>Facility Name:</th>
   
    <th>material</th>
    <th>quantity</th>
    <th>Processing performed</th>
    <th>Final product</th>  
      <th>Mode of Transport</th>   
       <th>Type of vehicle</th>
  
  <th>date</th>

  </tr>
</thead>




      <tbody>
      {usrs.length > 0  ? usrs.map
    (todo => (
        <tr>
        <td  key="{qaait}">{i=i+1}</td>
        <td  key="{quantity}">{todo.code2}</td>
        <td  key="{quantit}">{todo.byername2}</td>
        <td  key="{quantity">{todo.byerlocation2}</td>
        <td  key="{quantit}">{todo.facility2}</td>
      
        <td  key="{quantt}">{todo.material2}</td>
        <td  key="{quantit}">{todo.quantity2}</td>
        <td  key="quantity">{todo.process}</td>
        <td  key="quantity">{todo.finalproduct}</td>
        <td  key="quantity">{todo.transport}</td>
        <td  key="quantity">{todo.vehicle}</td>
        
        <td  key="quantity">{todo.date}</td>
    
    
        </tr>
        )) : (
          <p>You have no data</p>
        )}
      </tbody>


      
    

</table>




<table class="down3">

	



<thead>
  <tr>
    <th>S.NO</th>
    <th>Name of Product</th>
    <th>Times of usage</th>
    <th>Name of product</th>
    <th>Method of disposal</th>
   
    <th>lease period</th>
    <th>Name of franchise</th>
    <th>Location</th>
    <th>Period of franchise</th>  
      <th>type of investment</th>   
       <th>Person entered</th>
  
  <th>date</th>

  </tr>
</thead>




      <tbody>
      {usrs.length > 0  ? usrs.map
    (todo => (
        <tr>
        <td  key="{qaait}">{i=i+1}</td>
        <td  key="{quantity}">{todo.code2}</td>
        <td  key="{quantit}">{todo.productname}</td>
        <td  key="{quantity">{todo.usagetime}</td>
        <td  key="{quantit}">{todo.productname2}</td>
      
        <td  key="{quantt}">{todo.disposal}</td>
        <td  key="{quantit}">{todo.lease}</td>
        <td  key="quantity">{todo.namefranchise}</td>
        <td  key="quantity">{todo.location}</td>
        <td  key="quantity">{todo.franchiseperiod}</td>
        <td  key="quantity">{todo.person}</td>
        
        <td  key="quantity">{todo.date}</td>
    
    
        </tr>
        )) : (
          <p>You have no data</p>
        )}
      </tbody>


      
    

</table>

    </div>
  );
};

export default Home1View;
