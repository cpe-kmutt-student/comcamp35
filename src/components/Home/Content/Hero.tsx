import React from 'react'
import styles from './hero.module.scss'
import RegisterButton from 'src/components/RegisterButton'
import Logo from 'src/assets/logo.svg'
import { useAuth } from 'src/context/auth'
import { Heading, Text } from '@radix-ui/themes'
import { isTodayRegis } from 'src/lib/date'

const quotes: string[] = ['CPE37', 'มั่วสุมแข็งแกร่ง', 'บางมด', 'KMUTT']

const quotesIndex = Math.floor(Math.random() * quotes.length)

const Hero: React.FC = () => {
  const { auth } = useAuth()

  return (
    <div className={styles.hero}>
      <div className={styles.image}>
        <div className={styles.logoBg} />
        <img className={styles.logo} alt="logo" src={Logo} />
        <div className={styles.subText}>{quotes[quotesIndex]}</div>
      </div>
      <Heading size="9" className={[styles.campDate, 'title'].join(' ')}>
        7-11 April 2024
      </Heading>
      <Text className={styles.content}>
        เมื่อโลกโปรเเกรมมอนกำลังจะล่มสลาย<br></br>
        เหล่าหัวหน้ากิลด์จึงได้ทำการรวบรวมบรรดาเด็กน้อยผู้มีพรสวรรค์ที่ซ่อนเร้นเพื่อทำการฝึกฝนและปลุกทักษะที่หลับใหลให้ตื่นขึ้น
        ! <br />
        เพื่อรวมพลังกันกอบกู้โลกใบนี้ให้รอดพ้นจากเหล่าวายร้าย !!
      </Text>
      {(auth.is_authenticated == null || !auth.is_authenticated) && isTodayRegis() && (
        <RegisterButton active>ลงทะเบียน</RegisterButton>
      )}
    </div>
  )
}

export default Hero
