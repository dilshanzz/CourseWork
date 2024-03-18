

function drawTable(customerList) {
    const tableBody = document.getElementById("customer-table-body");
    
    
    for (let j = 0; j < customerList.length; j++) {
        const row = tableBody.insertRow(j);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
       
       
        cell1.innerHTML = customerList[j].customerId9;
        cell2.innerHTML = customerList[j].customerName9;
       
    }
}

document.addEventListener('DOMContentLoaded', function() {
   
    drawTable(customerList);

   
});