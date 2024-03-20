

const orderList = [];
const itemList = [];

function generateOrderId() {
  if (orderList.length === 0) {
    document.getElementById("txt-order-id").value = 'ODR#00001';
  } else {
    let lastOrderId = orderList[orderList.length - 1].orderId8;
    console.log('Type of lastOrderId:', typeof lastOrderId);
    console.log('Value of lastOrderId:', lastOrderId);

    let orderID = lastOrderId.split('#');
    let num = parseInt(orderID[1]);
    num++;
    num = num.toString().padStart(5, '0')
    document.getElementById("txt-order-id").value = 'ODR#' + num;
  }
}
generateOrderId();
setDateTime();
function setDateTime(){
  let today = new Date();

  let date = today.getDate();
  let month = today.getMonth()+1;
  let year = today.getFullYear();

  let currentDate = `${date}/${month}/${year}`;

  let hours = today.getHours();
  let minutes = today.getMinutes();

  let zeroTime = minutes < 10 ? '0' + minutes : minutes;

  let currentTime = `${hours}:${zeroTime}`

  document.getElementById("txt-time").value = currentTime;

  document.getElementById("txt-date").value = currentDate;
}


function searchByName(){
  let iName = document.getElementById("item--name").value; 
  let iCodes = document.getElementById("item--code");
  iCat = document.getElementById("item-cat");
  let amount = document.getElementById("txt-amount");
  let disco = document.getElementById("txt-dis");
  console.log(iName);
  
  if(iName !==null && iName !==""){
    console.log("working")
    for(i=0; i<storeList.length; i++){
      if(iName === storeList[i].itemName){
        
        console.log(storeList[i].itemCode)
        iCodes.value = storeList[i].itemCode;
        iCat.value = storeList[i].itemCat;
        amount.value = storeList[i].amount;
        disco.value = storeList[i].dis;
      
        return;
      }
    }
  }
  alert("item is invalid");
  return; 
}

function searchByCode(){
  let iCodes = document.getElementById("item--code").value; 
  let iCat = document.getElementById("item-cat");
  let amount = document.getElementById("txt-amount");
  let disco = document.getElementById("txt-dis");
  
  
  if(iCodes !==null && iCodes !==""){
    console.log("working")
    for(i=0; i<storeList.length; i++){
      if(iCodes === storeList[i].itemCode){
        console.log(storeList[i].itemName)
        
        console.log(storeList[i].itemName)
        document.getElementById("item--name").value = storeList[i].itemName;
        iCat.value = storeList[i].itemCat;
        amount.value = storeList[i].amount;
        disco.value = storeList[i].dis;
        return;
      }
    }
  }
  alert("Item is invalid");
  return; 
}

function addItemList() {
  itemName2 = document.getElementById("item--name").value;
  itemCode2 = document.getElementById("item--code").value;
  itemQty2 = parseFloat(document.getElementById("item-qty").value);
  itemAmount2 = parseFloat(document.getElementById("txt-amount").value);
  itemDiscount2 = parseFloat(document.getElementById("txt-dis").value);
  itemCategory2 = document.getElementById("item-cat").value;
  orderId2 = document.getElementById("txt-order-id").value;

  if (!itemName2 || !itemCode2 || isNaN(itemQty2) || isNaN(itemAmount2) ||
    isNaN(itemDiscount2) || !orderId2 || !itemCategory2) {
    alert("Something went wrong!");
    return;
  }
  for (let i = 0; i < storeList.length; i++) {
    if (storeList[i].itemQty < itemQty2) {
      alert("Not enough " + itemName2 + " s.");
      return;
    } 
     
      console.log("item Added")
    }
    itemList.push({
      itemName9: itemName2,
      itemCode9: itemCode2,
      itemCategory9: itemCategory2,
      itemQty9: itemQty2,
      itemAmount9: itemAmount2,
      itemDiscount9: itemDiscount2,
    })

  
}

function addOrderList() {
  
  orderDate3 = document.getElementById("txt-date").value;
  orderTime3 = document.getElementById("txt-time").value
  orderId3 = document.getElementById("txt-order-id").value;
  orderTotalAmount3 = parseFloat(document.getElementById("cart-txt-totalamount").value);
  orderDiscount3 = parseFloat(document.getElementById("cart-txt-totaldis").value);

  if (!orderId3 || !orderDate3 || !orderTime3 ||
    isNaN(orderTotalAmount3) || isNaN(orderDiscount3) || orderTotalAmount3 && orderDiscount3 < 0) {
    alert("Something went wrong!");
    return;
  }
  orderList.push({
    orderDate8: orderDate3,
    orderTime8: orderTime3,
    orderId8: orderId3,
    totalAmount8: orderTotalAmount3,
    totalDisc8: orderDiscount3,
    list : itemList 
  });
  console.log("Order added");
 
  generateOrderId();
}



function visibleInCart() {
  let totalO = 0, totaldisO = 0;
  let discount = 0;
  let cartContainer = document.getElementById("cart-container1");
  

  itemList.forEach(function (item) {
    let cartItemDiv = document.createElement('div');
    cartItemDiv.classList.add("row");

    let itemNameO = item.itemName9;
    let itemCodeO = item.itemCode9;
    let itemAmountO = item.itemAmount9;
    let itemDisO = item.itemDiscount9;
    let itemQtyO = item.itemQty9;
    

    cartItemDiv.innerHTML += `
      <div class="col-lg-7 col-sm-6">
        <input readonly class="form-control-plaintext cart-txt-namefield" type="text" value="${itemNameO}" ><br>
      </div>
      <div class="col-lg-5 col-sm-6">
        <input readonly class="form-control-plaintext cart-txtamount" type="text" value="${itemQtyO * (itemAmountO - itemDisO / 100)}" ><br>
      </div>
      <div class="col-lg-7 col-sm-6 cart-container-padding">
        <input readonly class="form-control-plaintext cart-txt-namefield" type="text" value="${itemCodeO + " * " + itemQtyO}">
      </div>
      <div class="col-lg-5 col-sm-6 mb-1">
        <input readonly class="form-control-plaintext cart-txtamount cart-container-padding" type="text" value="${itemAmountO * itemDisO / 100}" >
      </div>
    `;
    totalO += itemAmountO * itemQtyO;
    totaldisO += itemAmountO *itemQtyO * itemDisO/100;
    cartContainer.appendChild(cartItemDiv);
  });

  
  document.getElementById("cart-txt-totalamount").value = totalO-totaldisO;
  document.getElementById("cart-txt-totaldis").value = totaldisO;
}

function placeOrder(){
  addOrderList();
  console.log(orderList);
  let cartContainer = document.getElementById("cart-container1");
  cartContainer.innerHTML = "";
  clearItem();

}

function buttonClickHandler1() {
  addItemList();
  //addCustomerList();
  console.log(itemList);
  
  visibleInCart();
}

function buttonClickHandler2() {
 
  console.log(orderList);
 
}



const addButton = document.getElementById("cart-add-btn");
addButton.addEventListener("click", buttonClickHandler1);




document.getElementById("clear-item-btn").addEventListener("click", clearItem);

function exitPos(){
  const mymodal4 = new bootstrap.Modal(document.getElementById("exampleModal")) 
  mymodal4.show();
}

function exitConfirm(){
  window.location.href = "login.html"
}

function clearOrder() {
  document.getElementById("Item Name").value = "";
  document.getElementById("item-code").value = "";
  document.getElementById("item-cat").value = "";
  document.getElementById("item-qty").value = "";
  document.getElementById("txt-amount").value = "";
  document.getElementById("txt-dis").value = "";
}

function clearItem() {
   
  let code = document.getElementById("item--code");
  let cat = document.getElementById("item-cat");
  let aty = document.getElementById("item-qty");
  let amount = document.getElementById("txt-amount");
  let discount = document.getElementById("txt-dis");

  
  code.value = "";
  cat.value = "";
  aty.value = "";
  amount.value = "";
  discount.value = "";
  document.getElementById("item--name").value = "";
}


