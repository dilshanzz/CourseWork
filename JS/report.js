const totalAmountPerCustomer = {};
const totalQtyBsi = {};

function totalAmountofordersPerCustomer(){
    for(let i=0; i<customerList.length; i++){
        for(let j=0; j<orderList.length; j++){

            if(customerList[i].customerId9 === orderList[j].customerId8){
                totalAmountPerCustomer[customerList[i].customerId9] += 
                    orderList[j].totalAmount8 ;             
            }
        }
    }
    return totalAmountPerCustomer ;
}

function bestSellingItem(){
   let totalQtyBsi = 0;
   for(let i=0; i<itemList.length; i++){
    for( let j=0; j<storeList.length; j++){
        if(itemList[i].itemCode9 === storeList[j].itemCode){

            totalQtyBsi[storeList[i].itemCode] += itemList[i].itemQty9;
        }
    }
   }
   return totalQtyBsi;
}
function displayItemTable() {
    const qtySoldData = qtySoldPerItem();
    const tableBody = document.getElementById("itemTableBody");

    for (const itemCode in qtySoldData) {
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        cell1.textContent = itemCode;
        cell2.textContent = qtySoldData[itemCode];
    }
}


displayItemTable();