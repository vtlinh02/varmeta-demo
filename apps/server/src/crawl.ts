import { getListFileChange } from './crawl/getListFileChange'
import axios from 'axios'
import 'dotenv/config'

const serverURL = process.env.SERVICE_URL

async function main() {
  console.log('Start crawling process')

  // get list file change
  const fileChanges = await getListFileChange()

  console.log('File change', fileChanges)

  if (fileChanges.length == 0) return // this is a merge action for FE

  axios
    .get(`${serverURL}/api/v1/crawl`, {
      params: {
        fileChanges,
      },
    })
    .catch((error) => console.log(error))
}

main()
