import React from 'react'
import { Flex, Grid, Heading, Text } from '@radix-ui/themes'
import styles from './timeline.module.scss'
import candy_1 from 'src/assets/candy-blue.svg'
import candy_2 from 'src/assets/candy-purple.svg'
import candy_3 from 'src/assets/candy-pink.svg'
import candy_4 from 'src/assets/candy-red.svg'
import Duck from 'src/assets/duck.svg'
import { isTodayInTimeline } from 'src/lib/date'
import { isPast } from 'date-fns'

interface ITimeline {
  title: string
  date: {
    from: string
    until: string
  }
  event: String
  image: string
}

const TimelineContents: ITimeline[] = [
  {
    title: '1 - 10 มีนาคม 2567',
    date: {
      from: '2024/03/01',
      until: '2024/03/10',
    },
    event: 'รับสมัคร',
    image: candy_1,
  },
  {
    title: '16 มีนาคม 2567',
    date: {
      from: '2024/03/16',
      until: '2024/03/16',
    },
    event: 'ประกาศผล',
    image: candy_2,
  },
  {
    title: '16 - 18 มีนาคม 2567',
    date: {
      from: '2024/03/16',
      until: '2024/03/18',
    },
    event: 'ยืนยันสิทธ์',
    image: candy_3,
  },
  {
    title: '7 - 11 เมษายน 2567',
    date: {
      from: '2024/04/07',
      until: '2024/04/11',
    },
    event: 'วันค่าย',
    image: candy_4,
  },
]

type Props = {
  id: string
}

const Timeline: React.FC<Props> = ({ id }: Props): JSX.Element => {
  const renderCampCondition = TimelineContents.map((item, i) => (
    <div key={i} className={styles.timeline_contents}>
      <img
        src={isTodayInTimeline(item.date.from, item.date.until) ? Duck : item.image}
        className={isPast(new Date(item.date.until)) ? styles.imgDisabled : undefined}
        alt="timeline"
        style={{ width: '120px', height: '120px' }}
      />
      <Text>{item.title}</Text>
      <Heading size="5" className={styles.title}>
        {item.event}
      </Heading>
    </div>
  ))

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      className={styles.timeline}
      mt={{ initial: '9', md: '0' }}
      id={id}
    >
      <Heading size={{ initial: '8', md: '9' }} className="title" align="center">
        timeline
      </Heading>
      <Grid columns={{ initial: '1', sm: '2', md: '4' }} className={styles.contents}>
        {renderCampCondition}
      </Grid>
    </Flex>
  )
}

export default Timeline
