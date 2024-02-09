import React from 'react'
import styles from './about.module.scss'
import { Flex, Heading } from '@radix-ui/themes'

const About: React.FC = () => {
  return (
    <Flex
      direction={{ initial: 'column-reverse', md: 'row' }}
      justify={{ initial: 'center', md: 'between' }}
      gap={{ initial: '5', md: '9' }}
      align="center"
      className={styles.about}
    >
      <div>
        <Heading size={{ initial: '8', md: '9' }} className="title" align={{ initial: 'center', md: 'left' }}>
          What is ComCamp?
        </Heading>
        <p className={styles.paragraph}>
          โครงการฝึกอบรมเชิงปฏิบัติการคอมพิวเตอร์ หรือ ComCamp คือค่ายที่ทางภาควิชาวิศวกรรมคอมพิวเตอร์
          มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรีได้จัดขึ้น โดยภายในค่ายจะมีทั้งการแนะแนวการศึกษาต่อและกิจกรรมต่าง ๆ
          เพื่อให้น้อง ๆ ได้เข้ามารู้จักกับภาควิชาวิศวกรรมคอมพิวเตอร์มากขึ้น ซึ่งจะทำให้น้อง ๆ
          ได้รับความรู้และแรงบันดาลใจ พร้อมกับความสนุกสนานจากกิจกรรมสันทนาการสุดพิเศษจากพี่ ๆ CPE อีกด้วย
        </p>
      </div>
      <div>
        <img
          src="https://i1.sndcdn.com/artworks-z6RnczcFGweMGmYd-SMU6eQ-t500x500.jpg"
          alt="about"
          width={350}
          height={350}
        />
      </div>
    </Flex>
  )
}

export default About
