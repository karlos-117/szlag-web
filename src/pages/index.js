// Step 1: Import React
import * as React from 'react'
import {landingPage} from '../components/layout.module.css'
import {Link} from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'



// Step 2: Define your component
const IndexPage = () => {
  return (
  
    <div className={landingPage}>
    <Link to = "/home">
     <StaticImage
        alt="Szlag logo"
        src="../images/szlag-logo.png"
      />
    </Link>
    </div>
    
  )
}
// Step 3: Export your component
export default IndexPage