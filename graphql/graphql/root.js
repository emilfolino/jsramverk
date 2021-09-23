const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');

const CourseType = require("./course.js");
const TeacherType = require("./teacher.js");

const courses = require("../models/courses.js");

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        course: {
            type: CourseType,
            description: 'A single course',
            args: {
                courseCode: { type: GraphQLString }
            },
            resolve: async function(parent, args) {
                let courseArray = await courses.getAll()

                return courseArray.find(course => course.courseCode === args.courseCode);
            }
        },
        courses: {
            type: new GraphQLList(CourseType),
            description: 'List of all courses',
            resolve: async function() {
                return await courses.getAll();
            }
        },
        teacher: {
            type: TeacherType,
            description: 'A single teacher',
            args: {
                acronym: { type: GraphQLString }
            },
            resolve: async function (parent, args) {
                let teachers = await getTeachers();

                return teachers.find(teacher => teacher.acronym === args.acronym)
            }
        },
        teachers: {
            type: new GraphQLList(TeacherType),
            description: 'List of teachers',
            resolve: async function() {
                return await getTeachers();
            }
        }
    })
});

async function getTeachers() {
    let courseArray = await courses.getAll();
    let teachers = [];
    let acronyms = [];
    courseArray.forEach(function(course) {
        course.teachers.forEach(function(teacher) {
            if (acronyms.indexOf(teacher.acronym) === -1) {
                teachers.push(teacher);
                acronyms.push(teacher.acronym);
            }
        });
    });

    return teachers;
}

module.exports = RootQueryType;
