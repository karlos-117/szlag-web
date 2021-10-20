// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


// Step 2: Define your component
const HomePage = () => {
  return (
   <Layout pageTitle="Home Page">
     <p>@szlag.my.pitch.up</p>
     <StaticImage
        alt="Szlag logo"
        src="../images/szlag-logo.png"
      />
   </Layout>
   
  )
}
// Step 3: Export your component
export default HomePage