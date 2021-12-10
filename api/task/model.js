const db = require('../../data/dbConfig')

async function postTask(task) {
    const newTaskId = await db('tasks').insert(task)
    const newTask = await db('tasks')
    .where('task_id', newTaskId)
    .first()

    if (newTask.task_completed === 0) {
        newTask.task_completed = false
    } else {
        newTask.task_completed = true
    }
    return newTask
}

function getTasks() {
    return db('tasks')
}
module.exports = {
    postTask,
    getTasks,
}