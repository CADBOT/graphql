let graphql = require('graphql')
let {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = graphql

let db = {
  users: [
    {id: 1323, firstName: 'Karen', age: 30},
    {id: 1513, firstName: 'Bob', age: 40},
    {id: 1314, firstName: 'Erin', age: 20},
  ]
}

let UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLString }
    firstName: { type: GraphQLString }
    age: { type: GraphQLInt }
  })
})

let RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      resolve(parentValue, args) {
        //TODO return the approp value
      }
    }
  })
})
