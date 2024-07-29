import { getListFileChange } from './crawl/getListFileChange'

export function fromFileChangesToQuery(fileChanges: Array<string>): string {
  if (fileChanges.length == 0) return ''

  if (fileChanges.length == 1) return `?dataRaw[]=${fileChanges[0]}`

  let dataReturn = '?'
  for (let i = 0; i < fileChanges.length - 1; i++) {
    dataReturn += `dataRaw[]=${fileChanges[i]}&`
  }

  dataReturn += `dataRaw[]=${fileChanges[fileChanges.length - 1]}`

  return dataReturn
}

export function getURL(data: string) {
  const server = 'https://c78b-42-119-180-122.ngrok-free.app/api/v1/crawl'

  return `${server}${data}`
}

async function main() {
  // get list file change
  const fileChanges = await getListFileChange()

  const query: string = fromFileChangesToQuery(fileChanges)

  console.log(`${getURL(query)}`)
}

main()
