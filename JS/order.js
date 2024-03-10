const orderList = [];
const itemList = [];
const customerList = [ {
  "customerName8" : "Dilshan",
  "customerId8" : "071xxxxxxx"
}];

function generateOrderId() {
  if (orderList.length === 0) {
      document.getElementById("txt-order-id").value = 'ODR#00001';
  } else {
      let lastOrderId = orderList[orderList.length - 1];
      console.log('Type of lastOrderId:', typeof lastOrderId);
      console.log('Value of lastOrderId:', lastOrderId);

      let orderID = lastOrderId.split('#');
      let num = parseInt(orderID[1], 10); 
      let num1 = num + 1;
      document.getElementById("txt-order-id").value = 'ODR#' + num1;
  }
}
generateOrderId();

function addItemList() {
  itemName2 = document.getElementById("item-name").value;
  itemCode2 = document.getElementById("item-code").value;
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
  for(let i=0; i<storeList.length; i++){
    if(storeList[i].itemQty<itemQty2 || storeList[i].ite ){
      alert("Not enough "+itemName2+" s.");
      return;
    }else if(itemName2 != storeList[i].itemName){
      alert("item not exist");
    }else if(itemCode2 != storeList[i].itemCode){
      alert("item Not exist")
     
    }else{
      itemList.push({
        itemName9: itemName2,
        itemCode9: itemCode2,
        itemCategory9: itemCategory2,
        itemQty9: itemQty2,
        itemAmount9: itemAmount2,
        itemDiscount9: itemDiscount2,    
      })
      console.log("item Added")
    }

  } 
}

function addOrderList() {
  customerName3 = document.getElementById("customer-name").value;
  customerId3 = document.getElementById("h-customer-contact").value;
  orderDate3 = document.getElementById("txt-date").value;
  orderTime3 = document.getElementById("txt-time").value
  orderId3 = document.getElementById("txt-order-id").value;
  orderTotalAmount3 = parseFloat(document.getElementById("cart-txt-totalamount").value);
  orderDiscount3 = parseFloat(document.getElementById("cart-txt-totaldis").value);

  if (!customerName3 || !customerId3 || !orderId3 || !orderDate3 || !orderTime3 ||
    isNaN(orderTotalAmount3) || isNaN(orderDiscount3) || orderTotalAmount3 && orderDiscount3 < 0) {
    alert("Something went wrong!");
    return;
  }
  orderList.push({
    customerName8: customerName3,
    customerId8: customerId3,
    orderDate8: orderDate3,
    orderTime8: orderTime3,
    orderId8: orderId3,
    totalAmount8: orderTotalAmount3,
    totalDisc8 : orderDiscount3
  });
  console.log("Order added");
  generateOrderId();
}

function addCustomerList() {
  customerName4 = document.getElementById("customer-name").value;
  customerId4 = document.getElementById("h-customer-contact").value;

  if (!customerName4 || !customerId4) {
    alert("Customer cannot be added!");
    return;
  }
  for(let i=0; i<customerList.length; i++){
    if(customerName4 === customerList[i].customerName8){
      console.log("Customer Exists")
    return;

    }else{
      customerList.push({
        customerName9: customerName4,
        customerId9: customerId4
      });   
      console.log("Customer added");   
    }
  }
}

function visibleInCart() {
  let totalO = 0, totaldisO = 0;
  let cartContainer = document.getElementById("cart-container1");
  cartContainer.innerHTML = "";

  itemList.forEach(function (item) {
    let cartItemDiv = document.createElement('div');
    cartItemDiv.classList.add("row");

    let itemNameO = item.itemName9;
    let itemCodeO = item.itemCode9;
    let itemAmountO = item.itemAmount9;
    let itemDisO = item.itemDiscount9;
    let itemQtyO = item.itemQty9;

    cartItemDiv.innerHTML = `
      <div class="col-lg-7 col-sm-6">
        <input class="form-control cart-txt-namefield" type="text" value="${itemNameO}" readonly>
      </div>
      <div class="col-lg-5 col-sm-6">
        <input class="form-control cart-txtamount" type="text" value="${itemQtyO *(  itemAmountO - itemDisO / 100)}" readonly>
      </div>
      <div class="col-lg-7 col-sm-6 cart-container-padding">
        <input class="form-control cart-txt-namefield" type="text" value="${itemCodeO + "*" + itemQtyO}" readonly>
      </div>
      <div class="col-lg-5 col-sm-6 mb-1">
        <input class="form-control cart-txtamount cart-container-padding" type="text" value="${itemAmountO * itemDisO/100 }" readonly>
      </div>
    `;
    totalO += itemAmountO;
    totaldisO += itemDisO;
    cartContainer.appendChild(cartItemDiv);
  });
  

  document.getElementById("cart-txt-totalamount").value = totalO;
  document.getElementById("cart-txt-totaldis").value = totaldisO;
}

function buttonClickHandler1() { 
  addItemList();
  addCustomerList();
  console.log(itemList);
  console.log(customerList);
  visibleInCart();
}

function buttonClickHandler2() {
    addOrderList(); 
    console.log(orderList);
  let cartContainer = document.getElementById("cart-container1");
  cartContainer.innerHTML = "";
}

function reFresh1() {
  let cartContainer = document.getElementById("cart-container1");
  cartContainer.innerHTML = "";
}

const addButton = document.getElementById("cart-add-btn");
addButton.addEventListener("click", buttonClickHandler1);

const placeButton = document.getElementById("place-btn");
placeButton.addEventListener("click", buttonClickHandler2);

document.getElementById("clear-customer-btn").addEventListener("click", clearCustomer);
document.getElementById("clear-item-btn").addEventListener("click", clearItem);
document.getElementById("clear-order-btn").addEventListener("click", clearOrder);
document.getElementById("exit-btn").addEventListener("click", exitPos);
document.getElementById("clear-btn").addEventListener("click", clearCart);

function clearCustomer() {
  document.getElementById("customer-name").value = "";
  document.getElementById("h-customer-contact").value = "";
}

function clearOrder() {
  document.getElementById("customer-name").value = "";
  document.getElementById("h-customer-contact").value = "";
  document.getElementById("Item Name").value = "";
  document.getElementById("item-code").value = "";
  document.getElementById("item-cat").value = "";
  document.getElementById("item-qty").value = "";
  document.getElementById("txt-amount").value = "";
  document.getElementById("txt-dis").value = "";
}

function clearItem() {
  document.getElementById("Item-Name").value = "";
  document.getElementById("item-code").value = "";
  document.getElementById("item-cat").value = "";
  document.getElementById("item-qty").value = "";
  document.getElementById("txt-amount").value = "";
  document.getElementById("txt-dis").value = "";
}

function clearCart() {
  customerList.pop();
  itemList.pop();
  let cartContainer = document.getElementById("cart-container1");
  cartContainer.innerHTML = "";
}

function exitPos() {
  return;
};
