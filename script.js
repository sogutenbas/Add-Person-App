document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('item-form');
    const tableBody = document.getElementById('cart-table').querySelector('tbody');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Getting form data
        const firstName = document.getElementById('first-name').value.trim();
        const lastName = document.getElementById('last-name').value.trim();
        const email = document.getElementById('e-mail').value.trim();
        const password = document.getElementById('password').value.trim();
        const about = document.getElementById('about').value.trim();

        // Validation
        if (!firstName || !lastName || !email || !password || !about) {
            alert('Please fill in all fields.');
            return;
        }

        // Adding row to the table
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${email}</td>
            <td>${password}</td>
            <td>${about}</td>
        `;

        // Adding delete button to the row
        const deleteCell = document.createElement('td');
        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa fa-trash';
        deleteIcon.style.color = 'red';
        deleteIcon.style.cursor = 'pointer';
        deleteCell.appendChild(deleteIcon);
        row.appendChild(deleteCell);

        // Append the row to the table body
        tableBody.appendChild(row);

        // Clear form fields
        form.reset();
    });

    // Delete functionality
    tableBody.addEventListener('click', function (e) {
        if (e.target.classList.contains('fa-trash')) {
            if (confirm('Are you sure you want to delete this entry?')) {
                e.target.closest('tr').remove();
            }
        }
    });
});