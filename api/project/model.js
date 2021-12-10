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

async function getProjects() {
    const projects = await db('projects')

    projects.map(project => {
        if (project.project_completed === 0) {
            project.project_completed = false
        } else {
            project.project_completed = true
        }
    })
    return projects
}

module.exports = {
    postProject,
    getProjects,
}