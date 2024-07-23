import { fromFileChangesToQuery, getURL } from './crawl'

const fileChanges = ['bitcoin.txt']

const query = fromFileChangesToQuery(fileChanges)

console.log(getURL(query))
