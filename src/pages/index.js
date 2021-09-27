// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


// Step 2: Define your component
const IndexPage = () => {
  return (
   <Layout pageTitle="Home Page">
     <p>@szlag.my.pitch.up</p>
     <StaticImage
        alt="Szlag logo over a white background"
        src="../images/szlag-white.jpg"
      />
   </Layout>
   
  )
}
// Step 3: Export your component
export default IndexPage