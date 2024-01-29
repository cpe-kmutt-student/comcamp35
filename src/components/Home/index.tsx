import React from 'react'
import ShortStory from './Content/Shortstory'
import Invitation from './Content/Invitation'
import About from './Content/About'
import CampHighlight from './Content/Camphighlight'
import Condition from './Content/Condition'
import Timeline from './Content/Timeline'
import ReceivingNum from './Content/ReceivingNum'
import Location from './Content/Location'
import FAQ from './Content/FAQ'
import Sponsor from './Content/Sponsor'
import Contact from './Content/Contact'

const Content: React.FC = () => {
  return (
    <div>
      <Invitation />
      <About />
      <ShortStory />
      <CampHighlight />
      <Condition />
      <Timeline />
      <ReceivingNum />
      <Location />
      <FAQ />
      <Sponsor />
      <Contact />
    </div>
  )
}

export default Content
