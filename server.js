let express = require('express')
let expressGraphQL = require('express-graphql')
let schema = require('./schema')

let app = express()
const PORT = 4000 || process.env.PORT

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}))

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)  
})
