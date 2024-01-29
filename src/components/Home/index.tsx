import React from 'react'
import ShortStory from './Content/Shortstory'
import Invitation from './Content/Invitation'
import About from './Content/About'
import CampHighlight from './Content/Camphighlight'

const Content: React.FC = () => {
  return (
    <div>
      <Invitation />
      <About />
      <ShortStory />
      <CampHighlight />
    </div>
  )
}

export default Content
