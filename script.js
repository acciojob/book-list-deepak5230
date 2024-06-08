
        document.getElementById('submit').addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get input values
            const title = document.getElementById('title').value;
            const author = document.getElementById('author').value;
            const isbn = document.getElementById('isbn').value;
            
            // Validate input
            if(title === '' || author === '' || isbn === '') {
                alert('Please fill in all fields');
                return;
            }
            
            // Create new table row
            const table = document.getElementById('book-list');
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${title}</td>
                <td>${author}</td>
                <td>${isbn}</td>
                <td><button class="delete">Clear</button></td>
            `;
            
            table.appendChild(row);
            
            // Clear input fields
            document.getElementById('title').value = '';
            document.getElementById('author').value = '';
            document.getElementById('isbn').value = '';
        });
        
        document.getElementById('book-list').addEventListener('click', function(e) {
            if(e.target.classList.contains('delete')) {
                e.target.parentElement.parentElement.remove();
            }
        });
    
