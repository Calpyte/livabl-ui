import { useCallback,useState } from "react";
import { TextField, Input, Icon, Button } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
 
  const onLoginHereClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

    const [inpval, setInpval] = useState({
        fname: "",
        email: "",
        password: "",
        cpassword: "",
        temppass:""
    });


    const setVal = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };

    const addUserdata = async (e) => {
        e.preventDefault();

        const { fname, email, password, cpassword,temppass } = inpval;

        if (fname === "") {
            toast.warning("Company name is required!", {
                position: "top-center"
            });
        } else if (email === "") {
            toast.warning("email is required!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("includes @ in your email!", {
                position: "top-center"
            });
        } else if (password === "") {
            toast.warning("password is required!", {
                position: "top-center"
            });
        } else if (password.length < 6) {
            toast.warning("password must be 6 char!", {
                position: "top-center"
            });
        } else if (cpassword === "") {
            toast.warning("cpassword is required!", {
                position: "top-center"
            });
        }
        else if (cpassword.length < 6) {
            toast.warning("confirm password must be 6 char!", {
                position: "top-center"
            });
        } else if (password !== cpassword) {
            toast.warning("password and Confirm password are not matching!", {
                position: "top-center"
            });
        }else if (temppass==="") {
          toast.warning("Enter the Temporary password !", {
              position: "top-center"
          });
      } else {
            // console.log("user registration succesfully done");
           let type = 0; //
            const data = await fetch("user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fname, email, password, cpassword,temppass,type
                })
            });

            const res = await data.json();
            console.log(res);
            if (data.status === 201) {
                toast.success("Registration Successfully done 😃!", {
                    position: "top-center"
                });
                setInpval({ ...inpval, fname: "", email: "", password: "", cpassword: "",temppass:"" });
       
            }else{
                toast.error("invalid!", {
                    position: "top-center"
                });
            }
        }
    }
  return (
    <>
    <div className="wireframe-8">
      <TextField
        className="wireframe-8-child"
        sx={{ width: 421 }}
        color="primary"
        variant="outlined"
        type="password"
        label="Password"
        placeholder="Enter Password "
        size="medium"
        margin="none"
        value={inpval.password} onChange={setVal} name="password" id="password" 
        required
      />
       <TextField
        className="wireframe-8-hell"
        sx={{ width: 421 }}
        color="primary"
        variant="outlined"
        type="password"
        label=" Temporary Password"
  
        size="medium"
        margin="none"
        value={inpval.temppass} onChange={setVal} 
        name="temppass" id="temppass" 
        placeholder='Enter Your Temporary password'
        required
      />
      <TextField
        className="wireframe-8-item"
        sx={{ width: 421 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Company Name"
        placeholder="Enter Company Name"
        size="medium"
        margin="none"
        onChange={setVal} 
        value={inpval.fname}
         name="fname"
          id="fname"
        required
      />
      <TextField
        className="wireframe-8-inner"
        sx={{ width: 421 }}
        color="primary"
        variant="outlined"
        type="email"
        label="Email"
        placeholder="Enter your Email"
        size="medium"
        margin="none"
        onChange={setVal} 
        value={inpval.email} 
        name="email" 
        id="email" 
        required
      />
      <img className="arroba-2-3-icon" alt="" src="../arroba2-3@2x.png" />
      <TextField
        className="rectangle-textfieldc"
        sx={{ width: 421 }}
        color="primary"
        variant="outlined"
        type="password"
        label="Confirm Password "
        placeholder="Confirm Password "
        size="medium"
        margin="none"
        value={inpval.cpassword} onChange={setVal} name="cpassword" id="cpassword"
        required
      />
      <img className="arroba-2-2-icon" alt="" src="../arroba2-2@2x.png" />
      <img className="arroba-2-4-icon" alt="" src="../arroba2-2@2x.png" />
      <div className="sign-up">Sign Up</div>
      <Button
        className="rectangle-buttonlog"
        sx={{ width: 233 }}
        variant="contained"
        color="primary"
        href="/Login"
        onClick={addUserdata}
      >
        Sign Up
      </Button>
      <a className="forgot-password">Forgot password ?</a>
      <img
        className="whatsapp"
        alt=""
        src="../whatsapp-image-20221222-at-923-1@2x.png"
      />
      <img className="ezgif-3-icon" alt="" src="../two.gif" />
      <div className="already-have-an-account">
        <span className="already-have-an">Already have an account</span>
        <span>{` `}</span>
      </div>
      <Link className="login-here" to="/" onClick={onLoginHereClick}>
        Login here
      </Link>
    </div>
    <ToastContainer /></>
  );
};

export default Register;
