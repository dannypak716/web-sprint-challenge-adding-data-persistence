const db = require('../../data/dbConfig')

async function postResource(resource) {
    const newResourceId = await db('resources').insert(resource)
    return db('resources')
    .where('resource_id', newResourceId)
    .first()
}

function getResources() {
    return db('resources')
}
module.exports = {
    postResource,
    getResources,
}