import { useFormik } from 'formik'
import styles from './index.module.scss'
import Label from '../Form/Label'
import { Button, Flex, Text } from '@radix-ui/themes'
import ErrorMessage from '../Form/ErrorMessage'
import { apiInstance } from 'src/lib/axios'
import { useCallback, useEffect, useRef, useState } from 'react'

type Props = {
  onSubmit: (values: IFileUpload) => void
  setCurrentStep: (step: number) => void
  currentStep: number
  isSubmitting: boolean
}

export interface IFileUpload {
  citizenship: File | null
  parents: File | null
  certificate: File | null
  transcript: File | null
  image: File | null
}

const initialValues: IFileUpload = {
  citizenship: null,
  parents: null,
  certificate: null,
  transcript: null,
  image: null,
}

const validate = (values: IFileUpload) => {
  const errors: Record<string, string> = {}
  if (!values.citizenship) errors.citizenship = 'กรุณาอัพโหลดไฟล์'
  if (!values.parents) errors.parents = 'กรุณาอัพโหลดไฟล์'
  if (!values.certificate) errors.certificate = 'กรุณาอัพโหลดไฟล์'
  if (!values.transcript) errors.transcript = 'กรุณาอัพโหลดไฟล์'
  if (!values.image) errors.image = 'กรุณาอัพโหลดไฟล์'

  return errors
}

interface IFileData {
  id: number
  url: string
  type: string
  userId: number
  created_at: string
}

const FileUpload: React.FC<Props> = ({ onSubmit, isSubmitting, currentStep, setCurrentStep }: Props): JSX.Element => {
  const [file, setFile] = useState<IFileData[]>([])

  const citizenshipInputRef = useRef(null)
  const parentsInputRef = useRef(null)
  const certificateInputRef = useRef(null)
  const transcriptInputRef = useRef(null)
  const imageInputRef = useRef(null)

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  })

  const handleClick = (ref: React.MutableRefObject<null>) => {
    if (ref.current) {
      ;(ref.current as HTMLInputElement).click()
    }
  }

  const uploadFile = (name: string, files: FileList | null) => {
    const sellectFile = files ? files[0] : null

    formik.setFieldValue(name, sellectFile)
  }

  const getFileInfo = useCallback(async () => {
    const { data } = await apiInstance.get('/file')

    if (data.length != 0) {
      setFile(data)
    }
  }, [])

  const getFileInfoByType = (name: string) => {
    return file.find((item: IFileData) => item.type === name)
  }

  useEffect(() => {
    getFileInfo()
  }, [getFileInfo])

  return (
    <div className={styles.fileUpload}>
      {file.length === 0 ? (
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.input}>
            <Label required name="หนังสือขออนุญาตผู้ปกครอง" />
            <div className={styles.fileUploadGroup}>
              <a href="https://api-s3.kronos.moe/comcamp/approval.pdf" target="_blank" rel="noreferrer">
                <button type="button" className={styles.uploadBtn}>
                  ดาวน์โหลดแบบฟอร์ม
                </button>
              </a>
              <button type="button" className={styles.uploadBtn} onClick={() => handleClick(parentsInputRef)}>
                อัพโหลดไฟล์
              </button>
              {formik.values.parents?.name && <Text>{formik.values.parents.name}</Text>}
            </div>
            <input
              accept="application/pdf"
              type="file"
              name="parents"
              ref={parentsInputRef}
              style={{ display: 'none' }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => uploadFile('parents', e.target.files)}
            />
            <ErrorMessage>{formik.errors.parents && formik.touched.parents && formik.errors.parents}</ErrorMessage>
          </div>
          <div className={styles.input}>
            <Label required name="สําเนาบัตรประจําตัวประชาชนหรือสําเนาบัตรนักเรียนของผู้สมัคร (เซ็นสําเนาถูกต้อง)" />
            <div className={styles.fileUploadGroup}>
              <button type="button" className={styles.uploadBtn} onClick={() => handleClick(citizenshipInputRef)}>
                อัพโหลดไฟล์
              </button>
              {formik.values.citizenship?.name && <Text>{formik.values.citizenship.name}</Text>}
            </div>
            <input
              accept="application/pdf"
              type="file"
              name="citizenship"
              ref={citizenshipInputRef}
              style={{ display: 'none' }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => uploadFile('citizenship', e.target.files)}
            />
            <ErrorMessage>
              {formik.errors.citizenship && formik.touched.citizenship && formik.errors.citizenship}
            </ErrorMessage>
          </div>
          <div className={styles.input}>
            <Label required name="เอกสารรับรองความเป็นนักเรียนหรือเอกสารรับรองผลการศึกษา (ปพ.7) (เซ็นสําเนาถูกต้อง)" />
            <div className={styles.fileUploadGroup}>
              <button type="button" className={styles.uploadBtn} onClick={() => handleClick(certificateInputRef)}>
                อัพโหลดไฟล์
              </button>
              {formik.values.certificate?.name && <Text>{formik.values.certificate.name}</Text>}
            </div>
            <input
              accept="application/pdf"
              type="file"
              name="certificate"
              ref={certificateInputRef}
              style={{ display: 'none' }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => uploadFile('certificate', e.target.files)}
            />
            <ErrorMessage>
              {formik.errors.certificate && formik.touched.certificate && formik.errors.certificate}
            </ErrorMessage>
          </div>
          <div className={styles.input}>
            <Label
              required
              name="ระเบียนแสดงผลการศึกษาของระดับช้นมัธยมศึกษาตอนปลาย (ปพ.1) หรือหนังสือแสดงผลการเรียนเฉลี่ย
              (เซ็นสําเนาถูกต้อง)"
            />
            <div className={styles.fileUploadGroup}>
              <button type="button" className={styles.uploadBtn} onClick={() => handleClick(transcriptInputRef)}>
                อัพโหลดไฟล์
              </button>
              {formik.values.transcript?.name && <Text>{formik.values.transcript.name}</Text>}
            </div>
            <input
              accept="application/pdf"
              type="file"
              name="transcript"
              ref={transcriptInputRef}
              style={{ display: 'none' }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => uploadFile('transcript', e.target.files)}
            />
            <ErrorMessage>
              {formik.errors.transcript && formik.touched.transcript && formik.errors.transcript}
            </ErrorMessage>
          </div>
          <div className={styles.input}>
            <Label required name="ภาพถ่ายอิสระของผู้สมัครที่ เห็นใบหน้าชัดเจน" />
            <div className={styles.fileUploadGroup}>
              <button type="button" className={styles.uploadBtn} onClick={() => handleClick(imageInputRef)}>
                อัพโหลดไฟล์
              </button>
              {formik.values.image?.name && <Text>{formik.values.image.name}</Text>}
            </div>
            <input
              accept="image/*"
              type="file"
              name="image"
              ref={imageInputRef}
              style={{ display: 'none' }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => uploadFile('image', e.target.files)}
            />
            <ErrorMessage>{formik.errors.image && formik.touched.image && formik.errors.image}</ErrorMessage>
          </div>

          <Flex justify="end" align="center" gap="4">
            <Button onClick={() => setCurrentStep(currentStep - 1)} variant="outline">
              ย้อนกลับ
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              ถัดไป
            </Button>
          </Flex>
        </form>
      ) : (
        <>
          <div className={styles.content}>
            <div>
              <Label name="หนังสือขออนุญาตผู้ปกครอง" />
              <a href={getFileInfoByType('parents')?.url}>ดาวน์โหลด</a>
            </div>
            <div>
              <Label name="สําเนาบัตรประจําตัวประชาชนหรือสําเนาบัตรนักเรียนของผู้สมัคร" />
              <a href={getFileInfoByType('citizenship')?.url}>ดาวน์โหลด</a>
            </div>
            <div>
              <Label name="เอกสารรับรองความเป็นนักเรียนหรือเอกสารรับรองผลการศึกษา (ปพ.7)" />
              <a href={getFileInfoByType('certificate')?.url}>ดาวน์โหลด</a>
            </div>
            <div>
              <Label name="ระเบียนแสดงผลการศึกษาของระดับช้นมัธยมศึกษาตอนปลาย (ปพ.1) หรือหนังสือแสดงผลการเรียนเฉลี่ย" />
              <a href={getFileInfoByType('transcript')?.url}>ดาวน์โหลด</a>
            </div>
            <div>
              <Label name="ภาพถ่ายอิสระของผู้สมัครที่ เห็นใบหน้าชัดเจน" />
              <a href={getFileInfoByType('image')?.url}>ดาวน์โหลด</a>
            </div>
          </div>
          <Flex justify="end" align="center" gap="4">
            <Button onClick={() => setCurrentStep(currentStep - 1)} variant="outline">
              ย้อนกลับ
            </Button>
            <Button onClick={() => setCurrentStep(currentStep + 1)} disabled={isSubmitting}>
              ถัดไป
            </Button>
          </Flex>
        </>
      )}
    </div>
  )
}

export default FileUpload
