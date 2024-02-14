import React from 'react'
import { Flex, Heading } from '@radix-ui/themes'
import styles from './timeline.module.scss'
import timeline_logo2 from 'src/assets/Aquack.svg.png'
import timeline_logo1 from 'src/assets/Candy-Gray.svg.png'
import timeline_logo3 from 'src/assets/Candy-Pink.svg.png'
import timeline_logo4 from 'src/assets/Candy-Red.svg.png'

const TimelineContents: { date: string; event: String; image: string }[] = [
  {
    date: '1 - 10 มีนาคม 2567',
    event: 'รับสมัคร',
    image: timeline_logo1,
  },
  {
    date: '16 มีนาคม 2567',
    event: 'ประกาศผล',
    image: timeline_logo2,
  },
  {
    date: '16 - 18 มีนาคม 2567',
    event: 'ยืนยันสิทธ์',
    image: timeline_logo3,
  },
  {
    date: '7 - 11 เมษายน 2567',
    event: 'วันค่าย',
    image: timeline_logo4,
  },
]

const Timeline: React.FC = () => {
  const renderCampCondition = TimelineContents.map((item, i) => (
    <ol key={i}>
      <img src={item.image} alt="" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
      <p>{item.date}</p>
      <h2>{item.event}</h2>
    </ol>
  ))
  return (
    <Flex direction="column" justify="center" align="center" className={styles.timeline}>
      <Heading size={{ initial: '8', md: '9' }} className="title" align="center">
        timeline
      </Heading>
      <div className="timeline_layout">
        <div className={styles.item_list_timeline}>{renderCampCondition}</div>
      </div>
    </Flex>
  )
}

export default Timeline
