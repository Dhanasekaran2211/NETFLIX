// import { Link } from 'react-router-dom'
import React from 'react'
import "./button.css"
const Button = ({
  onclick,
  link,
  content,
  padding,
  bg,
  color,
  height,
  width,
  br,
  border,
  fs,
  fw,
  hover,
  submit
  }) => {
  return (
    <>
    <button  onClick={submit||onclick} className={hover} style={{padding:padding,backgroundColor:bg,color:color,height:height,width:width,borderRadius:br,border:border,fontSize:fs,fontWeight:fw}}><a className='a' href={link}>{content}</a></button>
    </>
  )
}

export default Button