import React, { useContext, useEffect ,useState} from 'react'

import Box from '@mui/material/Box';
import { Routes,Route, useNavigate,Link } from 'react-router-dom';
import { LoginContext } from '../ContextProvider/Context';

import Fugi from "../Clientpages/Fugitiveemmision";
import "./dash.css"
import Scope3goodsdash from "../Clientpages/Scope3goodsdash";
import Downstream from "../Clientpages/Downstream";
import Question from "../Clientpages/Question"
import Fugitive2 from "../Clientpages/Fugitivegas";
import AssetDeclaration from "../Clientpages/AssetDeclaration";
import CompanyDetails from "../Clientpages/CompanyDetails";
import Mobile from "../Clientpages/Mobilecombustion";
import Home1View from "../Clientpages/Mobilecombustiondash";
import Process from "../Clientpages/Processemission";
import Processdash from "../Clientpages/processemissiondash";
import Fugidash from "../Clientpages/Fugitiveemissiondash";
import Scombustion from "../Clientpages/Scombution";
import Scombustionhome from "../Clientpages/Scombustiondash";
import Subuseradd from "../Clientpages/Subuseradd";
import Upstream from "../Clientpages/Upstream";
import Capitalgoods from "../Clientpages/Capitalgoods";
import Franchise from "../Clientpages/Franchisescope3";
import Goodsscope3 from "../Clientpages/Goodsscope3";

import Franchisedash from '../Clientpages/Franchisedash';
import Fugitivegasdash from '../Clientpages/Fugitive2dash';
import Downdash from '../Clientpages/Downstreamdash';
import Upstreamdashb from '../Clientpages/Upstreamdash';
import Capdash from '../Clientpages/Capitalgoodsdash';
import Recommendation from '../Clientpages/Recommendation';
import Profile2 from "../Clientpages/profile";
import Scope2 from "../Clientpages/Scope2";
import Scope2dash from "../Clientpages/Scope2dash";
import CircularProgress from '@mui/material/CircularProgress';    
import Mainpage from "../Clientpages/Maindash";

const Dashboard = () => {

    const { logindata, setLoginData } = useContext(LoginContext);
    
    let he="hello"
    const asuser = async()=>{he=(logindata.ValidUserOne.map);}

asuser();
    const [data, setData] = useState(false);

      const history = useNavigate();

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
            if (res.status === 201 &&  (data.type === 0 || data.type  === 2)) {
                goToPage("/dash",data)
            }else if(data.type === 1) {
                goToPage("/subdash",data)
            }else{
              history("/");
            }
        }else{
          history("/");
        }
    }

    function goToPage(path,data){
      setLoginData(data)
      history(path);
    }


    useEffect(() => {
        setTimeout(() => {
            DashboardValid();
            setData(true)
        }, 2000)
    }, [])

    return (
        <>

{
        data ? (
        <>
<Routes> 
      <Route path="/" element={<Scombustion/>}/>
      <Route path="/homeview" element={<Scombustionhome/>}/>
      <Route path="/question" element={<Question/>}/>
      <Route path="/downstream" element={<Downstream/>}/>
      <Route path="/upstream" element={<Upstream/>}/>
      <Route path="/capital" element={<Capitalgoods/>}/>
      <Route path="/fugitivetwo" element={<Fugitive2/>}/>
      <Route path="/companyadd2" element={<AssetDeclaration/>}/>
      <Route path="/companyadd" element={<CompanyDetails/>}/>
      <Route path="/home" element={<Scombustion/>}/>
      <Route path="/homeview" element={<Scombustionhome/>}/>
      <Route path="/mobilecombustion" element={<Mobile/>}/>
      <Route path="/mobiledash" element={<Home1View/>}/>
      <Route path="/processemission" element={<Process/>}/>
      <Route path="/processdash" element={<Processdash/>}/>
      <Route path="/fug" element={<Fugi/>}/>
      <Route path="/fugdash" element={<Fugidash/>}/>
      <Route path="/Subuseradd" element={<Subuseradd/>}/>
      <Route path="/profile" element={<Profile2/>}/>
      <Route path="/sco" element={<Scope2/>}/>
      <Route path="/scodash" element={<Scope2dash/>}/>
      <Route path="/franchise" element={<Franchise/>}/>
      <Route path="/scope3good" element={<Goodsscope3/>}/>
      <Route path="/rec" element={<Recommendation/>}/>
      <Route path="/franchdash" element={<Franchisedash/>}/>
      <Route path="/sc3godash" element={<Scope3goodsdash/>}/>
      <Route path="/fugigasdash" element={<Fugitivegasdash/>}/>
      <Route path="/downdash" element={<Downdash/>}/>
      <Route path="/updash" element={<Upstreamdashb/>}/>
      <Route path="/capdash" element={<Capdash/>}/>
      <Route path="/Main" element={<Mainpage/>}/>
  </Routes>

          </>
          ) : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
          Loading... &nbsp;
          <CircularProgress />
        </Box>
      }
    </>
    )
}

export default Dashboard;