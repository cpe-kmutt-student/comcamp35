import { Button, Flex, Heading, Separator, Text } from '@radix-ui/themes'
import styles from './index.module.scss'
import { useFormik } from 'formik'
import Label from '../Form/Label'
import { useCallback, useEffect, useRef } from 'react'
import ErrorMessage from '../Form/ErrorMessage'
import { PDF_QUESTION, WORD_QUESTION } from 'src/constants/path'
import { apiInstance } from 'src/lib/axios'
import { IFileData } from '../FileUpload'
import { errorAlert } from 'src/lib/toast'
import { LIMIT_FILE_SIZE_MB } from 'src/constants/file'

type Props = {
  onSubmit: (values: IAcademic) => void
  goBack: () => void
  isSubmitting: boolean
}

export interface IAcademic {
  answer: File | null
  currentAnswer: string
}

const initialValues: IAcademic = {
  answer: null,
  currentAnswer: '',
}

const AcademicForm: React.FC<Props> = ({ onSubmit, goBack, isSubmitting }: Props): JSX.Element => {
  const validate = (values: IAcademic) => {
    const errors: Record<string, string> = {}
    if (!formik.values.currentAnswer && !values.answer) errors.answer = 'กรุณาอัพโหลดไฟล์คำตอบ'

    return errors
  }

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

    if (selectedFile) {
      const fileSize = selectedFile.size / 1024 / 1024

      if (fileSize > LIMIT_FILE_SIZE_MB) {
        errorAlert(`ขนาดไฟล์ต้องไม่เกิน ${LIMIT_FILE_SIZE_MB} MB`)
      } else {
        formik.setFieldValue(name, selectedFile)
      }
    }
  }

  const getFileInfo = useCallback(async () => {
    const { data } = await apiInstance.get('/file')

    const getAcademicAnswer = data.find((item: IFileData) => item.type === 'academic-answer')

    if (getAcademicAnswer) {
      formik.setFieldValue('currentAnswer', getAcademicAnswer.url)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getFileInfo()
  }, [getFileInfo])

  return (
    <div className={styles.academicForm}>
      <form onSubmit={formik.handleSubmit}>
        <Heading size="5" mt="3">
          คำถามในการคัดเลือก
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
            <Label name={`ส่งคำตอบ (ขนาดไฟล์ไม่เกิน ${LIMIT_FILE_SIZE_MB} MB)`} required />
            {formik.values.currentAnswer && <a href={formik.values.currentAnswer}>ดาวน์โหลดคำตอบ</a>}
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
          <Button type="submit" disabled={isSubmitting}>
            ถัดไป
          </Button>
        </Flex>
      </form>
    </div>
  )
}

export default AcademicForm
