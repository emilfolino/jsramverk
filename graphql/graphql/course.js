const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLFloat,
    GraphQLNonNull
} = require('graphql');

const CourseType = new GraphQLObjectType({
    name: 'Course',
    description: 'This represents a course',
    fields: () => ({
        courseCode: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLNonNull(GraphQLString) },
        credits: { type: GraphQLNonNull(GraphQLFloat) },
        // author: {
        //     type: AuthorType,
        //     resolve: (book) => {
        //         return authors.find(author => author.id === book.authorId)
        //     }
        // }
    })
})

module.exports = CourseType;
