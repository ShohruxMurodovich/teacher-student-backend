const { fetchRow, fetchData } = require("../../utils/postgres")

const LOGIN = `
    SELECT * FROM users WHERE user_name = $1 AND user_password = $2
`

const TEACHER_GROUPS = `
    SELECT
        g.group_id,
        g.group_title,
        c.course_name,
        c.course_price
    FROM
        groups g
    INNER JOIN
        courses c
    ON
        c.course_id = g.course_id
    WHERE
        teacher_id = $1
`

const STUDENT_GROUPS = `
    SELECT
        g.group_id,
        g.group_title,
        c.course_name
    FROM
        student_groups sg
    INNER JOIN
        users u
    ON
        sg.student_id = u.user_id
    INNER JOIN
        groups g
    ON
        sg.group_id = g.group_id
    INNER JOIN
        courses c
    ON
        g.course_id = c.course_id
    WHERE
        u.user_id = $1
`

const ALL_USERS = `
    SELECT
        u.user_id,
        u.user_name,
        u.user_phone,
        u.user_status
    FROM
        users u
`
const COURSES = `SELECT * from courses`


const ADD_USER = `INSERT INTO users(user_name, user_phone, user_password, user_status) VALUES($1, $2, $3, $4);`


const ADD_COURSE = `INSERT INTO courses(course_name, course_price) VALUES($1, $2)`





const login = (name, password) => fetchRow(LOGIN, name, password)
const teacherGroups = id => fetchData(TEACHER_GROUPS, id)
const studentGroups = id => fetchData(STUDENT_GROUPS, id)
const allUsers = () => fetchData(ALL_USERS)
const allCourses = () => fetchData(COURSES)
const addUser = (name, phone, password, status) => fetchData(ADD_USER, name, phone, password, status)
const addCourse = (name, price) => fetchData(ADD_COURSE, name, price)


module.exports = {
    login,
    teacherGroups,
    studentGroups,
    allUsers,
    allCourses,
    addUser,
    addCourse
}