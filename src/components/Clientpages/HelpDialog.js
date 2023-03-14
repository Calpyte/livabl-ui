import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ReactPlayer from 'react-player';
import { LoginContext } from "../ContextProvider/Context";
import { ToastContainer, toast } from 'react-toastify';
import { NavLink,useNavigate,Link} from "react-router-dom"
import "./HelpDialog.css";
import Header from './Header';

export default function HelpDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [buttonTxt,setButtonTxt] = React.useState("How Can I Help You ?")
  const {children,onClose} = props;
  const { logindata } = React.useContext(LoginContext);
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  React.useEffect(()=>{
    if(props.buttonName)setButtonTxt(props.buttonName);
  },[])

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit=async ()=>{

    let content = "Name : "+logindata.fname+"\n"+
    "Email : "+logindata.email+"\n"+
    "Contact : "+document.getElementById('contactNumber').value+"\n"+
    "Message : "+document.getElementById('content').value
    let obj ={
        subject: document.getElementById("regarding").value,
        body: content,
    }
    props.onResult(obj);

    const data = await fetch("/message/help-mail", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem('token'),
      },
      body: JSON.stringify(obj)
  });
  const res = await data.json();

    handleClose();

  }

  return (
    <div>
      <div className="home1-add-inner" />
      <img
        className="whatsapp-image-2022-12-22-at-9"
        alt=""
        src="../whatsapp-image-20221222-at-923-3@2x.png"
      />
      <div className="ellipse-icon">  <Header/></div>
      <Link to="/dash"><a className="measure">Measure</a></Link>
      <Link to="/"><a className="reduce">Reduce</a></Link>
      <Link to="/help"><a className="offset">Help</a></Link>
      <Link to="/Main"><a className="dashboard">Dashboard</a></Link>       
 <ToastContainer/>

       <div style={{"display": "flex", "justifyContent": "center"}}> {/*style={{padding:"0 30%"}} */}
         <ReactPlayer width='50%' controls url=""/>
        
      </div>
      <div style={{padding:"3% 0 0 40%"}}>
      <Button variant="outlined" onClick={handleClickOpen}>
        {buttonTxt}
      </Button>
      </div>
    
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Help Message</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Message Here
          </DialogContentText> */}
         
            <TextField
            autoFocus
            margin="contactNumber"
            id="contactNumber"
            label="ContactNumber"
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="regarding"
            label="Regarding"
            type="text"
            fullWidth
            variant="standard"
          />
           <TextField
          id="content"
          label="Content"
          multiline
          minRows={6}
          maxRows={6}
          fullWidth
          variant="filled"
        />
           
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}