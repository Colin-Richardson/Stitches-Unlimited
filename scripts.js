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

   // stores item, price and amount
localStorage.setItem("item",  document.getElementById('item').innerHTML);
localStorage.setItem("amount", document.getElementById('amount').value);
localStorage.setItem("price",  document.getElementById('price').innerHTML);

}
function ordertable(){

var table = document.getElementById("ordertable");
var row = table.insertRow(-1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
cell1.innerHTML = localStorage.getItem("item");
cell2.innerHTML = localStorage.getItem("amount");
cell3.innerHTML = localStorage.getItem("price");

}
