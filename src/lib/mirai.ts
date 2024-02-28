import axios from 'axios'
import { UPLOAD_ENDPOINT } from 'src/constants/path'

export const uploadToMirai = async (file: File, type: string): Promise<{ url: string; type: string }> => {
  const form = new FormData()

  form.append('uploadType', '0')
  form.append('file', file)

  const { data } = await axios.post(UPLOAD_ENDPOINT, form)

  return {
    url: data.url,
    type: type,
  }
}
