const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');

const OrderItemType = require("./order_item.js");

const orderItemsModel = require('../models/order_items.js');

const OrderType = new GraphQLObjectType({
    name: 'Order',
    description: 'This represents an order',
    fields: () => ({
        rowid: { type: GraphQLNonNull(GraphQLInt) },
        customerName: { type: GraphQLNonNull(GraphQLString) },
        customerAddress: { type: GraphQLString },
        customerZip: { type: GraphQLString },
        customerCity: { type: GraphQLString },
        customerCountry: { type: GraphQLString },
        orderItems: {
            type: GraphQLList(OrderItemType),
            resolve: async (order) => {
                return await orderItemsModel.getOrderItems(order.rowid);
            }
        },
    })
});

module.exports = OrderType;
