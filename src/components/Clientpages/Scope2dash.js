import { useCallback ,useEffect,useState,useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home1View.css";
import { LoginContext } from "../ContextProvider/Context";
import Header from './Header';
import environment from "../../Environment";
import React, {useRef} from 'react';
import { DownloadTableExcel } from 'react-export-table-to-excel';

const Home1View = () => {
  const [usrs, setTodoss] = useState([]);
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  const { logindata } = useContext(LoginContext);
  const tableRef = useRef(null);

  let he="hello"
// const asuser = async()=>{he=(logindata.ValidUserOne.map)}

// asuser();

  const navigate = useNavigate();

  const onAddDataClick = useCallback(() => {
    navigate("/sco");
  }, [navigate]);
  const hellos =async(e)=>{
      //const map=he
      //   const datap = await fetch("/electricity/get-all", {
      //     method: "POST",
      //     headers: {
      //         "Content-Type": "application/json"
      //     },
      //     body: JSON.stringify({
      //          map
      //     })
      // });
      let api = logindata.type == 2 ? "/elctricity/get-all" : "/electricity/by-user?email="+logindata.email
      const datap = await fetch(api);
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
    <div className="home1-vie">
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
     

      <img className="home1-view-child5" alt="" src="../rectangle-52@2x.png" />
      <Link to="/dash">
         <a className="scope-1">Scope 1</a>
        </Link>
        <Link to="/sco">
        <a className="scope-22">Scope 2</a>
        </Link>
        <Link to="/capital">
        <a className="scope-3">Scope 3</a>
        </Link>
      <section className="rectangle-section" />
      <Link to="/sco">
      <a className="stationary-c">Electricity</a>
        </Link>
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
     <Link to="/Main">
      <a className="dashboard">Dashboard</a>        
      </Link>

<div className="infoo">
<DownloadTableExcel
                    filename="Scope 2 - Electricity Consumption"
                    sheet="Electricity Consumption"
                    currentTableRef={tableRef.current}
                >
                   <button> Export excel </button>
                </DownloadTableExcel>
      <table ref={tableRef} style={{border: '1px solid black',width: '1400px'}} id="infoo">
<thead>
  <tr>
    <th>S.NO</th>
    <th>Facility Name</th>
 
    <th>Facility Code</th>
    <th>Type of Gas</th>
  
    
   <th>Quantity</th>
    <th>Date</th>
    <th>Carbonfootprint</th>
   
  </tr>
</thead>

      <tbody>
      {usrs.length > 0  ? usrs.map
    (todo => (
        <tr>
        <td  key="{qaait}">{i=i+1}</td>
        <td  key="{quantity}">{todo.facility}</td>
        <td  key="{quantity">{todo.code}</td>
        <td  key="quantity">{todo.fuel}</td>
        <td  key="{quantit}">{todo.quantity}</td>
        <td  key="{quantt">{todo.electricityDateStr}</td>
        <td  key="{qtt}">{Math.round(todo.co2)}</td>
    
        </tr>
        )) : (
          <p>You have no data</p>
        )}
      </tbody>


      
    

</table>
</div>
    </div>
  );
};

export default Home1View;
