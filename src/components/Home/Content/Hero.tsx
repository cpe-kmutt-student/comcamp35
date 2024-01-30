import React from 'react'
import styles from './Hero.module.scss'
import RegisterButton from 'src/components/RegisterButton'
import Logo from 'src/assets/logo.webp'
import { useAuth } from 'src/context/auth'

const Hero: React.FC = () => {
  const { auth } = useAuth()

  return (
    <div className={styles.hero}>
      <img className={styles.logo} alt="logo" src={Logo} />
      <h1 className={styles.campDate}>7-15 April 2024</h1>
      <p className={styles.content}>
        เมื่อโลกโปรเเกรมมอนกำลังจะล่มสลาย<br></br>
        เหล่าหัวหน้ากิลด์จึงได้ทำการรวบรวมบรรดาเด็กน้อยผู้มีพรสวรรค์ที่ซ่อนเร้นเพื่อทำการฝึกฝนและปลุกทักษะที่หลับใหลให้ตื่นขึ้น
        ! <br />
        เพื่อรวมพลังกันกอบกู้โลกใบนี้ให้รอดพ้นจากเหล่าวายร้าย !!
      </p>
      {!auth.is_authenticated && <RegisterButton active>ลงทะเบียน</RegisterButton>}
    </div>
  )
}

export default Hero
