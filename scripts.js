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

  // stores item, price and amount
//sessionStorage.setItem("item", JSON.stringify(item));
//sessionStorage.setItem("amount", document.getElementById('amount').value);
//sessionStorage.setItem("price",  document.getElementById('price').innerHTML);
document.getElementById('test').innerHTML = document.cookie;
}

function ordertable(){
  var row = document.createElement("TR");
  row.setAttribute("id", "row");
  document.getElementById("ordertable").appendChild(row);
  var td = document.createElement("TD");
  var celltext = document.createTextNode("asdfsdf");
  td.appendChild(celltext);
  var td2 = document.createElement("TD");
  var celltext2 = document.createTextNode("asdfsdf");
  td.appendChild(celltext2);
  document.getElementById("row").appendChild(td);
}
