const { gql } = require('apollo-server-lambda');

const typeDefs = gql`
  scalar Date

  type Item {
    id: ID!
    userId: String
    createdAt: Date
    modelNr: String
    serialNr: String
    dateWarrantyBegins: Date
    dateWarrantyExpires: Date
    attachment: String
  }
  
  type Query {
    hello(
    ): String
    allItems(
    ): [Item]
    getItem(
      id: String
      serialNumber: String
    ): Item
  }
  
  type Mutation {
    createItem(
      userId: String
      createdAt: Date
      modelNr: String
      serialNr: String
      dateWarrantyBegins: Date
      dateWarrantyExpires: Date
      attachment: String
    ): Item
    updateItem(
      id: String!
      userId: String
      createdAt: Date
      modelNr: String
      serialNr: String
      dateWarrantyBegins: Date
      dateWarrantyExpires: Date
      attachment: String
    ): Item
    deleteItem(
      id: String!
    ): Item
  }
`;

module.exports = {
  typeDefs
};