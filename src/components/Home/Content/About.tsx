import React from 'react'
import styles from './about.module.scss'
import { Flex, Heading, Text } from '@radix-ui/themes'

const About: React.FC = () => {
  return (
    <Flex
      direction={{ initial: 'column-reverse', md: 'row' }}
      justify={{ initial: 'center', md: 'between' }}
      gap="5"
      align="center"
      className={styles.about}
    >
      <div>
        <Heading size="8" className="title" align={{ initial: 'center', md: 'left' }}>
          What Is ComCamp
        </Heading>
        <Text className={styles.paragraph}>
          โครงการฝึกอบรมเชิงปฏิบัติการคอมพิวเตอร์ หรือ ComCamp คือค่ายที่ทางภาควิชาวิศวกรรมคอมพิวเตอร์
          มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรีได้จัดขึ้น โดยภายในค่ายจะมีทั้งการแนะแนวการศึกษาต่อและกิจกรรมต่าง ๆ
          เพื่อให้น้อง ๆ ได้เข้ามารู้จักกับภาควิชาวิศวกรรมคอมพิวเตอร์มากขึ้น ซึ่งจะทำให้น้อง ๆ
          ได้รับความรู้และแรงบันดาลใจ พร้อมกับความสนุกสนานจากกิจกรรมสันทนาการสุดพิเศษจากพี่ ๆ CPE อีกด้วย
        </Text>
      </div>
      <div>
        <img
          src="https://assets-prd.ignimgs.com/2022/12/29/bocchi-blogroll-1672352846343.jpg"
          alt="image"
          width={500}
        />
      </div>
    </Flex>
  )
}

export default About
