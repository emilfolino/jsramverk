const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList
} = require('graphql');

const ProductType = require("./product.js");

const productsModel = require('../models/products');

const OrderItemType = new GraphQLObjectType({
    name: 'OrderItem',
    description: 'This represents an order item',
    fields: () => ({
        rowid: { type: GraphQLNonNull(GraphQLInt) },
        orderId: { type: GraphQLNonNull(GraphQLInt) },
        productId: { type: GraphQLNonNull(GraphQLInt) },
        amount: { type: GraphQLNonNull(GraphQLInt) },
        product: {
            type: ProductType,
            resolve: async (orderItem) => {
                console.log(orderItem)
                return await productsModel.getProduct(orderItem.productId);
            }
        },
    })
});

module.exports = OrderItemType;
