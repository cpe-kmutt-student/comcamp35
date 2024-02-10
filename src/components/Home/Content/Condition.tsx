import React from 'react'
import styles from './condition.module.scss'
import { Text } from '@radix-ui/themes'

const Condition: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.Header}>
        <h2>CONDITIONS</h2>
      </div>
      <div className={styles.condition}>
        <div>น้อง ๆ ที่กำลังศึกษาอยู่ชั้นมัธยมศึกษาปีที่ 4 - 5 หรือเทียบเท่า (GPAX 3.00 ขึ้นไป)</div>
        <div>มีความสนใจในด้านคอมพิวเตอร์และภาควิชาวิศวกรรมคอมพิวเตอร์ โดยไม่จำเป็นต้องมีพื้นฐานการเขียนโปรแกรม</div>
        <div>สามารถเข้าพักได้ในระยะเวลาและสถานที่ที่กำหนดตลอดโครงการ</div>
        <div>ผู้ปกครองอนุญาตและยินยอมให้นักเรียนเข้าร่วมโครงการ</div>
      </div>
      <div className={styles.condition2}>
        <Text>
          คุณสมบัติเพิ่มเติม : ม.ปลาย ศึกษาเกี่ยวกับสายวิทยาศาสตร์ คณิตศาสตร์ และ คอมพิวเตอร์ (หรือสายอื่น ๆ ที่
          เกี่ยวข้องกับ คอมพิวเตอร์และเทคโนโลยี)<br></br>หรือ ปวช. ในสาขาคอมพิวเตอร์ธุรกิจ, สาขาช่างไฟฟ้ากำลัง
          (อิเล็กทรอนิกส์), สาขาเมคคาทรอนิกส์ และหุ่นยนต์ (หรือสายอื่น ๆ ที่เกี่ยวข้องกับคอมพิวเตอร์และเทคโนโลยี)
        </Text>
      </div>
    </div>
  )
}

export default Condition
