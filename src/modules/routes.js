const express = require('express')
const groups = require('./groups/groups')
const users = require('./users/users')
const verify = require('../middewares/verify')

const router = express.Router()

router
    .post('/login', users.LOGIN)
    .get('/teacher/groups', verify, users.TEACHER_GROUPS)
    .get('/student/groups', verify, users.STUDENT_GROUPS)
    .get('/users', users.ALL_USERS)
    .get('/courses', users.COURSES)
    .post('/add/user',users.ADD_USER)
    .post('/add/course',users.ADD_COURSE)
    .post('/add/group',groups.ADD_GROUP)
    .post('/add/student',groups.ADD_STUDENT)
    .get('/groups', groups.ALL_GROUPS)
    .get('/groups/students/:id', groups.GROUP_STUDENTS)
    .get('/groups/homework/:id', groups.HOMEWORKS)
    .post('/give/homework/',groups.GIVE_HOMEWORK)



module.exports = router