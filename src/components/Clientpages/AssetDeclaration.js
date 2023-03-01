import { useCallback,useState,useEffect,useContext } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./AssetDeclaration.css";
import { LoginContext } from "../ContextProvider/Context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const AssetDeclaration = () => {
  const navigate = useNavigate();
  const [usr, setTodos] = useState([]);
  const [usrp, setTodosp] = useState([]);
  const [usrs, setTodoss] = useState([]);
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  const onRectangleButton3Click = useCallback(() => {
    navigate("/question");
  }, [navigate]);


  const { logindata } = useContext(LoginContext);
  
  let he="hello"
  const asuser = async()=>{he=(logindata.ValidUserOne.email)}

asuser();
const email=he
  


const [inpval, setInpval] = useState({
    assetid:"",assetname:"",assettype:"",latitude:"",longitude:""
});
const [inpvalp, setInpvalp] = useState({
  productid:"",productdescription:""
});
const [inpvals, setInpvals] = useState({
  serviceid:"",servicedescription:""
});


const setVal = (e) => {

    
    const {name, value } = e.target;

    setInpval(() => {
        return {
            ...inpval,
            [name]: value,
          
        }
    })
};
const setValp = (e) => {
    
  const {name, value} = e.target;

  setInpvalp(() => {
      return {
          ...inpvalp,
          [name]: value,
        
      }
  })
};const setVals = (e) => {
    
  const {name, value} = e.target;

  setInpvals(() => {
      return {
          ...inpvals,
          [name]: value,
        
      }
  })
};
  const addasset=async(e)=>{
    e.preventDefault();
    setCount((c) => c + 1)
   
    const { assetid,assetname,assettype,latitude,longitude} = inpval;

       // name,user,currency, country, pointofcontact,productservices,id,employee,website,activity,address
     

      
       const email = logindata.email;
        const data = await fetch("/addasset", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // fname, email, password, cpassword
               email, assetid,assetname,assettype,latitude,longitude
            })
        });

        const res = await data.json();
        


        if (res.status === 201) {
            toast.success(" Data saved 😃!", {
                position: "top-center"
            });
            setInpval({ ...inpval,  
              assetid:"",assetname:"",assettype:"",latitude:"",longitude:""
  });}else{
    toast.warning("fail!", {
      position: "top-center"
  });

  }

  }





  const addservices=async(e)=>{
    e.preventDefault();
    setCount((c) => c + 1)
    const { serviceid,servicedescription} = inpvals;

        const email = logindata.email;
        const data = await fetch("/addassets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
        
               email, serviceid,servicedescription
            })
        });

        const res = await data.json();
        


        if (res.status === 201) {
            toast.success(" Data saved 😃!", {
                position: "top-center"
            });
            setInpvals({ ...inpvals,  
              serviceid:"",servicedescription:""
            
  });}else{
    toast.warning("fail!", {
      position: "top-center"
  });

  }

  }




  const addproduct=async(e)=>{
    e.preventDefault();
    setCount((c) => c + 1)
    const { productid,productdescription} = inpvalp;

        const email = logindata.email;
        const data = await fetch("/addassetp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
        
               email, productid,productdescription
            })
        });

        const res = await data.json();
        


        if (res.status === 201) {
            toast.success(" Data saved 😃!", {
                position: "top-center"
            });
            setInpvalp({ ...inpvalp,  
              productid:"",productdescription:""
            
  });}else{
    toast.warning("fail!", {
      position: "top-center"
  });

  }

  }





	
  const hello =async(e)=>{

	const data = await fetch("/getasset", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
         email
    })
});
const res = await data.json();

setTodos(res);
}
const hellop =async(e)=>{

	const datap = await fetch("/getassetp", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
         email
    })
});
const res = await datap.json();

setTodosp(res);
}
const hellos =async(e)=>{

	const datap = await fetch("/getassets", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
         email
    })
});
const res = await datap.json();

setTodoss(res);
}
let i=0;
let k=0;
let j=0;

// useEffect(() => {
// 		hello();
//     hellop();
//     hellos();

// 	},[]);
// useEffect(() => {
//   setTimeout(() => {
//      hello();
//      hellop();
//      hellos();
   
//   }, 100)

// }, [])
useEffect(() => {
       hello();
       hellop();
       hellos();
  setCalculation(() => count * 2);
}, [count]);

  return (<>
    <main className="asset-declaration1">
      <img
        className="whatsapp-image-2022-12-22-at-91"
        alt=""
        src="../whatsapp-image-20221222-at-923-2@2x.png"
      />
      <TextField
        className="asset-declaration-child"
        sx={{ width: 169 }}
        color="primary"
        variant="outlined"
        type="text"
        size="medium"
        margin="none"
        name="assetid"
        onChange={setVal}
        value={inpval.assetid}
        id="assetid"
    
      />
      <div className="facility-id">Facility ID</div>
      <TextField
        className="asset-declaration-item"
        sx={{ width: 204 }}
        color="primary"
        variant="outlined"
        type="text"
        size="medium"
        margin="none"
        name="assetname"
        onChange={setVal}
        value={inpval.assetname}
        id="assetname"
      
      />
      <div className="facility-n">{`Facility Name `}</div>
      <TextField
        className="asset-declaration-inner"
        sx={{ width: 222 }}
        color="primary"
        variant="outlined"
        type="text"
        size="medium"
        margin="none"
        name="latitude"
        onChange={setVal}
        value={inpval.latitude}
        id="latitude"
      
      />
      <div className="latitude">Latitude</div>
      <TextField
        className="rectangle-textfieldlong"
        sx={{ width: 222 }}
        color="primary"
        variant="outlined"
        type="text"
        size="medium"
        margin="none"
        name="longitude"
        onChange={setVal}
        value={inpval.longitude}
        id="longitude"
      
      />
      <TextField
        className="asset-declaration-child1"
        sx={{ width: 167 }}
        color="primary"
        variant="outlined"
        type="text"
        size="medium"
        margin="none"
        name="assettype"
        onChange={setVal}
        value={inpval.assettype}
        id="assetype"
       
      />
      <div className="longitude">Longitude</div>
      <div className="facility-type">Facility Type</div>
      <TextField
        className="asset-declaration-child2"
        sx={{ width: 125 }}
        color="primary"
        variant="outlined"
        type="text"
        size="medium"
        margin="none"
        name="productid"
        onChange={setValp}
        value={inpvalp.productid}
        id="productid"
        
        
      />
      <div className="product-id">Product ID</div>
      <TextField
        className="asset-declaration-child3"
        sx={{ width: 240 }}
        color="primary"
        variant="outlined"
        type="text"
        size="medium"
        margin="none"
        name="productdescription"
        onChange={setValp}
        value={inpvalp.productdescription}
        id="productdescription"
       
      />
      <div className="product-description">Product Description</div>
      <img
        className="asset-declaration-child4"
        alt=""
        src="../ellipse-9@2x.png"
      />
      <img
        className="asset-declaration-child5"
        alt=""
        src="../ellipse-10.svg"
      />
      <img
        className="asset-declaration-child6"
        alt=""
        src="../ellipse-10.svg"
      />
      <img
        className="asset-declaration-child7"
        alt=""
        src="../ellipse-11.svg"
      />
      <div className="asset-declaration-child8" />
      <div className="asset-declaration-child9" />
  
      <div className="company-details2">Company Details</div>
      <div className="asset-declaration2">Asset Declaration</div>
      <div className="rectangle-div" />
      <div className="asset-declaration-child10" />
      <div className="asset-declaration-child11" />
      <div className="asset-declaration-child12" />
      
      <div className="asset-declaration-child13" />
      <div className="asset-declaration-child14" />
      <div className="asset-declaration-child15" />

     
      <Button
        className="rectangle-button001"
        sx={{ width: 138 }}
        variant="contained"
        color="success"
        onClick={addasset}
      >
        Add Asset
      </Button>
      <Button
        className="asset-declaration-child16"
        sx={{ width: 102 }}
        variant="contained"
        color="success"
        onClick={addproduct}
      >
        Add
      </Button>
      <TextField
        className="asset-declaration-child17"
        sx={{ width: 125 }}
        color="primary"
        variant="outlined"
        type="text"
        size="medium"
        margin="none"
        name="serviceid"
        onChange={setVals}
        value={inpvals.serviceid}
        id="serviceid"
        
      />
      <div className="service-id">Service ID</div>
      <TextField
        className="asset-declaration-child18"
        sx={{ width: 240 }}
        color="primary"
        variant="outlined"
        type="text"
        size="medium"
        margin="none"
        name="servicedescription"
        onChange={setVals}
        value={inpvals.servicedescription}
        id="servicedescription"
      
      />
      <div className="service-description">Service Description</div>
      <div className="asset-declaration-child19" />
      <div className="asset-declaration-child20" />
      <div className="asset-declaration-child21" />
   
      <Button
        className="asset-declaration-child22"
        sx={{ width: 102 }}
        variant="contained"
        color="success"
        onClick={addservices}
      >
        Add
      </Button>
      <div className="questionarre1">Questionarre</div>
      <Button
        className="asset-declaration-child23"
        sx={{ width: 233 }}
        variant="contained"
        color="success"
        onClick={onRectangleButton3Click}

      >
        Next
      </Button>
      <table class="scrolldown" rules="all">

	
		<thead>
			<tr>
				<th>S.NO</th>
				<th>Asset ID</th>
				<th>Asset Name</th>
				<th>Lattitude</th>
				<th>Longitude</th>
        <th>Asset Type</th>
			</tr>
		</thead>
		

		
	
					<tbody>
          {usr.length > 0  ? usr.map
				(todo => (
						<tr>
						<td  key="{qaait}">{i=i+1}</td>
						<td  key="{quantity}">{todo.assetid}</td>
						<td  key="quantity">{todo.assetname}</td>
						<td  key="{quantity">{todo.latitude}</td>
						<td  key="{quantit}">{todo.longitude}</td>
						<td  key="{quantt}">{todo.assettype}</td>
				
						</tr>
            )) : (
              <p>You have no data</p>
            )}
					</tbody>

	
					
				
		
	</table>
  <table class="scrolldownp" rules="all">
		
	
		<thead>
			<tr>
				<th>S.NO</th>
				<th>Product ID</th>
				<th>Product Description</th>
				
			</tr>
		</thead>
		

		
	
					<tbody class="hello">
          {usrp.length > 0  ? usrp.map
				(todo => (
						<tr>
						<td  key="{qaait}">{k=k+1}</td>
						<td  key="{quantity}">{todo.productid}</td>
						<td  key="quantity">{todo.productdescription}</td>
						
				
						</tr>
            )) : (
              <p>You have no data</p>
            )}
					</tbody>

	
					
				
		
	</table>
  <table class="scrolldowns" rules="all">
		
  
		<thead>
			<tr>
				<th>S.NO</th>
				<th>Service ID</th>
				<th>Service Description</th>
				
			</tr>
		</thead>
		

		
	
					<tbody class="hello">
          {usrs.length > 0  ? usrs.map
				(todo => (
						<tr>
						<td  key="{qaait}" className="trow1">{j=j+1}</td>
						<td  key="{quantity}">{todo.serviceid}</td>
						<td  key="quantity">{todo.servicedescription}</td>
						
				
						</tr>
            )) : (
              <p>You have no data</p>
            )}
					</tbody>

	
					
				
		
	</table>
    </main>
    <ToastContainer />
    </>
  );
};

export default AssetDeclaration;