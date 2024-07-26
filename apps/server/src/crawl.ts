import { getListFileChange } from './crawl/getListFileChange'

async function main() {
  // get list file change
  const fileChanges = await getListFileChange()

  console.log(fileChanges)
}

main()
