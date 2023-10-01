import { getNextProjectId } from './dataManager';
import { Project } from './project';

const _projects = [];

const getProjects = () => _projects;

const appendNewProject = (name) => {
    let proj = new Project(getNextProjectId(), name);
    _projects.push(proj);
}

const getProject = (id) => {
    let projIndex = _projects.findIndex((project) => {
        return (project.id === id);
    });

    if(projIndex > -1)
    {
        return _projects[projIndex];
    } else {
        return null; // none found
    }

}

export { getProjects, appendNewProject, getProject }