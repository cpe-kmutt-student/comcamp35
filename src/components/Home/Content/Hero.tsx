import React from 'react'
import styles from './Hero.module.scss'

const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <img className={styles.logo} alt="Logo" src="src\assets\logo.webp" />
      <div className={styles.textWrapper}>7-15 April 2024</div>
      <p className={styles.content}>
        เมื่อโลกโปรเเกรมมอนกำลังจะล่มสลาย<br></br>
        เหล่าหัวหน้ากิลด์จึงได้ทำการรวบรวมบรรดาเด็กน้อยผู้มีพรสวรรค์ที่ซ่อนเร้นเพื่อทำการฝึกฝนและปลุกทักษะที่หลับใหลให้ตื่นขึ้น
        ! เพื่อรวมพลังกันกอบกู้โลกใบนี้ให้รอดพ้นจากเหล่าวายร้าย !!
      </p>
      <button className={styles.button}>
        <div className={styles.textWrapper2}>ลงทะเบียน</div>
      </button>
      <br></br>
    </div>
  )
}

export default Hero
