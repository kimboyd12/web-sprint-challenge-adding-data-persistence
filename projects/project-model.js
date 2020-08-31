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
    addTask,
    getTasks
}

function getProjects() {
    return db('projects')
}

function addProject(project) {
    return db('projects')
    .insert(project)
}

function getResources() {
    return db('resources')
}

function addResource(resource) {
    return db('resources')
    .insert(resource)
}

function getTasks(projectId) {
    return db('tasks as t')
        .join('projects as p', 'p.id', '=', 'project_id')
        .select('t.id as TaskID', 't.description as TaskDesc', 't.notes as Notes', 't.is_completed as Completed',
            'p.project_name as ProjectName', 'p.description as ProjectDesc')
        .orderBy('t.id')
}   

function addTask(task) {
    return db('tasks')
    .insert(task)
}