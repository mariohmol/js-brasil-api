const app = require('express')()
const bodyParser = require('body-parser')
// normally you'd just do require('express-openapi'), but this is for test purposes.
const openapi = require('express-openapi')
const path = require('path')
const cors = require('cors')
const fs = require('fs')
const request = require("request-promise")
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./api-docs.json')

app.use(cors())
app.use(bodyParser.json())

openapi.initialize({
  apiDoc: require('./api-doc.js'),
  app: app,
    exposeApiDocs: true,
  paths: path.resolve(__dirname, 'api-routes'),
})

app.use(function (err, req, res, next) {
  res.status(err.status).json(err)
})

// http://localhost:8080/v3/users
// http://localhost:8080/v3/api-docs
app.use('/api-docs', swaggerUi.serve,swaggerUi.setup(swaggerDocument))

app.use('/api-docs-dev', swaggerUi.serve, async (req,res)=>{
  await setApiDocs()
  const swaggerDocument = require('./api-docs.json')
  swaggerUi.setup(swaggerDocument)(req,res)
})

app.get('/update', async (req,res)=>{
    setApiDocs()
    res.json({})
})


async function setApiDocs(){
  const result = await request({
        uri: "http://localhost:8080/v3/api-docs",
        method: "GET",
        json: true
    })
    await fs.writeFileSync(path.resolve(__dirname, 'api-docs.json'), JSON.stringify(result))
}

const port = 8080// parseInt(process.argv[2], 10)
if (port) {
  console.log('PORT',port)
  app.listen(port)
}

module.exports = app
