//changes cart image when hovering
function carthover(element) {
  element.setAttribute('src', 'img/cart2.png');
}

function cartunhover(element) {
  element.setAttribute('src', 'img/cart1.png');
}
//sets the price shown in table
function price() {
  let quantity = document.getElementById('amount').value;
  if (quantity === "1") {
    document.getElementById('price').innerHTML = document.getElementById('price1').innerHTML;
  }
  if (quantity === "10") {
    document.getElementById('price').innerHTML = document.getElementById('price2').innerHTML * 10;
  }
  if (quantity === "25") {
    document.getElementById('price').innerHTML = document.getElementById('price3').innerHTML * 25;
  }
  if (quantity === "50") {
    document.getElementById('price').innerHTML = document.getElementById('price4').innerHTML * 50;
  }
  if (quantity === "100") {
    document.getElementById('price').innerHTML = document.getElementById('price5').innerHTML * 100;
  }
  if (quantity === "200") {
    document.getElementById('price').innerHTML = document.getElementById('price6').innerHTML * 200;
  }
}

//stores item data
function addtocart() {
  //counts number of clicks
  if (typeof(Storage) !== "undefined") {
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
    } else {
      sessionStorage.clickcount = 1;
    }
  }
  //creates vars needed for function
  var itemString = "item";
  var amountString = "amount";
  var priceString = "price";
  var itemKey = sessionStorage.getItem('clickcount')
  //generates itemKey with a number for every button press
  sessionStorage[itemString + itemKey] = document.getElementById('item').innerHTML;
  sessionStorage[amountString + itemKey] = document.getElementById('amount').value;
  sessionStorage[priceString + itemKey] = document.getElementById('price').innerHTML;

}
//creates table based on stored item data
function ordertable() {

  //creates vars needed for function
  var itemString = "item";
  var amountString = "amount";
  var priceString = "price";
  var itemKey = sessionStorage.getItem('clickcount');
  // loop that loops for each recorded button press(clickcount)
  for (i = 0; i < itemKey; i++) {
    var ii = i + 1;
      //selects table
      var table = document.getElementById("ordertable");
      //inserts a row(starting on row 1)
      var row = table.insertRow(-1);
      //creates 3 cells for each row
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      // gives each cell a class
      cell1.setAttribute("class", "cell1");
      cell2.setAttribute("class", "cell2");
      cell3.setAttribute("class", "cell3");
      //names each cell
      cell1.innerHTML = sessionStorage.getItem(itemString + ii);
      cell2.innerHTML = sessionStorage.getItem(amountString + ii);
      cell3.innerHTML = sessionStorage.getItem(priceString + ii);
      //remove comment below if sessionStoragebreaks
      //sessionStorage.clear();
  }
}
function clearcart(){
sessionStorage.clear();
location.reload();
}
function product(){
if (location.hash === '#goldenshovel'){
 document.getElementById("productimg").setAttribute('src', 'img/cuttingboard.png');
 
}
}
