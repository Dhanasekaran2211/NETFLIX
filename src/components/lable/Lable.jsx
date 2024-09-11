import React from 'react'
import "./lable.css"
const Lable = ({head,para,height,bg,border,color,img,wrap,width,reverse,gap,right,top,video,video1}) => {
  return (
   <>
   <div className="lable-container" style={{flexDirection:reverse,height:height,backgroundColor:bg,borderTop:border,color:color,width:"100vw",gap:gap,}}>
    <div className="lable-content" style={{display:"flex",flexDirection:"column",flexWrap:"100px",width:width,marginLeft:right}}>
    <h1 style={{fontSize:"45px",fontWeight:"900",flexWrap:wrap}}>{head}</h1>
    <p style={{fontSize:"25px",fontWeight:"600",display:"flex",flexWrap:"wrap",width:"420px"}}>{para}</p>
    </div>
    <div className="imgvd" style={{gap:gap,marginTop:top}}>
      <img src={img} alt="tv" className={"clsnm"} style={{height:"400px",position:"absolute"}}/>
      <video className={"video"}  autoPlay muted loop><source src={video} /></video>
    </div>
   </div>
   </>
  )
}

export default Lable