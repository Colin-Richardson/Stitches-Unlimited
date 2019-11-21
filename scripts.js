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

 document.cookie += "<div>" + document.getElementById('item').innerHTML + "</div>" + "<div>" + document.getElementById('amount').value + "</div>" + "<div>" + document.getElementById('price').innerHTML + "</div>" + "<br>";
  document.getElementById('ordertable').innerHTML = document.cookie;
// document.getElementById('test').innerHTML += document.getElementById('item').innerHTML + document.getElementById('amount').value + document.getElementById('price').innerHTML + "<br>";
}
function ordertable(){

document.getElementById('ordertable').innerHTML = document.cookie;
}
