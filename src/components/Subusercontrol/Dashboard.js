import React, { useContext, useEffect ,useState} from 'react'
import { Routes,Route, useNavigate,Link } from 'react-router-dom';
import { LoginContext } from '../ContextProvider/Context';

import Box from '@mui/material/Box';
import "./dash.css"
import Fugi from "../Subuserpages/Fugitiveemmision";
import Scope3goodsdash from "../Subuserpages/Scope3goodsdash";
import Downstream from "../Subuserpages/Downstream";
import Question from "../Subuserpages/Question"
import Fugitive2 from "../Subuserpages/Fugitivegas";

import Mobile from "../Subuserpages/Mobilecombustion";
import Home1View from "../Subuserpages/Mobilecombustiondash";
import Process from "../Subuserpages/Processemission";
import Processdash from "../Subuserpages/processemissiondash";
import Fugidash from "../Subuserpages/Fugitiveemissiondash";
import Scombustion from "../Subuserpages/Scombution";
import Scombustionhome from "../Subuserpages/Scombustiondash";

import Upstream from "../Subuserpages/Upstream";
import Capitalgoods from "../Subuserpages/Capitalgoods";
import Franchise from "../Subuserpages/Franchisescope3";
import Goodsscope3 from "../Subuserpages/Goodsscope3";

import Franchisedash from '../Subuserpages/Franchisedash';
import Fugitivegasdash from '../Subuserpages/Fugitive2dash';
import Downdash from '../Subuserpages/Downstreamdash';
import Upstreamdashb from '../Subuserpages/Upstreamdash';
import Capdash from '../Subuserpages/Capitalgoodsdash';
import Recommendation from '../Subuserpages/Recommendation';
import Profile2 from "../Subuserpages/Subpro";
import Scope2 from "../Subuserpages/Scope2";
import Scope2dash from "../Subuserpages/Scope2dash";
import CircularProgress from '@mui/material/CircularProgress';
import Mainpage from "../Clientpages/Maindash";
    

const Dashboard = () => {
 

    const { logindata, setLoginData } = useContext(LoginContext);
    

    const [data, setData] = useState(false);

    //window.alert(data)
      const history = useNavigate();

    const DashboardValid = async () => {
        let token = localStorage.getItem("token");
        const res = await fetch("/user/validate", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });
        const data = await res.json();
        if (res.status === 201 && (data.type === 1 || data.type === 2)) {
              goToPage("/subdash",data)
        }else if(data.type === 0){
              goToPage("/dash",data)
        } else {
              history("/")
        }
    }

    function goToPage(path,data){setLoginData(data);history(path);}


    useEffect(() => {
        setTimeout(() => {
            DashboardValid();
            setData(true)
        },2000)

    }, [])

    return (
        <>  
        
        {
        data ? (
        <>
        <Routes> 
      <Route path="/" element={<Scombustion/>}/>
      <Route path="/subhomeview" element={<Scombustionhome/>}/>
      <Route path="/subquestion" element={<Question/>}/>
      <Route path="/subdownstream" element={<Downstream/>}/>
      <Route path="/subupstream" element={<Upstream/>}/>
      <Route path="/subcapital" element={<Capitalgoods/>}/>
      <Route path="/subfugitivetwo" element={<Fugitive2/>}/>
   
      <Route path="/subhome" element={<Scombustion/>}/>
      <Route path="/subhomeview" element={<Scombustionhome/>}/>
      <Route path="/submobilecombustion" element={<Mobile/>}/>
      <Route path="/submobiledash" element={<Home1View/>}/>
      <Route path="/subprocessemission" element={<Process/>}/>
      <Route path="/subprocessdash" element={<Processdash/>}/>
      <Route path="/subfug" element={<Fugi/>}/>
      <Route path="/subfugdash" element={<Fugidash/>}/>
    
      <Route path="/subprofile" element={<Profile2/>}/>
      <Route path="/subsco" element={<Scope2/>}/>
      <Route path="/subscodash" element={<Scope2dash/>}/>
      <Route path="/subfranchise" element={<Franchise/>}/>
      <Route path="/subscope3good" element={<Goodsscope3/>}/>
      <Route path="/subrec" element={<Recommendation/>}/>
      <Route path="/subfranchdash" element={<Franchisedash/>}/>
      <Route path="/subsc3godash" element={<Scope3goodsdash/>}/>
      <Route path="/subfugigasdash" element={<Fugitivegasdash/>}/>
      <Route path="/subdowndash" element={<Downdash/>}/>
      <Route path="/subupdash" element={<Upstreamdashb/>}/>
      <Route path="/subcapdash" element={<Capdash/>}/>
      <Route path="/subMain" element={<Mainpage/>}/>
        </Routes>

  
       {/* <h1>user home page</h1>
       <Service/> */}
    </>) : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
          Loading... &nbsp;
          <CircularProgress />
        </Box>
      }</>
    )
}

export default Dashboard;