import React  from 'react'
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import {useState, useEffect,useContext,useRef} from 'react'
import "./Home1View.css";
import {Link} from 'react-router-dom'
import Header from './Header';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { LoginContext } from "../ContextProvider/Context";
import { useReactToPrint } from "react-to-print";






 

     
     
			
        


function Recommendation(){
  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [usrs, setTodoss] = useState([]);
  const [usrs1, setTodos1] = useState([]);
  const [usrs2, setTodos2] = useState([]);
  const [usrs3, setTodos3] = useState([]);
  const [usrs4, setTodos4] = useState([]);






const { logindata } = useContext(LoginContext);
let he="hello"
let person="hello"
const asuser = async()=>{he=(logindata.ValidUserOne.map);
person=(logindata.fname)}
asuser();



const hellos =async(e)=>{
    const map=he
        const datap = await fetch("/mobile/get-all", {
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
    /////////////////////////////////////////


    const hellos1 =async(e)=>{
      const map=he
          const datap = await fetch("/fugitive/get-all", {
            method: "GET",
            // headers: {
            //     "Content-Type": "application/json"
            // },
            // body: JSON.stringify({
            //      map
            // })
        });
        const res = await datap.json();
        
        setTodos1(res);
        }
        let element1 = 0 ;
      
        for (let index = 0; index < usrs1.length; index++) {
      
      
           element1 += (usrs1[index].co2)
    
        }
      
    /////////////////////////////////////////////////

    const hellos2 =async(e)=>{
      const map=he
          const datap = await fetch("/fugdashtwo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                 map
            })
        });
        const res = await datap.json();
        
        setTodos2(res);
        }
        let element2 = 0 ;
      
        for (let index = 0; index < usrs2.length; index++) {
      
      
           element2 += (usrs2[index].co2)
        
        }
        /////////////////////////////////////////
        const hellos3 =async(e)=>{
          const map=he
              const datap = await fetch("/electricity/get-all", {
                method: "GET",
                // headers: {
                //     "Content-Type": "application/json"
                // },
                // body: JSON.stringify({
                //      map
                // })
            });
            const res = await datap.json();
            
            setTodos3(res);
            }
            let element3 = 0 ;
          
            for (let index = 0; index < usrs3.length; index++) {
          
          
               element3 += (usrs3[index].co2)
            
            }
            ///////////////////////////////////////
            const hellos4 =async(e)=>{
              const map=he
                  const sdatap = await fetch("/stationary/get-all", {
                    method: "GET",
                    // headers: {
                    //     "Content-Type": "application/json"
                    // },
                    // body: JSON.stringify({
                    //      map
                    // })
                });
                const sres = await sdatap.json();
                
                setTodos4(sres);
                }
                let element4 = 0 ;
              
                for (let index = 0; index < usrs4.length; index++) {
              
              
                   element4 += (usrs4[index].co2)
                
                }
let total=  element+element1+element2+element3+element4
               











    
    useEffect(() => {
      hellos();
      hellos1();
      hellos2();
      hellos3();
      hellos4();
    }, []);

    var data = [
      {name: 'Mobile Combustion', students: Math.round(element), fill: 'red'},
      {name: 'NO DATA', students: 0.001, fill: 'grey'},
      {name: 'Fugitive Emissions', students: Math.round(element1), fill:'blue'},
      {name: 'Fugitive Gases', students: Math.round(element2), fill:'green'},
      {name: 'Stationary Combustion', students: Math.round(element4), fill:'purple'},
      {name: 'Electricity Consumption', students: Math.round(element3), fill:'black'}
    ];
        
    return(<>
   

 
          <div ref={componentRef} className="sdfhdf">
      
    <div className='amplifier'>
   
        <div className="home1-view-inner" /> 
       <img
        className="whatsapp-image-2022-12-22-at-9"
        alt=""
        src="../whatsapp-image-20221222-at-923-3@2x.png"
      /> 
   <div className="ellipse-icon"><Header/></div>  
      <Link className="measure" to="/home1add">
        Measure
      </Link>
      <Link className="reduce" to="/home1add">
        Reduce
      </Link>
      <Link className="offset" to="/home1add">
        Offset
      </Link>
      <Link className="dashboard" to="/fugdash">
        Dashboard
      </Link> 
    <div className='rect'></div>
    <div className='rectt'></div>
    <div className='scope1'>Scope-1 Emissions</div>
    <div className='scope2'>Scope-2 Emissions</div>
    

 
 
    <div className='tonnes'>Total Carbon Emissions</div>
    <div className='station'>Stationary Combustion</div>
    <div className='mobilemain'>Mobile Combustion</div>
    <div className='fugitive'>Fugitive Emissions</div>
    <div className='process'>Fugitive Gases</div>
    <div className='electricity'>Electricity Consumption</div>
    
        
        
      <div className='pie'> 
        <ResponsiveContainer width="40%" height={850}>
            <PieChart width={50} height={50}  >
                <Pie  data={data} nameKey="name" dataKey="students" outerRadius={150}  cx="50%" cy="50%" width={50} height={10}  label/>
                
                <Tooltip/>
            </PieChart>
        </ResponsiveContainer>
      </div>
        <div className='colorled'></div>
        <div className='colorled1'></div>
        <div className='colorled2'></div>
        <div className='colorled3'></div>
        <div className='colorled4'></div>
        <div className='colorled5'></div>
        <h5 className='legd'>No emmission</h5>
        <h5 className='legd1'>Fugitive Gases</h5>
        <h5 className='legd2'>Stationary Combustion</h5>
        <h5 className='legd3'>Fugitive Emissions</h5>
        <h5 className='legd4'>Electricity Consumption</h5>
        <h5 className='legd5'>Mobile Combustion</h5>
    
                         <div className='station-2'>{Math.round(element4)}</div>    
           
        
                         <button onClick={handlePrint} className="rep">Download</button> 
        
                        <div className='fugitive-2'>{Math.round(element1)}</div>    
           
        
      
        
                        <div className='mobile-2'>{Math.round(element)}</div>    
           
 
                    
                    <div className='process-2'>{Math.round(element2)}</div>    
            
        
        
                      <div className='electricity-2' >{Math.round(element3)}</div>    
           
                      <div className='total'>{Math.round(total)}</div>
    </div>  </div>
    </>
    );
}

export default Recommendation;