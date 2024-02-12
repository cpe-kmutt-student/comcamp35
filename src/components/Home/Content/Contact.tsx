import React from 'react'
import styles from './contact.module.scss'
import { Heading } from '@radix-ui/themes'

const Contact: React.FC = () => {
  return (
    <div>
      <Heading size={{ initial: '8', md: '9' }} className="title contacttitle" align="center">
        CONTACT
      </Heading>
      <div className={styles.container}>
        <div className={styles.leftblock}>
          <ul>
            <p>พี่ฟีฟ่า</p>
            <p>080 493 5928</p>
            <p>yanakorn.tang@mail.kmutt.ac.th</p>
            <ol>พี่หมูเล็ก</ol>
            <p>093 583 1518</p>
            <p>pimpisa.sods@mail.kmutt.ac.th</p>
            <ol>พี่หมูเล็ก</ol>
            <p> 061 506 6249</p>
            <p>wipada.kasi@mail.kmutt.ac.th</p>
            <ol>พี่พลอย</ol>
            <p>097 940 7172</p>
            <p>chatchalita.kaew@mail.kmutt.ac.th</p>
          </ul>
        </div>
        <div className={styles.column}>
          <div className={styles.topblock}>
            <h3>Social Media</h3>
            <p>Facebook: /yourFacebook</p>
            <p>Instagram: @yourInstagram</p>
            <p>Tiktok: @yourTiktok</p>
          </div>
          <div className={styles.bottomblock}>
            <h1>Address</h1>
            <p>ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</p>
            <p>ชั้น 10 อาคารวิศววัฒนะ เลขที่ 126 ถ.ประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพฯ 10140</p>
            <div className={styles.addressbutton}>
              <a href="https://maps.app.goo.gl/TBaXUSg1Czpv1WwR9" rel="noreferrer" target="_blank">
                ดูในแผนที่
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    // responsive, format prettier
  )
}
export default Contact
