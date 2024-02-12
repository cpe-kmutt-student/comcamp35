import React from 'react'
import Hero from './Content/Hero'
import About from './Content/About'
// import Highlight from './Content/Highlight'
import Learning from './Content/Learning'
import Condition from './Content/Condition'
import Timeline from './Content/Timeline'
import FrequentlyAskedQuestionHome from './Content/Faq'
// import Sponsor from './Content/Sponsor'
import Contact from './Content/Contact'

const Content: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      {/* <Highlight /> */}
      <Learning />
      <Condition />
      <Timeline />
      <FrequentlyAskedQuestionHome />
      {/* <Sponsor /> */}
      <Contact />
    </div>
  )
}

export default Content
