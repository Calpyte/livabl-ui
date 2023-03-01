import { useCallback ,useState,useContext} from "react";

import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./CompanyDetails.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from "../ContextProvider/Context";

const CompanyDetails = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/companyadd2");
  }, [navigate]);
  const { logindata } = useContext(LoginContext);
  
  let he="hello"
const asuser = async()=>{he=(logindata.ValidUserOne.email)}

asuser();

  const [inpval, setInpval] = useState({
     
    cname:"",
  
   description:"",
   address:"",
   website:"",
   noemployees:"",
   pocname:"",
   currency:"",
   pocnumber:""
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

const addCompanydata = async (e) => {
    e.preventDefault();

    const { cname,currency, pocnumber, pocname,noemployees,website,address,description} = inpval;

       // name,user,currency, country, pointofcontact,productservices,id,employee,website,activity,address
     

      
        const email=logindata.email;
        const data = await fetch("/addcompany1", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // fname, email, password, cpassword
                cname,email,currency, pocnumber, pocname,noemployees,website,address,description
            })
        });

        const res = await data.json();
        


        if (res.status === 201) {
            toast.success(" Data saved 😃!", {
                position: "top-center"
            });
            setInpval({ ...inpval,  
              cname:"",
  
   description:"",
   address:"",
   website:"",
   noemployees:"",
   pocname:"",
   currency:"",
   pocnumber:"" 
  });}else {
            toast.success(" Data saved 😃!", {
              position: "top-center"
          });
            }

        // }else{
        //     // toast.error("alredy exists!", {
        //     //     position: "top-center"
        //     // });
        // }
    // }
}


  return (
    <div className="company-details">
      <Form.Group className="wrapper001">
        <Form.Control as="textarea" rows={7} 
 name="description"
 onChange={setVal}
 value={inpval.description}
 id="description"/>
      </Form.Group>
      <img
        className="whatsapp-imag"
        alt=""
        src="../whatsapp-image-20221222-at-923-2@2x.png"
      />
      <Form.Group className="contain">
        <Form.Control type="text"
        placeholder="company name "
        name="cname"
        onChange={setVal}
        value={inpval.cname}
        id="cname" />
      </Form.Group>
      <Form.Group className="fram">
        <Form.Control as="textarea" rows={3} 
       placeholder="Enter Address"
       margin="none"
       name="address"
       onChange={setVal}
       value={inpval.address}
       id="address"/>
      </Form.Group>
      <Form.Group className="rectangle-go">
        <Form.Control type="text" 
          name="noemployees"
          onChange={setVal}
          value={inpval.noemployees}
          id="noemployees"/>
      </Form.Group>
      <Form.Group className="wrap">
        <Form.Control type="text"
         name="website"
         onChange={setVal}
         value={inpval.website}
         id="website" />
      </Form.Group>
      <div className="company-name">Company Name</div>
      <div className="registered-address">{`Registered Address* `}</div>
      <div className="no-of-employees">No. of Employees*</div>
      <div className="website">Website</div>
      <Form.Group className="wrapperhell">
        <Form.Control type="text" 
        name="pocnumber"
        onChange={setVal}
        value={inpval.pocnumber}
        id="pocnumber"/>
      </Form.Group>
      <div className="phone-no-of-poc">Phone no. of POC</div>
      <Form.Group className="wr">
        <Form.Control type="text"
         name="pocname"
         onChange={setVal}
         value={inpval.pocname}
         id="pocname" />
      </Form.Group>
      <div className="name-of-point-of-contact">Name of Point of Contact*</div>
      <Form.Group className="wrapper4">
        <Form.Control type="text" 
         name="currency"
         onChange={setVal}
         value={inpval.currency}
         id="currency"/>
      </Form.Group>
      <div className="currency-in-which-financial-di">
        Currency in which financial disclosures are made ?*
      </div>
      <img className="company-details-child" alt="" src="../ellipse-9@2x.png" />
      <div className="general-description-of-the-com">
        General Description of the Company*
      </div>
      <Button
        className="company-details-item"
        variant="success"
        onClick={onRectangleButtonClick}
   
      >
        Next
      </Button>
      <Button
        className="companyy-details-item"
        variant="success"
        href="/asset-declaration"
        onClick={addCompanydata}
      >
        Save Details
      </Button>
      <img className="company-details-inner" alt="" src="../ellipse-10.svg" />
      <img className="ellipse-iconn" alt="" src="../ellipse-11.svg" />
      <img className="company-details-child1" alt="" src="../ellipse-11.svg" />
      <div className="line-div" />
      <div className="company-details-child2" />
      <div className="company-details1">Company Details</div>
      <div className="asset-declaration">Asset Declaration</div>
      <div className="questionarre">Questionarre</div>
      <ToastContainer />

    </div>
  );
};

export default CompanyDetails;
