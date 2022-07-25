import React from 'react'
import {useNavigate} from "react-router-dom";


function Navbare() {
    const navigate = useNavigate();
  return (
    <div className='nav-absolute'> 
        <div>
            <ul className='nav-ul'>
                <li>
                    Home
                </li>
                <li onClick={()=>navigate('/score')}>
                    Score Board
                </li>
                <li onClick={()=>navigate('/results')}>
                    Live Result
                </li>
                <li onClick={()=>navigate('/schedule')}>
                    Schedule
                </li>
                <li onClick={()=>navigate('/team')}>
                    Team
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbare