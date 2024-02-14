import React from 'react'
import styles from './contact.module.scss'
import { Heading, Flex, Text } from '@radix-ui/themes'
import Facebook from 'src/assets/facebook.svg'
import Instagram from 'src/assets/instagram.svg'
import Tiktok from 'src/assets/tiktok.svg'

interface IContact {
  name: string
  phone: string
  email: string
}

interface ISocial {
  name: string
  link: string
}

const contacts: IContact[] = [
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

const link_contract: ISocial[] = [
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
      <div className={styles.contents}>
        <div className={styles.person}>
          {contacts.map((contact: IContact, i: number) => (
            <div key={i} className={styles.personContact}>
              <Heading size="3" className={styles.name}>
                {contact.name}
              </Heading>
              <Text as="p">{contact.phone}</Text>
              <Text as="p">{contact.email}</Text>
            </div>
          ))}
        </div>
        <div className={styles.external}>
          <div className={styles.social}>
            {link_contract.map((social: ISocial, i: number) => (
              <a key={i} href={social.link} rel="noreferrer" target="_blank">
                <img src={social.name} alt="social media" />
              </a>
            ))}
          </div>
          <div className={styles.address}>
            <Heading size={{ initial: '6', md: '7' }} mb="4">
              Address
            </Heading>
            <Text>ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</Text>
            <Text>ชั้น 10 อาคารวิศววัฒนะ เลขที่ 126 ถ.ประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพฯ 10140</Text>
            <div className={styles.map}>
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
