
import Box from '@mui/material/Box';
import { Routes, Route, useNavigate } from "react-router-dom"
import { useEffect, useContext, useState } from "react";
import { LoginContext } from "./components/ContextProvider/Context";

//subuser
import Subuserregister from "./components/Subusercontrol/Register";
import Subuserlogin from "./components/Subusercontrol/Login";
import Subuserforgotpass from "./components/Subusercontrol/ForgotPassword";
import Subuserreset from "./components/Subusercontrol/PasswordReset";
import Subdash from "./components/Subusercontrol/Dashboard";



//client
import Dashboard from "./components/Clientcontrol/Dashboard";
import Error from "./components/Clientcontrol/Error";
import PasswordReset from "./components/Clientcontrol/PasswordReset";
import ForgotPassword from "./components/Clientcontrol/ForgotPassword";
import Logins from "./components/Clientcontrol/Login";
import Registers from "./components/Clientcontrol/Register";


//superadmin
import Superregister from "./components/Superadmincontrol/Register";
import Superreset from "./components/Superadmincontrol/PasswordReset";
import Superlogin from "./components/Superadmincontrol/Login";
import Superforgotpass from "./components/Superadmincontrol/ForgotPassword";
import Client from "./components/Superadmincontrol/Client";
import Superdash from "./components/Superadmincontrol/Dashboard";
import Clientlist from "./components/Superadmincontrol/Clientlist";
import Clientdetail from "./components/Superadmincontrol/Clientdetails";
import Superadd from "./components/Superadmincontrol/Superadd";




//clientpage
import Scope3goodsdash from "./components/Clientpages/Scope3goodsdash";
import Downstream from "./components/Clientpages/Downstream";
import Question from "./components/Clientpages/Question"
import Fugitive2 from "./components/Clientpages/Fugitivegas";
import AssetDeclaration from "./components/Clientpages/AssetDeclaration";
import CompanyDetails from "./components/Clientpages/CompanyDetails";
import Mobile from "./components/Clientpages/Mobilecombustion";
import Home1View from "./components/Clientpages/Mobilecombustiondash";
import Process from "./components/Clientpages/Processemission";
import Processdash from "./components/Clientpages/processemissiondash";
import Fugi from "./components/Clientpages/Fugitiveemmision";
import Fugidash from "./components/Clientpages/Fugitiveemissiondash";
import Scombustion from "./components/Clientpages/Scombution";
import Scombustionhome from "./components/Clientpages/Scombustiondash";
import Subuseradd from "./components/Clientpages/Subuseradd";
import Upstream from "./components/Clientpages/Upstream";
import Capitalgoods from "./components/Clientpages/Capitalgoods";
import Franchise from "./components/Clientpages/Franchisescope3";
import Goodsscope3 from "./components/Clientpages/Goodsscope3";
import Dummy from "./components/Dummypage";
import Franchisedash from './components/Clientpages/Franchisedash';
import Fugitivegasdash from './components/Clientpages/Fugitive2dash';
import Downdash from './components/Clientpages/Downstreamdash';
import Upstreamdashb from './components/Clientpages/Upstreamdash';
import Capdash from './components/Clientpages/Capitalgoodsdash';
import Recommendation from './components/Clientpages/Recommendation';
import Profile2 from "./components/Clientpages/profile";
import Scope2 from "./components/Clientpages/Scope2";
import Scope2dash from "./components/Clientpages/Scope2dash";
import Mainpage from "./components/Clientpages/Maindash";
///subpages
import SubScope3goodsdash from "./components/Subuserpages/Scope3goodsdash";
import SubDownstream from "./components/Subuserpages/Downstream";
import SubQuestion from "./components/Subuserpages/Question"
import SubFugitive2 from "./components/Subuserpages/Fugitivegas";

import SubMobile from "./components/Subuserpages/Mobilecombustion";
import SubHome1View from "./components/Subuserpages/Mobilecombustiondash";
import SubProcess from "./components/Subuserpages/Processemission";
import SubProcessdash from "./components/Subuserpages/processemissiondash";
import SubFugi from "./components/Subuserpages/Fugitiveemmision";
import SubFugidash from "./components/Subuserpages/Fugitiveemissiondash";
import SubScombustion from "./components/Subuserpages/Scombution";
import SubScombustionhome from "./components/Subuserpages/Scombustiondash";

import SubUpstream from "./components/Subuserpages/Upstream";
import SubCapitalgoods from "./components/Subuserpages/Capitalgoods";
import SubFranchise from "./components/Subuserpages/Franchisescope3";
import SubGoodsscope3 from "./components/Subuserpages/Goodsscope3";

import SubFranchisedash from './components/Subuserpages/Franchisedash';
import SubFugitivegasdash from './components/Subuserpages/Fugitive2dash';
import SubDowndash from './components/Subuserpages/Downstreamdash';
import SubUpstreamdashb from './components/Subuserpages/Upstreamdash';
import SubCapdash from './components/Subuserpages/Capitalgoodsdash';
import SubRecommendation from './components/Subuserpages/Recommendation';

import SubScope2 from "./components/Subuserpages/Scope2";
import SubScope2dash from "./components/Subuserpages/Scope2dash";
import SubMainpage from "./components/Subuserpages/Maindash";



//circular
import CircularProgress from '@mui/material/CircularProgress';









function App() {
  const [usrs, setTodoss] = useState([]);
  let he="Client@gmail.com"
 
  const [data, setData] = useState(false);

  const { logindata, setLoginData } = useContext(LoginContext);


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
      if (res.status === 201 ) {
        if(data.type === 0) goToPage("/dash",data);
        else if(data.type === 1)goToPage("/subdash",data);
        else if(data.type === 2) goToPage("/superdash",data);
      }else {
        console.log("user not valid ohh");
      }
    }
    }
   
  function goToPage(path,data){
    setLoginData(data)
    history(path);
  }

  useEffect(() => {
    setTimeout(()=>{
      DashboardValid();
      setData(true)
    },2000)

  }, [])

  return (
    <>
      {
        data ? (
          <>
       {/* <Route path="/service" element={<Service/>}/>
              <Route path="/subhome" element={<Subuserhome/>}/>
    
            
      
              <Route path="/mc" element={<Mc1/>}/>
           */}              {/* <Route path="/clientadd" element={<Clientusradd/>}/> */}


            <Routes>
            <Route path="/" element={<Dummy />} />
              <Route path="/login" element={<Logins />} />
              <Route path="/register" element={<Registers />} />
              <Route path="/subuserregister" element={<Subuserregister/>}/>
              <Route path="/sublogin" element={<Subuserlogin/>}/>
              <Route path="/subdash" element={<Subdash/>}/>
              <Route path="/superdash" element={<Superdash/>}/>
              <Route path="/dash" element={<Dashboard />} />

              <Route path="/password-reset" element={<PasswordReset />} />
              <Route path="/forgotpassword/:id/:token" element={<ForgotPassword />} />
              <Route path="/Superregister" element={<Superregister/>}/>
              <Route path="/Superreset" element={<Superreset/>}/>
              <Route path="/Superlogin" element={<Superlogin/>}/>
              <Route path="/superforgotpassword/:id/:token" element={<Superforgotpass/>}/>
      
          
              <Route path="/subuserreset" element={<Subuserreset/>}/>
              <Route path="/subuserforgotpassword/:id/:token" element={<Subuserforgotpass/>}/>
              <Route path="*" element={<Error />} />
      
          
              
              
              <Route path="/question" element={<Question/>}/>
            
     
       
              <Route path="/downstream" element={<Downstream/>}/>
              <Route path="/upstream" element={<Upstream/>}/>
              <Route path="/capital" element={<Capitalgoods/>}/>
              {/* <Route path="/report" element={<Report/>}/> */}
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

    <Route path="/client" element={<Client/>}/>
    <Route path="/franchise" element={<Franchise/>}/>
    <Route path="/scope3good" element={<Goodsscope3/>}/>
    <Route path="/rec" element={<Recommendation/>}/>
    <Route path="/franchdash" element={<Franchisedash/>}/>
    <Route path="/sc3godash" element={<Scope3goodsdash/>}/>
    <Route path="/fugigasdash" element={<Fugitivegasdash/>}/>
    <Route path="/downdash" element={<Downdash/>}/>
    <Route path="/updash" element={<Upstreamdashb/>}/>
    <Route path="/capdash" element={<Capdash/>}/>
    <Route path="/cli" element={<Clientlist/>}/>
    <Route path="/clidet" element={<Clientdetail/>}/>
    <Route path="/superadd" element={<Superadd/>}/>
    <Route path="/Main" element={<Mainpage/>}/>
       

   {/* <Route path="/report" element={<Report/>}/> */}
      <Route path="/" element={<SubScombustion/>}/>
      <Route path="/subhomeview" element={<SubScombustionhome/>}/>
      <Route path="/subquestion" element={<SubQuestion/>}/>
      <Route path="/subdownstream" element={<SubDownstream/>}/>
      <Route path="/subupstream" element={<SubUpstream/>}/>
      <Route path="/subcapital" element={<SubCapitalgoods/>}/>
      <Route path="/subfugitivetwo" element={<SubFugitive2/>}/>
  
      <Route path="/subhome" element={<SubScombustion/>}/>
      <Route path="/subhomeview" element={<SubScombustionhome/>}/>
      <Route path="/submobilecombustion" element={<SubMobile/>}/>
      <Route path="/submobiledash" element={<SubHome1View/>}/>
      <Route path="/subprocessemission" element={<SubProcess/>}/>
      <Route path="/subprocessdash" element={<SubProcessdash/>}/>
      <Route path="/subfug" element={<SubFugi/>}/>
      <Route path="/subfugdash" element={<SubFugidash/>}/>
      
      <Route path="/subsco" element={<SubScope2/>}/>
      <Route path="/subscodash" element={<SubScope2dash/>}/>
      <Route path="/subfranchise" element={<SubFranchise/>}/>
      <Route path="/subscope3good" element={<SubGoodsscope3/>}/>
      <Route path="/subrec" element={<SubRecommendation/>}/>
      <Route path="/subfranchdash" element={<SubFranchisedash/>}/>
      <Route path="/subsc3godash" element={<SubScope3goodsdash/>}/>
      <Route path="/subfugigasdash" element={<SubFugitivegasdash/>}/>
      <Route path="/subdowndash" element={<SubDowndash/>}/>
      <Route path="/subupdash" element={<SubUpstreamdashb/>}/>
      <Route path="/subcapdash" element={<SubCapdash/>}/>
      <Route path="/subMain" element={<SubMainpage/>}/>


            </Routes>
            
          </>

        ) : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
          Loading... &nbsp;
          <CircularProgress />
        </Box>
      }


    </>
  );
}

export default App;

