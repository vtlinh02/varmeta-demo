import express from 'express';
import cors from 'cors';
const app = express();
const port = 3001;
var fs = require('fs');
app.use(cors())

app.get('/', (req, res) => {
  const dirs = fs.readdirSync('/VAR-META/built-on-gno/projects');
  const category = dirs.map(dir => {
    return JSON.parse(fs.readFileSync('/VAR-META/built-on-gno/projects/' + dir + '/category.json'))
  });
  res.json(category);
});

app.get('/:category', (req: any, res) => {
  const { category } = req.params
  const path = '/VAR-META/built-on-gno/projects/' + category
  const dirs = fs.readdirSync(path).filter((i) => !i.includes(".json"));
  let info = []
  info = dirs.map(dir => {
    const deepPath = fs.readdirSync(path + "/" + dir).filter((i) => !i.includes(".json"))
    const data = []
    deepPath.forEach((name) => {
      data.push({
        name,
        description: fs.readFileSync(path + '/' + dir + '/' + name + '/detail.md', 'utf-8'),
        info: JSON.parse(fs.readFileSync(path + '/' + dir + '/' + name + '/info.json'))
      })
    })
    return data
  });
  res.json(info);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});