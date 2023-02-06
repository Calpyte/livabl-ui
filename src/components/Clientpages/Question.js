import { useState,useContext } from 'react'
import { useForm } from 'react-hook-form';
import './style.css';
import { LoginContext } from '../ContextProvider/Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Questions() {
  const { logindata } = useContext(LoginContext);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  let he="hello"
const as = async()=>{he=(logindata.ValidUserOne.email)}
  
as();
const onClickSubmit = async(res) => {
  // 
  const data = await fetch("/question",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(
         res
    )
   
});

toast.success("Thank you for your answer 😃!", {
  position: "top-center"
});
window.location.reload(false);
}
  return (<>   
   <img
    className="whatsapp-im"
    alt=""
    src="../whatsapp-image-20221222-at-923-2@2x.png"
  />
      <img className="questionarre-child" alt="" src="../ellipse-9@2x.png" />
      <img className="line" alt="" src="../line.png" />
    <div className="alignment">
      <form onSubmit={handleSubmit(onClickSubmit)}>
  
 
   
        <div>

        <input value={he} type="hidden" {...register("email", { required: true })} />

        
        <h5>1. Does your company measure the carbon emissions under Scope 1,2 & 3?</h5>
        <div className="questions-check mt-3">
          <label htmlFor="scope1" class="hell">
            <input
              {...register('scope', { required: true })}
              type="radio"
              name="scope"
              value="scope1"
              className="questions-check-input"
              id="scope1"
            />{' '}
            Scope 1
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="scope2" class="hell">
            <input
              {...register('scope', { required: true })}
              type="radio"
              name="scope"
              value="scope2"
              className="questions-check-input"
              id="scope2"
            />{' '}
            Scope 2
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="scope3" class="hell">
            <input
              {...register('scope', { required: true })}
              type="radio"
              name="scope"
              value="scope3"
              className="questions-check-input"
              id="scope3"
            />
            Scope 3
          </label>
        </div>
        <div class="error">
          {errors.scope?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>
        
        <div>
        <h5>2.Does your company have KPIs for carbon emissions, Water consumption , waste reduction and other sustainability factors ?</h5>
        <div className="questions-check mt-3">
          <label htmlFor="yesno1" class="hell">
            <input
              {...register('yesno1', { required: true })}
              type="radio"
              name="yesno1"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno1" class="hell">
            <input
              {...register('yesno1', { required: true })}
              type="radio"
              name="yesno1"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno1?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h5>3. Does the company perform Environmental Impact analysis and measure it's impacts on land, water and air ?</h5>
        <div className="questions-check mt-3">
          <label htmlFor="yesno2" class="hell">
            <input
              {...register('yesno2', { required: true })}
              type="radio"
              name="yesno2"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno2" class="hell">
            <input
              {...register('yesno2', { required: true })}
              type="radio"
              name="yesno2"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno2?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h5>4. Does your company have a sustainable procurement policy in place?</h5>
        <div className="questions-check mt-3">
          <label htmlFor="yesno3" class="hell">
            <input
              {...register('yesno3', { required: true })}
              type="radio"
              name="yesno3"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno3" class="hell">
            <input
              {...register('yesno3', { required: true })}
              type="radio"
              name="yesno3"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno3?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h5> 5. Does your company have a committee for sustainability?</h5>
        <div className="questions-check mt-3">
          <label htmlFor="yesno4" class="hell">
            <input
              {...register('yesno4', { required: true })}
              type="radio"
              name="yesno4"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno4" class="hell">
            <input
              {...register('yesno4', { required: true })}
              type="radio"
              name="yesno4"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno4?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h5>6. Is your company eligible for CSR and has a CSR committee?</h5>
        <div className="questions-check mt-3">
          <label htmlFor="yesno5" class="hell">
            <input
              {...register('yesno5', { required: true })}
              type="radio"
              name="yesno5"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno5" class="hell">
            <input
              {...register('yesno5', { required: true })}
              type="radio"
              name="yesno5"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno5?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h5>7. Is there Extended Producer Responsibility (EPR) plan in place, if it applies? </h5>
        <div className="questions-check mt-3">
          <label htmlFor="yesno6" class="hell">
            <input
              {...register('yesno6', { required: true })}
              type="radio"
              name="yesno6"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno6" class="hell">
            <input
              {...register('yesno6', { required: true })}
              type="radio"
              name="yesno6"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno6?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h5>9.  Has the company performed Life Cycle Assessement (LCA) for all of it's products? </h5>
        <div className="questions-check mt-3">
          <label htmlFor="yesno7" class="hell">
            <input
              {...register('yesno7', { required: true })}
              type="radio"
              name="yesno7"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno7" class="hell">
            <input
              {...register('yesno7', { required: true })}
              type="radio"
              name="yesno7"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno7?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h5>10.   Has the company performed Social Impact Assessment ?  </h5>
        <div className="questions-check mt-3">
          <label htmlFor="yesno8" class="hell">
            <input
              {...register('yesno8', { required: true })}
              type="radio"
              name="yesno8"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno8" class="hell">
            <input
              {...register('yesno8', { required: true })}
              type="radio"
              name="yesno8"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno8?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h5>11. Is there board-level oversight of climate-related issues within your organization? </h5>
        <div className="questions-check mt-3">
          <label htmlFor="yesno9" class="hell">
            <input
              {...register('yesno9', { required: true })}
              type="radio"
              name="yesno9"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno9" class="hell">
            <input
              {...register('yesno9', { required: true })}
              type="radio"
              name="yesno9"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno9?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h5>12 .Does your organization’s strategy include a transition plan that aligns with a 1.5°C world?</h5>
        <div className="questions-check mt-3">
          <label htmlFor="yesno10" class="hell">
            <input
              {...register('yesno10', { required: true })}
              type="radio"
              name="yesno10"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno10" class="hell">
            <input
              {...register('yesno10', { required: true })}
              type="radio"
              name="yesno10"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno10?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h5>13.  Has the company performed climate risk assessment and have adaptation & mitigation strategies in place?</h5>
        <div className="questions-check mt-3">
          <label htmlFor="yesno11" class="hell">
            <input
              {...register('yesno11', { required: true })}
              type="radio"
              name="yesno11"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno11" class="hell">
            <input
              {...register('yesno11', { required: true })}
              type="radio"
              name="yesno11"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno11?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h5> 14 .Do you engage with your value chain on climate-related issues?</h5>
        <div className="questions-check mt-3">
          <label htmlFor="yesno12" class="hell">
            <input
              {...register('yesno12', { required: true })}
              type="radio"
              name="yesno12"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno12" class="hell">
            <input
              {...register('yesno12', { required: true })}
              type="radio"
              name="yesno12"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno12?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h5> 15. Has your organization made a public commitment and/or endorsed any initiatives related to biodiversity?</h5>
        <div className="questions-check mt-3">
          <label htmlFor="yesno13" class="hell">
            <input
              {...register('yesno13', { required: true })}
              type="radio"
              name="yesno13"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno13" class="hell">
            <input
              {...register('yesno13', { required: true })}
              type="radio"
              name="yesno13"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno13?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h5> 16 .Does your organization assess the impact of its value chain on biodiversity?</h5>
        <div className="questions-check mt-3">
          <label htmlFor="yesno14" class="hell">
            <input
              {...register('yesno14', { required: true })}
              type="radio"
              name="yesno14"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno14" class="hell">
            <input
              {...register('yesno14', { required: true })}
              type="radio"
              name="yesno14"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno14?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h5>17. Does your organization use biodiversity indicators to monitor performance across its activities?</h5>
        <div className="questions-check mt-3">
          <label htmlFor="yesno15" class="hell">
            <input
              {...register('yesno15', { required: true })}
              type="radio"
              name="yesno15"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno15" class="hell">
            <input
              {...register('yesno15', { required: true })}
              type="radio"
              name="yesno15"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno15?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h5> 18. Name of the national and international codes/certifications/labels/ standards (e.g. Forest Stewardship Council, Fairtrade, Rainforest Alliance, Trustea) standards (e.g. SA 8000, OHSAS, ISO, BIS) adopted by your organisation</h5>
        <div className="questions-check mt-3">
          <label htmlFor="standard" class="hell">
            <input
              {...register('standard', { required: true })}
              type="radio"
              name="standard"
              value="SA 8000"
              className="questions-check-input"
              id="yes"
            />{' '}
            SA 8000
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="standard" class="hell">
            <input
              {...register('standard', { required: true })}
              type="radio"
              name="standard"
              value="OHSAS"
              className="questions-check-input"
              id="OHSAS"
            />{' '}
            OHSAS
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="standard" class="hell">
            <input
              {...register('standard', { required: true })}
              type="radio"
              name="standard"
              value="ISO"
              className="questions-check-input"
              id="ISO"
            />{' '}
            ISO
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="standard" class="hell">
            <input
              {...register('standard', { required: true })}
              type="radio"
              name="standard"
              value="BIS"
              className="questions-check-input"
              id="BIS"
            />{' '}
            BIS
          </label>
        </div>
        <div class="error">
          {errors.standard?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h5>18 . Is there a mechanism for zero liquid discharge?</h5>
        <div className="questions-check mt-3">
          <label htmlFor="yesno16" class="hell">
            <input
              {...register('yesno16', { required: true })}
              type="radio"
              name="yesno16"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno16" class="hell">
            <input
              {...register('yesno16', { required: true })}
              type="radio"
              name="yesno16"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno16?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h5>19 .Has the organisation applied for science based target initiatives (SBTi)?</h5>
        <div className="questions-check mt-3">
          <label htmlFor="yesno17" class="hell">
            <input
              {...register('yesno17', { required: true })}
              type="radio"
              name="yesno17"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno17" class="hell">
            <input
              {...register('yesno17', { required: true })}
              type="radio"
              name="yesno17"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno17?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h5> 20 .Does the organisation apply for any ratings system to measure it's sustainability performance ? (Eg: CDP, Ecovadis, B corp etc)</h5>
        <div className="questions-check mt-3">
          <label htmlFor="yesno18" class="hell">
            <input
              {...register('yesno18', { required: true })}
              type="radio"
              name="yesno18"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno18" class="hell">
            <input
              {...register('yesno18', { required: true })}
              type="radio"
              name="yesno18"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno18?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h5> 21. Does your organisation make a yearly ESG or sustainability report publicly available ? </h5>
        <div className="questions-check mt-3">
          <label htmlFor="yesno19" class="hell">
            <input
              {...register('yesno19', { required: true })}
              type="radio"
              name="yesno19"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno19" class="hell">
            <input
              {...register('yesno19', { required: true })}
              type="radio"
              name="yesno19"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno19?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>


        <button type="submit" class="buttonsumit">
          Submit
        </button>
      </form>
    </div>   <ToastContainer /></>
  )
}
export default Questions