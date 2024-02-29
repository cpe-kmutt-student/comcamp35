import { Button, Flex, Heading, Separator, Text, TextArea } from '@radix-ui/themes'
import styles from './index.module.scss'
import { useFormik } from 'formik'
import { IQuestion, questions } from './utils/questions'
import ErrorMessage from '../Form/ErrorMessage'
import { apiInstance } from 'src/lib/axios'
import { useCallback, useEffect } from 'react'

type Props = {
  onSubmit: (values: IQuestionForm) => void
  goBack: () => void
  isSubmitting: boolean
}

export interface IQuestionForm {
  answer_1: string
  answer_2: string
  answer_3: string
  answer_4: string
  answer_5: string
  answer_6: string
}

const initialValues: IQuestionForm = {
  answer_1: '',
  answer_2: '',
  answer_3: '',
  answer_4: '',
  answer_5: '',
  answer_6: '',
}

const validate = (values: IQuestionForm) => {
  const errors: Record<string, string> = {}
  if (!values.answer_1) errors.answer_1 = 'กรุณาตอบคำถาม'
  if (!values.answer_2) errors.answer_2 = 'กรุณาตอบคำถาม'
  if (!values.answer_3) errors.answer_3 = 'กรุณาตอบคำถาม'
  if (!values.answer_4) errors.answer_4 = 'กรุณาตอบคำถาม'
  if (!values.answer_5) errors.answer_5 = 'กรุณาตอบคำถาม'
  if (!values.answer_6) errors.answer_6 = 'กรุณาตอบคำถาม'

  return errors
}

const QuestionForm: React.FC<Props> = ({ onSubmit, goBack, isSubmitting }: Props): JSX.Element => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  })

  const getQuestionAnswers = useCallback(async () => {
    const { data } = await apiInstance.get('/question')

    const newValues: IQuestionForm = {
      answer_1: data.answer_1 ?? '',
      answer_2: data.answer_2 ?? '',
      answer_3: data.answer_3 ?? '',
      answer_4: data.answer_4 ?? '',
      answer_5: data.answer_5 ?? '',
      answer_6: data.answer_6 ?? '',
    }

    formik.setValues(newValues)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getQuestionAnswers()
  }, [getQuestionAnswers])

  const renderQuestions = questions.map((question: IQuestion, i: number) => {
    return (
      <div key={i} className={styles.input}>
        <div className={styles.question}>
          <Text as="p">
            {i + 1}. {question.question}
          </Text>
          {question.list && <ol>{question?.list.map((list: string, i: number) => <li key={i}>{list}</li>)}</ol>}
        </div>
        <TextArea
          name={'answer_' + (i + 1)}
          placeholder="ระบุคำตอบ"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values[`answer_${i + 1}` as keyof IQuestionForm]}
          className={styles.textArea}
          size="3"
        />
        <ErrorMessage>
          {formik.errors[('answer_' + (i + 1)) as keyof IQuestionForm] &&
            formik.touched[('answer_' + (i + 1)) as keyof IQuestionForm] &&
            formik.errors[('answer_' + (i + 1)) as keyof IQuestionForm]}
        </ErrorMessage>
      </div>
    )
  })

  return (
    <div className={styles.questionForm}>
      <form onSubmit={formik.handleSubmit}>
        <Heading size="5" mt="3">
          คำถามในการคัดเลือก
        </Heading>
        <Separator my="4" size="4" />
        {renderQuestions}
        <Flex justify="end" align="center" gap="4">
          <Button onClick={goBack} variant="outline">
            ย้อนกลับ
          </Button>
          <Button variant="solid" type="submit" disabled={isSubmitting}>
            ถัดไป
          </Button>
        </Flex>
      </form>
    </div>
  )
}

export default QuestionForm
