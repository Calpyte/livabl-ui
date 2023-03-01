import React,{useRef} from 'react';
import { useReactToPrint } from "react-to-print";
import { useEffect, useState } from 'react';
import "./Profile.css"
import environment from '../Environment';

 
const api_base = environment.baseUrl;
const renderTooltip = context => {
  const { category, value } = context.point || context;
  
    <div>
      {category}: {value}%
    </div>
  
};
const Report = () => {  
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

	const [usr, setTodos] = useState([]);
	
	
	useEffect(() => {
		GetTodos();
	}, []);

	const GetTodos = () => {
		fetch(api_base + '/mcompp')
			.then(res => res.json())
			.then(data => setTodos(data))
	
			.catch((err) => console.error("Error: ", err));
			
			
	}


  return (<>
  <div class="print__section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
			
          <h1>Printing and download PDF file in React</h1>
          <button onClick={handlePrint} className="print__button">Download</button> 
          <div ref={componentRef} className="card">
            <div class="float__start">
              {/* <h3 class="card-title mb-0">Information</h3> */}
            </div>
            <div className="Profile">
			<h2>Emmision</h2>
			

			<div className="compp">
				{usr.length > 0  ? usr.map(todo => (
					<div  >
						
                        <h2>quantity of fuel:</h2>
						<div className="text" key="{quantity}">{todo.quantity}</div>
						<h2>fuel:</h2>
						<div className="text" key="quantity">{todo.fuel}</div>
						<h2>Facility Name:</h2>
						<div className="text" key="{quantity">{todo.facility}</div>
						<h2>facility code:</h2>
						<div className="text" key="{quantit}">{todo.code}</div>
	                    <h2>Co2:</h2>
						<div className="text" key="{quantt}">{todo.co2}</div>
						<h2>category:</h2>   
						<div className="text" key="{quant}">{todo.category}</div>
						<h2>subcat:</h2>
						<div className="text" key="{quait}">{todo.subcat}</div>
						<h2>Created At:</h2>
						<div className="text" key="{qait}">{todo.createdAt}</div>
						<br></br><br></br><br></br>
	
					</div>
				)) : (
					<p>You have no data</p>
				)}
			</div>

			
		</div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>     
  )
}
export default Report


// <div class="float__infoss">
//               <ul>
//                 <li> Name : <span> Dr Andrew C S Koh </span> </li>
//                 <li> Email : <span> Andrew@gmail.com </span> </li>
//                 <li> Gender : <span> Male </span> </li>
//                 <li> Date of Birth : <span> 07-24-1982</span> </li>
//                 <li> Phone No: <span> </span> 9856231456 </li>
//                 <li> Address : <span> 26 Wyle Cop, Shrewsbury, Shropshire, SY1 1XD </span> </li>
//                 <li> Website : <span> www.Andrew.com </span> </li>
//                 <li> Country : <span> United states </span> </li> 
//               </ul>
//             </div>
