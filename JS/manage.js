
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

function saveNewItem(){
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


let addonElements = document.getElementsByClassName("addon");


for (let i = 0; i < addonElements.length; i++) {
    addonElements[i].addEventListener("click", addItem);
}
function getItemByName() {
    let itemNameS2 = document.getElementById("manage-item-name1").value;
    let itemCodeS2 = document.getElementById("manage-item-code1").value;
    let itemQtyS2 = document.getElementById("item-qty1").value;
    let itemCatS2 = document.getElementById("m-cat1").value;
    let amountS2 = document.getElementById("manage-amount1").value;
    let disS2 = document.getElementById("manage-dis1").value;
    let expS2 = document.getElementById("exp-1").value;

    if (!itemNameS2) {
        alert("Please enter an item name");
        return;
    }

    for (let i = 0; i < storeList.length; i++) {
        if (itemNameS2 === storeList[i].itemName) {
            document.getElementById("manage-item-code1").value = storeList[i].itemCode;
            document.getElementById("item-qty1").value = storeList[i].itemQty;
            document.getElementById("m-cat1").value = storeList[i].itemCat;
            document.getElementById("manage-amount1").value = storeList[i].amount;
            document.getElementById("manage-dis1").value = storeList[i].dis;
            document.getElementById("exp-1").value = storeList[i].exp;

            return;
        }
    }


    alert("Item not Exist!");
}
let btn1 = document.getElementById("m-search-btn1")
btn1.addEventListener("click", getItemByName);

function getItemByCode() {

    let itemCodeS3 = document.getElementById("manage-item-code1").value;
    let itemNameS3 = document.getElementById("manage-item-name1").value;
    let itemQtyS3 = parseFloat(document.getElementById("item-qty1").value);
    let itemCatS3 = document.getElementById("m-cat1").value;
    let amountS3 = parseFloat(document.getElementById("manage-amount1").value);
    let disS3 = parseFloat(document.getElementById("manage-dis1").value);
    let expS3 = document.getElementById("exp-1").value;


    if (!itemCodeS3) {
        alert("Please enter  item code.");
        return;
    }

    for (let i = 0; i < storeList.length; i++) {
        if (itemCodeS3 === storeList[i].itemCode) {
            document.getElementById("manage-item-name1").value = storeList[i].itemName;
            document.getElementById("item-qty1").value = storeList[i].itemQty;
            document.getElementById("m-cat1").value = storeList[i].itemCat;
            document.getElementById("manage-amount1").value = storeList[i].amount;
            document.getElementById("manage-dis1").value = storeList[i].dis;
            document.getElementById("exp-1").value = storeList[i].exp;

        }
    }
    alert("Item not Exist!");
    return;
}

let btn2 = document.getElementById("m-search-btn2");
btn2.addEventListener("click", getItemByCode);

function updateQty(code4, newQty) {

    for (let i = 0; i < storeList.length; i++) {
        if (code4 === storeList[i].itemCode) {
            storeList[i].itemQty = newQty;


            return;
        }
    }

    alert("Item Code is Invalid! Please try again.");
    code4 = "";
}

document.getElementById("change-qty").addEventListener("click", function () {
    let itemQtyS4 = parseFloat(document.getElementById("item-qty1").value);
    let code3 = document.getElementById("manage-item-code1").value;

    updateQty(code3, itemQtyS4);
});

function updateCategory(code4, newCat) {
    for (let i = 0; i < storeList.length; i++) {
        if (code4 === storeList[i].itemCode) {
            storeList[i].itemCat = newCat;


            return;
        }
    }

    alert("Item Code is Invalid! Please try again.");
    document.getElementById("manage-item-code1").value = "";
}

document.getElementById("change-cat").addEventListener("click", function () {
    let code5 = document.getElementById("manage-item-code1").value;
    let itemCatS4 = document.getElementById("m-cat1").value;
    updateCategory(code5, itemCatS4);
});

function updateAmount(code4, newAmo) {
    for (let i = 0; i < storeList.length; i++) {
        if (code4 === storeList[i].itemCode) {
            storeList[i].amount = newAmo;


            return;
        }

    }

    alert("Item Code is Invalid! Please try again.");
    code4.value = "";
}

document.getElementById("change-amount").addEventListener("click", function () {
    let code6 = document.getElementById("manage-item-code1").value;
    let amountS3 = parseFloat(document.getElementById("manage-amount1").value);
    updateAmount(code6, amountS3);
});

function updateDiscount(code4, newDis) {
    for (let i = 0; i < storeList.length; i++) {
        if (code4 === storeList[i].itemCode) {
            storeList[i].dis = newDis;


            return;
        }
    }



    alert("Item Code is Invalid! Please try again.");
    code4.value = "";
}

document.getElementById("change-dis").addEventListener("click", function () {
    let code7 = document.getElementById("manage-item-code1").value;
    let disS4 = parseFloat(document.getElementById("manage-dis1").value);
    updateDiscount(code7, disS4);
});

function updateExp(code4, newExp) {
    for (let i = 0; i < storeList.length; i++) {
        if (code4 === storeList[i].itemCode) {
            storeList[i].exp = newExp;


            return;
        }
    }

    alert("Item Code is Invalid! Please try again.");
    code4.value = "";
}

document.getElementById("change-exp").addEventListener("click", function () {
    let code7 = document.getElementById("manage-item-code1").value;
    let expS4 = document.getElementById("exp-1").value;
    updateExp(code7, expS4);
});


function deleteItemM() {
    let code8 = document.getElementById("manage-item-code1").value;
    for (let i = 0; i < storeList.length; i++) {
        if (code8 === storeList[i].itemCode) {
            storeList.splice(i, 1);
        }
    }
    document.getElementById("manage-item-code1").value = "";
    document.getElementById("manage-item-name1").value = "";
    document.getElementById("item-qty1").value = "";
    document.getElementById("m-cat1").value = "";
    document.getElementById("manage-amount1").value = "";
    document.getElementById("manage-dis1").value = "";
    document.getElementById("exp-1").value = "";


}

function clearItemM() {
    document.getElementById("manage-item-code1").value = "";
    document.getElementById("manage-item-name1").value = "";
    document.getElementById("item-qty1").value = "";
    document.getElementById("m-cat1").value = "";
    document.getElementById("manage-amount1").value = "";
    document.getElementById("manage-dis1").value = "";
    document.getElementById("exp-1").value = "";
}



document.getElementById("m-btn-delete").addEventListener("click", deleteItemM);
document.getElementById("m-btn-clear").addEventListener("click", clearItemM);




