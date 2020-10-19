const { ApolloServer } = require('apollo-server-lambda');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');
const { MongoClient } = require('mongodb');
let db;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => {
    if (!db) {
      try {
        const dbClient = new MongoClient(process.env.MONGO_DB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        if (!dbClient.isConnected()) { await dbClient.connect(); }
        db = dbClient.db('db-warrantylookup');
      } catch (error) {
        console.log('--->error while connecting via graphql context (db)', error);
      }
    }
    return {
      db,
      Items: db.collection('items')
    };
  },
  introspection: true,
  playground: true
});
exports.graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true
  }
});
