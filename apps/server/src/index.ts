import 'dotenv/config'
import 'reflect-metadata'
import App from './App'
import CategoriesRoute from './routes/categories.route'

const app = new App([new CategoriesRoute()])

app.listen()
