import 'dotenv/config'
import 'reflect-metadata'
import App from './App'
import CategoriesRoute from './routes/categories.route'
import ProjectsRoute from './routes/projects.route'
import TagsRoute from './routes/tags.route'

const app = new App([
  new CategoriesRoute(),
  new ProjectsRoute(),
  new TagsRoute(),
])

app.listen()
