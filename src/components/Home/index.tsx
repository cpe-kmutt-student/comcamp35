import React from 'react'
import Invitation from 'src/components/Home/Content/Invitation'
import WhatIsComCamp from 'src/components/Home/Content/About'
import ShortStory from 'src/components/Home/Content/Shortstory'
import CampHighlight from 'src/components/Home/Content/Camphighlight'

const Content: React.FC = () => {
  return (
    <div>
      <Invitation />
      <WhatIsComCamp />
      <ShortStory />
      <CampHighlight />
    </div>
  )
}

export default Content
