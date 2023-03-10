import { useCallback ,useEffect,useState,useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home1View.css";
import { LoginContext } from "../ContextProvider/Context";
import Header from './Header';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { margin } from "@mui/system";
import React, {useRef} from 'react';
import { DownloadTableExcel } from 'react-export-table-to-excel';


const Home1View = () => {
  const [usrs, setTodoss] = useState([]);
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  const { logindata } = useContext(LoginContext);
  const tableRef = useRef(null);

// const asuser = async()=>{he=(logindata.ValidUserOne.map)}

// asuser();

  const navigate = useNavigate();

  const onAddDataClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);


  const hellos =async(e)=>{
        let api = logindata.type == 2 ? "/stationary/get-all" : "/stationary/by-user?email="+logindata.email
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
      </a>
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
      <Link className="dashboard" to="/Main">
        Dashboard
      </Link>

<div className="info" >
{/* <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="info"
                    filename="Scope 1"
                    sheet="Stationary Combustion"
                    buttonText="Download as XLS"/> */}
      {/* <table class="info">  */}
      <DownloadTableExcel
                    filename="Scope 1 - Stationary Combustion"
                    sheet="Stationary Combustion"
                    currentTableRef={tableRef.current}
                >
                   <button> Export excel </button>
                </DownloadTableExcel>

<table ref={tableRef} style={{border: '1px solid black',width: '1400px'}} id="info">      
<thead >
  <tr>
    <th>S.NO</th>
    <th>Facility Name</th>
    <th>Type of fuel</th>
    <th>Quantity</th>
    <th>Source of emission</th>
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
        <td  key="{quantity">{todo.fuel}</td>
        <td  key="{quantit}">{todo.quantity}</td>
        <td  key="quantity">{todo.type}</td>
        <td  key="{quantt}">{todo.combustionDateStr}</td>
        <td  key="{quantt}">{Math.round(todo.co2)}</td>
    
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
