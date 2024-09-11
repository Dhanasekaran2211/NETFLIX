import React from 'react'
import "./Landingpage.css";
import child from "../../assets/Image/children.png"
import tv from "../../assets/Image/tv.png"
import phone from "../../assets/Image/strangeThings.jpg"
import tv1 from "../../assets/Image/tvImg2.png"
import vd1 from "../../assets/videos/tvVideo1.m4v"
import vd2 from "../../assets/videos/tvVideo2.m4v"
import Navbar from '../../components/navbar/Navbar';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import Lable from '../../components/lable/Lable';
import AccordionList from '../../components/acordion/Accordion';
import Footer from '../../components/footer/Footer';
const Landingpage = () => {
  return (
    <>
    <div className="land-main">
  <Navbar invi={"none"}/>
  <div className="land-content">
    <h1>Unlimited movies, TV shows and more</h1>
    <h3>Watch anywhere. Cancel anytime.</h3>
    <p>Ready to watch? Enter your email to create or restart your membership.</p>
  </div>
  <div className="input">
  <Input height={"60px"} width={"550px"} border={"1px solid rgba(255, 255, 255, 0.628)"} bgone={"rgba(10, 9, 9, 0.774)"} br={"5px"} color={"white"} padding={"0px 20px"} fs={"14px"}/>
  <Button hover={"hover"} content={"Get Started"} bg={"red"} padding={'10px 5px '} color={'white'} height={"60px"} width={"200px"} fs={"22px"} br={"5px"} border={"none"}/>
  </div>
  </div>
  <div className="lable">
    <Lable color={"white"} head={"Enjoy on your TV"} para={"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."} height={"80vh"}bg={"black"} border={" 10px solid rgba(153, 151, 151, 0.202)"} img={tv} gap={"100px"} right={"100px"}top={"100px"}  video={vd1}/>
<Lable color={"white"} head={"Download your shows to watch offline"} para={"Save your favourites easily and always have something to watch."} height={"80vh"}bg={"black"} border={" 10px solid rgba(153, 151, 151, 0.202)"} img={phone} right={"100px"} reverse={"row-reverse"} wrap={"wrap"}width={"500px"} />
    <Lable color={"white"} head={"Watch everywhere"} para={"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."} height={"80vh"}bg={"black"} border={" 10px solid rgba(153, 151, 151, 0.202)"} img={tv1}   right={"100px"} gap={"100px"}top={"150px"} video={vd2} />
    <Lable color={"white"} head={"Create profiles for kids"} para={"Send children on adventures with their favourite characters in a space made just for them—free with your membership."} height={"80vh"}bg={"black"} border={" 10px solid rgba(153, 151, 151, 0.202)"} right={"100px"}top={"100px"}img={child} reverse={"row-reverse"} wrap={"wrap"}width={"500px"} />
  </div>
  <div className="accordion-container">
    <div className="accordion-heading" style={{borderTop:"10px solid rgba(255, 255, 255, 0.128)"}}>
      <h1 style={{color:"white",marginLeft:"350px",fontSize:"50px"}}>Frequently Asked Questions </h1>
    </div>
  <AccordionList/>
  </div>
  <Footer/>
    </>
  )
}

export default Landingpage;