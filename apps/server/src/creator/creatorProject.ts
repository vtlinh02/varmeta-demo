import { Project } from '@/database/entities/Project.entity'
import { ProjectJSON } from '@/shares/ProjectJSON'
import { fsWrapper } from '@/utils/fs/fsWrapper'
import 'dotenv/config'
import { creatorSocial } from './sub/creatorSocial'
import { creatorPartnership } from './sub/creatorPartnership'
import { creatorProjectTag } from './sub/createProjectTag'
import { connection } from '@/database/connection'

export function creatorProject(folderPath: string, category) {
  // folder path is the full path, not the folder name, Ex: /projects/DeFi/DEX/Coinlink
  fsWrapper.readFile(`${folderPath}/info.json`).then((data) => {
    const detail: ProjectJSON = JSON.parse(data)

    const project = new Project()
    project.name = detail.display_term
    project.logoUrl = ''
    project.shortDescription = detail.short_description
    project.author = detail.author
    project.category = category

    connection
      .getRepository(Project)
      .save(project)
      .then((project) => {
        creatorSocial(project, detail)
        creatorPartnership(project, detail)
        creatorProjectTag(project, detail)
      })
      .catch((error) => {
        console.log('project error')
      })
  })
}

// check done
