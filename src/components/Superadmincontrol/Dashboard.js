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
        if(token){
          const res = await fetch("/user/validate", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });
        const data = await res.json();
            if(res.status === 201  && data.type){
               if(data.type === 0){
                setLoginData(data);
                history("/dash");
               } 
               else if(data.type === 1) {
                setLoginData(data);
                history("/subdash");
               }
               else if(data.type === 2){
                setLoginData(data);
                history("/superdash");
               }
               else  history("/");
            }
            else{ history("/")}
             
        }else{
          history("/")
        }
    }
    
    function goToPage(path,data){
      setLoginData(data);
      history(path);
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