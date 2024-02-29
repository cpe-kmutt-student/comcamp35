import React from 'react'
import styles from './condition.module.scss'
import { Flex, Grid, Heading, Text } from '@radix-ui/themes'
import Regis from 'src/assets/regis.gif'
import Coding from 'src/assets/coding.gif'
import Checking from 'src/assets/checking.gif'
import Approved from 'src/assets/approved.gif'

const ConditionContents: { text: string; image: string }[] = [
  {
    text: 'น้อง ๆ ที่กำลังศึกษาอยู่ชั้นมัธยมศึกษาปีที่ 4 - 5 (ปีการศึกษา 2566) หรือเทียบเท่า (GPAX 3.00 ขึ้นไป)',
    image: Regis,
  },
  {
    text: 'มีความสนใจในด้านคอมพิวเตอร์และภาควิชาวิศวกรรมคอมพิวเตอร์ โดยไม่จำเป็นต้องมีพื้นฐานการเขียนโปรแกรม',
    image: Coding,
  },
  {
    text: 'สามารถเข้าพักได้ในระยะเวลาและสถานที่ที่กำหนดตลอดโครงการ',
    image: Checking,
  },
  {
    text: 'ผู้ปกครองอนุญาตและยินยอมให้นักเรียนเข้าร่วมโครงการ',
    image: Approved,
  },
]

type Props = {
  id: string
}

const Condition: React.FC<Props> = ({ id }: Props): JSX.Element => {
  const renderCampCondition = ConditionContents.map((item, i) => (
    <div key={i} className={styles.conditionInfo}>
      <div className={styles.card}>
        <img src={item.image} alt="condition img" />
        <Text className={styles.description}>{item.text}</Text>
      </div>
    </div>
  ))

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      className={styles.condition}
      mt={{ initial: '9', md: '0' }}
      id={id}
    >
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
