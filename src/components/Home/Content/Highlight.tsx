import React from 'react'
import styles from './highlight.module.scss'
import { Flex, Grid, Heading } from '@radix-ui/themes'

const highLightContents: string[] = [
  'มีการเรียนการสอนที่เกี่ยวกับความรู้พื้นฐานด้านคอมพิวเตอร์ อีกทั้งยังมีกิจกรรมต่าง ๆ รวมถึงการทำมินิโปรเจคที่มาจากปัญหาในชีวิตจริง เพื่อให้น้อง ๆ ได้เรียนรู้และพัฒนาทักษะทางวิชาการ',
  'น้อง ๆ จะได้พูดคุยทำความรู้จักกับเพื่อนใหม่ที่มีความสนใจในด้านคอมพิวเตอร์เพื่อสานสัมพันธ์กับเพื่อน ๆ ที่อยากเป็นชาววิศวะคอมด้วยกัน',
  'ได้แลกเปลี่ยนประสบการณ์และทำความรู้จักกับพี่ ๆ วิศวะคอมบางมด',
  'เรียนรู้สิ่งต่าง ๆ เสมือนเป็นส่วนหนึ่งของภาควิศวกรรมคอมพิวเตอร์',
  'ความรู้สามารถนำไปต่อยอดเป็นผลงานใช้งานได้จริง',
  'ตลอดระยะเวลาของค่าย น้อง ๆ จะได้ทำความคุ้นชินกับสภาพแวดล้อมของภาควิชาวิศวกรรมคอมพิวเตอร์ เพื่อเตรียมพร้อมสำหรับการเป็นครอบครัวในรั้วมหาลัยในฝันของน้อง ๆ',
]

const Highlight: React.FC = () => {
  const renderHighlightContents = highLightContents.map((item: string, i: number) => (
    <Flex key={i} className={styles.content} justify="center" align="center">
      {item}
    </Flex>
  ))

  return (
    <Flex direction="column" justify="center" align="center" className={styles.highlight}>
      <Heading size={{ initial: '8', md: '9' }} className="title" align="center">
        Highlight
      </Heading>
      <Grid columns={{ initial: '1', sm: '2', md: '3' }} width="auto" className={styles.contents}>
        {renderHighlightContents}
      </Grid>
    </Flex>
  )
}

export default Highlight
