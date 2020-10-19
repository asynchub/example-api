const { ApolloServer } = require('apollo-server-lambda');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: event.functionName,
    event,
    context
  })
});
exports.graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true
  }
});
