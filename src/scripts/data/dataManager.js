let uniqueToDoID = 0;
let uniqueProjectId = 0;

const getNextTodoID = () => ++uniqueToDoID;

const getNextProjectId = () => ++uniqueProjectId;


export { getNextProjectId, getNextTodoID }