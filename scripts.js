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

//  var table = document.getElementById("ordercart");
//  var cell1 = row.insertCell(0);
//  var cell2 = row.insertCell(1);
//  var cell3 = row.insertCell(2);
//  cell2.innerHTML = document.getElementById('amount').value;
document.cookie += document.createElement("tr") + document.createElement("td") + document.getElementById('item').innerHTML + document.body.appendChild(document.createElement("td")) + document.createElement("td") + document.getElementById('amount').value + document.body.appendChild(document.createElement("td"))  + document.createElement("td") + document.getElementById('price').innerHTML +document.body.appendChild(document.createElement("td"))  + document.body.appendChild(document.createElement("tr"));
//  document.cookie += "<tr> <td>" + document.getElementById('item').innerHTML + "</td> <td>" + document.getElementById('amount').value + "</td> <td>" + document.getElementById('price').innerHTML + "</td> </tr>";

  document.getElementById('ordertable').innerHTML = document.cookie;
  document.getElementById('test').innerHTML = document.cookie;
}
function ordertable(){
  //  document.getElementById('ordertable').innerHTML = document.cookie;

}
