import { NavLink,useNavigate} from "react-router-dom"
import { useCallback,useState,useContext,useEffect } from "react";
import { Button, Icon } from "@mui/material";
import styles from "./Profile.module.css";
import { LoginContext } from "../ContextProvider/Context";
import Header from './Header';
const Profile = () => {
  
  const [usrs, setTodoss] = useState([]);
  const [usr, setTodos] = useState([]);

  const { logindata } = useContext(LoginContext);
  
  let he="hello"
const asuser = async()=>{he=(logindata.ValidUserOne.map)}

asuser();

  const hellos =async(e)=>{
    const email = logindata.email;
    
        const datap = await fetch("/comp", {
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
      const navigate = useNavigate();
  

  const onManageUsersClick = useCallback(() => {
    // Please sync "Subuser Page" to the project
    navigate("/Subuseradd");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    // Please sync "Company Details " to the project
    navigate("/companyadd");
  }, [navigate]);


  const hello =async(e)=>{
    const eemail=he
    
        const datap = await fetch("/sublist", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
               eemail
          })
      });
      const res = await datap.json();
      
      setTodos(res);
      }


  let i =0;
  useEffect(() => {
 
    hellos();
    hello();

  }, []);
  return (<>
    {usrs ? usrs.map(todo => (
				
   
            



    <div className={styles.profile}>
      <div className={styles.profileChild} />
      <div className={styles.profileItem} />
      
      <img
        className={styles.rectangleIcon}
        alt=""
        src="../rectangle-77@2x.png"
      />
      <img className={styles.ellipseIcon} alt="" src="../ellipse-67.svg" />
      <img className={styles.profileChild1} alt="" src="../ellipse-9@2x.png" />
      <h2 className={styles.companyName}>{todo.cname}</h2>
      <p className={styles.description}>Description</p>
      <a className={styles.wwwcompanynamecom}>{todo.website}</a>
      <p className={styles.loremIpsumDolorContainer}>
        <span className={styles.loremIpsumDolor}>
         {usrs.description}
        </span>
        <span className={styles.loremIpsumDolor}>&nbsp;</span>
        <span className={styles.loremIpsumDolor}>
        {todo.description}
        </span>
        <span className={styles.loremIpsumDolor}>&nbsp;</span>
        <span className={styles.loremIpsumDolor}>
         
        </span>
        <span className={styles.loremIpsumDolor}>&nbsp;</span>
      </p>
      <nav className={styles.rectangleNav} />
      <img
        className={styles.whatsappImage20221222At9}
        alt=""
        src="../whatsapp-image-20221222-at-923-3@2x.png"
      />
<div className={styles.profileChild2}>  <Header/></div>
      <img className={styles.profileChild3} alt="" src="../ellipse-56.svg" />
      <a className={styles.measure}>Measure</a>
      <a className={styles.reduce}>Reduce</a>
      <a className={styles.offset}>Offset</a>
      <a className={styles.dashboard}>Dashboard</a>
      <div className={styles.rectangleDiv} />
      <div className={styles.profileChild4} />
      <h2 className={styles.users}>Users</h2>
   
  
      <p className={styles.employees}>{todo.noemployees}</p>
      <p className={styles.p}>{todo.pocnumber}</p>
      <p className={styles.addressLine1}>{todo.address}</p>
      <p className={styles.addressLine2}></p>
      <p className={styles.countryPincode}></p>
      <p className={styles.dollars}>{todo.currency}</p>
  
 
   
    
      <a className={styles.manageUsers} onClick={onManageUsersClick}>
        Manage users
      </a>
      <Button
        className={styles.rectangleButton}
        sx={{ width: 103 }}
        variant="contained"
        color="success"
        onClick={onRectangleButtonClick}
      >
        Edit Profile
      </Button>
      
      <img className={styles.money1Icon} alt="" src="../money-1@2x.png" />
      <img className={styles.gps1Icon} alt="" src="../gps-1@2x.png" />
      <img className={styles.phone1Icon} alt="" src="../phone-1@2x.png" />
      <img
        className={styles.identityCard1Icon}
        alt=""
        src="../identitycard-1@2x.png"
      />
   <div className={styles.hello}>
      {usr.length > 0  ? usr.map
    (hello => (
        <tr>
     
        <h4>{i=i+1}.{hello.email}</h4>
        </tr>
        )) : (
          <p>You have no users</p>
        )}</div>
      
     
    </div>)):(<div><h1>shd</h1></div>) }</>
  );
};

export default Profile;
