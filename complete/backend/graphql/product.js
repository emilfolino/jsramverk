const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLString
} = require('graphql');

const ProductType = new GraphQLObjectType({
    name: 'Product',
    description: 'This represents a product',
    fields: () => ({
        rowid: { type: GraphQLNonNull(GraphQLInt) },
        articleNumber: { type: GraphQLString },
        productName: { type: GraphQLNonNull(GraphQLString) },
        productDescription: { type: GraphQLString },
        productSpecifiers: { type: GraphQLString },
        stock: { type: GraphQLInt },
        location: { type: GraphQLString },
        price: { type: GraphQLInt}
    })
});

module.exports = ProductType;
