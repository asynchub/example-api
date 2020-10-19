const { ObjectID } = require('mongodb');

const resolvers = {
  Item: {
    id: root => root.id || root._id
  },
  Query: {
    hello: () => ('hello world'),
    allItems (root, { id, serialNumber }, { Items }) {
      if (!id && !serialNumber) {
        return Items.find({}).toArray();
      }
      if (id) {
        return Items.find({ _id: new ObjectID(id) }).toArray();
      }
      if (serialNumber) {
        return Items.find({ serialNumber }).toArray();
      }
      //   if (id) {
      //     const _id = stringToObjecID(id)
      //     return Items.find({ _id }).toArray()
      //   }
      //   if (filter) {
      //     const filters = buildFilters(filter)
      //     if (filters.length < 1) {
      //       return Items.find({}).toArray()
      //     } else {
      //       const query = { $and: filters }
      //       return Items.find(query).toArray()
      //     }
      //   }
      //   return Items.find({}).toArray()
    },
    getItem() {

    }
  },
  Mutation: {
    createItem() {

    }
  }
};

module.exports = {
  resolvers
};