
function drawTable(storeList) {
    const tableBody = document.getElementById("item-table-body");

    tableBody.innerHTML = "";
    for (let i = 0; i < storeList.length; i++) {
        tableBody.innerHTML += `
            <tr>
                <td>${storeList[i].itemCode}</td>
                <td>${storeList[i].itemName}</td>
                <td>${storeList[i].itemQty}</td>
                <td>${storeList[i].itemCat}</td>
                <td>${storeList[i].amount}</td>
                <td>${storeList[i].dis}</td>
                <td>${storeList[i].exp}</td>
            </tr>
        `;
    }
}

drawTable(storeList);