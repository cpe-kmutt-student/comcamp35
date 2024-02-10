import toast, { ToastOptions } from 'react-hot-toast'

const options: ToastOptions = {
  position: 'bottom-right',
  style: {
    background: 'rgba(26, 64, 141, 0.2509803922)',
    color: '#FFFFFF',
    border: '1px solid rgba(80, 80, 80, 0.3137254902)',
  },
}

export const savedAlert = () => {
  return toast.success('บันทึกสำเร็จ', options)
}

export const errorAlert = () => {
  return toast.error('เกิดข้อผิดพลาด', options)
}
