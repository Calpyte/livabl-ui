
import { Form, Button } from "react-bootstrap";
import Header from './Header';
import React, { useCallback ,useState,useContext, useEffect} from 'react';
import { useNavigate,Link} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from "../ContextProvider/Context";
import "./Home1Add.css";

const Scomp = () =>{
     
  const history = useNavigate();
  const [usrs, setTodoss] = useState([]);
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  const { logindata } = useContext(LoginContext);
  
  let he="hello"
  const asuser = async()=>{he=(logindata.ValidUserOne.email)}
  
  asuser();

  const [active, setFuel] = useState(true);
  const [ractive, setrFuel] = useState(true);
 

const [inpval, setInpval] = useState({
    email:"",
    pass:""
});
  const [inpvals, setInpvals] = useState({
     
    remail:""
  });
    const setValss = (e) => {
      setFuel(e.target.value)}
      const setValsss = (e) => {
        setrFuel(e.target.value)}
  

  const setVal = (e) => {
    
    
      const {name, value} = e.target;

      setInpval(() => {
          return {
              ...inpval,
              [name]: value,
            
          }
      })
  };
  
  const setVals = (e) => {
    
    
    const {name, value} = e.target;

    setInpvals(() => {
        return {
            ...inpval,
            [name]: value,
          
        }
    })
};

  const addCompanydata = async (e) => {
      e.preventDefault();
      const {email,pass } = inpval;

  
         if (email === "") {
          toast.warning("code is required!", {
              position: "top-center"
          });}
          else if (pass === "") {
            toast.warning("Facility is required!", {
                position: "top-center"
            });
            }else{
          
          const data = await fetch("/user/register", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                "email":email,
                "password":pass,
                "isActive": active,
                "type":0
              })
          });

          const res = await data.json();
          
          setCount((c) => c + 1)
          


            if (data.status === 201) {
              toast.success(" User Added 😃!", {
                  position: "top-center"
              });
              setInpval({...inpval,email:"",pass:""});
            }
            else {
              toast.error("User Already exists!", {position: "top-center"});
            }

          
  }}
  const hellos =async(e)=>{
    const datap = await fetch("/user/by-type?type=0", {
      method: "GET",
      headers: {
          "Content-Type": "application/json"
      }
    
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
    navigate("/processdash");
  }, [navigate]);


  const raddCompanydata = async (e) => {
    e.preventDefault();

    const { remail} = inpvals;

      
       if (remail === "") {
        toast.warning("email is required!", {
            position: "top-center"
        });}
      else{



        const data = await fetch("/user/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email":remail,
                "isActive":ractive,
                "type":0
            })
        });

        const res = await data.json();
        
        setCount((c) => c + 1)

        if (data.status === 200) {
           
            toast.success(" Data saved 😃!", {
                position: "top-center"
            });
            setInpvals({ ...inpvals,  
              
            remail:"",
        
           });}else {
            toast.error(" Please Check the Email!", {
              position: "top-center"
          });
            }

        
}}


const [inp, setInp] = useState({
     
  to:"",
  subject:"",
  text:""
});
const setVa = (e) => {
    
    
  const {name, value} = e.target;

  setInp(() => {
      return {
          ...inp,
          [name]: value,
        
      }
  })
};
const mail = async(e)=>{
  e.preventDefault();
  const {to,subject,text } = inp;
  if (to === "") {
    toast.warning("To is required!", {
        position: "top-center"
    });}
     else if (subject === "") {
      toast.warning("Subject is required!", {
          position: "top-center"
      });}
      else if (text === "") {
        toast.warning("Text is required!", {
            position: "top-center"
        });
        
      }else{

        const data = await fetch("/message/save", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              
            to,subject,text    
                })

      });

      const res = await data.json();
      

      if (data.status === 201) {
        toast.success(" Email sent 😃!", {
            position: "top-center"
        });
        setInp({ ...inp,  
          
          to:"",
          subject:"",
          text:""
          
       });}else {
        toast.error("Not sent!", {
          position: "top-center"
      });
        }

      }
}



let i = 0;
useEffect(() => {
 
  hellos();
setCalculation(() => count * 2);
}, [count]);
  return(
    <div className="home1-hello">
      <div className="home1-add-inner" />
      <img
        className="whatsapp-image-2022-12-22-at-9"
        alt=""
        src="../whatsapp-image-20221222-at-923-3@2x.png"
      />
     <div className="ellipse-icon">  <Header/></div>
     
       <div className="subract">
      <select value={ractive} onChange={setValsss} className="rsaa" >
        <option value={true}>Activate</option>
        <option value={false}>Inactivate</option>
        <option value="remove">Remove</option>
      </select>
    </div>
      
    
 
      <div className="subact">
      <select value={active} onChange={setValss} className="saa" >
        <option value={true}>Yes</option>
        <option value={false}>No</option>
  
      </select>

    </div>


         
    
     <Form.Group className="subremail">
        <Form.Control   type="text"
              placeholder="Enter Client email"
              name="remail"
              onChange={setVals}
              value={inpvals.remail}
              id="remail"/>
      </Form.Group> 
   

    
       <Form.Group className="subemail">
        <Form.Control  type="text"
              placeholder="Enter Client email"
              name="email"
              onChange={setVal}
              value={inpval.email}
              id="email"/>
      </Form.Group>
   
     
 
      <h2 className="subuser">Client Control</h2>

      <Form.Group className="subpass">
        <Form.Control  type="text"
              placeholder="Set password"
              name="pass"
              onChange={setVal}
              value={inpval.pass}
              id="pass" />
      </Form.Group>
   
      <div className='danger2'>
        
    <h3 align="center">Contact Clients</h3>
   <div className='sup'> 
    <h3>To:</h3>
      <input className='inp'
        type="text"
        placeholder="enter the email"
        name="to"
        onChange={setVa}
        value={inp.to}
        id="to"
        
      /></div>
      <div className='sup'> 
    <h3>Subject:</h3>
      <input className='inp'
        type="text"
        placeholder="enter subject"
        name="subject"
        onChange={setVa}
        value={inp.subject}
        id="subject"
      /></div>
      <div className='sup'> 
    <h3>Text:</h3>
      <input className='inp'
        type="text"
        placeholder="enter text"
        name="text"
        onChange={setVa}
        value={inp.text}
        id="text"
        
      /></div>
      
      <div className="sbuuton"  >
      <button className='butttonsuper' onClick={mail}>Send</button>
     
      </div>

      
      </div>
   

      <h4 className="subhead">Client Email</h4>
      
      <h4 className="subhead2">Set Client Password</h4>
      <h4 className="subhead3">Active Status</h4>
  
       <Button className="subbutton" variant="primary" onClick={addCompanydata}>
        Add user
      </Button>
      <Button className="subrbutton" variant="primary" onClick={raddCompanydata}>
        Save
      </Button>
     <Link to="/cli"><a className="measure">Clients</a></Link> 
      <Link to="/client"><a className="reduce">Clientcontrol</a></Link>
      <Link to="/superadd"><a className="offset">Addsuperadmin</a></Link>
      <Link to="/clidet"><a className="dashboard">Client details</a></Link> 
    <table className="subusertable">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Email</th>
            <th>Active Status</th>
            <th>Password</th>
          </tr>
        </thead>
       <tbody>
       {usrs.length > 0  ? usrs.map
         (todo => (
          <tr>
          <td  key="{qaait}">{i=i+1}</td>
          <td  key="{qantiy}">{todo?.email}</td>
          <td  key="{quantity}">{todo?.isActive+""}</td>
          <td  key="{qantity}">{todo?.password}</td>
          </tr>
          )) : (
            <tr><td><p>You have no users</p></td></tr>
          )}
        </tbody>
      </table> 
  <ToastContainer/> 
</div>
        
   
   
  
  )


}

export default Scomp;