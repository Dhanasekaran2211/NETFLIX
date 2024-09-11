import React, { useEffect, useState } from 'react'
import Navbar from "../navbar/Navbar"
import  {getPageData} from "../../api/movie "
import Content from '../content/Content'
import "./herobanner.css"
import Button from "../button/Button"
const Herobanner = () => {
  const baseUrl = "https://image.tmdb.org/t/p/original";

  const[movie,setMovie]=useState(null);

  useEffect(()=>{
    const fetchMovie= async()=>{
      try{
        const response=await getPageData();
        const randomIndex=Math.floor(
          Math.random()*response?.netflixOriginals?.results.length);

setMovie(response?.netflixOriginals?.results[randomIndex]);
      }
      catch(error){
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();
  const intervalId=setInterval(fetchMovie,5000);
  return()=>clearInterval(intervalId);
  },[])

  const handleDescription = (data, n) => {
    return data?.length > n ? data.substring(0, n) + "..." : data;
  };
 return (
  
<div className="hero-container">
   
    <Navbar  position1={"absolute"} display={"none"} height={"60px"} padding={"10px"} left={"40px"} top={"10px"} position={"relative"}/>
<div className="hero-body">
{
  movie&&(
    <>
    <div className="hero-img">
      <img src={`${baseUrl + movie?.backdrop_path}`} alt="" />
    </div>
    <div className="hero-content">
      <h1>{movie?.name || movie?.title}</h1>
      <br />
      <div className="hero-btn">
      <Button content={"PLAY"} width={"100px"} bg={"red"} border={"none"} color={"black"} br={"5px"}/>
      <Button content={"MORE INFO"} width={"150px"} bg={"rgba(128, 128, 128, 0.604)"} border={"none"} color={"white"} br={"5px"}/>
      </div>
      <Content
              className="hero-text"
              content={handleDescription(movie?.overview, 500)}
            />
    </div>
  
    </>
  )
}
</div>
</div>
)
}

export default Herobanner


