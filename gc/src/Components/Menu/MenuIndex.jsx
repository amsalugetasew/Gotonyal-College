import React from 'react'
import { Link } from 'react-router-dom'
import "./inde.scss"
import Logo from "../../Image/glogo.png"
import MenuIcon from '@mui/icons-material/Menu';
function inde() {
  return (
    <div className='menu'>
        <div className='icons'><MenuIcon/></div>
        <div className="avater">
          <img src={Logo} className="avater" alt="logo"/> 
        </div>
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="">About us ▾</Link>
        <ul class="dropdown">
                <li><Link to="/Home/Administration">administration</Link></li>
                <li><Link to="/Home/AboutAGTC/History">History</Link></li>
                <li><Link to="/Home/MissionandVision/Mision">Mission and vision</Link></li>
                <li><Link to="/Home/AboutAGTC/Message">Message from Dean</Link></li>
                <li><Link to="">Linkage and collaboration</Link></li>
                <li><Link to="">client</Link></li>
            </ul>
        </li>
        <li>
            <Link to="">Service</Link>
            <ul class="dropdown">
             <li><Link to="/Accadamics">Acadmics</Link></li>
             <li><Link to="/Home/TrainingAndConsultancy">Training and consultancy</Link></li>
             <li><Link to="/Home/LMS">LMS</Link></li>
            </ul>
        </li>        
        <li><Link to="/Home/Galary">Galary</Link>
        </li>
        <li><Link to="/Home/NewsAndEvents">news and events</Link></li>        
        <li><Link to="/Home/Contact">Contact</Link></li>        
        <li className='sign'><Link className='sign' to="/signip">Sign In</Link></li>
    </ul>
    </div>
  )
}

export default inde


