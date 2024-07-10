import 'dotenv/config'

import { Category } from '@/database/entities/Category.entity'
import { fsWrapper } from '@/utils/fs/fsWrapper'
import { CategoryJSON } from '@/shares/CategoryKJSON'
import { creatorSubCategory } from './creatorSubCategory'
import { connection } from '@/database/connection'
import { creatorTag } from './creatorTag'

export function creatorParentCategory(parentPath: string) {
  // ex of parent path: /projects/DeFi
  fsWrapper.readFile(`${parentPath}/category.json`).then((dataString) => {
    const data: CategoryJSON = JSON.parse(dataString)

    const category = new Category()
    category.name = data.name
    category.pathname = data.pathname
    category.description = data.description
    category.parent = null

    creatorTag(data.tags)

    connection
      .getRepository(Category)
      .save(category)
      .then((category) => {
        if (data.sub_categories.length !== 0) {
          data.sub_categories.map((detail) => {
            const subPath = `${parentPath}/${detail.pathname}`
            creatorSubCategory(subPath)
          })
        }
      })
  })
}
