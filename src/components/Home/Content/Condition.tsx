import React from 'react'
import styles from './condition.module.scss'
import { Flex, Grid, Heading, Text } from '@radix-ui/themes'
import Regis from 'src/assets/regis.gif'
import Coding from 'src/assets/coding.gif'
import Checkin from 'src/assets/checkin.gif'
import Approved from 'src/assets/approved.gif'

const ConditionContents: { text: string; gif: string }[] = [
  {
    text: 'น้อง ๆ ที่กำลังศึกษาอยู่ชั้นมัธยมศึกษาปีที่ 4 - 5 ปีการศึกษา 2566 หรือเทียบเท่า (GPAX 3.00 ขึ้นไป)',
    gif: Regis,
  },
  {
    text: 'มีความสนใจในด้านคอมพิวเตอร์และภาควิชาวิศวกรรมคอมพิวเตอร์ โดยไม่จำเป็นต้องมีพื้นฐานการเขียนโปรแกรม',
    gif: Coding,
  },
  {
    text: 'สามารถเข้าพักได้ในระยะเวลาและสถานที่ที่กำหนดตลอดโครงการ',
    gif: Checkin,
  },
  {
    text: 'ผู้ปกครองอนุญาตและยินยอมให้นักเรียนเข้าร่วมโครงการ',
    gif: Approved,
  },
]

const Condition: React.FC = () => {
  const renderCampCondition = ConditionContents.map((item, i) => (
    <div key={i} className={styles.conditionInfo}>
      <div className={styles.InfoItems}>
        <img src={item.gif} alt="condition img" />
        <Text as="p">{item.text}</Text>
      </div>
    </div>
  ))

  return (
    <Flex direction="column" justify="center" align="center" className={styles.main}>
      <Heading
        size={{ initial: '8', md: '9' }}
        className="title"
        align={{ initial: 'center', md: 'left' }}
        mt={{ initial: '6' }}
      >
        Conditions
      </Heading>
      <Grid
        columns={{ initial: '1', sm: '2', md: '4' }}
        gap="5"
        width="auto"
        justify="center"
        align="center"
        mt="6"
        mb="6"
      >
        {renderCampCondition}
      </Grid>
      <div className={styles.moreCondition}>
        <Text>
          คุณสมบัติเพิ่มเติม : ม.ปลาย ศึกษาเกี่ยวกับสายวิทยาศาสตร์ คณิตศาสตร์ และ คอมพิวเตอร์ (หรือสายอื่น ๆ ที่
          เกี่ยวข้องกับ คอมพิวเตอร์และเทคโนโลยี)<br></br>หรือ ปวช. ในสาขาคอมพิวเตอร์ธุรกิจ, สาขาช่างไฟฟ้ากำลัง
          (อิเล็กทรอนิกส์), สาขาเมคคาทรอนิกส์ และหุ่นยนต์ (หรือสายอื่น ๆ ที่เกี่ยวข้องกับคอมพิวเตอร์และเทคโนโลยี)
        </Text>
      </div>
    </Flex>
  )
}

export default Condition
