import { AlertDialog, Button, Flex, Heading, Separator, Text } from '@radix-ui/themes'
import styles from './index.module.scss'
import { useFormik } from 'formik'
import Label from '../Form/Label'
import { useRef } from 'react'
import ErrorMessage from '../Form/ErrorMessage'
import { PDF_QUESTION, WORD_QUESTION } from 'src/constants/path'

type Props = {
  onSubmit: (values: IAcademic) => void
  goBack: () => void
  isSubmitting: boolean
}

export interface IAcademic {
  answer: File | null
}

const initialValues: IAcademic = {
  answer: null,
}

const validate = (values: IAcademic) => {
  const errors: Record<string, string> = {}
  if (!values.answer) errors.answer = 'กรุณาอัพโหลดไฟล์คำตอบ'

  return errors
}

const AcademicForm: React.FC<Props> = ({ onSubmit, goBack, isSubmitting }: Props): JSX.Element => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  })

  const answerRef = useRef(null)

  const handleClick = (ref: React.MutableRefObject<null>) => {
    if (ref.current) {
      ;(ref.current as HTMLInputElement).click()
    }
  }

  const uploadFile = (name: string, files: FileList | null) => {
    const selectedFile = files ? files[0] : null

    formik.setFieldValue(name, selectedFile)
  }

  return (
    <div className={styles.academicForm}>
      <form>
        <Heading size="5" mt="3">
          คำถามจากฝ่ายวิชาการ
        </Heading>
        <Separator my="4" size="4" />
        <div className={styles.input}>
          <Text as="p">
            ให้น้องดาวน์โหลดไฟล์คำถามที่มีให้ เขียนคำตอบลงในไฟล์ที่น้องดาวน์โหลด แล้วอัพโหลดไฟล์พร้อมคำตอบส่งกลับมา
          </Text>
          <div className={styles.fileUploadGroup}>
            <a href={PDF_QUESTION} target="_blank" rel="noreferrer">
              <button type="button" className={styles.downloadBtn}>
                ดาวน์โหลดคำถาม (pdf)
              </button>
            </a>
            <a href={WORD_QUESTION} target="_blank" rel="noreferrer">
              <button type="button" className={styles.downloadBtn}>
                ดาวน์โหลดคำถาม (docx)
              </button>
            </a>
          </div>
          <input
            accept="application/pdf"
            type="file"
            name="parents"
            ref={answerRef}
            style={{ display: 'none' }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => uploadFile('answer', e.target.files)}
          />
          <Flex direction="column" justify="center" gap="3" mt="5">
            <Label name="ส่งคำตอบ" required />
            <button type="button" className={styles.uploadBtn} onClick={() => handleClick(answerRef)}>
              อัพโหลดไฟล์
            </button>
          </Flex>
          {formik.values.answer?.name && <Text>{formik.values.answer.name}</Text>}
          <ErrorMessage>{formik.errors.answer && formik.touched.answer && formik.errors.answer}</ErrorMessage>
        </div>
        <Flex justify="end" align="center" gap="4">
          <Button onClick={goBack} variant="outline">
            ย้อนกลับ
          </Button>
          <AlertDialog.Root>
            <AlertDialog.Trigger>
              <Button disabled={isSubmitting}>ยืนยัน</Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content style={{ maxWidth: 450 }}>
              <AlertDialog.Title>ต้องการยืนยัน?</AlertDialog.Title>
              <AlertDialog.Description size="2">เมื่อยืนยันแล้วข้อมูลจะไม่สามารถแก้ไขได้อีก</AlertDialog.Description>

              <Flex gap="3" mt="4" justify="end">
                <AlertDialog.Cancel>
                  <Button variant="soft" color="gray">
                    ยกเลิก
                  </Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action>
                  <Button variant="solid" onClick={() => formik.handleSubmit()} disabled={isSubmitting}>
                    ยืนยัน
                  </Button>
                </AlertDialog.Action>
              </Flex>
            </AlertDialog.Content>
          </AlertDialog.Root>
        </Flex>
      </form>
    </div>
  )
}

export default AcademicForm
