const { GraphQLServer } = require('graphql-yoga')

// typeDefs defines GraphQL schema. Exclamation mark indicates field can never be null.
// TODO: generate schemas
const typeDefs = `
type Query {
    info: String!
}
`

// resolvers describes how to get information for each field in the schema. Should have same structure as typeDefs
const resolvers = {
    Query: {
        info: () => `This is the API for workout-legends`
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers,
})
server.start(() => console.log(`Server is running on localhost:4000`))