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

async function getTasks() {
    const tasks = await db('tasks')

    tasks.map(task => {
        if (task.task_completed === 0) {
            task.task_completed = false
        } else {
            task.task_completed = true
        }
    })
    return tasks
}

module.exports = {
    postTask,
    getTasks,
}