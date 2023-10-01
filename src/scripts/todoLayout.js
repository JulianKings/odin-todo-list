
const printToDoTable = (contentBox, type) => {
    let tableItem = document.createElement("table");
    let tableCaption = document.createElement("caption")
    tableCaption.textContent = "All"
    tableItem.appendChild(tableCaption);

    let tableHead = document.createElement("thead");
    let tableRow = document.createElement("tr");

    let tableHeader = document.createElement("th");
    tableHeader.textContent = "Name";
    tableHeader.classList.add("nameColumn");
    tableRow.appendChild(tableHeader);

    tableHeader = document.createElement("th");
    tableHeader.textContent = "Due Date";
    tableRow.appendChild(tableHeader);

    tableHeader = document.createElement("th");
    tableHeader.textContent = "Priority";
    tableRow.appendChild(tableHeader);

    tableHeader = document.createElement("th");
    tableHeader.textContent = "Options";
    tableRow.appendChild(tableHeader);

    tableHead.appendChild(tableRow);
    tableItem.appendChild(tableHead);

    let tableBody = document.createElement("tbody");
    tableItem.appendChild(tableBody);

    contentBox.appendChild(tableItem);
};

const addListeners = (clickHandler) => {
}

export { printToDoTable, addListeners }