const model = require('./model')

module.exports = {
    GROUP_STUDENTS: async(req, res) => {
        try {
            const { id } = req.params

            const students = await model.groupStudents(id)

            res.json(students)
        } catch(err) {
            console.log(err.message)
        }
    },
    HOMEWORKS: async(req, res) => {
        try {
            const { id } = req.params

            const homework = await model.groupHomeworks(id)

            res.json(homework)
        } catch(err) {
            console.log(err.message)
        }
    },

    GIVE_HOMEWORK: async(req, res) => {
        try {
            const { group, title, content } = req.body

            console.log(group, title, content);

            const give = await model.giveHomework(title, content, group)

            res.json(give)


        } catch(err) {
            console.log(err.message)
        }
    },
    ALL_GROUPS: async(req, res) => {
        try {
            const group = await model.allGroups()

            res.json(group)
        } catch (err) {
            console.log(err);
        }
    },
    ADD_GROUP: async (req, res) => {
        try {
            const { title, course, teacher } = req.body

            const newgroup = await model.addGroup(title, course, teacher)

            res.json(newgroup)
        } catch (err) {
            console.log(err.message)
        }
    },
    ADD_STUDENT: async (req, res) => {
        try {
            const { student , group } = req.body

            const newstudent = await model.addStudent(student, group)

            res.json(newgroup)
        } catch (err) {
            console.log(err.message)
        }
    },
}