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

var array = [document.getElementById('item').innerHTML];
if(document.cookie){
array.push(document.cookie);
}
document.cookie = JSON.stringify(array);
   // stores item, price and amount
sessionStorage.setItem("item", JSON.stringify(item));
sessionStorage.setItem("amount", document.getElementById('amount').value);
sessionStorage.setItem("price",  document.getElementById('price').innerHTML);
document.getElementById('test').innerHTML = document.cookie;
}
function ordertable(){

var table = document.getElementById("ordertable");
var row = table.insertRow(-1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
cell1.innerHTML = JSON.parse(sessionStorage.getItem('item'));
cell2.innerHTML = sessionStorage.getItem("amount");
cell3.innerHTML = sessionStorage.getItem("price");

}
