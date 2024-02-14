import React from 'react'
import styles from './contact.module.scss'
import { Heading, Flex } from '@radix-ui/themes'
import Facebook from 'src/assets/Facebook-Icon.svg'
import Instagram from 'src/assets/Instagram-Icon.svg'
import Tiktok from 'src/assets/Tiktok-Icon.svg'

const contacts: { name: string; phone: string; email: string }[] = [
  {
    name: 'พี่ฟีฟ่า',
    phone: '080 493 5928',
    email: 'yanakorn.tang@mail.kmutt.ac.th',
  },
  {
    name: 'พี่หมูเล็ก',
    phone: '093 583 1518',
    email: 'pimpisa.sods@mail.kmutt.ac.th',
  },
  {
    name: 'พี่พลอย',
    phone: '061 506 6249',
    email: 'wipada.kasi@mail.kmutt.ac.th',
  },
  {
    name: 'พี่พลอย',
    phone: '097 940 7172',
    email: 'chatchalita.kaew@mail.kmutt.ac.th',
  },
]

const link_contract: { name: string; link: string }[] = [
  {
    name: Facebook,
    link: 'https://www.facebook.com/KMUTTcomcamp',
  },
  {
    name: Instagram,
    link: 'https://www.instagram.com/comcamp.kmutt/',
  },
  {
    name: Tiktok,
    link: 'https://www.tiktok.com/@comcamp.kmutt',
  },
]

const Contact: React.FC = () => {
  return (
    <Flex direction="column" justify="center" align="center" className={styles.contact}>
      <Heading size={{ initial: '8', md: '9' }} className="title contacttitle" align="center">
        CONTACT
      </Heading>
      <div className={styles.container}>
        <div className={styles.leftblock}>
          {contacts.map((contact, index) => (
            <ol key={index}>
              <h3>{contact.name}</h3>
              <p>{contact.phone}</p>
              <p>{contact.email}</p>
            </ol>
          ))}
        </div>
        <div className={styles.column}>
          <div className={styles.topblock}>
            {link_contract.map((link, index) => (
              <a key={index} href={link.link} rel="noreferrer" target="_blank">
                <img src={link.name} alt="social media" />
              </a>
            ))}
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
    </Flex>
    // responsive, format prettier
  )
}
export default Contact
