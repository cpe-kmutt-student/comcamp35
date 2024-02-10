import React from 'react'
import styles from './condition.module.scss'
import { Flex, Heading, Text } from '@radix-ui/themes'

const Condition: React.FC = () => {
  return (
    <Flex direction="column" justify="center" align="center" className={styles.condition}>
      <Heading size={{ initial: '8', md: '9' }} className="title" align={{ initial: 'center', md: 'left' }}>
        Conditions
      </Heading>
      <div>
        <Text>น้อง ๆ ที่กำลังศึกษาอยู่ชั้นมัธยมศึกษาปีที่ 4 - 5 หรือเทียบเท่า (GPAX 3.00 ขึ้นไป)</Text>
        <Text>มีความสนใจในด้านคอมพิวเตอร์และภาควิชาวิศวกรรมคอมพิวเตอร์ โดยไม่จำเป็นต้องมีพื้นฐานการเขียนโปรแกรม</Text>
        <Text>สามารถเข้าพักได้ในระยะเวลาและสถานที่ที่กำหนดตลอดโครงการ</Text>
        <Text>ผู้ปกครองอนุญาตและยินยอมให้นักเรียนเข้าร่วมโครงการ</Text>
      </div>
      <div>
        <Text>
          คุณสมบัติเพิ่มเติม : ม.ปลาย ศึกษาเกี่ยวกับสายวิทยาศาสตร์ คณิตศาสตร์ และ คอมพิวเตอร์ (หรือสายอื่น ๆ ที่
          เกี่ยวข้องกับ คอมพิวเตอร์และเทคโนโลยี) หรือ ปวช. ในสาขาคอมพิวเตอร์ธุรกิจ, สาขาช่างไฟฟ้ากำลัง (อิเล็กทรอนิกส์),
          สาขาเมคคาทรอนิกส์ และหุ่นยนต์ (หรือสายอื่น ๆ ที่เกี่ยวข้องกับคอมพิวเตอร์และเทคโนโลยี)
        </Text>
      </div>
    </Flex>
  )
}

export default Condition
