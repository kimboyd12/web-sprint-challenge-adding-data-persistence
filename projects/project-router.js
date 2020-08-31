const express = require("express")
const Projects = require("./project-model")

const router = express.Router()

// Get Projects
router.get("/projects", (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.json(projects)
        })
        .catch(error => {
            res.status(500).json({
                message: "Failed to get projects"
            })
        })
})

// Add Project
router.post("/projects", (req, res) => {
    const projectData = req.body
    Projects.addProject(projectData)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(error => {
            res.status(500).json({
                message: "Failed to add new project"
            })
        })
})

// Get Resources
router.get("/resources", (req, res) => {
    Projects.getResources()
        .then(resources => {
            res.json(resources)
        })
        .catch(error => {
            res.status(500).json({
                message: "Failed to get resources"
            })
        })
})

// Add Resource
router.post("/resources", (req, res) => {
    const resourceData = req.body
    Projects.addResource(resourceData)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(error => {
            res.status(500).json({
                message: "Failed to add new resource"
            })
        })
})

// Add Task
router.post("/tasks", (req, res) => {
    const taskData = req.body
    Projects.addTask(taskData)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(error => {
            res.status(500).json({
                message: "Failed to add new task"
            })
        })
})

module.exports = router