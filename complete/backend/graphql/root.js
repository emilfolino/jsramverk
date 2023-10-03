const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');

const OrderType = require("./order.js");
// const ProductType = require("./product.js");


const ordersModel = require("../models/orders.js");

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        orders: {
            type: GraphQLList(OrderType),
            description: 'List of all orders',
            resolve: async function() {
                return await ordersModel.getOrders();
            }
        },
        // teacher: {
        //     type: TeacherType,
        //     description: 'A single teacher',
        //     args: {
        //         acronym: { type: GraphQLString }
        //     },
        //     resolve: async function (parent, args) {
        //         let teachers = await getPeople("teachers");

        //         return teachers.find(teacher => teacher.acronym === args.acronym)
        //     }
        // },
        // teachers: {
        //     type: GraphQLList(TeacherType),
        //     description: 'List of teachers',
        //     resolve: async function() {
        //         return await getPeople("teachers");
        //     }
        // },
        // students: {
        //     type: GraphQLList(StudentType),
        //     description: 'List of students',
        //     resolve: async function() {
        //         return await getPeople("students");
        //     }
        // }
    })
});

module.exports = RootQueryType;
