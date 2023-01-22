const { fetchRow, fetchData } = require("../../utils/postgres")

const GROUP_STUDENTS = `
    SELECT
        u.user_id,
        u.user_name,
        u.user_phone
    FROM
        student_groups sg
    INNER JOIN
        users u
    ON
        sg.student_id = u.user_id
    WHERE
        sg.group_id = $1
`

const GROUP_HOMEWORKS = `
    SELECT * FROM homework WHERE group_id = $1
`

const GIVE_HOMEWORK = `
    INSERT INTO homework(homework_title, homework_content, group_id) values($1, $2, $3)
`

const ALL_GROUPS = `
    SELECT
        g.group_id,
        g.group_title,
        c.course_name,
        u.user_name
    FROM
        groups g
    JOIN
        courses c
    ON
        g.course_id = c.course_id
    JOIN
        users u
    ON
        u.user_id = g.teacher_id
`


const ADD_GROUP = `
INSERT INTO groups(group_title, course_id, teacher_id) VALUES($1, $2 , $3)
`


const ADD_STUDENT = `insert into student_groups(student_id, group_id) values($1, $2)`



const groupStudents = id => fetchData(GROUP_STUDENTS, id)
const groupHomeworks = id => fetchData(GROUP_HOMEWORKS, id)
const giveHomework = (title, content, group) => fetchData(GIVE_HOMEWORK, title, content, group)
const allGroups = () => fetchData(ALL_GROUPS)
const addGroup = (title, course, teacher) => fetchData(ADD_GROUP, title, course, teacher)
const addStudent = (student, group) => fetchData(ADD_STUDENT, student, group)


module.exports = {
    groupStudents,
    groupHomeworks,
    giveHomework,
    allGroups,
    addGroup,
    addStudent
}