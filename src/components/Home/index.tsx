import React from 'react'
import Hero from './Content/Hero'
// import Invitation from './Content/Invitation'
import About from './Content/About'
import Highlight from './Content/Highlight'
import Condition from './Content/Condition'
import Timeline from './Content/Timeline'
// import ReceivingNum from './Content/ReceivingNum'
// import Location from './Content/Location'
import Faq from './Content/FAQ'
import Sponsor from './Content/Sponsor'
import Contact from './Content/Contact'

const Content: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Highlight />
      <Condition />
      <Timeline />
      <Faq />
      <Sponsor />
      <Contact />
    </div>
  )
}

export default Content
