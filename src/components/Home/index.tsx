import React from 'react'
import Hero from './Content/Hero'
import About from './Content/About'
// import Highlight from './Content/Highlight'
import Learning from './Content/Learning'
import Condition from './Content/Condition'
import Timeline from './Content/Timeline'
import FrequentlyAskedQuestionHome from './Content/Faq'
import Sponsor from './Content/Sponsor'
import Contact from './Content/Contact'

const Content: React.FC = () => {
  return (
    <div>
      <Hero />
      <About id="about" />
      {/* <Highlight /> */}
      <Learning id="learning" />
      <Condition id="condition" />
      <Timeline id="timeline" />
      <FrequentlyAskedQuestionHome id="faq" />
      <Sponsor />
      <Contact id="contact" />
    </div>
  )
}

export default Content
