import { fsWrapper } from './utils/fs/fsWrapper'

fsWrapper.readFile('/projects/projects.json').then((data) => console.log(data))
