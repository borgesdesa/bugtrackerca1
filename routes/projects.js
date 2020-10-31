const express = require('express');
const router = express.Router();
const Projects = require('../models/Projects');

//Get all projects
router.get('/', async (req, res) => {
    try{
        const projects = await Projects.find();
        res.json(projects);
    }catch(err){
        res.json({message: err});
    }
});

//Submit a project
router.post('/', async (req, res) => {
    const projects = new Projects({
        slug: req.body.slug.toUpperCase(),
        name: req.body.name,
        description: req.body.description,
    });
    try{
        const savedProjects = await projects.save()
        res.json(savedProjects);
    } catch(err) {
        res.json({message: err});
    }
});

//Get one project
router.get('/:slug', async (req, res) => {
    try{
        const projects = await Projects.findOne({ slug: req.params.slug });
        res.json(projects);
    } catch (err) {
        res.json({message: err});
    }
});

module.exports = router;