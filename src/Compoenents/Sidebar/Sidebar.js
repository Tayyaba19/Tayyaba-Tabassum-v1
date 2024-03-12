import React from 'react'
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <ul>
        <li >  
          <Link to="/">About</Link>
       </li>
        <li>
           <Link to="/project">Projects</Link>
        </li>
        <li>
           <Link to="/experience">Experience</Link>
        </li>
    </ul>  
    </div>
  )
}

export default Sidebar