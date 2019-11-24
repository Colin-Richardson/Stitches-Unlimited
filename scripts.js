function carthover(element) {
  element.setAttribute('src', 'img/cart2.png');
}

function cartunhover(element) {
  element.setAttribute('src', 'img/cart1.png');
}
function price(){
   let quantity = document.getElementById('amount').value;
   if(quantity === "1"){
     document.getElementById('price').innerHTML = document.getElementById('price1').innerHTML;
   }
   if(quantity === "10"){
     document.getElementById('price').innerHTML = document.getElementById('price2').innerHTML;
   }
   if(quantity === "25"){
     document.getElementById('price').innerHTML = document.getElementById('price3').innerHTML;
   }
   if(quantity === "50"){
     document.getElementById('price').innerHTML = document.getElementById('price4').innerHTML;
   }
   if(quantity === "100"){
     document.getElementById('price').innerHTML = document.getElementById('price5').innerHTML;
   }
   if(quantity === "200"){
     document.getElementById('price').innerHTML = document.getElementById('price6').innerHTML;
   }
 }

function addtocart(){
  //counts number of clicks
  if(typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
  }
  var itemString = "item";
  var amountString = "amount";
  var priceString = "price";
  var itemKey = localStorage.getItem('clickcount')
localStorage[itemString + itemKey] =  document.getElementById('item').innerHTML;
localStorage[amountString + itemKey] =  document.getElementById('amount').value;
localStorage[priceString + itemKey] =  document.getElementById('price').innerHTML;
  // stores item, price and amount
//localStorage.setItem("item", JSON.stringify(item));
//localStorage.setItem("amount", document.getElementById('amount').value);
//localStorage.setItem("price",  document.getElementById('price').innerHTML);

document.getElementById('test').innerHTML = localStorage.getItem('item70');
}

function ordertable(){
  var itemString = "item";
  var amountString = "amount";
  var priceString = "price";
  var itemKey = localStorage.getItem('clickcount');

for(i = 1; i < itemKey; i++){
  var varselector = i;
  // Find a <table> element with id="myTable":
  var table = document.getElementById("ordertable");

  // Create an empty <tr> element and add it to the 1st position of the table:
  var row = table.insertRow(i);

  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
cell1.setAttribute("class", "cell1");
cell2.setAttribute("class", "cell2");
cell3.setAttribute("class", "cell3");

  // Add some text to the new cells:
  cell1.innerHTML = localStorage.getItem(itemString + i);
  cell2.innerHTML = localStorage.getItem(amountString + i);
  cell3.innerHTML = localStorage.getItem(priceString + i);
}
}
