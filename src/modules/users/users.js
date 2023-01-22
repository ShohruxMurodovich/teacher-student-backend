const jwt = require('../../utils/jwt')
const model = require('./model')

module.exports = {
    LOGIN: async (req, res) => {
        try {
            const { name, password } = req.body

            const user = await model.login(name, password)

            if (!user) {
                return res.sendStatus(401)
            }

            if (user.user_status == 3) {
                res.json({
                    message: "Authorized",
                    access_token: jwt({ id: user.user_id }),
                    role: "student"
                })
            }
            if (user.user_status == 2) {
                res.json({
                    message: "Authorized",
                    access_token: jwt({ id: user.user_id }),
                    role: "teacher"
                })
            }
            if (user.user_status == 1) {
                res.json({
                    message: "Authorized",
                    access_token: jwt({ id: user.user_id }),
                    role: "admin"
                })
            }


        } catch (err) {
            console.log(err.message)
        }
    },
    TEACHER_GROUPS: async (req, res) => {
        try {
            const { verifyId } = req

            const groups = await model.teacherGroups(verifyId)

            res.json(groups)
        } catch (err) {
            console.log(err.message)
        }
    },
    STUDENT_GROUPS: async (req, res) => {
        try {
            const { verifyId } = req

            const groups = await model.studentGroups(verifyId)

            res.json(groups)
        } catch (err) {
            console.log(err.message)
        }
    },

    ALL_USERS: async (_, res) => {
        try {
            const users = await model.allUsers()

            res.json(users)
        } catch (err) {
            console.log(err.message);
        }
    },
    COURSES: async (_, res) => {
        try {
            const courses = await model.allCourses()

            res.json(courses)
        } catch (err) {
            console.log(err.message);
        }
    },
    ADD_USER: async (req, res) => {
        try {
            const { name, phone, password, status } = req.body

            const newuser = await model.addUser(name, phone, password, status)

            res.json(newuser)
        } catch (err) {
            console.log(err.message)
        }
    },
    ADD_COURSE: async (req, res) => {
        try {
            const { name, price } = req.body

            const newcourse = await model.addCourse(name, price)

            res.json(newcourse)
        } catch (err) {
            console.log(err.message)
        }
    },
}