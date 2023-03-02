import React, { useContext } from 'react'
import Avatar from '@mui/material/Avatar';
import "./header.css"
import { LoginContext } from '../ContextProvider/Context';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate , NavLink } from "react-router-dom"

const Header = () => {

    const { logindata, setLoginData } = useContext(LoginContext);

    const history = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logoutuser = async () => {
    let token = localStorage.getItem("token");
    const ares = await fetch("/user/logout", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token,
            Accept: "application/json"
        },
        credentials: "include"
    });

    localStorage.removeItem("token");
    setLoginData(false)
    history("/");
    }

    const goDash = () => {
        history("/profile")
    }

    const goError = () => {
        history("*")
    }
    const hello = () => {
        history("/rec")
    }
    const hello1 = () => {
        history("/companyadd")
    }

    return (
      
        <>
        {/* <NavLink to="/dash"><h1>LIVABL</h1></NavLink> */}
            <div className="avtar">
                {
                    logindata ? <Avatar style={{ background: "salmon", fontWeight: "bold", textTransform: "capitalize" }} 
                    onClick={handleClick}>{logindata.fname.charAt(0).toUpperCase()}</Avatar> :
                        <Avatar style={{ background: "blue" }} onClick={handleClick} />
                }
            </div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{'aria-labelledby': 'basic-button'}}
            >{ logindata.fname ? 
                (
                        <>
                            <MenuItem onClick={() => {
                                logoutuser()
                                handleClose()
                            }}>Logout</MenuItem>
                        </>
                    )  : (<></>)
                } 
            </Menu>
    

        </>
    )
}

export default Header