
// Function to populate the table with data
function getTools() {
    const url = "data/inventory.json";
    $.ajax(url).then((data) => {
        renderTools(data);
    });
}
function renderTools(data) {
    const tableData = document.getElementById("insertProducts");
    tableData.innerHTML = "";
    data.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.title}</td>
            <td>${item.quantity}</td>
            <td>${item.price}</td>
            <td>${item.categories.join(", ")}</td>
            <td><button>delete</button></td>
        `;
        let button = row.querySelector('button');
        button.addEventListener('click', () => {
            row.remove();
        });
        tableData.appendChild(row);
    });
}

// Call the function to populate the table with data
getTools();