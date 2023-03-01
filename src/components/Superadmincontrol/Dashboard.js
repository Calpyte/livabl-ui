import React, { useContext, useEffect ,useState,useCallback} from 'react'
import { Routes,Route, useNavigate,Link } from 'react-router-dom';
import { LoginContext } from '../ContextProvider/Context';

import "./dash.css"
import Client from './Client'
import Clientlist from './Clientlist'

    

const Dashboard = () => {
    const { logindata, setLoginData } = useContext(LoginContext);
    const [data, setData] = useState(false);
    const history = useNavigate();

      const onAddDataClick = useCallback(() => {
        history("/cli");
      }, []);

    const DashboardValid = async () => {
        let token = localStorage.getItem("token");
        let obj = { 0:"/dash", 1:"/subdash" , 2:"/superdash" };
        if(token){
          const res = await fetch("/user/validate", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });
        const data = await res.json();
            if(res.status === 201  && data.type) goToPage(obj[data?.type],data)
            else history("/")
        }else{
          history("/")
        }

        
    function goToPage(path,data){
      setLoginData(data)
      history(path);
    }

    }


    useEffect(() => {
        DashboardValid();
        setData(true)
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