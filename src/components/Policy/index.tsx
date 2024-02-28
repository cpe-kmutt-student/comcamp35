import React, { useState } from 'react'
import { Button, Checkbox, Flex, Heading, Text } from '@radix-ui/themes'
import styles from './index.module.scss'

type Props = {
  currentStep: number
  setCurrentStep: (step: number) => void
}

const Policy: React.FC<Props> = ({ currentStep, setCurrentStep }: Props): JSX.Element => {
  const [check, setCheck] = useState<boolean>(false)

  return (
    <div className={styles.policy}>
      <Heading size="7" align="center" className={styles.heading}>
        นโยบายข้อมูลส่วนบุคคล
      </Heading>
      <div className={styles.content}>
        <Text className={styles.text}>
          <ol style={{ listStyleType: 'none' }}>
            <li>
              <h3>นโยบายความเป็นส่วนตัว</h3>
              <div style={{ textIndent: '25px', marginTop: '10px' }}>
                โครงการฝึกอบรมเชิงปฏิบัติการคอมพิวเตอร์เบื้องต้น ครั้งที่ 35
                ให้ความสําคัญกับการคุ้มครองข้อมูลส่วนบุคคลของคุณ
                โดยนโยบายความเป็นส่วนตัวฉบับนี้ได้อธิบายแนวปฏิบัติเกี่ยวกับการเก็บรวบรวม ใช้ หรือ
                เปิดเผยข้อมูลส่วนบุคคลรวมถึงสิทธิต่าง ๆ ของเจ้าของข้อมูลส่วนบุคคล ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล
              </div>
            </li>
            <li style={{ marginTop: '20px' }}>
              <h3>การเก็บรวบรวมข้อมูลส่วนบุคคล</h3>
              <div style={{ marginTop: '10px' }}>
                เราจะเก็บข้อมูลส่วนบุคคลที่ได้รับโดยตรงจากคุณผ่านช่องทาง ดังต่อไปนี้
              </div>
              <ul style={{ marginLeft: '30px', marginTop: '10px' }}>
                <li>การรับสมัครเข้าร่วมโครงการ</li>
              </ul>
            </li>
            <li style={{ marginTop: '20px' }}>
              <h3 style={{ marginBottom: '10px' }}>ประเภทข้อมูลส่วนบุคคลที่เก็บรวบรวม</h3>
              <ul style={{ listStyleType: 'none' }}>
                <li>
                  <strong>ข้อมูลส่วนบุคคล</strong> เช่น ชื่อ นามสกุล อายุ วันเดือนปีเกิด สัญชาติ เลขประจำตัวประชาชน
                  เป็นต้น
                </li>
                <li style={{ marginTop: '5px' }}>
                  <strong>ข้อมูลการติดต่อ</strong> เช่น ที่อยู่ หมายเลขโทรศัพท์ อีเมล เป็นต้น
                </li>
                <li style={{ marginTop: '5px' }}>
                  <strong>ข้อมูลบัญชี</strong> เช่น บัญชีผู้ใช้งาน ประวัติการใช้งาน เป็นต้น
                </li>
                <li style={{ marginTop: '5px' }}>
                  <strong>หลักฐานแสดงตัวตน</strong> เช่น สำเนาบัตรประจำตัวประชาชน เอกสารรับรองการเป็นนักเรียน เป็นต้น
                </li>
                <li style={{ marginTop: '5px' }}>
                  <strong>ข้อมูลอื่น ๆ</strong> เช่น
                  รูปภาพและข้อมูลอื่นใดที่ถือว่าเป็นข้อมูลส่วนบุคคลตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล
                </li>
              </ul>
              <ul style={{ marginTop: '5px' }}>
                เราจะเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลอ่อนไหว ดังต่อไปนี้
                เมื่อเราได้รับความยินยอมโดยชัดแจ้งจากคุณ เว้นแต่กฎหมายกำหนดให้ทำได้
              </ul>
            </li>
            <li style={{ marginTop: '20px' }}>
              <h3 style={{ marginBottom: '10px' }}>ผู้เยาว์</h3>
              <ul style={{ textIndent: '25px' }}>
                หากคุณมีอายุต่ำกว่า 20 ปีหรือมีข้อจํากัดความสามารถตามกฎหมาย เราอาจเก็บรวบรวม ใช้
                หรือเปิดเผยข้อมูลส่วนบุคคลของคุณ
                เราอาจจําเป็นต้องให้พ่อแม่หรือผู้ปกครองของคุณให้ความยินยอมหรือที่กฎหมายอนุญาตให้ทําได้
                หากเราทราบว่ามีการเก็บรวบรวมข้อมูลส่วนบุคคลจากผู้เยาว์โดยไม่ได้รับความยินยอมจากพ่อแม่หรือผู้ปกครอง
                เราจะดําเนินการลบข้อมูลนั้นออกจากฐานข้อมูลของเรา
              </ul>
            </li>
            <li style={{ marginTop: '20px' }}>
              <h3 style={{ marginBottom: '10px' }}>วิธีการเก็บรักษาข้อมูลส่วนบุคคล</h3>
              <ul>เราจะเก็บรักษาข้อมูลส่วนบุคคลของคุณในรูปแบบเอกสารและรูปแบบอิเล็กทรอนิกส์</ul>
            </li>
            <li style={{ marginTop: '20px' }}>
              <h3 style={{ marginBottom: '10px' }}>การประมวลผลข้อมูลส่วนบุคคล</h3>
              <ul>เราจะเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณเพื่อวัตถุประสงค์ดังต่อไปนี้</ul>
              <ul style={{ marginLeft: '30px', marginTop: '10px' }}>
                <li>เพื่อยืนยันว่าผู้สมัครมีตัวตนจริง</li>
                <li>เพื่อใช้ประกอบการพิจารณาคุณสมบัติของผู้สมัครตามที่โครงการกำหนด</li>
                <li>เพื่อปฏิบัติตามกฎหมายและกฎระเบียบของหน่วยงานราชการ</li>
              </ul>
            </li>
            <li style={{ marginTop: '20px' }}>
              <h3 style={{ marginBottom: '10px' }}>การเปิดเผยข้อมูลส่วนบุคคล</h3>
              <ul style={{ textIndent: '25px' }}>
                เราอาจเปิดเผยข้อมูลส่วนบุคคลของคุณเท่าที่จำเป็นให้เจ้าหน้าที่ภายในโครงการภายใต้ความยินยอมของคุณหรือที่กฎหมายอนุญาตให้เปิดเผยได้
                เพื่อการบริหารจัดการโครงอย่างมีประสิทธิภาพ
              </ul>
            </li>
            <li style={{ marginTop: '20px' }}>
              <h3 style={{ marginBottom: '10px' }}>ระยะเวลาจัดเก็บข้อมูลส่วนบุคคล</h3>
              <ul style={{ textIndent: '25px' }}>
                เราจะเก็บรักษาข้อมูลส่วนบุคคลของคุณไว้ตามระยะเวลาที่จําเป็นเพื่อให้บรรลุวัตถุประสงค์ที่เกี่ยวข้องกับนโยบายฉบับนี้
                ซึ่งอาจจําเป็นต้องเก็บรักษาไว้ต่อไปภายหลังจากนั้น หากมีกฎหมายกําหนดไว้เราจะลบ ทําลาย
                หรือทําให้เป็นข้อมูลที่ไม่สามารถระบุตัวตนของคุณได้ เมื่อหมดความจําเป็นหรือสิ้นสุดระยะเวลาดังกล่าว
              </ul>
            </li>
            <li style={{ marginTop: '20px' }}>
              <h3 style={{ marginBottom: '10px' }}>สิทธิของเจ้าของข้อมูลส่วนบุคคล</h3>
              <ul style={{ marginBottom: '10px' }}>
                ภายใต้กฎหมายคุ้มครองข้อมูลส่วนบุคคล คุณมีสิทธิในการดำเนินการดังต่อไปนี้
              </ul>
              <ul style={{ listStyleType: 'none' }}>
                <li>
                  <strong>สิทธิขอถอนความยินยอม (right to withdraw consent)</strong> หากคุณได้ให้ความยินยอม
                  เราจะเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณ
                  ไม่ว่าจะเป็นความยินยอมที่คุณให้ไว้ก่อนวันที่กฎหมายคุ้มครองข้อมูลส่วนบุคคลใช้บังคับหรือหลังจากนั้น
                  คุณมีสิทธิที่จะถอนความยินยอมเมื่อใดก็ได้ตลอดเวลา เป็นต้น
                </li>
              </ul>
            </li>
          </ol>
        </Text>
      </div>
      <Flex justify="start" align="center" gap="4" my="5">
        <Checkbox checked={check} onCheckedChange={() => setCheck(!check)} className={styles.checkbox} />
        <span className={styles.agreementText}>รับทราบและให้ความยินยอมตามนโยบายความเป็นส่วนตัว</span>
      </Flex>
      <Flex justify="end" align="center" gap="4">
        <Button onClick={() => setCurrentStep(currentStep + 1)} disabled={!check} className={styles.button}>
          ถัดไป
        </Button>
      </Flex>
    </div>
  )
}

export default Policy
