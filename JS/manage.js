
function drawTable(storeList) {
    const tableBody = document.getElementById("item-table-body");
    
    
    for (let i = 0; i < storeList.length; i++) {
        const row = tableBody.insertRow(i);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        const cell6 = row.insertCell(5);
        const cell7 = row.insertCell(6);

       
        cell1.innerHTML = storeList[i].itemCode;
        cell2.innerHTML = storeList[i].itemName;
        cell3.innerHTML = storeList[i].itemQty;
        cell4.innerHTML = storeList[i].itemCat;
        cell5.innerHTML = storeList[i].amount;
        cell6.innerHTML = storeList[i].dis;
        cell7.innerHTML = storeList[i].exp;
    }
}



function addItem() {

    let itemNameS1 = document.getElementById("manage-item-name1").value;
    let itemCodeS1 = document.getElementById("manage-item-code1").value;
    let itemQtyS1 = parseFloat(document.getElementById("item-qty1").value);
    let itemCatS1 = document.getElementById("m-cat1").value;
    let amountS1 = parseFloat(document.getElementById("manage-amount1").value);
    let disS1 = parseFloat(document.getElementById("manage-dis1").value);
    let expS1 = document.getElementById("exp-1").value;


   

    if (
        itemNameS1 === "" || itemCodeS1 === "" || itemNameS1 === null || itemCodeS1 === null 
        || isNaN(itemQtyS1) || itemQtyS1 < 0 ||
            itemCatS1 === "" || isNaN(amountS1) || amountS1 < 0 ||
                    isNaN(disS1) || disS1 < 0 || expS1 === null || expS1 ===""
    ) {
        alert("Fields cannot be empty or contain invalid values");
        clearItemM();
        
    }

    storeList.push({
        itemCode: itemCodeS1,
        itemName: itemNameS1,
        amount: amountS1,
        dis: disS1,
        itemCat: itemCatS1,
        itemQty: itemQtyS1,
        exp: expS1      
    });
    
    document.getElementById("manage-item-code1").value = "";
    document.getElementById("manage-item-name1").value = "";
    document.getElementById("item-qty1").value = "";
    document.getElementById("m-cat1").value = "";
    document.getElementById("manage-amount1").value = "";
    document.getElementById("manage-dis1").value = "";
    document.getElementById("exp-1").value = "";

    
    drawTable(storeList);
    
} 



let addonElements = document.getElementsByClassName("addon");


for (let i = 0; i < addonElements.length; i++) {
    addonElements[i].addEventListener("click", addItem);
}
    function getItemByName() {
        let itemNameS2 = document.getElementById("manage-item-name1").value;
        let itemCodeS2 = document.getElementById("manage-item-code1").value;
        let itemQtyS2 =  document.getElementById("item-qty1").value;
        let itemCatS2 = document.getElementById("m-cat1").value;
        let amountS2 = document.getElementById("manage-amount1").value;
        let disS2 = document.getElementById("manage-dis1").value;
        let expS2 = document.getElementById("exp-1").value;
    
        if (!itemNameS2) {
            alert("Please enter an item name");             
            return;
        }
    
        for (let i = 0; i < storeList.length; i++) {
            if ( itemNameS2 === storeList[i].itemName) {
                document.getElementById("manage-item-code1").value = storeList[i].itemCode;
                document.getElementById("item-qty1").value =storeList[i].itemQty;
                document.getElementById("m-cat1").value = storeList[i].itemCat;
                document.getElementById("manage-amount1").value = storeList[i].amount;
                document.getElementById("manage-dis1").value = storeList[i].dis;
                document.getElementById("exp-1").value = storeList[i].exp;
    
                return;
            }
        }
    
        
        alert("Item not Exist!");
    }
let btn1 =document.getElementById("m-search-btn1")
btn1.addEventListener("click",getItemByName);

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
    if ( itemCodeS3 === storeList[i].itemCode) {
        document.getElementById("manage-item-name1").value = storeList[i].itemName;
        document.getElementById("item-qty1").value =storeList[i].itemQty;
        document.getElementById("m-cat1").value = storeList[i].itemCat;
        document.getElementById("manage-amount1").value = storeList[i].amount;
        document.getElementById("manage-dis1").value = storeList[i].dis;
        document.getElementById("exp-1").value = storeList[i].exp;

        return;
    }
}
alert("Item not Exist!");
}

let btn2 =document.getElementById("m-search-btn2");
btn2.addEventListener("click", getItemByCode);

function updateQty(code4, newQty) {

for (let i = 0; i < storeList.length; i++) {
    if ( code4 === storeList[i].itemCode ) {
        storeList[i].itemQty = newQty;
    
        
        return;
    }
}

alert("Item Code is Invalid! Please try again.");
code4 = "";
}

document.getElementById("change-qty").addEventListener("click", function() {
let itemQtyS4 = parseFloat(document.getElementById("item-qty1").value);
let code3 = document.getElementById("manage-item-code1").value;

updateQty(code3, itemQtyS4);
});

function updateCategory(code4, newCat) {
for (let i = 0; i < storeList.length; i++) {
    if ( code4 === storeList[i].itemCode ) {
        storeList[i].itemCat = newCat;
    
        
        return;
    }
}

alert("Item Code is Invalid! Please try again.");
document.getElementById("manage-item-code1").value = "";
}

document.getElementById("change-cat").addEventListener("click", function() {
let  code5 = document.getElementById("manage-item-code1").value;
let itemCatS4 = document.getElementById("m-cat1").value;
updateCategory(code5, itemCatS4);
});

function updateAmount(code4, newAmo) {
for (let i = 0; i < storeList.length; i++) {
    if ( code4 === storeList[i].itemCode ) {
        storeList[i].amount = newAmo;
    
        
        return;
    }
    
}

alert("Item Code is Invalid! Please try again.");
code4.value = "";
}

document.getElementById("change-amount").addEventListener("click", function() {
let  code6 = document.getElementById("manage-item-code1").value;
let amountS3 = parseFloat(document.getElementById("manage-amount1").value);
updateAmount(code6, amountS3);
});

function updateDiscount(code4, newDis) {
for (let i = 0; i < storeList.length; i++) {
    if ( code4 === storeList[i].itemCode ) {
        storeList[i].dis = newDis;
    
        
        return;
    }
}



alert("Item Code is Invalid! Please try again.");
code4.value = "";
}

document.getElementById("change-dis").addEventListener("click", function() {
let code7 = document.getElementById("manage-item-code1").value;
let disS4 = parseFloat(document.getElementById("manage-dis1").value);
updateDiscount(code7, disS4);
});

function updateExp(code4, newExp) {
for (let i = 0; i < storeList.length; i++) {
    if ( code4 === storeList[i].itemCode ) {
        storeList[i].exp = newExp;
    
        
        return;
    }
}

alert("Item Code is Invalid! Please try again.");
code4.value = "";
}

document.getElementById("change-exp").addEventListener("click", function() {
let  code7 = document.getElementById("manage-item-code1").value;
let expS4 = document.getElementById("exp-1").value;
updateExp(code7, expS4);
});


function deleteItemM(){
let  code8=document.getElementById("manage-item-code1").value;
for(let i=0; i<storeList.length; i++){
    if(code8===storeList[i].itemCode){
        storeList.splice(i,1);
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

function clearItemM(){
document.getElementById("manage-item-code1").value = "";
document.getElementById("manage-item-name1").value = "";
document.getElementById("item-qty1").value = "";
document.getElementById("m-cat1").value = "";
document.getElementById("manage-amount1").value = "";
document.getElementById("manage-dis1").value = "";
document.getElementById("exp-1").value = "";
}



document.getElementById("m-btn-delete").addEventListener( "click",deleteItemM);
document.getElementById("m-btn-clear").addEventListener( "click",clearItemM);




