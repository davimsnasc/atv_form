
        document.getElementById("checkInForm").addEventListener("submit", function(event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const date = new Date().toLocaleString();
            
            const table = document.getElementById("participantsTable").getElementsByTagName('tbody')[0];
            const newRow = table.insertRow(table.rows.length);
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);
            
            cell1.innerHTML = `${name} (${email})`;
            cell2.innerHTML = date;
            cell3.innerHTML = '<button onclick="checkIn(this)"> Confirmar Check-in</button>';
        });
        
        function checkIn(button) {
            const row = button.parentNode.parentNode;
            const cells = row.getElementsByTagName('td');
            const checkInDate = new Date().toLocaleString();
            cells[2].innerHTML = checkInDate;
            button.disabled = true;
        }
