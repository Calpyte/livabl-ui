import React from 'react'
import { useEffect, useState,useContext } from 'react';
import { LoginContext } from "../ContextProvider/Context";
import Header from './Header';
import { Link} from "react-router-dom"
function Recommendation(){
    const [usr, setTodos] = useState([]);

    const { logindata } = useContext(LoginContext);
    
    let he="hello"
  const asuser = async()=>{he=(logindata.ValidUserOne.map)}
  
  asuser();
    
    const hellos =async(e)=>{
        const email = logindata.email;
            const datap = await fetch("/quest", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                   email
              })
          });
          const res = await datap.json();
          
          setTodos(res);
          }
	

    useEffect(() => {
        hellos();
	}, []);

    
	
    
    var firstRec="Measure the carbon emissions under Scope 1,2 & 3"
    var secondRec="Create KPIs for carbon emissions, Water consumption , waste reduction and other sustainability factors"
    var thirdRec="Perform Environmental Impact analysis and measure it's impacts on land, water and air"
    var fourthRec="Incorporate a sustainable procurement policy"
    var fifthRec="Appoint a committee for sustainability"
    var sixthRec="Have a CSR committee"
    var seventhRec=" Have an Extended Producer Responsibility (EPR) plan in place, if applicable"
    var eightRec="Perform Life Cycle Assessement (LCA) for all products"
    var ninthRec="Perform Social Impact Assessment"
    var tenthRec=" Have a board-level oversight of climate-related issues within your organization"
    var eleventhRec="Include a transition plan that aligns with a 1.5°C world in the organization’s strategy"
    var twelfthRec=" Perform climate risk assessment and have adaptation & mitigation strategies in place"
    var thirteenthRec="Engage with your value chain on climate-related issues"
    var fourteenthRec="Endorse biodiversity conservation initiatives"
    var fifteenthRec="Assess the impact of your value chain on biodiversity?"
    var sixteenthRec="Use biodiversity indicators to monitor performance across organizational activities"
    var seventeenthRec="Adopt national and international codes/certifications/labels/ standards like Forest Stewardship Council, Fairtrade, Rainforest Alliance, SA 8000, OHSAS, ISO, BI etc.,"
    var eighteenthRec="Adopt a mechanism for zero liquid discharge"
    var nineteenthRec=" Apply for science based target initiatives (SBTi)?"
    var twentiethRec="Apply for ratings systems like CDP, Ecovadis, to measure sustainability performance"
    var twentyfirstRec="Make yearly ESG or sustainability report publicly available"    
    return(
        <div>
            
  
            <div className="home1-hello">
         

     
         <div className="home1-add-inner" />
         <img
           className="whatsapp-image-2022-12-22-at-9"
           alt=""
           src="../whatsapp-image-20221222-at-923-3@2x.png"
         />
      <div className="ellipse-icon">  <Header/></div>
         <img className="home1-add-child1" alt="" src="../ellipse-56.svg" />
    
      
      <a className="measure">Measure</a>
      <a className="reduce">Reduce</a>
      <a className="offset">Offset</a>
      <Link to="/subMain">
      <a className="dashboard">Dashboard</a>        </Link>
  
			<div className="comp">
            <h1 className='heading'>We Recommend........</h1>
                <p><h5>
                Thank you for your responses, We are delighted to see all the good practices in your organization.
                 However we urge you to also:
                 
                   
                </h5></p>
				{ usr.map(todo => (
                    <div  >
						
            <div key="{firsrh}" className='thank'>
                

            </div>

            <div key="{seconds}">   
            {todo.scope==='scope1' && todo.scope==='scope2' && todo.scope==='scope3'?(<>
                <ul><h5>❗ {firstRec}</h5></ul>
                </>):(
                []
            ) }
            </div>

            <div key="{thirds}">    
            {todo.yesno1==='no'?(<>
                <ul><h5>❗ {secondRec}</h5></ul>    
                </>):(
                []
            )}
            </div>

            <div key="{fourths}">    
            {todo.yesno2==='no'?(<>
                <ul><h5>❗ {thirdRec}</h5></ul>
            </>):(
                []
            )}
            </div>

            <div key="{fifths}">   
            {todo.yesno3==='no'?(<>
                <ul><h5>❗ {fourthRec} </h5></ul>
                </>):(
                []
            )}
            </div>

            <div key="{sixss}">    
            {todo.yesno4==='no'?(<>
                <ul><h5>❗ {fifthRec}</h5></ul></>
            ):(
                []
            )}
            </div>

            <div key="{sevens}">    
            {todo.yesno5==='no'?(<>
                <ul><h5>❗ {sixthRec}</h5></ul>
                </>):(
                []
            )}
            </div>

            <div key="{eights}">   
            {todo.yesno6==='no'?(<>
                <ul><h5>❗ {seventhRec}</h5></ul>
                </>):(
                []
            )}
            </div>

            <div key="{nines}">    
            {todo.yesno7==='no'?(<>
                <ul><h5>❗ {eightRec}</h5></ul>
                </>):(
                []
            )}
            </div>

            <div key="{tens}">    
            {todo.yesno8==='no'?(<>
                <ul><h5>❗ {ninthRec}</h5></ul>
                </>):(
                []
            )}
            </div>

            <div key="{elevens}">   
            {todo.yesno9==='no'?(<>
                <ul><h5>❗ {tenthRec}</h5></ul>
                </>):(
                []
            )}
            </div>

            <div key="{twelfsfe}">        
            {todo.yesno10==='no'?(<>
                <ul><h5>❗ {eleventhRec}  </h5></ul>
                </>):(
                []
            )}
            </div>

            <div key="{thirthe}">        
            {todo.yesno11==='no'?(<>
                <ul><h5>❗ {twelfthRec} </h5></ul>
                </>):(
                []
            )} 
            </div>

            <div key="{fourthes}">    
            {todo.yesno12==='no'?(<>
                <ul><h5>❗  {thirteenthRec} </h5></ul>
                </>):(
                []
            )}
            </div>

            <div key="{fitenens}">    
            {todo.yesno13==='no'?(<>
                <ul><h5>❗ {fourteenthRec}  </h5></ul>
                </>):(
                []
            )}
            </div>

            <div key="{sixteens}">    
            {todo.yesno14==='no'?(<>
                <ul><h5>❗  {fifteenthRec}  </h5></ul>
                </>):(
                []
            )}
            </div>

            <div key="{seventendsw}">
            {todo.yesno15==='no'?(<>
                <ul><h5>❗  {sixteenthRec}  </h5></ul>
                </>):(
                []
            )}
            </div>

            <div key="{eightenee}">
            {todo.standard==='SA 8000' && todo.standard==='OHSAS' && todo.standard==='ISO' && todo.standard==='BIS'?(<>
                <ul><h5>❗ {seventeenthRec}  </h5></ul>
                </>):(
                []
            )}
            </div>

            <div key="{ninethe}">    
            {todo.yesno16==='no'?(<>
                <ul><h5>❗ {eighteenthRec}  </h5></ul>
                </>):(
                []
            )}  
            </div>  

            <div key="{twfeentyis}">    
            {todo.yesno17==='no'?(<>
                <ul><h5>❗ {nineteenthRec}  </h5></ul>
                </>):(
                []
            )}
            </div>

            <div key="{twedwsanj}">    
            {todo.yesno18==='no'?(<>
                <ul><h5>❗ {twentiethRec}  </h5></ul>
                </>):(
                []
            )}
            </div>

            <div key="{tniwhius}">    
            {todo.yesno19==='no'?(<>
                <ul><h5>❗ {twentyfirstRec}  </h5></ul>
                </>):(
                []
            )}
            </div>
               
					</div>
				))}
            <div>
            <p><h5>
                 To know how, please reach out to us  
            </h5></p>
            </div>      
			</div>

			
		</div>
        </div>
      
    );
}

export default Recommendation;