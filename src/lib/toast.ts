import toast, { ToastOptions } from 'react-hot-toast'

const options: ToastOptions = {
  position: 'bottom-right',
  style: {
    background: 'rgba(26, 64, 141, 0.2509803922)',
    color: '#FFFFFF',
    border: '1px solid rgba(80, 80, 80, 0.3137254902)',
  },
}

export const savedAlert = (text?: string) => {
  return toast.success(text ?? 'บันทึกสำเร็จ', options)
}

export const errorAlert = (text?: string) => {
  return toast.error(text ?? 'เกิดข้อผิดพลาด', options)
}
