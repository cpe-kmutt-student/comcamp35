import PropTypes from 'prop-types' // Import PropTypes

const PrivacyPolicy = ({ onAccept }: { onAccept: () => void }) => {
  return (
    <div>
      <h1>นโยบายความเป็นส่วนตัว</h1>
      <p>
        เราใส่ใจความเป็นส่วนตัวของคุณและการปกป้องข้อมูลของคุณอย่างยิ่ง
        โปรดอ่านนโยบายความเป็นส่วนตัวนี้เพื่อทราบถึงวิธีที่เราใช้และปกป้องข้อมูลของคุณ
      </p>
      {/* เพิ่มปุ่มยอมรับ */}
      <button onClick={onAccept}>ยอมรับนโยบายส่วนบุคคล</button>
    </div>
  )
}

// ระบุ PropTypes ของ onAccept เพื่อตรวจสอบชนิดของ props ที่คาดหวัง
PrivacyPolicy.propTypes = {
  onAccept: PropTypes.func.isRequired, // ระบุให้ onAccept เป็นฟังก์ชันที่ต้องส่งเข้ามาใน props และเป็น required
}

export default PrivacyPolicy
