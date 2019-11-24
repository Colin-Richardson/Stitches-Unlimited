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
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
    } else {
      sessionStorage.clickcount = 1;
    }
  }
  var itemString = "item";
  var amountString = "amount";
  var priceString = "price";
  var itemKey = sessionStorage.getItem('clickcount')
sessionStorage[itemString + itemKey] =  document.getElementById('item').innerHTML;
sessionStorage[amountString + itemKey] =  document.getElementById('amount').value;
sessionStorage[priceString + itemKey] =  document.getElementById('price').innerHTML;
  // stores item, price and amount
//sessionStorage.setItem("item", JSON.stringify(item));
//sessionStorage.setItem("amount", document.getElementById('amount').value);
//sessionStorage.setItem("price",  document.getElementById('price').innerHTML);

document.getElementById('test').innerHTML = sessionStorage.getItem('item70');
}

function ordertable(){
  var itemString = "item";
  var amountString = "amount";
  var priceString = "price";
  var itemKey = sessionStorage.getItem('clickcount');

for(i = 0; i < itemKey; i++){
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
  cell1.innerHTML = sessionStorage.getItem(itemString + i);
  cell2.innerHTML = sessionStorage.getItem(amountString + i);
  cell3.innerHTML = sessionStorage.getItem(priceString + i);
}
}
