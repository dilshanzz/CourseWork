

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
                <td><button class = "btn btn-success " onclick="updateItems(${i})">Update</button></td>
                <td><button class = "btn btn-danger" onclick="deleteItems(${i})">Delete</button></td>

            </tr>
        `;
    }
}

drawTable(storeList);
let index1 = 0;
console.log(index1);

function deleteItems(index) {

    index1 = index;
    console.log(index1);

    const myModal = new bootstrap.Modal(document.getElementById('myModal'));

    myModal.show();
}

function proceed() {
    storeList.splice(index1, 1);
    drawTable(storeList)
}

function updateItems() {

    const mymodal1 = new bootstrap.Modal(document.getElementById('myModal1'));
    mymodal1.show();
    document.getElementById("itm-code").value = storeList[index1].itemCode;
    document.getElementById("itm-name").value = storeList[index1].itemName;
    document.getElementById("itm-qty").value = storeList[index1].itemQty;
    document.getElementById("itm-catgry").value = storeList[index1].itemCat;
    document.getElementById("itm-amount").value = storeList[index1].amount;
    document.getElementById("itm-disc").value = storeList[index1].dis;
    document.getElementById("itm-exp").value = storeList[index1].exp;

}

function saveChanges() {
    let code = document.getElementById("itm-code").value;
    let itemNameM = document.getElementById("itm-name").value;
    let itemQtyM = document.getElementById("itm-qty").value;
    let itemCatM = document.getElementById("itm-catgry").value;
    let itemAmountM = document.getElementById("itm-amount").value;
    let itemDiscM = document.getElementById("itm-disc").value;
    let itemExpM = document.getElementById("itm-exp").value;
    if (itemNameM === null || itemNameM === "" || isNaN(itemQtyM) ||
        itemCatM === null || itemCatM === "" || isNaN(itemAmountM) ||
        itemExpM === null || itemExpM === "" || isNaN(itemDiscM)) {
        alert("Fields Cannot be empty");
        return;
    }
    for (i = 0; i < storeList.length; i++) {
        if (code === storeList[i].itemCode) {
            storeList[i].itemName = itemNameM;
            storeList[i].itemQty = itemQtyM;
            storeList[i].itemCat = itemCatM;
            storeList[i].amount = itemAmountM;
            storeList[i].dis = itemDiscM;
            storeList[i].exp = itemExpM;
        }
    }


    drawTable(storeList);
}

function addItem() {

    const myModal2 = new bootstrap.Modal(document.getElementById("myModal2"));
    myModal2.show();

}

function saveNewItem() {
    let code = document.getElementById("itm-code1").value;
    let itemNameM = document.getElementById("itm-name1").value;
    let itemQtyM = document.getElementById("itm-qty1").value;
    let itemCatM = document.getElementById("itm-catgry1").value;
    let itemAmountM = document.getElementById("itm-amount1").value;
    let itemDiscM = document.getElementById("itm-disc1").value;
    let itemExpM = document.getElementById("itm-exp1").value;

    if (itemNameM === null || itemNameM === "" || isNaN(itemQtyM) ||
        itemCatM === null || itemCatM === "" || isNaN(itemAmountM) ||
        itemExpM === null || itemExpM === "" || isNaN(itemDiscM)) {
        alert("Fields Cannot be empty");
        return;
    }

    storeList.push({
        itemCode: code,
        itemName: itemNameM,
        amount: itemAmountM,
        dis: itemDiscM,
        itemCat: itemCatM,
        itemQty: itemQtyM,
        exp: itemExpM
    });
    drawTable(storeList);

}

sessionStorage.setItem('theArray', JSON.stringify(storeList));



