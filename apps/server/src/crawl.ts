// On merge request

import { classificationCase } from './crawl/classificationCase'
import { getListFileChange } from './crawl/getListFileChange'
import { handleCase } from './crawl/handleCase'
import { connection } from './database/connection'

async function main() {
  console.log('Start crawling')
  await connection.initialize()

  // get list file change
  const fileChanges = await getListFileChange()

  console.log('File change', fileChanges)

  if (fileChanges.length == 0) return // this is a merge action for FE

  // Group to consistent case

  const listCase = await classificationCase(fileChanges)

  console.log('List case', listCase)

  // Handle case
  handleCase(listCase).then(() => console.log('Handle done'))
}

main()
