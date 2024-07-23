import { getListFileChange } from './crawl/getListFileChange'
import axios from 'axios'

const serverURL = 'https://d31c-42-119-180-122.ngrok-free.app'
async function main() {
  console.log('Start crawling process')

  // get list file change
  const fileChanges = await getListFileChange()

  console.log('File change', fileChanges)

  if (fileChanges.length == 0) return // this is a merge action for FE

  await axios.get(`${serverURL}/api/v1/crawl`, {
    params: {
      fileChanges,
    },
  })
}

main()
