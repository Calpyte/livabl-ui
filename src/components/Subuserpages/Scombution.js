import Header from './Header';
import { Form, Button } from "react-bootstrap";

import React, { Component ,useCallback ,useState,useContext, useEffect} from 'react';
import { NavLink,useNavigate,Link} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from "../ContextProvider/Context";
import "./Home1Add.css";
import DatePicker from 'react-date-picker';
const Scomp = () =>{
  const [dte, onChange] = useState(new Date());
  const [usrs, setTodoss] = useState([]);
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  const { logindata } = useContext(LoginContext);
  
  let he="hello"
  let person="hello"
const asuser = async()=>{he=(logindata.ValidUserOne.map);
  person=(logindata.ValidUserOne.fname)}

asuser();





  const onViewDataClick = useCallback(() => {
   
  }, []);
  const getInitialState = () => {
    const type = "Boilers";
    return type;
  };
  const getInitialStates = () => {
    const type = "kg";
    return type;
  };

  const [type, setType] = useState(getInitialState);
  const [weight, setWeight] = useState(getInitialStates);
  const [fuel, setFuel] = useState("Crudeoil");
 
  
  
const [inpval, setInpval] = useState({
     
      code:"",
      facility:"",
      quantity:"",
      // type:type,
      // weight:weight,
      // fuel:fuel
     
  });
  const setVals = (e) => {
    setWeight(e.target.value)}
    const setValss = (e) => {
      setFuel(e.target.value)}
      const setValsss = (e) => {
        setType(e.target.value);}

  const setVal = (e) => {
    
    
      const {name, value} = e.target;

      setInpval(() => {
          return {
              ...inpval,
              [name]: value,
            
          }
      })
  };

  const addCompanydata = async (e) => {
      e.preventDefault();

      const { code,facility,quantity } = inpval;

         
         if (code === "") {
          toast.warning("code is required!", {
              position: "top-center"
          });}
          else if (facility === "") {
            toast.warning("Facility is required!", {
                position: "top-center"
            });
            }else if (quantity === "") {
              toast.warning("quantity is required!", {
                  position: "top-center"
              });}else{
//calculation


const crudeoil=3100.59;
const crudeoilch4=0.423;
const crudeoilno2=0.02538;

function crudeoils(calc){
    var result=(calc*(crudeoil/1000))
    var resultch4=(calc*(crudeoilch4/1000))
    var resultno2=(calc*(crudeoilno2/1000))

   return [result,resultch4,resultno2]
   
   
}



  const  NaturalGasLiquids=	2837.64
  const  NaturalGasLiquidsch4=	0.442
  const  NaturalGasLiquidsno2=	0.02652

  function NaturalGasLiquidss(calc){
    var result=(calc*(NaturalGasLiquids/1000))
    var resultch4=(calc*(NaturalGasLiquidsch4/1000))
    var resultno2=(calc*(NaturalGasLiquidsno2/1000))
   return [result,resultch4,resultno2]
   
}
        

        
        const  Orimulsion=2117.5
        const  Orimulsionch4=	0.275
        const  Orimulsionno2=	0.0165
      
        function Orimulsions(calc){
          var result=(calc*(Orimulsion/1000))
          var resultch4=(calc*(Orimulsionch4/1000))
          var resultno2=(calc*(Orimulsionno2/1000))
         return [result,resultch4,resultno2]
         
      }
              
  const  Motorgasoline	=3069.99
  const  Motorgasolinech4	=0.443
  const  Motorgasolineno2	=0.02658

  function  Motorgasolines(calc){
    var result=(calc*( Motorgasoline/1000))
     var resultch4=(calc*(Motorgasolinech4/1000))
    var resultno2=(calc*(Motorgasolineno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Aviationgasoline=3101
  function Aviationgasolines(calc){
    var result=(calc*(Aviationgasoline/1000))
     var resultch4=(calc*(crudeoilch4/1000))
    var resultno2=(calc*(crudeoilno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Jetgasoline	=3101
  const  Jetgasolinech4	=0.443
  const  Jetgasolineno2	=0.02658

  function Jetgasolines(calc){
    var result=(calc*(Jetgasoline/1000))
     var resultch4=(calc*(Jetgasolinech4/1000))
    var resultno2=(calc*(Jetgasolineno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Jetkerosene	=3153.15
  const  Jetkerosenech4	=0.443
  const  Jetkeroseneno2	=0.02658

  function Jetkerosenes(calc){
    var result=(calc*(Jetkerosene/1000))
     var resultch4=(calc*(Jetkerosenech4/1000))
    var resultno2=(calc*(Jetkeroseneno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Otherkerosene=	3149.22
  const  Otherkerosenech4=	0.438
const  Otherkeroseneno2=	0.02628
  function Otherkerosenes(calc){
    var result=(calc*(Otherkerosene/1000))
     var resultch4=(calc*(Otherkerosenech4/1000))
    var resultno2=(calc*(Otherkeroseneno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Shaleoil	=2792.73
  const  Shaleoilch4	=0.381
  const  Shaleoilno2	=0.02286

  function Shaleoils(calc){
    var result=(calc*(Shaleoil/1000))
     var resultch4=(calc*(Shaleoilch4/1000))
    var resultno2=(calc*(Shaleoilno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  GasDieseloil=	3186.3
  const  GasDieseloilch4=	0.43
  const  GasDieseloilno2=	0.0258

  function GasDieseloils(calc){
    var result=(calc*(GasDieseloil/1000))
     var resultch4=(calc*(GasDieseloilch4/1000))
    var resultno2=(calc*(GasDieseloilno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Residualfueloil=	3126.96
  const  Residualfueloilch4=	0.404
  const  Residualfueloilno2=0.02424

  function Residualfueloils(calc){
    var result=(calc*(Residualfueloil/1000))
     var resultch4=(calc*(Residualfueloilch4/1000))
    var resultno2=(calc*(Residualfueloilno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  PetroleumGases	=2984.63
  const  PetroleumGasesch4	=0.2365
const  PetroleumGasesno2	=0.00473
  function PetroleumGasess(calc){
    var result=(calc*(PetroleumGases/1000))
     var resultch4=(calc*(PetroleumGasesch4/1000))
    var resultno2=(calc*(PetroleumGasesno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Ethane	=2858.24
  const  Ethanech4	=0.232
  const  Ethaneno2	=0.00464

  function Ethanes(calc){
    var result=(calc*(Ethane/1000))
     var resultch4=(calc*(Ethanech4/1000))
    var resultno2=(calc*(Ethaneno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Naphtha	=3261.85
  const  Naphthach4	=0.445
  const  Naphthano2	=0.0267

  function Naphthas(calc){
    var result=(calc*(Naphtha/1000))
     var resultch4=(calc*(Naphthach4/1000))
    var resultno2=(calc*(Naphthano2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Bitumen	=3244.14
  const  Bitumench4	=0.402
  const  Bitumenno2	=0.02412

  function Bitumens(calc){
    var result=(calc*(Bitumen/1000))
     var resultch4=(calc*(Bitumench4/1000))
    var resultno2=(calc*(Bitumenno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Lubricants=	2946.66
  const  Lubricantsch4=	0.402
  const  Lubricantsno2=	0.02412

  function Lubricantss(calc){
    var result=(calc*(Lubricants/1000))
     var resultch4=(calc*(Lubricantsch4/1000))
    var resultno2=(calc*(Lubricantsno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Petroleumcoke=	3168.75
  const  Petroleumcokech4=	0.325
  const  Petroleumcokeno2=	0.0195

  function Petroleumcokes(calc){
    var result=(calc*(Petroleumcoke/1000))
     var resultch4=(calc*(Petroleumcokech4/1000))
    var resultno2=(calc*(Petroleumcokeno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Refineryfeedstocks=	3151.9
  const  Refineryfeedstocksch4=	0.43
  const  Refineryfeedstocksno2=	0.0258

  function Refineryfeedstockss(calc){
    var result=(calc*(Refineryfeedstocks/1000))
     var resultch4=(calc*(Refineryfeedstocksch4/1000))
    var resultno2=(calc*(Refineryfeedstocksno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Refinerygas	=2851.2
  const  Refinerygasch4	=0.2475
  const  Refinerygasno2	=0.00495

  function Refinerygass(calc){
    var result=(calc*(Refinerygas/1000))
     var resultch4=(calc*(Refinerygasch4/1000))
    var resultno2=(calc*(Refinerygasno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Paraffinwaxes	=2946.66
  const  Paraffinwaxesch4	=0.402
  const  Paraffinwaxesno2	=0.02412

  function Paraffinwaxess(calc){
    var result=(calc*(Paraffinwaxes/1000))
     var resultch4=(calc*(Paraffinwaxesch4/1000))
    var resultno2=(calc*(Paraffinwaxesno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  WhiteSpirit	=2946.66
  const  WhiteSpiritch4	=0.402
  const  WhiteSpiritno2	=0.02412

  function WhiteSpirits(calc){
    var result=(calc*(WhiteSpirit/1000))
     var resultch4=(calc*(WhiteSpiritch4/1000))
    var resultno2=(calc*(WhiteSpiritno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Otherpetroleumproducts=	2946.66
  const  Otherpetroleumproductsch4=	0.402
  const  Otherpetroleumproductsno2=	0.02412

  function Otherpetroleumproductss(calc){
    var result=(calc*(Otherpetroleumproducts/1000))
     var resultch4=(calc*(Otherpetroleumproductsch4/1000))
    var resultno2=(calc*(Otherpetroleumproductsno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Anthracite	=2624.61
  const  Anthracitech4	=0.267
  const  Anthraciteno2	=0.04005

  function Anthracites(calc){
    var result=(calc*(Anthracite/1000))
     var resultch4=(calc*(Anthracitech4/1000))
    var resultno2=(calc*(Anthraciteno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Cookingcoal	=2667.72
  const  Cookingcoalch4	=0.282
  const  Cookingcoalno2	=0.0423

  function Cookingcoals(calc){
    var result=(calc*(Cookingcoal/1000))
     var resultch4=(calc*(Cookingcoalch4/1000))
    var resultno2=(calc*(Cookingcoalno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Otherbituminous =	2440.68
  const  Otherbituminousch4 =	0.258
  const  Otherbituminousno2 =	0.0387

  function Otherbituminouss(calc){
    var result=(calc*(Otherbituminous/1000))
     var resultch4=(calc*(Otherbituminousch4/1000))
    var resultno2=(calc*(Otherbituminousno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Subbituminouscoal=	1816.29
  const  Subbituminouscoalch4=	0.189
  const  Subbituminouscoalno2=	0.02835

  function Subbituminouscoals(calc){
    var result=(calc*(Subbituminouscoal/1000))
     var resultch4=(calc*(Subbituminouscoalch4/1000))
    var resultno2=(calc*(Subbituminouscoalno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Lignite=	1201.9
  const  Lignitech4=0.119
  const  Ligniteno2=	0.01785

  function Lignites(calc){
    var result=(calc*(Lignite/1000))
     var resultch4=(calc*(Lignitech4/1000))
    var resultno2=(calc*(Ligniteno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Oilshale	=952.3
  const  Oilshalech4	=0.089
  const  Oilshaleno2	=0.01335

  function Oilshales(calc){
    var result=(calc*(Oilshale/1000))
     var resultch4=(calc*(Oilshalech4/1000))
    var resultno2=(calc*(Oilshaleno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  coalbriquettes=	2018.25
  const  coalbriquettesch4=	0.207
  const  coalbriquettesno2=	0.03105

  function coalbriquettess(calc){
    var result=(calc*(coalbriquettes/1000))
     var resultch4=(calc*(coalbriquettesch4/1000))
    var resultno2=(calc*(coalbriquettesno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Patentfuel	=2018.25
  const  Patentfuelch4	=0.207
  const  Patentfuelno2	=0.03105

  function Patentfuels(calc){
    var result=(calc*(Patentfuel/1000))
     var resultch4=(calc*(Patentfuelch4/1000))
    var resultno2=(calc*(Patentfuelno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  ovencoke=	3017.4
  const  ovencokech4=	0.282
  const  ovencokeno2=	0.0423

  function ovencokes(calc){
    var result=(calc*(ovencoke/1000))
     var resultch4=(calc*(ovencokech4/1000))
    var resultno2=(calc*(ovencokeno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Lignitecoke=	3017.4
  const  Lignitecokech4= 0.282
  const  Lignitecokeno2=0.0423

  function Lignitecokes(calc){
    var result=(calc*(Lignitecoke/1000))
     var resultch4=(calc*(Lignitecokech4/1000))
    var resultno2=(calc*(Lignitecokeno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Gascoke	=3017.4
  const  Gascokech4	=0.141
  const  Gascokeno2	=0.00282

  function Gascokes(calc){
    var result=(calc*(Gascoke/1000))
     var resultch4=(calc*(Gascokech4/1000))
    var resultno2=(calc*(Gascokeno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Coaltar	=2259.6
  const  Coaltarch4	=0.28
  const  Coaltarno2	=0.042

  function Coaltars(calc){
    var result=(calc*(Coaltar/1000))
     var resultch4=(calc*(Coaltarch4/1000))
    var resultno2=(calc*(Coaltarno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Gasworksgas=	1718.28
  const  Gasworksgasch4=	0.1935
  const  Gasworksgasno2=0.00387

  function Gasworksgass(calc){
    var result=(calc*(Gasworksgas/1000))
     var resultch4=(calc*(Gasworksgasch4/1000))
    var resultno2=(calc*(Gasworksgasno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Cokeovengas	=1718.28
  const  Cokeovengasch4	=0.1935
  const  Cokeovengasno2	=0.00387

  function Cokeovengass(calc){
    var result=(calc*(Cokeovengas/1000))
     var resultch4=(calc*(Cokeovengasch4/1000))
    var resultno2=(calc*(Cokeovengasno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Blastfurnacegas=	642.2
  const  Blastfurnacegasch4=	0.01235
  const  Blastfurnacegasno2=	0.000247

  function Blastfurnacegass(calc){
    var result=(calc*(Blastfurnacegas/1000))
     var resultch4=(calc*(Blastfurnacegasch4/1000))
    var resultno2=(calc*(Blastfurnacegasno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Oxygensteelfurnace=	1284.92
  const  Oxygensteelfurnacech4=	0.0353
  const  Oxygensteelfurnaceno2=	0.000706

  function Oxygensteelfurnaces(calc){
    var result=(calc*(Oxygensteelfurnace/1000))
     var resultch4=(calc*(Oxygensteelfurnacech4/1000))
    var resultno2=(calc*(Oxygensteelfurnaceno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Naturalgas	=2692.8
  const  Naturalgasch4	=0.24
  const  Naturalgasno2	=0.0048

  function Naturalgass(calc){
    var result=(calc*(Naturalgas/1000))
     var resultch4=(calc*(Naturalgasch4/1000))
    var resultno2=(calc*(Naturalgasno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Municipal 	=917
  const  Municipalch4	=3
  const  Municipalno2 	=0.04

  function Municipals(calc){
    var result=(calc*(Municipal/1000))
     var resultch4=(calc*(Municipalch4/1000))
    var resultno2=(calc*(Municipalno2/1000))
   return [result,resultch4,resultno2]
   
}
        

  const  Industrial =	"NA"

    const  Wasteoils	=2946.66
    const  Wasteoilsch4	=12.06
    const  Wasteoilsno2	=0.1608

    function Wasteoilss(calc){
        var result=(calc*(Wasteoils/1000))
   
    var resultch4=(calc*(Wasteoilsch4/1000))
    var resultno2=(calc*(Wasteoilsno2/1000))    
     return [result,resultch4,resultno2]
       
    }
            
  const  Woodwaste	=1747.2
  const  Woodwastech4	=4.68
  const  Woodwasteno2	=0.0624

  function Woodwastes(calc){
    var result=(calc*(Woodwaste/1000))
     var resultch4=(calc*(Woodwastech4/1000))
    var resultno2=(calc*(Woodwasteno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Sulphite =1124.54
  const  Sulphitech4 =0.0354
  const  Sulphiteno2 =0.0236

  function Sulphites(calc){
    var result=(calc*(Sulphite/1000))
     var resultch4=(calc*(Sulphitech4/1000))
    var resultno2=(calc*(Sulphiteno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  solidbiomass=	1160
  const  solidbiomassch4=	3.48
  const  solidbiomassno2=	0.0464

  function solidbiomasss(calc){
    var result=(calc*(solidbiomass/1000))
     var resultch4=(calc*(solidbiomassch4/1000))
    var resultno2=(calc*(solidbiomassno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Charcoal	=3304
  const  Charcoalch4	=5.9
  const  Charcoalno2	=0.0295

  function Charcoals(calc){
    var result=(calc*(Charcoal/1000))
     var resultch4=(calc*(Charcoalch4/1000))
    var resultno2=(calc*(Charcoalno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Biogasoline	=1911.6
  const  Biogasolinech4	=0.27
  const  Biogasolineno2	=0.0162

  function Biogasolines(calc){
    var result=(calc*(Biogasoline/1000))
     var resultch4=(calc*(Biogasolinech4/1000))
    var resultno2=(calc*(Biogasolineno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Biodiesels	=1911.6
  const  Biodieselsch4	=0.27
  const  Biodieselsno2	=0.0162

  function Biodieselss(calc){
    var result=(calc*(Biodiesels/1000))
     var resultch4=(calc*(Biodieselsch4/1000))
    var resultno2=(calc*(Biodieselsno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  liquidbiofuels=	2181.04
  const  liquidbiofuelsch4=	0.274
  const  liquidbiofuelsno2=	0.01644

  function liquidbiofuelss(calc){
    var result=(calc*(liquidbiofuels/1000))
     var resultch4=(calc*(liquidbiofuelsch4/1000))
    var resultno2=(calc*(liquidbiofuelsno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Landfillgas	=2751.84
  const  Landfillgasch4	=0.252
  const  Landfillgasno2	=0.00504

  function Landfillgass(calc){
    var result=(calc*(Landfillgas/1000))
     var resultch4=(calc*(Landfillgasch4/1000))
    var resultno2=(calc*(Landfillgasno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Sludggas	=2751.84
  const  Sludggasch4	=0.252
  const  Sludggasno2	=0.00504

  function Sludggass(calc){
    var result=(calc*(Sludggas/1000))
     var resultch4=(calc*(Sludggasch4/1000))
    var resultno2=(calc*(Sludggasno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Otherbiogas	=2751.84
  const  Otherbiogasch4	=0.252
  const  Otherbiogasno2	=0.00504

  function Otherbiogass(calc){
    var result=(calc*(Otherbiogas/1000))
     var resultch4=(calc*(Otherbiogasch4/1000))
    var resultno2=(calc*(Otherbiogasno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Municipalwaste 	=1160
  const  Municipalwastech4	=3.48
  const  Municipalwasteno2 	=0.0464

  function Municipalwastes(calc){
    var result=(calc*(Municipalwaste/1000))
     var resultch4=(calc*(Municipalwastech4/1000))
    var resultno2=(calc*(Municipalwasteno2/1000))
   return [result,resultch4,resultno2]
   
}
        
  const  Peat=	1034.56
  const  Peatch4=	0.0976
  const  Peatno2=	0.013664

  function Peats(calc){
    var result=(calc*(Peat/1000))
     var resultch4=(calc*(Peatch4/1000))
    var resultno2=(calc*(Peatno2/1000))
   return [result,resultch4,resultno2]
   
}


//tone

function rudeoils(calc){
  var result=(calc*(crudeoil))
  var resultch4=(calc*(crudeoilch4))
  var resultno2=(calc*(crudeoilno2))

 return [result,resultch4,resultno2]
 
 
}





function aturalGasLiquidss(calc){
  var result=(calc*(NaturalGasLiquids))
  var resultch4=(calc*(NaturalGasLiquidsch4))
  var resultno2=(calc*(NaturalGasLiquidsno2))
 return [result,resultch4,resultno2]
 
}

    
      function rimulsions(calc){
        var result=(calc*(Orimulsion))
        var resultch4=(calc*(Orimulsionch4))
        var resultno2=(calc*(Orimulsionno2))
       return [result,resultch4,resultno2]
       
    }
            


function  otorgasolines(calc){
  var result=(calc*( Motorgasoline))
   var resultch4=(calc*(Motorgasolinech4))
  var resultno2=(calc*(Motorgasolineno2))
 return [result,resultch4,resultno2]
 
}
      

function viationgasolines(calc){
  var result=(calc*(Aviationgasoline))
   var resultch4=(calc*(crudeoilch4))
  var resultno2=(calc*(crudeoilno2))
 return [result,resultch4,resultno2]
 
}
      

function etgasolines(calc){
  var result=(calc*(Jetgasoline))
   var resultch4=(calc*(Jetgasolinech4))
  var resultno2=(calc*(Jetgasolineno2))
 return [result,resultch4,resultno2]
 
}


function etkerosenes(calc){
  var result=(calc*(Jetkerosene))
   var resultch4=(calc*(Jetkerosenech4))
  var resultno2=(calc*(Jetkeroseneno2))
 return [result,resultch4,resultno2]
 
}

function therkerosenes(calc){
  var result=(calc*(Otherkerosene))
   var resultch4=(calc*(Otherkerosenech4))
  var resultno2=(calc*(Otherkeroseneno2))
 return [result,resultch4,resultno2]
 
}
      


function haleoils(calc){
  var result=(calc*(Shaleoil))
   var resultch4=(calc*(Shaleoilch4))
  var resultno2=(calc*(Shaleoilno2))
 return [result,resultch4,resultno2]
 
}
      


function asDieseloils(calc){
  var result=(calc*(GasDieseloil))
   var resultch4=(calc*(GasDieseloilch4))
  var resultno2=(calc*(GasDieseloilno2))
 return [result,resultch4,resultno2]
 
}
      


function esidualfueloils(calc){
  var result=(calc*(Residualfueloil))
   var resultch4=(calc*(Residualfueloilch4))
  var resultno2=(calc*(Residualfueloilno2))
 return [result,resultch4,resultno2]
 
}
      

function etroleumGasess(calc){
  var result=(calc*(PetroleumGases))
   var resultch4=(calc*(PetroleumGasesch4))
  var resultno2=(calc*(PetroleumGasesno2))
 return [result,resultch4,resultno2]
 
}
      


function thanes(calc){
  var result=(calc*(Ethane))
   var resultch4=(calc*(Ethanech4))
  var resultno2=(calc*(Ethaneno2))
 return [result,resultch4,resultno2]
 
}
      


function aphthas(calc){
  var result=(calc*(Naphtha))
   var resultch4=(calc*(Naphthach4))
  var resultno2=(calc*(Naphthano2))
 return [result,resultch4,resultno2]
 
}


function itumens(calc){
  var result=(calc*(Bitumen))
   var resultch4=(calc*(Bitumench4))
  var resultno2=(calc*(Bitumenno2))
 return [result,resultch4,resultno2]
 
}
      


function ubricantss(calc){
  var result=(calc*(Lubricants))
   var resultch4=(calc*(Lubricantsch4))
  var resultno2=(calc*(Lubricantsno2))
 return [result,resultch4,resultno2]
 
}
      


function etroleumcokes(calc){
  var result=(calc*(Petroleumcoke))
   var resultch4=(calc*(Petroleumcokech4))
  var resultno2=(calc*(Petroleumcokeno2))
 return [result,resultch4,resultno2]
 
}
      

function efineryfeedstockss(calc){
  var result=(calc*(Refineryfeedstocks))
   var resultch4=(calc*(Refineryfeedstocksch4))
  var resultno2=(calc*(Refineryfeedstocksno2))
 return [result,resultch4,resultno2]
 
}
      


function efinerygass(calc){
  var result=(calc*(Refinerygas))
   var resultch4=(calc*(Refinerygasch4))
  var resultno2=(calc*(Refinerygasno2))
 return [result,resultch4,resultno2]
 
}
      


function araffinwaxess(calc){
  var result=(calc*(Paraffinwaxes))
   var resultch4=(calc*(Paraffinwaxesch4))
  var resultno2=(calc*(Paraffinwaxesno2))
 return [result,resultch4,resultno2]
 
}
      


function hiteSpirits(calc){
  var result=(calc*(WhiteSpirit))
   var resultch4=(calc*(WhiteSpiritch4))
  var resultno2=(calc*(WhiteSpiritno2))
 return [result,resultch4,resultno2]
 
}
      


function therpetroleumproductss(calc){
  var result=(calc*(Otherpetroleumproducts))
   var resultch4=(calc*(Otherpetroleumproductsch4))
  var resultno2=(calc*(Otherpetroleumproductsno2))
 return [result,resultch4,resultno2]
 
}
      


function nthracites(calc){
  var result=(calc*(Anthracite))
   var resultch4=(calc*(Anthracitech4))
  var resultno2=(calc*(Anthraciteno2))
 return [result,resultch4,resultno2]
 
}
      


function ookingcoals(calc){
  var result=(calc*(Cookingcoal))
   var resultch4=(calc*(Cookingcoalch4))
  var resultno2=(calc*(Cookingcoalno2))
 return [result,resultch4,resultno2]
 
}
      


function therbituminouss(calc){
  var result=(calc*(Otherbituminous))
   var resultch4=(calc*(Otherbituminousch4))
  var resultno2=(calc*(Otherbituminousno2))
 return [result,resultch4,resultno2]
 
}
      


function ubbituminouscoals(calc){
  var result=(calc*(Subbituminouscoal))
   var resultch4=(calc*(Subbituminouscoalch4))
  var resultno2=(calc*(Subbituminouscoalno2))
 return [result,resultch4,resultno2]
 
}
      

function ignites(calc){
  var result=(calc*(Lignite))
   var resultch4=(calc*(Lignitech4))
  var resultno2=(calc*(Ligniteno2))
 return [result,resultch4,resultno2]
 
}
      


function ilshales(calc){
  var result=(calc*(Oilshale))
   var resultch4=(calc*(Oilshalech4))
  var resultno2=(calc*(Oilshaleno2))
 return [result,resultch4,resultno2]
 
}


function oalbriquettess(calc){
  var result=(calc*(coalbriquettes))
   var resultch4=(calc*(coalbriquettesch4))
  var resultno2=(calc*(coalbriquettesno2))
 return [result,resultch4,resultno2]
 
}
      

function atentfuels(calc){
  var result=(calc*(Patentfuel))
   var resultch4=(calc*(Patentfuelch4))
  var resultno2=(calc*(Patentfuelno2))
 return [result,resultch4,resultno2]
 
}
      


function vencokes(calc){
  var result=(calc*(ovencoke))
   var resultch4=(calc*(ovencokech4))
  var resultno2=(calc*(ovencokeno2))
 return [result,resultch4,resultno2]
 
}
      


function ignitecokes(calc){
  var result=(calc*(Lignitecoke))
   var resultch4=(calc*(Lignitecokech4))
  var resultno2=(calc*(Lignitecokeno2))
 return [result,resultch4,resultno2]
 
}
      


function ascokes(calc){
  var result=(calc*(Gascoke))
   var resultch4=(calc*(Gascokech4))
  var resultno2=(calc*(Gascokeno2))
 return [result,resultch4,resultno2]
 
}
      


function oaltars(calc){
  var result=(calc*(Coaltar))
   var resultch4=(calc*(Coaltarch4))
  var resultno2=(calc*(Coaltarno2))
 return [result,resultch4,resultno2]
 
}
      


function asworksgass(calc){
  var result=(calc*(Gasworksgas))
   var resultch4=(calc*(Gasworksgasch4))
  var resultno2=(calc*(Gasworksgasno2))
 return [result,resultch4,resultno2]
 
}
      


function okeovengass(calc){
  var result=(calc*(Cokeovengas))
   var resultch4=(calc*(Cokeovengasch4))
  var resultno2=(calc*(Cokeovengasno2))
 return [result,resultch4,resultno2]
 
}
      


function lastfurnacegass(calc){
  var result=(calc*(Blastfurnacegas))
   var resultch4=(calc*(Blastfurnacegasch4))
  var resultno2=(calc*(Blastfurnacegasno2))
 return [result,resultch4,resultno2]
 
}
      


function xygensteelfurnaces(calc){
  var result=(calc*(Oxygensteelfurnace))
   var resultch4=(calc*(Oxygensteelfurnacech4))
  var resultno2=(calc*(Oxygensteelfurnaceno2))
 return [result,resultch4,resultno2]
 
}
      


function aturalgass(calc){
  var result=(calc*(Naturalgas))
   var resultch4=(calc*(Naturalgasch4))
  var resultno2=(calc*(Naturalgasno2))
 return [result,resultch4,resultno2]
 
}
      


function unicipals(calc){
  var result=(calc*(Municipal))
   var resultch4=(calc*(Municipalch4))
  var resultno2=(calc*(Municipalno2))
 return [result,resultch4,resultno2]
 
}
      



  function asteoilss(calc){
      var result=(calc*(Wasteoils))
 
  var resultch4=(calc*(Wasteoilsch4))
  var resultno2=(calc*(Wasteoilsno2))    
   return [result,resultch4,resultno2]
     
  }
          

function oodwastes(calc){
  var result=(calc*(Woodwaste))
   var resultch4=(calc*(Woodwastech4))
  var resultno2=(calc*(Woodwasteno2))
 return [result,resultch4,resultno2]
 
}
      


function ulphites(calc){
  var result=(calc*(Sulphite))
   var resultch4=(calc*(Sulphitech4))
  var resultno2=(calc*(Sulphiteno2))
 return [result,resultch4,resultno2]
 
}
      


function olidbiomasss(calc){
  var result=(calc*(solidbiomass))
   var resultch4=(calc*(solidbiomassch4))
  var resultno2=(calc*(solidbiomassno2))
 return [result,resultch4,resultno2]
 
}
      


function harcoals(calc){
  var result=(calc*(Charcoal))
   var resultch4=(calc*(Charcoalch4))
  var resultno2=(calc*(Charcoalno2))
 return [result,resultch4,resultno2]
 
}


function iogasolines(calc){
  var result=(calc*(Biogasoline))
   var resultch4=(calc*(Biogasolinech4))
  var resultno2=(calc*(Biogasolineno2))
 return [result,resultch4,resultno2]
 
}
      


function iodieselss(calc){
  var result=(calc*(Biodiesels))
   var resultch4=(calc*(Biodieselsch4))
  var resultno2=(calc*(Biodieselsno2))
 return [result,resultch4,resultno2]
 
}
      


function iquidbiofuelss(calc){
  var result=(calc*(liquidbiofuels))
   var resultch4=(calc*(liquidbiofuelsch4))
  var resultno2=(calc*(liquidbiofuelsno2))
 return [result,resultch4,resultno2]
 
}
      


function andfillgass(calc){
  var result=(calc*(Landfillgas))
   var resultch4=(calc*(Landfillgasch4))
  var resultno2=(calc*(Landfillgasno2))
 return [result,resultch4,resultno2]
 
}
      


function ludggass(calc){
  var result=(calc*(Sludggas))
   var resultch4=(calc*(Sludggasch4))
  var resultno2=(calc*(Sludggasno2))
 return [result,resultch4,resultno2]
 
}
      


function therbiogass(calc){
  var result=(calc*(Otherbiogas))
   var resultch4=(calc*(Otherbiogasch4))
  var resultno2=(calc*(Otherbiogasno2))
 return [result,resultch4,resultno2]
 
}
      


function unicipalwastes(calc){
  var result=(calc*(Municipalwaste))
   var resultch4=(calc*(Municipalwastech4))
  var resultno2=(calc*(Municipalwasteno2))
 return [result,resultch4,resultno2]
 
}
      


function eats(calc){
  var result=(calc*(Peat))
   var resultch4=(calc*(Peatch4))
  var resultno2=(calc*(Peatno2))
 return [result,resultch4,resultno2]
 
}
        

      
                
let val=["null","null","null"]




if(weight==="kg"){
  if(fuel==="Crudeoil"){
 val =crudeoils(inpval.quantity)}
 else if(fuel==="Dieseloil"){
  val =crudeoils(inpval.quantity)
}
else if(fuel==="Orimulsion"){
  val =crudeoils(inpval.quantity)
}else if(fuel==="NaturalGasLiquids"){
  val =NaturalGasLiquidss(inpval.quantity)
}else if(fuel==="Motorgasoline"){
  val =Motorgasolines(inpval.quantity)
}else if(fuel==="Aviationgasoline"){
  val =Aviationgasolines(inpval.quantity)
}else if(fuel==="Jetgasoline"){
  val =Jetgasolines(inpval.quantity)
}else if(fuel==="Jetkerosene"){
  val =Jetkerosenes(inpval.quantity)
}else if(fuel==="Otherkerosene"){
  val =Otherkerosenes(inpval.quantity)
}else if(fuel==="Shaleoil"){
  val =Shaleoils(inpval.quantity)
}else if(fuel==="Gas/Dieseloil"){
  val =GasDieseloils(inpval.quantity)
}else if(fuel==="Residualfueloil"){
  val =Residualfueloils(inpval.quantity)
}else if(fuel==="Ethane"){
  val =Ethanes(inpval.quantity)
}else if(fuel==="Refineryfeedstocks"){
  val =Refineryfeedstockss(inpval.quantity)
}else if(fuel==="Paraffinwaxes"){
  val =Paraffinwaxess(inpval.quantity)
}else if(fuel==="Refinerygas"){
  val =Refinerygass(inpval.quantity)
}else if(fuel==="WhiteSpiritSBP"){
  val =WhiteSpirits(inpval.quantity)
}else if(fuel==="Otherpetroleumproducts"){
  val =Otherpetroleumproductss(inpval.quantity)
}else if(fuel==="Anthracite"){
  val =Anthracites(inpval.quantity)
}else if(fuel==="Cookingcoal"){
  val =Cookingcoals(inpval.quantity)
}else if(fuel==="Otherbituminouscoal"){
  val =Otherbituminouss(inpval.quantity)
}else if(fuel==="Subbituminouscoal"){
  val =Subbituminouscoals(inpval.quantity)
}else if(fuel==="Lignite"){
  val =Lignites(inpval.quantity)
}else if(fuel==="Oilshaleandtarsands"){
  val =Oilshales(inpval.quantity)
}else if(fuel==="Browncoalbriquettes"){
  val =crudeoils(inpval.quantity)
}else if(fuel==="Patentfuel"){
  val =Patentfuels(inpval.quantity)
}else if(fuel==="Cokeovencoke"){
  val =ovencokes(inpval.quantity)
}else if(fuel==="Lignitecoke"){
  val =Lignitecokes(inpval.quantity)
}else if(fuel==="Gascoke"){
  val =Gascokes(inpval.quantity)
}else if(fuel==="Coaltar"){
  val =Coaltars(inpval.quantity)
}else if(fuel==="Gasworksgas"){
  val =Gasworksgass(inpval.quantity)
}else if(fuel==="Cokeovengas"){
  val =Cokeovengass(inpval.quantity)
}else if(fuel==="Blastfurnacegas"){
  val =Blastfurnacegass(inpval.quantity)
}else if(fuel==="Oxygensteelfurnacegas"){
  val =Oxygensteelfurnaces(inpval.quantity)
}else if(fuel==="Naturalgas"){
  val =Naturalgass(inpval.quantity)
}else if(fuel==="Wasteoils"){
  val =Wasteoilss(inpval.quantity)
}else if(fuel==="WoodorWoodwaste"){
  val =Woodwastes(inpval.quantity)
}else if(fuel==="Naphtha"){
  val =Naphthas(inpval.quantity)
}else if(fuel==="Bitumen"){
  val =Bitumens(inpval.quantity)
}else if(fuel==="Lubricants"){
  val =Lubricantss(inpval.quantity)
}else if(fuel==="Petroleumcoke"){
  val =Petroleumcoke(inpval.quantity)
}else if(fuel==="Sulphitelyes"){
  val =Sulphites(inpval.quantity)
}else if(fuel==="Otherprimarysolidbiomassfuels"){
  val =solidbiomasss(inpval.quantity)
}else if(fuel==="Charcoal"){
  val =Charcoals(inpval.quantity)
}else if(fuel==="Biogasoline"){
  val =Biogasolines(inpval.quantity)
}else if(fuel==="Biodiesels"){
  val =Biodieselss(inpval.quantity)
}else if(fuel==="Otherliquidbiofuels"){
  val =liquidbiofuelss(inpval.quantity)
}else if(fuel==="Landfillgas"){
  val =Landfillgass(inpval.quantity)
}else if(fuel==="Sludgegas"){
  val =Sludggass(inpval.quantity)
}else if(fuel==="Otherbiogas"){
  val =Otherbiogass(inpval.quantity)
}else if(fuel==="Peat"){
  val =Peats(inpval.quantity)
}else{
  console.log("errrr");
}

}
else{

  
    if(fuel==="Crudeoil"){
   val =rudeoils(inpval.quantity)}
   else if(fuel==="Dieseloil"){
    val =rudeoils(inpval.quantity)
  }
  else if(fuel==="Orimulsion"){
    val =rudeoils(inpval.quantity)
  }else if(fuel==="NaturalGasLiquids"){
    val =aturalGasLiquidss(inpval.quantity)
  }else if(fuel==="Motorgasoline"){
    val =otorgasolines(inpval.quantity)
  }else if(fuel==="Aviationgasoline"){
    val =viationgasolines(inpval.quantity)
  }else if(fuel==="Jetgasoline"){
    val =etgasolines(inpval.quantity)
  }else if(fuel==="Jetkerosene"){
    val =etkerosenes(inpval.quantity)
  }else if(fuel==="Otherkerosene"){ 
    val =therkerosenes(inpval.quantity)
  }else if(fuel==="Shaleoil"){
    val =haleoils(inpval.quantity)
  }else if(fuel==="Gas/Dieseloil"){
    val =haleoils(inpval.quantity)
  }else if(fuel==="Residualfueloil"){
    val =esidualfueloils(inpval.quantity)
  }else if(fuel==="Ethane"){
    val =thanes(inpval.quantity)
  }else if(fuel==="Refineryfeedstocks"){
    val =efineryfeedstockss(inpval.quantity)
  }else if(fuel==="Paraffinwaxes"){
    val =araffinwaxess(inpval.quantity)
  }else if(fuel==="Refinerygas"){
    val =efinerygass(inpval.quantity)
  }else if(fuel==="WhiteSpiritSBP"){
    val =hiteSpirits(inpval.quantity)
  }else if(fuel==="Otherpetroleumproducts"){
    val =therpetroleumproductss(inpval.quantity)
  }else if(fuel==="Anthracite"){
    val =nthracites(inpval.quantity)
  }else if(fuel==="Cookingcoal"){
    val =ookingcoals(inpval.quantity)
  }else if(fuel==="Otherbituminouscoal"){
    val =therbituminouss(inpval.quantity)
  }else if(fuel==="Subbituminouscoal"){
    val =ubbituminouscoals(inpval.quantity)
  }else if(fuel==="Lignite"){
    val =ignites(inpval.quantity)
  }else if(fuel==="Oilshaleandtarsands"){
    val =ilshales(inpval.quantity)
  }else if(fuel==="Browncoalbriquettes"){
    val =rudeoils(inpval.quantity)
  }else if(fuel==="Patentfuel"){
    val =atentfuels(inpval.quantity)
  }else if(fuel==="Cokeovencoke"){
    val =vencokes(inpval.quantity)
  }else if(fuel==="Lignitecoke"){
    val =ignitecokes(inpval.quantity)
  }else if(fuel==="Gascoke"){
    val =ascokes(inpval.quantity)
  }else if(fuel==="Coaltar"){
    val =oaltars(inpval.quantity)
  }else if(fuel==="Gasworksgas"){
    val =asworksgass(inpval.quantity)
  }else if(fuel==="Cokeovengas"){
    val =okeovengass(inpval.quantity)
  }else if(fuel==="Blastfurnacegas"){
    val =lastfurnacegass(inpval.quantity)
  }else if(fuel==="Oxygensteelfurnacegas"){
    val =xygensteelfurnaces(inpval.quantity)
  }else if(fuel==="Naturalgas"){
    val =aturalgass(inpval.quantity)
  }else if(fuel==="Wasteoils"){
    val =asteoilss(inpval.quantity)
  }else if(fuel==="WoodorWoodwaste"){
    val =oodwastes(inpval.quantity)
  }else if(fuel==="Naphtha"){
    val =aphthas(inpval.quantity)
  }else if(fuel==="Bitumen"){
    val =itumens(inpval.quantity)
  }else if(fuel==="Lubricants"){
    val =ubricantss(inpval.quantity)
  }else if(fuel==="Petroleumcoke"){
    val =ubricantss(inpval.quantity)
  }else if(fuel==="Sulphitelyes"){
    val =ulphites(inpval.quantity)
  }else if(fuel==="Otherprimarysolidbiomassfuels"){
    val =olidbiomasss(inpval.quantity)
  }else if(fuel==="Charcoal"){
    val =harcoals(inpval.quantity)
  }else if(fuel==="Biogasoline"){
    val =iogasolines(inpval.quantity)
  }else if(fuel==="Biodiesels"){
    val =iodieselss(inpval.quantity)
  }else if(fuel==="Otherliquidbiofuels"){
    val =iquidbiofuelss(inpval.quantity)
  }else if(fuel==="Landfillgas"){
    val =andfillgass(inpval.quantity)
  }else if(fuel==="Sludgegas"){
    val =ludggass(inpval.quantity)
  }else if(fuel==="Otherbiogas"){
    val =therbiogass(inpval.quantity)
  }else if(fuel==="Peat"){
    val =eats(inpval.quantity)
  }else{
    console.log("errr");
  }

}

            let co2=val[0]
            let ch4=val[1]
            let no2=val[2]
            


   

            const email = logindata.email;
            
          
            let date=(dte.toLocaleDateString());


          const data = await fetch("/scomp", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  
                code,facility,quantity,type,weight,fuel,co2,ch4,no2,date,email,person
              })
          });

          const res = await data.json();
          
          console.log(weight)
          setCount((c) => c + 1)


          if (res.status === 201) {
              toast.success(" Data saved 😃!", {
                  position: "top-center"
              });
              setInpval({ ...inpval,  
                
                code:"",
                facility:"",
              quantity:"",
                // type:"",
                // weight:"",
                // fuel:""
                
             });}else {
              toast.error("Fail!", {
                position: "top-center"
            });
              }

          
  }}
  const hellos =async(e)=>{
const map=he
    const datap = await fetch("/getstation", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
           map
      })
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
    navigate("/subhomeview");
  }, [navigate]);

useEffect(() => {
 
  // hellos();
setCalculation(() => count * 2);
}, [count]);


    return(
        
        
        
      <div className="home1-hello">

<div className='rectangle-1'/>
      <div className='rectangle-2'/>
      <div className='rectangle-3'/>
      <div className='rectangle-4'/>

              {/* <img className="home1-vew-child3" alt="" src="../rectangle-52@2x.png" /> */}
      {/* <img className="home1-vew-child4" alt="" src="../rectangle-52@2x.png" />
      <img className="home1-vew-child5" alt="" src="../rectangle-52@2x.png" />
      <img className="home1-vew-child" alt="" src="../rectangle-52@2x.png" /> */}

      <img className="home1-add-child" alt="" src="../vector-4.svg" />
      <img className="home1-add-item" alt="" src="../vector-4.svg" />
      <div className="home1-add-inner" />
      <img
        className="whatsapp-image-2022-12-22-at-9"
        alt=""
        src="../whatsapp-image-20221222-at-923-3@2x.png"
      />
    <div className="ellipse-icon">  <Header/></div>
      <img className="home1-add-child1" alt="" src="../ellipse-56.svg" />
      <img className="vector-icon" alt="" src="../vector-1.svg" />
      <img className="home1-add-child2" alt="" src="../vector-2.svg" />
      <div className="rectangle-div" />
      <div className="rectangle-div" />
      <div className="home1-add-child4" />
      <div className="home1-add-child5" />
      <div className="home1-add-child6" />
      <Link to="/subdash">
         <a className="scope-12">Scope 1</a>
        </Link>
           <Link to="/subsco">
        <a className="scope-2">Scope 2</a>
        </Link>
        <Link to="/subcapital">
        <a className="scope-3">Scope 3</a>
        </Link>
      <section className="rectangle-section" />
      
      <Link to="/subdash">
      <a className="stationary-c2">Stationary Combustion</a>
        </Link>

        <Link to="/submobilecombustion">


        <a className="mobile-combustion">
        <p className="mobile">{`Mobile `}</p>
        <p className="combustion">Combustion</p>
      </a>
        </Link>

        <Link to="/subfug">
      <a className="fugitive-emissions">
        <p className="mobile">{`Fugitive `}</p>
        <p className="combustion">Emissions</p>
      </a>
      </Link>
      
      <Link to="/subprocessemission">
      <a className="process-emissions">
        <p className="mobile">{`Process `}</p>
        <p className="combustion">Emissions</p>
      </a></Link>
      <div className="di">{Math.round(element)}</div>
      <div className="tonnes-of">Tonnes of CO2eq</div>
      <p className="this-section-captures-any-emis">
        This section captures any emissions made from stationary combustion
        sources that are either owned or operated by the reporting organization.
        Combustion processes involve the use of fuels. Hence Fuel consumption
        data along with fuel characteristics is captured as measure of
        emissions.
      </p>
   
      <div className="activity-captured-fuel-use">
        Activity Captured : Fuel Use
      </div>
      <div className="home1-add-child7" />
 
      <div className="container1">
      <select value={fuel} onChange={setValss} className="hello" >
        <option value="Crudeoil">Crude oil</option>
        <option value="Orimulsion">Orimulsion</option>
        <option value="NaturalGasLiquids">Natural Gas Liquids</option>
        <option value="Motorgasoline">Motorgasoline</option>
        <option value="Aviationgasoline">Aviationgasoline</option>
        <option value="Jetgasoline">Jetgasoline</option>
        <option value="Jetkerosene">Jetkerosene</option>
        <option value="Otherkerosene">Other kerosene</option>
        <option value="Shaleoil">Shale oil</option>
        <option value="Gas/Dieseloil">Gas/Diesel oil</option>
        <option value="Residualfueloil">Residual fuel oil</option>
        <option value="Ethane">Ethane</option>
        <option value="Refineryfeedstocks">Refinery feedstocks</option>
        <option value="Refinerygas">Refinery gas</option>
        <option value="Paraffinwaxes">Paraffin waxes</option>
        <option value="WhiteSpiritSBP">White Spirit/SBP</option>
        <option value="Otherpetroleumproducts">Other petroleum products</option>
        <option value="Anthracite">Anthracite</option>
        <option value="Cookingcoal">Cooking coal</option>
        <option value="Otherbituminouscoal">Other bituminous coal</option>
        <option value="Subbituminouscoal">Sub bituminous coal</option>
        <option value="Lignite">Lignite</option>
        <option value="Oilshaleandtarsands">Oilshaleandtarsands</option>
        <option value="Browncoalbriquettes">Browncoalbriquettes</option>
        <option value="Patentfuel">Patentfuel</option>
        <option value="Cokeovencoke">Cokeovencoke</option>
        <option value="Lignitecoke">Lignitecoke</option>
        <option value="Gascoke">Gascoke</option>
        <option value="Coaltar">Coaltar</option>
        <option value="Gasworksgas">Gasworksgas</option>
        <option value="Cokeovengas">Cokeovengas</option>
        <option value="Blastfurnacegas">Blastfurnacegas</option>
        <option value="Oxygensteelfurnacegas">Oxygensteelfurnacegas</option>
        <option value="Naturalgas">Naturalgas</option>
        <option value="Industrialwastes">Industrialwastes</option>
        <option value="Wasteoils">Wasteoils</option>
        <option value="WoodorWoodwaste">WoodorWoodwaste</option>
        <option value="Naphtha">Naphtha</option>
        <option value="Bitumen">Bitumen</option>
        <option value="Lubricants">Lubricants</option>
        <option value="Petroleumcoke">Petroleumcoke</option>
        <option value="Sulphitelyes">Sulphite lyes (Black liqour)</option>
        <option value="Otherprimarysolidbiomassfuels">Other primary solid biomass fuels</option>
        <option value="Charcoal">Charcoal</option>
        <option value="Biogasoline">Biogasoline</option>
        <option value="Biodiesels">Biodiesels</option>
        <option value="Otherliquidbiofuels">Otherliquidbiofuels</option>
        <option value="Landfillgas">Landfillgas</option>
        <option value="Sludgegas">Sludgegas</option>
        <option value="Otherbiogas">Otherbiogas</option>
        <option value="Peat">Peat</option>
 

        
        
       
      </select>
      {/* <p>{`You selected ${type}`}</p> */}
    </div>
    <div>     <DatePicker onChange={onChange} value={dte} className="datee" /></div>
             <div className="wrapper" >
      
      <select value={type} onChange={setValsss} className="hello1" >
        <option value="Boilers">Boilers</option>
        <option value="Furnace">Furnace</option>
        <option value="Heaters">Heaters</option>
        <option value="Kilns">Kilns</option>
        <option value="OvensFlares">OvensFlares</option>
        <option value="Thermaloxiders">Thermaloxiders</option>
         <option value="Dryers">Dryers</option>
        <option value="otherequipment">OtherEquipment</option>
       
      </select>
      {/* <p>{`You selected ${type}`}</p> */}
    </div>
      <div className="home1-add-child8" />
   
      <Form.Group className="frame">
        <Form.Control  type="number"
              placeholder="quantity"
              name="quantity"
              onChange={setVal}
              value={inpval.quantity}
              id="quantity" />
      </Form.Group>
      <div  className="wrapper90">
      <select value={weight} onChange={setVals} className="hello3">
        <option value="kg">Kilogram</option>
        <option value="tone">Ton</option>
        </select>
      {/* <p>{`You selected ${type}`}</p> */}
    </div>
     
   
 
      <h2 className="stationary-combustion1">Stationary Combustion</h2>
      <h4 className="emission-s">Emission Source</h4>
      <Form.Group className="wrapper2">
        <Form.Control type="text" placeholder="Facility Code"  name="code"
              onChange={setVal}
              value={inpval.code}
              id="code" />
      </Form.Group>
      <Form.Group className="wrapper3">
        <Form.Control type="text" placeholder="Facility Name"  name="facility"
              onChange={setVal}
              value={inpval.facility}
              id="pass" />
      </Form.Group>
      <h4 className="facility">{`Facility `}</h4>
      <h4 className="fuel">Fuel</h4>
      <h4 className="dat">SI Unit</h4>
      <Button className="rectangle-buttons" variant="primary" onClick={addCompanydata}>
        Add Data
      </Button>
      <a className="view-data" onClick={onAddDataClick}>
        View Data
      </a>
      <img
        className="factory-pollution-city-air-and-icon"
        alt=""
        src="../117785factorypollutioncityairandwater-1@2x.png"
      />
      <a className="measure">Measure</a>
      <a className="reduce">Reduce</a>
      <a className="offset">Offset</a>
      <Link to="/subMain">
      <a className="dashboard">Dashboard</a>        </Link>
 <ToastContainer/>
    </div>
   
  
    )}

export default Scomp;