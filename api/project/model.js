const db = require('../../data/dbConfig')

async function postProject(project) {
    const newProjectId = await db('projects').insert(project)
    const newProject = await db('projects')
    .where('project_id', newProjectId)
    .first()
    
    if (newProject.project_completed === 0) {
        newProject.project_completed = false
    } else {
        newProject.project_completed = true
    }
    return newProject
}

function getProjects() {
    return db('projects')
}

module.exports = {
    postProject,
    getProjects,
} 