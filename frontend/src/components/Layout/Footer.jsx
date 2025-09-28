import React, { useContext } from 'react'
import {Context} from "../../main"
import {Link} from "react-router-dom"
import { FaGithub , FaLinkedin} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";
import { RiInstagramFill} from "react-icons/ri"
function Footer() {
  const {isAuthorized}  = useContext(Context)
  return (
    <footer className= {isAuthorized ? "footerShow" : "footerHide"}>
<div>&copy; All Rights Reserved by Sarthak And Vedang</div>
<div>
  <Link  target='github'><FaGithub></FaGithub></Link>
  <Link  target='leetcode'><SiLeetcode></SiLeetcode></Link>
  <Link  target='linkedin'><FaLinkedin></FaLinkedin></Link>
  <Link  target='instagram'><RiInstagramFill></RiInstagramFill></Link>
</div>
      
    </footer>
  )
}

export default Footer