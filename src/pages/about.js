// Step 1: Import your component
import * as React from 'react'
import  Layout from '../components/layout'
import {body} from '../components/layout.module.css'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Us">
      <p className={body}>
      crossing borders & genres <br /> 
      tearing walls down <br /> 
      <br /> 
      @szlag.my.pitch.up <br /> 
      szlag.arts@gmail.com <br />
      <br />

      Szlag is an inclusive initiative crystalized from the need of connection in isolation. Serving as a bridge between the underground scenes of various cities and countries, it will facilitate inspiring collabs, promote local artists, empower new talents and defy music genres under various shapes and forms.
      We’d like the values and concepts embodied in the project to contribute to and nurture the music scene which has lately been both challenged by the pandemic and commercialized to the bone.
    </p>
    </Layout>
  )
}
// Step 3: Export your component
export default AboutPage