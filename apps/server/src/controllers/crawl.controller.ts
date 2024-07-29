import { CrawlService } from '@/services/crawl.service'
import { Request, Response } from 'express'

export class CrawlController {
  constructor(private crawlService = new CrawlService()) {}

  public crawl = async (req: Request, res: Response) => {
    // @ts-ignore
    const fileChangesRaw: string = req.query.dataRaw

    console.log(fileChangesRaw)
    console.log(typeof fileChangesRaw)

    const fileChanges = this.handleFileChangeRaw(fileChangesRaw)

    console.log(fileChanges)
    if (fileChanges.length !== 0) this.crawlService.crawl(fileChanges)

    res.send('successful')
  }

  private handleFileChangeRaw(data: string): Array<string> {
    return JSON.parse(data)
  }
}
