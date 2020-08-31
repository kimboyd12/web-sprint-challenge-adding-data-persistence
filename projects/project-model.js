//  adding resources. X
//  retrieving a list of resources. X
//  adding projects. X
//  retrieving a list of projects. X
//  adding tasks.  X

const db = require("../data/config");

module.exports = {
    getProjects,
    addProject,
    getResources,
    addResource,
    addTask
}

function getProjects() {
    return db("projects")
}

function addProject(project) {
    return db('projects')
    .insert(project)
}

function getResources() {
    return db("resources")
}

function addResource(resource) {
    return db('resources')
    .insert(resource)
}

function addTask(task) {
    return db('tasks')
    .insert(task)
}