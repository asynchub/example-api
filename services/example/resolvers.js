const { RenameRootFields } = require("apollo-server-lambda");

const resolvers = {
  Item: {
    id: root => root.id || root._id
  },
  Query: {
    hello: () => ('hello world'),
    allItems() {

    },
    getItem() {

    }
  },
  Mutation: {
    createItem() {

    }
  }
}

module.exports = {
  resolvers
}