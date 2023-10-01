import './styles/style.css';
import { printBasicLayout, appendContent } from './scripts/layoutManager'
import { appendNewProject } from './scripts/data/projectManager';

appendNewProject("First Example Project");
appendNewProject("Second Example Project");

// Load basic layout
printBasicLayout();
appendContent("linkHome");
