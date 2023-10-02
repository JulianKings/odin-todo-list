import './styles/style.css';
import { printBasicLayout, appendContent } from './scripts/layoutManager'
import { appendNewProject } from './scripts/data/projectManager';
import { appendNewToDo } from './scripts/data/todoManager';

appendNewProject("First Example Project");
appendNewProject("Second Example Project");

appendNewToDo("Finish ToDo List Project 1", "Finish working on my ToDo project so i can go on with the rest of the projects in The Odin Project curriculum.", "03/10/2023", "low");
appendNewToDo("Finish ToDo List Project 2", "Finish working on my ToDo project so i can go on with the rest of the projects in The Odin Project curriculum.", "03/10/2023", "low");
appendNewToDo("Finish ToDo List Project 3", "Finish working on my ToDo project so i can go on with the rest of the projects in The Odin Project curriculum.", "03/10/2023", "low");

// Load basic layout
printBasicLayout();
appendContent("linkHome");
