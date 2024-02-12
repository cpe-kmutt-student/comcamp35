import React from 'react'
import styles from './learning.module.scss'
import { Text, Flex, Grid, Heading } from '@radix-ui/themes'
import c from 'src/assets/c.svg'
import figma from 'src/assets/figma.svg'
import python from 'src/assets/python.svg'
import react from 'src/assets/react.svg'
import rocket from 'src/assets/rocket.svg'

const LearningContents: { topic: string; details: string; image: string }[] = [
  {
    topic: 'เรียนรู้การเขียนโปรแกรมด้วยภาษา C (C Programming) ',
    details:
      'มาเรียนรู้ไปด้วยกันกับการเขียนโปรเเกรมด้วยภาษาซีที่จะทำให้น้อง ๆ สร้างสรรค์โลกของน้อง ๆ ได้มากขึ้น โดยเรียนรู้ตั้งแต่พื้นฐานของภาษาซีพร้อมกับการฝึกปฏิบัติจริง แม้ไม่พื้นฐานก็สามารถเข้าใจการเขียนโปรแกรมได้ทันที',
    image: c,
  },
  {
    topic: 'ก้าวเข้าสู่การพัฒนาเว็บไซต์ (Web development)',
    details:
      'อยากสร้างเว็บไซต์เป็นแต่ไม่รู้ควรเริ่มตรงไหนดี มาทำความรู้จักไปพร้อมกันกับเครื่องมือยอดฮิตอย่าง React และ Tailwind CSS แม้ว่า เริ่มต้นจากศูนย์ก็สามารถมีเว็บไซต์เป็นของตัวเองได้ง่าย ๆ นอกจากนี้ยังมีการสอนการทำงานกับ API ที่จะทำให้เว็บไซต์ของน้อง ๆ มีประสิทธิภาพให้ดียิ่งขึ้น',
    image: react,
  },
  {
    topic: 'ทำความรู้จักกับภาษาไพทอนและการนำเสนอภาพข้อมูล (Introduction and Data Visualization in Python)',
    details:
      'มาเรียนรู้การจัดการและวิเคราะห์ข้อมูลไปด้วยกันกับภาษา Python อีกหนึ่งภาษาที่เป็นเครื่องมือยอดนิยม ตอบรับกระแส Data Analysis ที่กำลังมาแรงในขณะนี้',
    image: python,
  },
  {
    topic: 'มารู้จักกับการออกแบบเว็บไซต์ (UI Design)',
    details: 'เรียนรู้ไปพร้อมกันกับศิลปะแห่งการออกแบบ UI ให้สวยงามและมีประสิทธิภาพ ด้วยเครื่องมือยอดนิยมอย่าง Figma',
    image: figma,
  },
  {
    topic: 'การทำโปรเจคต์สุดท้าทายเพื่อพิชิตภารกิจกอบกู้โลก',
    details:
      'ภารกิจมินิโปรเจคต์สุดท้าทายที่มาจากปัญหาในชีวิตจริง ซึ่งจะทำให้น้อง ๆ ฝึกการทำงานเป็นทีมเวิร์ค อีกทั้งยังสามารถนำไปต่อยอดเป็นสุดยอดโปรเจคต์ได้ในอนาคต',
    image: rocket,
  },
]

const Learning: React.FC = () => {
  const renderLearningCondition = LearningContents.map((item, i) => (
    <div key={i} className={styles.content}>
      <div className={styles.card}>
        <img src={item.image} alt="condition" />
        <div className={styles.cardContent}>
          <Text
            size={{ initial: '4', xs: '6', sm: '7' }}
            align={{ initial: 'center', xs: 'center', sm: 'left' }}
            className={styles.title}
          >
            {item.topic}
          </Text>
          <Text align={{ initial: 'center', xs: 'center', sm: 'left' }} className={styles.details}>
            {item.details}
          </Text>
        </div>
      </div>
    </div>
  ))

  return (
    <Flex direction="column" justify="center" align="center" className={styles.learning}>
      <Heading size={{ initial: '8', md: '9' }} className="title" align="center">
        Learning
      </Heading>
      <Grid width="auto" className={styles.contents}>
        {renderLearningCondition}
      </Grid>
    </Flex>
  )
}

export default Learning
