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


//creates a row
  var row = document.createElement("TR");
  row.setAttribute("id", "row");
  document.getElementById("ordertable").appendChild(row);
//creates first td and content
  var td = document.createElement("TD");
  var celltext = document.createTextNode(localStorage.getItem(itemString + itemKey));
  td.appendChild(celltext);
  document.getElementById("row").appendChild(td);
//creates second td and content
  var td2 = document.createElement("TD");
  var celltext2 = document.createTextNode(localStorage.getItem(amountString + itemKey));
  td2.appendChild(celltext2);
  document.getElementById("row").appendChild(td2);
//creates third td and content
  var td3 = document.createElement("TD");
  var celltext3 = document.createTextNode(localStorage.getItem(priceString + itemKey));
  td3.appendChild(celltext3);
  document.getElementById("row").appendChild(td3);
}
