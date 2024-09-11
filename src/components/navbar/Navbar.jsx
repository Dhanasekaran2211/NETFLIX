import React from 'react'
import { Link,useNavigate} from 'react-router-dom';
import profile from "../../assets/Image/profile.png"
import { FaCaretDown } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import img from "../../assets/Image/logo.png"
import Button from '../button/Button'
import Content from '../content/Content'

import "./navbar.css"
const Navbar = ({
  display,
display1,height,position,left,padding,top,position1,bg,one,invi
}) => {
  const logout = () => {
    localStorage.removeItem("user");
    logoutNav("/");
  };
const logoutNav = useNavigate();
  return (
    <>
    <div className="nav-container" style={{position:position1,color:"white",background:bg}}>
        <img src={img} alt="" style={{height:height,position:position,left:left,padding:padding,top:top}}/>
       <div className="button" style={{display:display||one}}>
       <select >
        <option value="">English</option>
        <option value="">Hindi</option>
        </select>
        <Button content={"sign in"} bg={"red"} color={"white"} height={"35px"} width={"80px"} br={"5px"} border={"none"} fs={"15px"} fw={"600"} link={"/signin"} />
       </div>
       <div  style={{display:invi}}>
       <div className="content" style={{display:display1}}>
        <Link to={"/home"}>home</Link>
       <Link to={"/mylist"}>My List</Link>
       <Link to={"/search"}>Search</Link>
        <Content content={"Tvshows"}/>
        <Content content={"Movies"}/>
        <Content content={"Browes by Language"}/> 
       </div>
       <div className="advanced-layout">
       <IoSearchOutline style={{height:"30px",width:"30px"}}/>
       <Content content={"children"}/>
       <MdOutlineNotificationsActive style={{height:"30px",width:"30px"}}/>
       <img src={profile} alt="Profile Img"style={{height:"80px",width:"80px",position:"absolute",left:"170px",top:"-25px"}} />
       <FaCaretDown style={{position:"absolute",left:"230px",top:"5px"}}className={"down-icon"}/>
       <div className="signout" style={{position:"absolute",left:"260px",top:"0px",cursor:"pointer"}}> <Button onclick={logout} content={"sign-out"} bg={"red"} color={"white"} height={"35px"} width={"80px"} br={"5px"} border={"none"} fs={"15px"} fw={"600"}/></div>
       </div>
       </div>
    </div>
    </>
  )
}

export default Navbar