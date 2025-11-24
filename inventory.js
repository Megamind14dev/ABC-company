

// This waits until the entire page is ready
document.addEventListener("DOMContentLoaded", function () {
    
    // Get the form and table body
    const form = document.getElementById("add-item-form");
    const tableBody = document
        .getElementById("inventory-table")
        .getElementsByTagName("tbody")[0];

    // When the user clicks "Add Item"
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent auto page refresh

        // Get values the user typed
        const itemName = document.getElementById("item-name").value;
        const quantity = document.getElementById("quantity").value;
        const category = document.getElementById("category").value;

        // Create new row for the table
        const newRow = tableBody.insertRow();

        // Fill the row cells
        const nameCell = newRow.insertCell(0);
        const qtyCell = newRow.insertCell(1);
        const catCell = newRow.insertCell(2);

        nameCell.textContent = itemName;
        qtyCell.textContent = quantity;
        catCell.textContent = category;

        // Clear the form after adding the item
        form.reset();
    });
});


