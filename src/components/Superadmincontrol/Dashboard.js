import React, { useContext, useEffect ,useState,useCallback} from 'react'
import { Routes,Route, useNavigate,Link } from 'react-router-dom';
import { LoginContext } from '../ContextProvider/Context';

import "./dash.css"
import Client from './Client'
import Clientlist from './Clientlist'

    

const Dashboard = () => {
 

    const { logindata, setLoginData } = useContext(LoginContext);
    

    const [data, setData] = useState(false);

    //window.alert(data)
      const history = useNavigate();
     
      const onAddDataClick = useCallback(() => {
        history("/cli");
      }, []);

    const DashboardValid = async () => {
        let token = localStorage.getItem("usersdatatoken");
        let stoken = localStorage.getItem("susersdatatoken");
        let atoken = localStorage.getItem("ausersdatatoken");

        const res = await fetch("/validuser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });

        const data = await res.json();
        const sres = await fetch("/subuservaliduser", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": stoken
          }
        });
          const sdata = await sres.json();
          //superadmin
          const ares = await fetch("/supervaliduser", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": atoken
            }
          });
            const adata = await ares.json();
            if (res.status == 201 ) {
              console.log("user verify");
              setLoginData(data)
              history("/dash");
            }else if(sres.status == 201){
              console.log("user verify");
              setLoginData(sdata)
              history("/subdash");
            }else if(ares.status == 201){
              console.log("user verify");
              setLoginData(adata)
              history("/superdash");
            }  else {
               history("/")
            }
    }


    useEffect(() => {
        setTimeout(() => {
            DashboardValid();
            setData(true)
        },2000)

    }, [])

    return (
        <>  
        <Routes> 
        <Route path="/" element={<Client/>}/>
        <Route path="/superdash" element={<Clientlist/>}/>
       
        </Routes>
   
       
    </>
    )
}

export default Dashboard;