// import React from 'react'
// import { useState } from 'react'


// const Sample = () => {
//     const [count,setCount]=useState(0)
//   return (
//     <>
//     <p>count:{count}</p>
//     <button onClick={()=>{setCount(count+1)}}>Button</button>
//     </>
//   )
// }

// export default Sample\

import { useState,useEffect } from "react";

const Sample = () => {
    const [data,setData]=useState(0)
    var  a=10;
   var n=Number(prompt("enter a number :"));
     useEffect(() => {

      if(a===n){
        console.log("the value is correct");
        // setData(n);
      }
      else{
        console.log("the value is wrong");
      }
      setData(n);
    }, [data])
      return (
        <>
        <p>{data}</p>
        </>
      )
}

export default Sample;