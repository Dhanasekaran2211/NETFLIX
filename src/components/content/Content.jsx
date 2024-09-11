import React from 'react'
import "./content.css";
const Content = ({content}) => {
  return (
   <div className="list-container">
   <li className='list'>{content}</li>
   </div>
  )
}

export default Content