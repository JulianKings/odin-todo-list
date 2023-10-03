import './styles/style.css';
import { printBasicLayout, appendContent } from './scripts/layoutManager'
import { populateData } from './scripts/data/dataManager';
import './scripts/dateHelper';

// Load data
populateData();

// Load basic layout
printBasicLayout();
appendContent("linkHome");
