import React from 'react'
import styles from './contact.module.scss'
import { Heading } from '@radix-ui/themes'
import Facebook from 'src/assets/Facebook-Icon.svg'
import Instagram from 'src/assets/Instagram-Icon.svg'
import Tiktok from 'src/assets/Tiktok-Icon.svg'

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
            <div className="social-media-icons">
              <a href="https://youtu.be/BbeeuzU5Qc8?si=-X0fkAczjYYkUtzz" rel="noreferrer" target="_blank">
                <img src={Facebook} alt="Facebook" />
              </a>
              <a href="https://youtu.be/BbeeuzU5Qc8?si=-X0fkAczjYYkUtzz" rel="noreferrer" target="_blank">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="https://youtu.be/BbeeuzU5Qc8?si=-X0fkAczjYYkUtzz" rel="noreferrer" target="_blank">
                <img src={Tiktok} alt="Tiktok" />
              </a>
            </div>
          </div>
          <div className={styles.bottomblock}>
            <h1>Address</h1>
            <p>ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</p>
            <p>ชั้น 10 อาคารวิศววัฒนะ เลขที่ 126 ถ.ประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพฯ 10140</p>
            <div className={styles.addressbutton}>
              <a href="https://maps.app.goo.gl/Cc5z8Df73J3L62eS6" rel="noreferrer" target="_blank">
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
