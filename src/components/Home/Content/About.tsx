import React from 'react'
import styles from './about.module.scss'
import { Flex, Heading } from '@radix-ui/themes'
import Laptop from 'src/assets/laptop.webp'

type Props = {
  id: string
}

const About: React.FC<Props> = ({ id }: Props): JSX.Element => {
  return (
    <Flex
      direction={{ initial: 'column-reverse', md: 'row' }}
      justify={{ initial: 'center', md: 'between' }}
      gap={{ initial: '5', md: '9' }}
      align="center"
      className={styles.about}
      id={id}
    >
      <div>
        <Heading size={{ initial: '8', md: '9' }} className="title" align={{ initial: 'center', md: 'left' }}>
          What is ComCamp?
        </Heading>
        <p className={styles.paragraph}>
          โครงการฝึกอบรมเชิงปฏิบัติการคอมพิวเตอร์เบื้องต้น หรือ “ComCamp” คือค่ายที่ทางภาควิชาวิศวกรรมคอมพิวเตอร์
          มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรีได้จัดขึ้น โดยภายในค่ายจะมีทั้งการแนะแนวการศึกษาต่อและกิจกรรมต่าง ๆ
          เพื่อให้น้อง ๆ ได้เข้ามารู้จักกับภาควิชาวิศวกรรมคอมพิวเตอร์มากขึ้น ซึ่งจะทำให้น้อง ๆ
          ได้รับความรู้และแรงบันดาลใจ พร้อมกับความสนุกสนานจากกิจกรรมสันทนาการสุดพิเศษจากพี่ ๆ CPE อีกด้วย
        </p>
      </div>
      <div className={styles.image}>
        <div className={styles.bg} />
        <img src={Laptop} alt="about" width={350} height={350} />
      </div>
    </Flex>
  )
}

export default About
