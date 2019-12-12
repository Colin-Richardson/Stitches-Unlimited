//changes cart image when hovering/unhovering
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
    document.getElementById('price').innerHTML = "$" + sessionStorage.getItem("price1");
  }
  if (quantity === "10") {
    document.getElementById('price').innerHTML = "$" + sessionStorage.getItem("price2") * 10;
  }
  if (quantity === "25") {
    document.getElementById('price').innerHTML = "$" + sessionStorage.getItem("price3") * 25;
  }
  if (quantity === "50") {
    document.getElementById('price').innerHTML = "$" + sessionStorage.getItem("price4") * 50;
  }
  if (quantity === "100") {
    document.getElementById('price').innerHTML = "$" + sessionStorage.getItem("price5") * 100;
  }
  if (quantity === "200") {
    document.getElementById('price').innerHTML = "$" + sessionStorage.getItem("price6") * 200;
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
//hides clear button if table is empty
  var clear = document.getElementById('clearcart');
  if (sessionStorage.getItem('item1') == null) {
    clear.style.visibility = "hidden";
  } else {
    clear.style.visibility = "visible";
  }
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
var table = document.getElementById("ordertable");
var row = table.insertRow(-1);
var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
}
//clears cart
function clearcart() {
  sessionStorage.clear();
  location.reload();
}
//runs onload and hashchange of product.html
function product() {
//sets footer margintop to 0
document.getElementById("productfooter").style.marginTop = "0%";
//each if statement checks what the hash is and changes the image, title and description if true
  if (location.hash === '#goldenshovel') {
    //sets main product image
    document.getElementById("productimg").setAttribute('src', 'img/goldshovel.png');
    //sets product title
    document.getElementById("item").innerHTML = "Golden Shovel";
    //sets product description
    document.getElementById("description").innerHTML = "Gold plated 6 1/2' recognition shovel on a piano wood plaque and a 6' x 1' blank plate.";
    sessionStorage.setItem("price1" , "20");
    sessionStorage.setItem("price2" , "15");
    sessionStorage.setItem("price3" , "10");
    sessionStorage.setItem("price4" , "5");
    sessionStorage.setItem("price5" , "2.5");
    sessionStorage.setItem("price6" , "1");
    //displays prices and adds $ before
    document.getElementById('price1').innerHTML = "$" + sessionStorage.getItem("price1");
    document.getElementById('price2').innerHTML = "$" + sessionStorage.getItem("price2");
    document.getElementById('price3').innerHTML = "$" + sessionStorage.getItem("price3");
    document.getElementById('price4').innerHTML = "$" + sessionStorage.getItem("price4");
    document.getElementById('price5').innerHTML = "$" + sessionStorage.getItem("price5");
    document.getElementById('price6').innerHTML = "$" + sessionStorage.getItem("price6");
    //sets similar items
    document.getElementById('productimg1').setAttribute('src', 'img/diamondfridge.png');
    document.getElementById('productlabel1').setAttribute('href', 'product.html#diamondfridge');
    document.getElementById('productlabel1').innerHTML = "Diamond Fridge";
    document.getElementById('productimg2').setAttribute('src', 'img/headphones.png');
    document.getElementById('productlabel2').setAttribute('href', 'product.html#headphones');
    document.getElementById('productlabel2').innerHTML = "Headphones";
    document.getElementById('productimg3').setAttribute('src', 'img/chair.png');
    document.getElementById('productlabel3').setAttribute('href', 'product.html#Chair');
    document.getElementById('productlabel3').innerHTML = "Chair";
    document.getElementById('productimg4').setAttribute('src', 'img/mixer.png');
    document.getElementById('productlabel4').setAttribute('href', 'product.html#mixer');
    document.getElementById('productlabel4').innerHTML = "Mixer";
  }
  if (location.hash === '#fidgetspinner') {
    document.getElementById("productimg").setAttribute('src', 'img/cuttingboard.png');
    document.getElementById("item").innerHTML = "Fidget Spinner";
    document.getElementById("description").innerHTML = "Our Fidget spinner provides hours of fun and is great for those who like to keep busy. Helpful with those with ADHD to maintain focus. Center bearing plus 3 solid metal counterweights for smooth operation CPSIA TESTED COMPLIANT NOT FOR CHILDREN UNDER 3 YEARS OF AGE ";
    sessionStorage.setItem("price1" , "10");
    sessionStorage.setItem("price2" , "5");
    sessionStorage.setItem("price3" , "2.5");
    sessionStorage.setItem("price4" , "2");
    sessionStorage.setItem("price5" , "1.5");
    sessionStorage.setItem("price6" , "1");
    document.getElementById('price1').innerHTML = "$" + sessionStorage.getItem("price1");
    document.getElementById('price2').innerHTML = "$" + sessionStorage.getItem("price2");
    document.getElementById('price3').innerHTML = "$" + sessionStorage.getItem("price3");
    document.getElementById('price4').innerHTML = "$" + sessionStorage.getItem("price4");
    document.getElementById('price5').innerHTML = "$" + sessionStorage.getItem("price5");
    document.getElementById('price6').innerHTML = "$" + sessionStorage.getItem("price6");
    document.getElementById('productimg1').setAttribute('src', 'img/petbowl.png');
    document.getElementById('productlabel1').setAttribute('href', 'product.html#petbowl');
    document.getElementById('productlabel1').innerHTML = "Pet Bowl";
    document.getElementById('productimg2').setAttribute('src', 'img/replicabuic.png');
    document.getElementById('productlabel2').setAttribute('href', 'product.html#replicabuic');
    document.getElementById('productlabel2').innerHTML = "Replica Buick";
    document.getElementById('productimg3').setAttribute('src', 'img/slapbracelet.png');
    document.getElementById('productlabel3').setAttribute('href', 'product.html#slapbracelet');
    document.getElementById('productlabel3').innerHTML = "Slap Bracelet";
    document.getElementById('productimg4').setAttribute('src', 'img/suprisedduck.png');
    document.getElementById('productlabel4').setAttribute('href', 'product.html#suprisedduck');
    document.getElementById('productlabel4').innerHTML = "Suprised Duck";
  }
  if (location.hash === '#petbowl') {
    document.getElementById("productimg").setAttribute('src', 'img/petbowl.png');
    document.getElementById("item").innerHTML = "Pet Bowl";
    document.getElementById("description").innerHTML = "These Collapsible Silicone Pet Bowls are perfect for on the go feeding and watering of your client's pet. Your client's will use them for traveling, camping, walks, dog park and events. Don't miss out on getting your logo on this practical, pet friendly promo item!";
    sessionStorage.setItem("price1" , "20");
    sessionStorage.setItem("price2" , "10");
    sessionStorage.setItem("price3" , "7.5");
    sessionStorage.setItem("price4" , "5");
    sessionStorage.setItem("price5" , "2.5");
    sessionStorage.setItem("price6" , "1.5");
    document.getElementById('price1').innerHTML = "$" + sessionStorage.getItem("price1");
    document.getElementById('price2').innerHTML = "$" + sessionStorage.getItem("price2");
    document.getElementById('price3').innerHTML = "$" + sessionStorage.getItem("price3");
    document.getElementById('price4').innerHTML = "$" + sessionStorage.getItem("price4");
    document.getElementById('price5').innerHTML = "$" + sessionStorage.getItem("price5");
    document.getElementById('price6').innerHTML = "$" + sessionStorage.getItem("price6");
    document.getElementById('productimg1').setAttribute('src', 'img/cuttingboard.png');
    document.getElementById('productlabel1').setAttribute('href', 'product.html#fidgetspinner');
    document.getElementById('productlabel1').innerHTML = "Fidget Spinner";
    document.getElementById('productimg2').setAttribute('src', 'img/replicabuic.png');
    document.getElementById('productlabel2').setAttribute('href', 'product.html#replicabuic');
    document.getElementById('productlabel2').innerHTML = "Replica Buick";
    document.getElementById('productimg3').setAttribute('src', 'img/slapbracelet.png');
    document.getElementById('productlabel3').setAttribute('href', 'product.html#slapbracelet');
    document.getElementById('productlabel3').innerHTML = "Slap Bracelet";
    document.getElementById('productimg4').setAttribute('src', 'img/suprisedduck.png');
    document.getElementById('productlabel4').setAttribute('href', 'product.html#suprisedduck');
    document.getElementById('productlabel4').innerHTML = "Suprised Duck";
}
  if (location.hash === '#replicabuic') {
    document.getElementById("productimg").setAttribute('src', 'img/replicabuic.png');
    document.getElementById("item").innerHTML = "Replica Buick";
    document.getElementById("description").innerHTML = "It's a blast from the past with this 1/18 scaled replica of the 1953 Buick Skylark! Measuring 9' x 4.5' x 3', our highly detailed die cast precision model features full functioning doors, hood and steering wheel, as well as a detailed chassis with separate exhaust system. Makes a great gift for any car enthusiast or model collectors! Customize with a one-color imprint on both doors and use to promote businesses within the automotive industry.";
    sessionStorage.setItem("price1" , "100");
    sessionStorage.setItem("price2" , "75");
    sessionStorage.setItem("price3" , "50");
    sessionStorage.setItem("price4" , "25");
    sessionStorage.setItem("price5" , "10");
    sessionStorage.setItem("price6" , "5");
    document.getElementById('price1').innerHTML = "$" + sessionStorage.getItem("price1");
    document.getElementById('price2').innerHTML = "$" + sessionStorage.getItem("price2");
    document.getElementById('price3').innerHTML = "$" + sessionStorage.getItem("price3");
    document.getElementById('price4').innerHTML = "$" + sessionStorage.getItem("price4");
    document.getElementById('price5').innerHTML = "$" + sessionStorage.getItem("price5");
    document.getElementById('price6').innerHTML = "$" + sessionStorage.getItem("price6");
    document.getElementById('productimg1').setAttribute('src', 'img/petbowl.png');
    document.getElementById('productlabel1').setAttribute('href', 'product.html#petbowl');
    document.getElementById('productlabel1').innerHTML = "Pet Bowl";
    document.getElementById('productimg2').setAttribute('src', 'img/cuttingboard.png');
    document.getElementById('productlabel2').setAttribute('href', 'product.html#fidgetspinner');
    document.getElementById('productlabel2').innerHTML = "Fidget Spinner";
    document.getElementById('productimg3').setAttribute('src', 'img/slapbracelet.png');
    document.getElementById('productlabel3').setAttribute('href', 'product.html#slapbracelet');
    document.getElementById('productlabel3').innerHTML = "Slap Bracelet";
    document.getElementById('productimg4').setAttribute('src', 'img/suprisedduck.png');
    document.getElementById('productlabel4').setAttribute('href', 'product.html#suprisedduck');
    document.getElementById('productlabel4').innerHTML = "Suprised Duck";
  }
  if (location.hash === '#slapbracelet') {
    document.getElementById("productimg").setAttribute('src', 'img/slapbracelet.png');
    document.getElementById("item").innerHTML = "Slap Bracelet Ruler";
    document.getElementById("description").innerHTML = "Slap band ruler bracelet made of eco-friendly silicone. Can be used as both a ruler and worn as a bracelet. Different sizes and colors available. Ideal for schools, office, company and etc.";
    sessionStorage.setItem("price1" , "10");
    sessionStorage.setItem("price2" , "7.5");
    sessionStorage.setItem("price3" , "5");
    sessionStorage.setItem("price4" , "3");
    sessionStorage.setItem("price5" , "2");
    sessionStorage.setItem("price6" , "1");
    document.getElementById('price1').innerHTML = "$" + sessionStorage.getItem("price1");
    document.getElementById('price2').innerHTML = "$" + sessionStorage.getItem("price2");
    document.getElementById('price3').innerHTML = "$" + sessionStorage.getItem("price3");
    document.getElementById('price4').innerHTML = "$" + sessionStorage.getItem("price4");
    document.getElementById('price5').innerHTML = "$" + sessionStorage.getItem("price5");
    document.getElementById('price6').innerHTML = "$" + sessionStorage.getItem("price6");
    document.getElementById('productimg1').setAttribute('src', 'img/petbowl.png');
    document.getElementById('productlabel1').setAttribute('href', 'product.html#petbowl');
    document.getElementById('productlabel1').innerHTML = "Pet Bowl";
    document.getElementById('productimg2').setAttribute('src', 'img/replicabuic.png');
    document.getElementById('productlabel2').setAttribute('href', 'product.html#replicabuic');
    document.getElementById('productlabel2').innerHTML = "Replica Buick";
    document.getElementById('productimg3').setAttribute('src', 'img/cuttingboard.png');
    document.getElementById('productlabel3').setAttribute('href', 'product.html#fidgetspinner');
    document.getElementById('productlabel3').innerHTML = "Fidget Spinner";
    document.getElementById('productimg4').setAttribute('src', 'img/suprisedduck.png');
    document.getElementById('productlabel4').setAttribute('href', 'product.html#suprisedduck');
    document.getElementById('productlabel4').innerHTML = "Suprised Duck";
  }
  if (location.hash === '#suprisedduck') {
    document.getElementById("productimg").setAttribute('src', 'img/suprisedduck.png');
    document.getElementById("item").innerHTML = "Suprised Duck";
    document.getElementById("description").innerHTML = "Catch the eyes of your customers with the Surprised Duckling, a fully customizable plush duck toy. Created from soft velboa faux fur in a light white hue, this handsome ducky offers a tuft of hair atop its head, large child-safe embroidered eyes, a polka dotted ribbon, and contoured bill and feet, together with plenty of room for your custom logo. Looking to customize this item? Custom orders include unlimited modifications and a free preproduction sample. Take advantage of our complimentary design consultation and design services, 30 years of experience, and lowest price guarantee!";
    sessionStorage.setItem("price1" , "50");
    sessionStorage.setItem("price2" , "40");
    sessionStorage.setItem("price3" , "20");
    sessionStorage.setItem("price4" , "15");
    sessionStorage.setItem("price5" , "10");
    sessionStorage.setItem("price6" , "5");
    document.getElementById('price1').innerHTML = "$" + sessionStorage.getItem("price1");
    document.getElementById('price2').innerHTML = "$" + sessionStorage.getItem("price2");
    document.getElementById('price3').innerHTML = "$" + sessionStorage.getItem("price3");
    document.getElementById('price4').innerHTML = "$" + sessionStorage.getItem("price4");
    document.getElementById('price5').innerHTML = "$" + sessionStorage.getItem("price5");
    document.getElementById('price6').innerHTML = "$" + sessionStorage.getItem("price6");
    document.getElementById('productimg1').setAttribute('src', 'img/petbowl.png');
    document.getElementById('productlabel1').setAttribute('href', 'product.html#petbowl');
    document.getElementById('productlabel1').innerHTML = "Pet Bowl";
    document.getElementById('productimg2').setAttribute('src', 'img/replicabuic.png');
    document.getElementById('productlabel2').setAttribute('href', 'product.html#replicabuic');
    document.getElementById('productlabel2').innerHTML = "Replica Buick";
    document.getElementById('productimg3').setAttribute('src', 'img/slapbracelet.png');
    document.getElementById('productlabel3').setAttribute('href', 'product.html#slapbracelet');
    document.getElementById('productlabel3').innerHTML = "Slap Bracelet";
    document.getElementById('productimg4').setAttribute('src', 'img/cuttingboard.png');
    document.getElementById('productlabel4').setAttribute('href', 'product.html#fidgetspinner');
    document.getElementById('productlabel4').innerHTML = "Fidget Spinner";
}
  if (location.hash === '#laptopbag') {
    document.getElementById("productimg").setAttribute('src', 'img/laptopbag.png');
    document.getElementById("item").innerHTML = "Laptop Bag";
    document.getElementById("description").innerHTML = "This water repellent bag has a padded handle and extra padding in the laptop compartment. Features include a hidden tech compartment, extra-thick insulation on laptop compartment, an easy-access front insert pocket with inside accessory pockets, hook & loop closure, and a lined front zipper pocket.";
    sessionStorage.setItem("price1" , "35");
    sessionStorage.setItem("price2" , "25");
    sessionStorage.setItem("price3" , "17");
    sessionStorage.setItem("price4" , "10");
    sessionStorage.setItem("price5" , "7.5");
    sessionStorage.setItem("price6" , "5");
    document.getElementById('price1').innerHTML = "$" + sessionStorage.getItem("price1");
    document.getElementById('price2').innerHTML = "$" + sessionStorage.getItem("price2");
    document.getElementById('price3').innerHTML = "$" + sessionStorage.getItem("price3");
    document.getElementById('price4').innerHTML = "$" + sessionStorage.getItem("price4");
    document.getElementById('price5').innerHTML = "$" + sessionStorage.getItem("price5");
    document.getElementById('price6').innerHTML = "$" + sessionStorage.getItem("price6");
    document.getElementById('productimg1').setAttribute('src', 'img/drawstringbag.png');
    document.getElementById('productlabel1').setAttribute('href', 'product.html#drawstringbackpack');
    document.getElementById('productlabel1').innerHTML = "Drawstring Bag";
    document.getElementById('productimg2').setAttribute('src', 'img/everydaybag.png');
    document.getElementById('productlabel2').setAttribute('href', 'product.html#everydaybag');
    document.getElementById('productlabel2').innerHTML = "Everyday Bag";
    document.getElementById('productimg3').setAttribute('src', 'img/marcopolobag.png');
    document.getElementById('productlabel3').setAttribute('href', 'product.html#marcopolobag');
    document.getElementById('productlabel3').innerHTML = "Marco Polo Bag";
    document.getElementById('productimg4').setAttribute('src', 'img/tacticalbag.png');
    document.getElementById('productlabel4').setAttribute('href', 'product.html#tacticalbag');
    document.getElementById('productlabel4').innerHTML = "Tactical Backpack";
  }
  if (location.hash === '#drawstringbackpack') {
    document.getElementById("productimg").setAttribute('src', 'img/drawstringbag.png');
    document.getElementById("item").innerHTML = "Drawstring Backpack";
    document.getElementById("description").innerHTML = "Provide successful closure to your marketing campaign with this Drawstring Backpack! Made from 210 denier polyester, our 17’W x 20’H pack features metal grommets that help to prevent tearing, and a nylon braided drawstring closure. A great promotion for schools and universities, this bag offers full color transfer, pad print or silkscreen imprint options to display your brand name. Order today and send your business on the road!";
    sessionStorage.setItem("price1" , "20");
    sessionStorage.setItem("price2" , "15");
    sessionStorage.setItem("price3" , "10");
    sessionStorage.setItem("price4" , "7");
    sessionStorage.setItem("price5" , "5");
    sessionStorage.setItem("price6" , "3");
    document.getElementById('price1').innerHTML = "$" + sessionStorage.getItem("price1");
    document.getElementById('price2').innerHTML = "$" + sessionStorage.getItem("price2");
    document.getElementById('price3').innerHTML = "$" + sessionStorage.getItem("price3");
    document.getElementById('price4').innerHTML = "$" + sessionStorage.getItem("price4");
    document.getElementById('price5').innerHTML = "$" + sessionStorage.getItem("price5");
    document.getElementById('price6').innerHTML = "$" + sessionStorage.getItem("price6");
    document.getElementById('productimg1').setAttribute('src', 'img/laptopbag.png');
    document.getElementById('productlabel1').setAttribute('href', 'product.html#laptopbag');
    document.getElementById('productlabel1').innerHTML = "Laptop Bag";
    document.getElementById('productimg2').setAttribute('src', 'img/everydaybag.png');
    document.getElementById('productlabel2').setAttribute('href', 'product.html#everydaybag');
    document.getElementById('productlabel2').innerHTML = "Everyday Bag";
    document.getElementById('productimg3').setAttribute('src', 'img/marcopolobag.png');
    document.getElementById('productlabel3').setAttribute('href', 'product.html#marcopolobag');
    document.getElementById('productlabel3').innerHTML = "Marco Polo Bag";
    document.getElementById('productimg4').setAttribute('src', 'img/tacticalbag.png');
    document.getElementById('productlabel4').setAttribute('href', 'product.html#tacticalbag');
    document.getElementById('productlabel4').innerHTML = "Tactical Backpack";
  }
  if (location.hash === '#everydaybag') {
    document.getElementById("productimg").setAttribute('src', 'img/everydaybag.png');
    document.getElementById("item").innerHTML = "Everyday Bag";
    document.getElementById("description").innerHTML = "This backpack has multiple pockets with laptop pocket inside. Shoulder straps are color coordinated with the piping and are padded with mesh underneath. Fits a 17’ laptop.";
    sessionStorage.setItem("price1" , "50");
    sessionStorage.setItem("price2" , "25");
    sessionStorage.setItem("price3" , "20");
    sessionStorage.setItem("price4" , "15");
    sessionStorage.setItem("price5" , "10");
    sessionStorage.setItem("price6" , "5");
    document.getElementById('price1').innerHTML = "$" + sessionStorage.getItem("price1");
    document.getElementById('price2').innerHTML = "$" + sessionStorage.getItem("price2");
    document.getElementById('price3').innerHTML = "$" + sessionStorage.getItem("price3");
    document.getElementById('price4').innerHTML = "$" + sessionStorage.getItem("price4");
    document.getElementById('price5').innerHTML = "$" + sessionStorage.getItem("price5");
    document.getElementById('price6').innerHTML = "$" + sessionStorage.getItem("price6");
    document.getElementById('productimg1').setAttribute('src', 'img/drawstringbag.png');
    document.getElementById('productlabel1').setAttribute('href', 'product.html#drawstringbackpack');
    document.getElementById('productlabel1').innerHTML = "Drawstring Bag";
    document.getElementById('productimg2').setAttribute('src', 'img/laptopbag.png');
    document.getElementById('productlabel2').setAttribute('href', 'product.html#laptopbag');
    document.getElementById('productlabel2').innerHTML = "Laptop Bag";
    document.getElementById('productimg3').setAttribute('src', 'img/marcopolobag.png');
    document.getElementById('productlabel3').setAttribute('href', 'product.html#marcopolobag');
    document.getElementById('productlabel3').innerHTML = "Marco Polo Bag";
    document.getElementById('productimg4').setAttribute('src', 'img/tacticalbag.png');
    document.getElementById('productlabel4').setAttribute('href', 'product.html#tacticalbag');
    document.getElementById('productlabel4').innerHTML = "Tactical Backpack";
}
  if (location.hash === '#marcopolobag') {
    document.getElementById("productimg").setAttribute('src', 'img/marcopolobag.png');
    document.getElementById("item").innerHTML = "Marco Polo Bag";
    document.getElementById("description").innerHTML = "This water-repellent backpack is great for overnight or short trips. It has compartments for toiletries, laptop, shirt, socks, underwear, pants, shoes, tech item, and more. It unzips to flat and can be hung in from a hook with many of the items still inside.";
    sessionStorage.setItem("price1" , "100");
    sessionStorage.setItem("price2" , "75");
    sessionStorage.setItem("price3" , "50");
    sessionStorage.setItem("price4" , "25");
    sessionStorage.setItem("price5" , "10");
    sessionStorage.setItem("price6" , "5");
    document.getElementById('price1').innerHTML = "$" + sessionStorage.getItem("price1");
    document.getElementById('price2').innerHTML = "$" + sessionStorage.getItem("price2");
    document.getElementById('price3').innerHTML = "$" + sessionStorage.getItem("price3");
    document.getElementById('price4').innerHTML = "$" + sessionStorage.getItem("price4");
    document.getElementById('price5').innerHTML = "$" + sessionStorage.getItem("price5");
    document.getElementById('price6').innerHTML = "$" + sessionStorage.getItem("price6");
    document.getElementById('productimg1').setAttribute('src', 'img/drawstringbag.png');
    document.getElementById('productlabel1').setAttribute('href', 'product.html#drawstringbackpack');
    document.getElementById('productlabel1').innerHTML = "Drawstring Bag";
    document.getElementById('productimg2').setAttribute('src', 'img/everydaybag.png');
    document.getElementById('productlabel2').setAttribute('href', 'product.html#everydaybag');
    document.getElementById('productlabel2').innerHTML = "Everyday Bag";
    document.getElementById('productimg3').setAttribute('src', 'img/laptopbag.png');
    document.getElementById('productlabel3').setAttribute('href', 'product.html#laptopbag');
    document.getElementById('productlabel3').innerHTML = "Laptop Bag";
    document.getElementById('productimg4').setAttribute('src', 'img/tacticalbag.png');
    document.getElementById('productlabel4').setAttribute('href', 'product.html#tacticalbag');
    document.getElementById('productlabel4').innerHTML = "Tactical Backpack";
  }
  if (location.hash === '#tacticalbag') {
    document.getElementById("productimg").setAttribute('src', 'img/tacticalbag.png');
    document.getElementById("item").innerHTML = "Tactical Backpack";
    document.getElementById("description").innerHTML = "This tactical backpack is made from durable, high density polyester with military grade webbing straps and loops. It has a reinforced top handle, an insert for a 17’ laptop and a large nylon zipper and zipper pulls. Also, it has adjustable waist and chest straps and a large front pocket. The back panel and shoulder straps are padded. In addition, there are rifle loops on top, mattress loops on the bottom and extra loops with D-rings for other applications. (For instance, make your own camoflauge with leaves and branches.) There is an access point for a hydration hose built in.";
    sessionStorage.setItem("price1" , "150");
    sessionStorage.setItem("price2" , "100");
    sessionStorage.setItem("price3" , "75");
    sessionStorage.setItem("price4" , "50");
    sessionStorage.setItem("price5" , "25");
    sessionStorage.setItem("price6" , "10");
    document.getElementById('price1').innerHTML = "$" + sessionStorage.getItem("price1");
    document.getElementById('price2').innerHTML = "$" + sessionStorage.getItem("price2");
    document.getElementById('price3').innerHTML = "$" + sessionStorage.getItem("price3");
    document.getElementById('price4').innerHTML = "$" + sessionStorage.getItem("price4");
    document.getElementById('price5').innerHTML = "$" + sessionStorage.getItem("price5");
    document.getElementById('price6').innerHTML = "$" + sessionStorage.getItem("price6");
    document.getElementById('productimg1').setAttribute('src', 'img/drawstringbag.png');
    document.getElementById('productlabel1').setAttribute('href', 'product.html#drawstringbackpack');
    document.getElementById('productlabel1').innerHTML = "Drawstring Bag";
    document.getElementById('productimg2').setAttribute('src', 'img/everydaybag.png');
    document.getElementById('productlabel2').setAttribute('href', 'product.html#everydaybag');
    document.getElementById('productlabel2').innerHTML = "Everyday Bag";
    document.getElementById('productimg3').setAttribute('src', 'img/marcopolobag.png');
    document.getElementById('productlabel3').setAttribute('href', 'product.html#marcopolobag');
    document.getElementById('productlabel3').innerHTML = "Marco Polo Bag";
    document.getElementById('productimg4').setAttribute('src', 'img/laptopbag.png');
    document.getElementById('productlabel4').setAttribute('href', 'product.html#laptopbag');
    document.getElementById('productlabel4').innerHTML = "Laptop Bag";
  }
  if (location.hash === '#diamondfridge') {
    document.getElementById("productimg").setAttribute('src', 'img/diamondfridge.png');
    document.getElementById("item").innerHTML = "Diamond Fridge";
    document.getElementById("description").innerHTML = "Diamond plated counter display fridge. We can add diamond plating to all existing fridge sizes as well. This is a great display enhancer or dealer loader. 5 star rating for peace of mind.";
    sessionStorage.setItem("price1" , "10000");
    sessionStorage.setItem("price2" , "7500");
    sessionStorage.setItem("price3" , "5000");
    sessionStorage.setItem("price4" , "1000");
    sessionStorage.setItem("price5" , "100");
    sessionStorage.setItem("price6" , "1");
    document.getElementById('price1').innerHTML = "$" + sessionStorage.getItem("price1");
    document.getElementById('price2').innerHTML = "$" + sessionStorage.getItem("price2");
    document.getElementById('price3').innerHTML = "$" + sessionStorage.getItem("price3");
    document.getElementById('price4').innerHTML = "$" + sessionStorage.getItem("price4");
    document.getElementById('price5').innerHTML = "$" + sessionStorage.getItem("price5");
    document.getElementById('price6').innerHTML = "$" + sessionStorage.getItem("price6");
    document.getElementById('productimg1').setAttribute('src', 'img/goldshovel.png');
    document.getElementById('productlabel1').setAttribute('href', 'product.html#goldenshovel');
    document.getElementById('productlabel1').innerHTML = "Golden Shovel";
    document.getElementById('productimg2').setAttribute('src', 'img/headphones.png');
    document.getElementById('productlabel2').setAttribute('href', 'product.html#headphones');
    document.getElementById('productlabel2').innerHTML = "Headphones";
    document.getElementById('productimg3').setAttribute('src', 'img/chair.png');
    document.getElementById('productlabel3').setAttribute('href', 'product.html#Chair');
    document.getElementById('productlabel3').innerHTML = "Chair";
    document.getElementById('productimg4').setAttribute('src', 'img/mixer.png');
    document.getElementById('productlabel4').setAttribute('href', 'product.html#mixer');
    document.getElementById('productlabel4').innerHTML = "Mixer";
  }
  if (location.hash === '#headphones') {
    document.getElementById("productimg").setAttribute('src', 'img/headphones.png');
    document.getElementById("item").innerHTML = "Headphones";
    document.getElementById("description").innerHTML = "Become immersed in your music with the Optimus Bluetooth Headphones. The modern design will keep you at the front of the pack. Enjoy a full day of music with up to 12 hours of playback time. Listen to music, skip tracks, control volume, and accept a phone call all without touching your Bluetooth device. Includes a 3.5mm line-in audio cable, a USB to micro USB charging cable, and an EVA molded case to store and protect your headphones while not in use. Bluetooth working range is 10 meters (33 feet).Enjoy up to 12hrs. of music at max volume on a single charge.";
    sessionStorage.setItem("price1" , "35");
    sessionStorage.setItem("price2" , "25");
    sessionStorage.setItem("price3" , "15");
    sessionStorage.setItem("price4" , "10");
    sessionStorage.setItem("price5" , "7");
    sessionStorage.setItem("price6" , "5");
    document.getElementById('price1').innerHTML = "$" + sessionStorage.getItem("price1");
    document.getElementById('price2').innerHTML = "$" + sessionStorage.getItem("price2");
    document.getElementById('price3').innerHTML = "$" + sessionStorage.getItem("price3");
    document.getElementById('price4').innerHTML = "$" + sessionStorage.getItem("price4");
    document.getElementById('price5').innerHTML = "$" + sessionStorage.getItem("price5");
    document.getElementById('price6').innerHTML = "$" + sessionStorage.getItem("price6");
    document.getElementById('productimg1').setAttribute('src', 'img/diamondfridge.png');
    document.getElementById('productlabel1').setAttribute('href', 'product.html#diamondfridge');
    document.getElementById('productlabel1').innerHTML = "Diamond Fridge";
    document.getElementById('productimg2').setAttribute('src', 'img/goldshovel.png');
    document.getElementById('productlabel2').setAttribute('href', 'product.html#goldenshovel');
    document.getElementById('productlabel2').innerHTML = "Golden Shovel";
    document.getElementById('productimg3').setAttribute('src', 'img/chair.png');
    document.getElementById('productlabel3').setAttribute('href', 'product.html#Chair');
    document.getElementById('productlabel3').innerHTML = "Chair";
    document.getElementById('productimg4').setAttribute('src', 'img/mixer.png');
    document.getElementById('productlabel4').setAttribute('href', 'product.html#mixer');
    document.getElementById('productlabel4').innerHTML = "Mixer";
  }
  if (location.hash === '#Chair') {
    document.getElementById("productimg").setAttribute('src', 'img/chair.png');
    document.getElementById("item").innerHTML = "Chair";
    document.getElementById("description").innerHTML = "With an extra sturdy steel frame and durable 600D fabric this chair has a loading weight limit of 400lbs. Features a unique and comfortable rounded ‘moon’ design with padded construction and a front tech pocket. Includes a study 600D carrying bag.";
    sessionStorage.setItem("price1" , "100");
    sessionStorage.setItem("price2" , "75");
    sessionStorage.setItem("price3" , "50");
    sessionStorage.setItem("price4" , "25");
    sessionStorage.setItem("price5" , "15");
    sessionStorage.setItem("price6" , "10");
    document.getElementById('price1').innerHTML = "$" + sessionStorage.getItem("price1");
    document.getElementById('price2').innerHTML = "$" + sessionStorage.getItem("price2");
    document.getElementById('price3').innerHTML = "$" + sessionStorage.getItem("price3");
    document.getElementById('price4').innerHTML = "$" + sessionStorage.getItem("price4");
    document.getElementById('price5').innerHTML = "$" + sessionStorage.getItem("price5");
    document.getElementById('price6').innerHTML = "$" + sessionStorage.getItem("price6");
    document.getElementById('productimg1').setAttribute('src', 'img/diamondfridge.png');
    document.getElementById('productlabel1').setAttribute('href', 'product.html#diamondfridge');
    document.getElementById('productlabel1').innerHTML = "Diamond Fridge";
    document.getElementById('productimg2').setAttribute('src', 'img/headphones.png');
    document.getElementById('productlabel2').setAttribute('href', 'product.html#headphones');
    document.getElementById('productlabel2').innerHTML = "Headphones";
    document.getElementById('productimg3').setAttribute('src', 'img/goldshovel.png');
    document.getElementById('productlabel3').setAttribute('href', 'product.html#goldenshovel');
    document.getElementById('productlabel3').innerHTML = "Golden Shovel";
    document.getElementById('productimg4').setAttribute('src', 'img/mixer.png');
    document.getElementById('productlabel4').setAttribute('href', 'product.html#mixer');
    document.getElementById('productlabel4').innerHTML = "Mixer";
  }
  if (location.hash === '#mug') {
    document.getElementById("productimg").setAttribute('src', 'img/mugs.jpg');
    document.getElementById("item").innerHTML = "Mug";
    document.getElementById("description").innerHTML = "You'll always show you're ‘resource’-ful with the 11 oz. budget mug! Made of ironstone ceramic, this appealing mug features a glossy exterior/interior and a large C-handle. With an overall size of 3 1/8’ diameter x 3 3/4’ h, this giveaway reaches its 11 oz. capacity when filled to the rim. It's a perfect canvas for your company's logo or message. Take advantage of its daily exposure by ordering yours now!";
    sessionStorage.setItem("price1" , "10");
    sessionStorage.setItem("price2" , "7");
    sessionStorage.setItem("price3" , "5");
    sessionStorage.setItem("price4" , "2.5");
    sessionStorage.setItem("price5" , "2");
    sessionStorage.setItem("price6" , "1");
    document.getElementById('price1').innerHTML = "$" + sessionStorage.getItem("price1");
    document.getElementById('price2').innerHTML = "$" + sessionStorage.getItem("price2");
    document.getElementById('price3').innerHTML = "$" + sessionStorage.getItem("price3");
    document.getElementById('price4').innerHTML = "$" + sessionStorage.getItem("price4");
    document.getElementById('price5').innerHTML = "$" + sessionStorage.getItem("price5");
    document.getElementById('price6').innerHTML = "$" + sessionStorage.getItem("price6");
    document.getElementById('productimg1').setAttribute('src', 'img/diamondfridge.png');
    document.getElementById('productlabel1').setAttribute('href', 'product.html#diamondfridge');
    document.getElementById('productlabel1').innerHTML = "Diamond Fridge";
    document.getElementById('productimg2').setAttribute('src', 'img/headphones.png');
    document.getElementById('productlabel2').setAttribute('href', 'product.html#headphones');
    document.getElementById('productlabel2').innerHTML = "Headphones";
    document.getElementById('productimg3').setAttribute('src', 'img/goldshovel.png');
    document.getElementById('productlabel3').setAttribute('href', 'product.html#goldenshovel');
    document.getElementById('productlabel3').innerHTML = "Golden Shovel";
    document.getElementById('productimg4').setAttribute('src', 'img/mixer.png');
    document.getElementById('productlabel4').setAttribute('href', 'product.html#mixer');
    document.getElementById('productlabel4').innerHTML = "Mixer";
  }
  if (location.hash === '#patches') {
    document.getElementById("productimg").setAttribute('src', 'img/patch.jpg');
    document.getElementById("item").innerHTML = "Patches";
    document.getElementById("description").innerHTML = "Show your appreciation for a job well-done with these woven patches. Featuring a slightly different look than embroidered patches, these have a complex two dimensional look and 100% tight woven thread that perfectly display fine details, gradients, landscapes and very small lettering. Requiring 10-12 days after proof approval for creation, these customizable patches come with free ground shipping in the continental US.";
    sessionStorage.setItem("price1" , "10");
    sessionStorage.setItem("price2" , "7.5");
    sessionStorage.setItem("price3" , "5");
    sessionStorage.setItem("price4" , "3");
    sessionStorage.setItem("price5" , "2");
    sessionStorage.setItem("price6" , "1");
    document.getElementById('price1').innerHTML = "$" + sessionStorage.getItem("price1");
    document.getElementById('price2').innerHTML = "$" + sessionStorage.getItem("price2");
    document.getElementById('price3').innerHTML = "$" + sessionStorage.getItem("price3");
    document.getElementById('price4').innerHTML = "$" + sessionStorage.getItem("price4");
    document.getElementById('price5').innerHTML = "$" + sessionStorage.getItem("price5");
    document.getElementById('price6').innerHTML = "$" + sessionStorage.getItem("price6");
    document.getElementById('productimg1').setAttribute('src', 'img/diamondfridge.png');
    document.getElementById('productlabel1').setAttribute('href', 'product.html#diamondfridge');
    document.getElementById('productlabel1').innerHTML = "Diamond Fridge";
    document.getElementById('productimg2').setAttribute('src', 'img/headphones.png');
    document.getElementById('productlabel2').setAttribute('href', 'product.html#headphones');
    document.getElementById('productlabel2').innerHTML = "Headphones";
    document.getElementById('productimg3').setAttribute('src', 'img/goldshovel.png');
    document.getElementById('productlabel3').setAttribute('href', 'product.html#goldenshovel');
    document.getElementById('productlabel3').innerHTML = "Golden Shovel";
    document.getElementById('productimg4').setAttribute('src', 'img/mixer.png');
    document.getElementById('productlabel4').setAttribute('href', 'product.html#mixer');
    document.getElementById('productlabel4').innerHTML = "Mixer";
  }
  if (location.hash === '#mugwarmer') {
    document.getElementById("productimg").setAttribute('src', 'img/mugwarmer.jpg');
    document.getElementById("item").innerHTML = "Mug Warmer";
    document.getElementById("description").innerHTML = "This mug warmer works by USB, does not require a battery, it can keep the temperature of coffee/tea/drink at around 40 degree. It is easy to install, small size, light weight and easy to carry, suitable for home and office.";
    sessionStorage.setItem("price1" , "20");
    sessionStorage.setItem("price2" , "15");
    sessionStorage.setItem("price3" , "10");
    sessionStorage.setItem("price4" , "5");
    sessionStorage.setItem("price5" , "2.5");
    sessionStorage.setItem("price6" , "1");
    document.getElementById('price1').innerHTML = "$" + sessionStorage.getItem("price1");
    document.getElementById('price2').innerHTML = "$" + sessionStorage.getItem("price2");
    document.getElementById('price3').innerHTML = "$" + sessionStorage.getItem("price3");
    document.getElementById('price4').innerHTML = "$" + sessionStorage.getItem("price4");
    document.getElementById('price5').innerHTML = "$" + sessionStorage.getItem("price5");
    document.getElementById('price6').innerHTML = "$" + sessionStorage.getItem("price6");
    document.getElementById('productimg1').setAttribute('src', 'img/diamondfridge.png');
    document.getElementById('productlabel1').setAttribute('href', 'product.html#diamondfridge');
    document.getElementById('productlabel1').innerHTML = "Diamond Fridge";
    document.getElementById('productimg2').setAttribute('src', 'img/headphones.png');
    document.getElementById('productlabel2').setAttribute('href', 'product.html#headphones');
    document.getElementById('productlabel2').innerHTML = "Headphones";
    document.getElementById('productimg3').setAttribute('src', 'img/goldshovel.png');
    document.getElementById('productlabel3').setAttribute('href', 'product.html#goldenshovel');
    document.getElementById('productlabel3').innerHTML = "Golden Shovel";
    document.getElementById('productimg4').setAttribute('src', 'img/mixer.png');
    document.getElementById('productlabel4').setAttribute('href', 'product.html#mixer');
    document.getElementById('productlabel4').innerHTML = "Mixer";
  }
  if (location.hash === '#teaitems') {
    document.getElementById("productimg").setAttribute('src', 'img/tea.jpg');
    document.getElementById("item").innerHTML = "Tea Items";
    document.getElementById("description").innerHTML = "Tea time just got better! Leave your old tea gadgets behind and make room for this 2’ x 1’ x 1’ leaf-shaped silicone tea filter and infuser. The eco-friendly accessory can be used in a tea cup or a coffee mug. It's designed with a stainless steel filter as well as a BPA-free silicone handle that protect you from heating up or burning your fingers from the hot water. Add your company name, logo, or emblem to this item to really heat up your promotional campaign!";
    sessionStorage.setItem("price1" , "10");
    sessionStorage.setItem("price2" , "7.5");
    sessionStorage.setItem("price3" , "5");
    sessionStorage.setItem("price4" , "2.5");
    sessionStorage.setItem("price5" , "2");
    sessionStorage.setItem("price6" , "1");
    document.getElementById('price1').innerHTML = "$" + sessionStorage.getItem("price1");
    document.getElementById('price2').innerHTML = "$" + sessionStorage.getItem("price2");
    document.getElementById('price3').innerHTML = "$" + sessionStorage.getItem("price3");
    document.getElementById('price4').innerHTML = "$" + sessionStorage.getItem("price4");
    document.getElementById('price5').innerHTML = "$" + sessionStorage.getItem("price5");
    document.getElementById('price6').innerHTML = "$" + sessionStorage.getItem("price6");
    document.getElementById('productimg1').setAttribute('src', 'img/diamondfridge.png');
    document.getElementById('productlabel1').setAttribute('href', 'product.html#diamondfridge');
    document.getElementById('productlabel1').innerHTML = "Diamond Fridge";
    document.getElementById('productimg2').setAttribute('src', 'img/headphones.png');
    document.getElementById('productlabel2').setAttribute('href', 'product.html#headphones');
    document.getElementById('productlabel2').innerHTML = "Headphones";
    document.getElementById('productimg3').setAttribute('src', 'img/goldshovel.png');
    document.getElementById('productlabel3').setAttribute('href', 'product.html#goldenshovel');
    document.getElementById('productlabel3').innerHTML = "Golden Shovel";
    document.getElementById('productimg4').setAttribute('src', 'img/mixer.png');
    document.getElementById('productlabel4').setAttribute('href', 'product.html#mixer');
    document.getElementById('productlabel4').innerHTML = "Mixer";
  }
  if (location.hash === '#shovels') {
    document.getElementById("productimg").setAttribute('src', 'img/wintershovel.jpg');
    document.getElementById("item").innerHTML = "Shovels";
    document.getElementById("description").innerHTML = "Extendable snow scrub, useful for clean the snow and ice on the car. It has aluminum alloy rod, ABS shovel and PVC brush. It can be stretched from 24.25’ to 33’. The brush length is 7.87’. You could imprint your logo on the shovel. 24 1/2 ‘ x 4 7/10’";
    sessionStorage.setItem("price1" , "50");
    sessionStorage.setItem("price2" , "35");
    sessionStorage.setItem("price3" , "20");
    sessionStorage.setItem("price4" , "15");
    sessionStorage.setItem("price5" , "10");
    sessionStorage.setItem("price6" , "5");
    document.getElementById('price1').innerHTML = "$" + sessionStorage.getItem("price1");
    document.getElementById('price2').innerHTML = "$" + sessionStorage.getItem("price2");
    document.getElementById('price3').innerHTML = "$" + sessionStorage.getItem("price3");
    document.getElementById('price4').innerHTML = "$" + sessionStorage.getItem("price4");
    document.getElementById('price5').innerHTML = "$" + sessionStorage.getItem("price5");
    document.getElementById('price6').innerHTML = "$" + sessionStorage.getItem("price6");
    document.getElementById('productimg1').setAttribute('src', 'img/diamondfridge.png');
    document.getElementById('productlabel1').setAttribute('href', 'product.html#diamondfridge');
    document.getElementById('productlabel1').innerHTML = "Diamond Fridge";
    document.getElementById('productimg2').setAttribute('src', 'img/headphones.png');
    document.getElementById('productlabel2').setAttribute('href', 'product.html#headphones');
    document.getElementById('productlabel2').innerHTML = "Headphones";
    document.getElementById('productimg3').setAttribute('src', 'img/goldshovel.png');
    document.getElementById('productlabel3').setAttribute('href', 'product.html#goldenshovel');
    document.getElementById('productlabel3').innerHTML = "Golden Shovel";
    document.getElementById('productimg4').setAttribute('src', 'img/mixer.png');
    document.getElementById('productlabel4').setAttribute('href', 'product.html#mixer');
    document.getElementById('productlabel4').innerHTML = "Mixer";
  }
  if (location.hash === '#airpods') {
    document.getElementById("productimg").setAttribute('src', 'img/airpod.jpg');
    document.getElementById("item").innerHTML = "Airpods";
    document.getElementById("description").innerHTML = "Let your music surround you all day with our best sounding earbuds that include a charging box that can recharge your earbuds in wirelessly and on the go! Pair any Bluetooth-enabled device with Cosy Bluetooth 5.0 earbuds for hours of smooth, high quality stereo sound to listening to music or talking on the phone. Smart touch control, easy pair up, and automatically turn on and connect your smart phone when removed from the case, automatically turn off when return to the case to charging. The earbuds will play music for about 3 hours, and the box will hold enough charge to re-charge the earbuds 2-3 more times without been recharge! The charging case is small enough to fit in your pocket, optional translucent silicone cover available with charge. Standard package in a white tuck box.";
    sessionStorage.setItem("price1" , "150");
    sessionStorage.setItem("price2" , "100");
    sessionStorage.setItem("price3" , "75");
    sessionStorage.setItem("price4" , "50");
    sessionStorage.setItem("price5" , "25");
    sessionStorage.setItem("price6" , "15");
    document.getElementById('price1').innerHTML = "$" + sessionStorage.getItem("price1");
    document.getElementById('price2').innerHTML = "$" + sessionStorage.getItem("price2");
    document.getElementById('price3').innerHTML = "$" + sessionStorage.getItem("price3");
    document.getElementById('price4').innerHTML = "$" + sessionStorage.getItem("price4");
    document.getElementById('price5').innerHTML = "$" + sessionStorage.getItem("price5");
    document.getElementById('price6').innerHTML = "$" + sessionStorage.getItem("price6");
    document.getElementById('productimg1').setAttribute('src', 'img/diamondfridge.png');
    document.getElementById('productlabel1').setAttribute('href', 'product.html#diamondfridge');
    document.getElementById('productlabel1').innerHTML = "Diamond Fridge";
    document.getElementById('productimg2').setAttribute('src', 'img/headphones.png');
    document.getElementById('productlabel2').setAttribute('href', 'product.html#headphones');
    document.getElementById('productlabel2').innerHTML = "Headphones";
    document.getElementById('productimg3').setAttribute('src', 'img/goldshovel.png');
    document.getElementById('productlabel3').setAttribute('href', 'product.html#goldenshovel');
    document.getElementById('productlabel3').innerHTML = "Golden Shovel";
    document.getElementById('productimg4').setAttribute('src', 'img/mixer.png');
    document.getElementById('productlabel4').setAttribute('href', 'product.html#mixer');
    document.getElementById('productlabel4').innerHTML = "Mixer";
  }
  if (location.hash === '#sunglasses') {
    document.getElementById("productimg").setAttribute('src', 'img/carousel1.jpg');
    document.getElementById("item").innerHTML = "Branded Sunglasses";
    document.getElementById("description").innerHTML = "Change you customers' prospective on your brand by handing out these color-changing LensTek sunglasses at the next summertime-themed event! Made of polypropylene, these trendy shades change colors when hit with UV rays. The lenses provide 100% UVA and UVB protection and can be decorated with your company's imprinted decal for maximum brand exposure. The lenses feature small holes so the wearer can see through the imprint.";
    sessionStorage.setItem("price1" , "10");
    sessionStorage.setItem("price2" , "7.5");
    sessionStorage.setItem("price3" , "5");
    sessionStorage.setItem("price4" , "2.5");
    sessionStorage.setItem("price5" , "2");
    sessionStorage.setItem("price6" , "1");
    document.getElementById('price1').innerHTML = "$" + sessionStorage.getItem("price1");
    document.getElementById('price2').innerHTML = "$" + sessionStorage.getItem("price2");
    document.getElementById('price3').innerHTML = "$" + sessionStorage.getItem("price3");
    document.getElementById('price4').innerHTML = "$" + sessionStorage.getItem("price4");
    document.getElementById('price5').innerHTML = "$" + sessionStorage.getItem("price5");
    document.getElementById('price6').innerHTML = "$" + sessionStorage.getItem("price6");
    document.getElementById('productimg1').setAttribute('src', 'img/drawstringbag.png');
    document.getElementById('productlabel1').setAttribute('href', 'product.html#drawstringbackpack');
    document.getElementById('productlabel1').innerHTML = "Drawstring Bag";
    document.getElementById('productimg2').setAttribute('src', 'img/everydaybag.png');
    document.getElementById('productlabel2').setAttribute('href', 'product.html#everydaybag');
    document.getElementById('productlabel2').innerHTML = "Everyday Bag";
    document.getElementById('productimg3').setAttribute('src', 'img/laptopbag.png');
    document.getElementById('productlabel3').setAttribute('href', 'product.html#laptopbag');
    document.getElementById('productlabel3').innerHTML = "Laptop Bag";
    document.getElementById('productimg4').setAttribute('src', 'img/tacticalbag.png');
    document.getElementById('productlabel4').setAttribute('href', 'product.html#tacticalbag');
    document.getElementById('productlabel4').innerHTML = "Tactical Backpack";
  }
  if (location.hash === '#thulebackpack') {
    document.getElementById("productimg").setAttribute('src', 'img/carousel2.jpg');
    document.getElementById("item").innerHTML = "THULE Backpack";
    document.getElementById("description").innerHTML = "Tackle your work week or weekend adventures in this durable laptop backpack with dedicated electronics protection, roomy compartments and organization. Padded, zippered compartment with dedicated storage for 15’ MacBook Pro®/up to 17’ PC, an iPad®/10.1’ tablet and a slip pocket for files. Crushproof SafeZone compartment for sunglasses and fragile gear includes a dedicated phone pocket. SafeZone compartment can be locked or removed altogether for extra space. The Shove-it Pocket with compression straps on the front provides additional external storage for a jacket or newspaper. Perforated EVA shoulder straps with mesh covering and padded back panel with air flow channels provide comfort and breathability. Water-resistant fabrics and zippers combine to create a lightweight, protective bag...";
    sessionStorage.setItem("price1" , "50");
    sessionStorage.setItem("price2" , "40");
    sessionStorage.setItem("price3" , "30");
    sessionStorage.setItem("price4" , "20");
    sessionStorage.setItem("price5" , "10");
    sessionStorage.setItem("price6" , "5");
    document.getElementById('price1').innerHTML = "$" + sessionStorage.getItem("price1");
    document.getElementById('price2').innerHTML = "$" + sessionStorage.getItem("price2");
    document.getElementById('price3').innerHTML = "$" + sessionStorage.getItem("price3");
    document.getElementById('price4').innerHTML = "$" + sessionStorage.getItem("price4");
    document.getElementById('price5').innerHTML = "$" + sessionStorage.getItem("price5");
    document.getElementById('price6').innerHTML = "$" + sessionStorage.getItem("price6");
    document.getElementById('productimg1').setAttribute('src', 'img/drawstringbag.png');
    document.getElementById('productlabel1').setAttribute('href', 'product.html#drawstringbackpack');
    document.getElementById('productlabel1').innerHTML = "Drawstring Bag";
    document.getElementById('productimg2').setAttribute('src', 'img/everydaybag.png');
    document.getElementById('productlabel2').setAttribute('href', 'product.html#everydaybag');
    document.getElementById('productlabel2').innerHTML = "Everyday Bag";
    document.getElementById('productimg3').setAttribute('src', 'img/laptopbag.png');
    document.getElementById('productlabel3').setAttribute('href', 'product.html#laptopbag');
    document.getElementById('productlabel3').innerHTML = "Laptop Bag";
    document.getElementById('productimg4').setAttribute('src', 'img/tacticalbag.png');
    document.getElementById('productlabel4').setAttribute('href', 'product.html#tacticalbag');
    document.getElementById('productlabel4').innerHTML = "Tactical Backpack";
}
  if (location.hash === '#plainblacktee') {
    document.getElementById("productimg").setAttribute('src', 'img/carousel3.jpg');
    document.getElementById("item").innerHTML = "Plain Black Tee";
    document.getElementById("description").innerHTML = "The cooling and breathable technology of Webtech in the Parima Long Sleeve Tech Tee will let you beat the heat during all your outdoor activities. Its added Caretech properties allow for ease of care, and it is engineered with a snag resist fabric, wicking finish and UV protection. You're set for any outdoor activity wearing the Parima in any of its six must-have colors.";
    sessionStorage.setItem("price1" , "15");
    sessionStorage.setItem("price2" , "10");
    sessionStorage.setItem("price3" , "7.5");
    sessionStorage.setItem("price4" , "5");
    sessionStorage.setItem("price5" , "2.5");
    sessionStorage.setItem("price6" , "1");
    document.getElementById('price1').innerHTML = "$" + sessionStorage.getItem("price1");
    document.getElementById('price2').innerHTML = "$" + sessionStorage.getItem("price2");
    document.getElementById('price3').innerHTML = "$" + sessionStorage.getItem("price3");
    document.getElementById('price4').innerHTML = "$" + sessionStorage.getItem("price4");
    document.getElementById('price5').innerHTML = "$" + sessionStorage.getItem("price5");
    document.getElementById('price6').innerHTML = "$" + sessionStorage.getItem("price6");
    document.getElementById('productimg1').setAttribute('src', 'img/drawstringbag.png');
    document.getElementById('productlabel1').setAttribute('href', 'product.html#drawstringbackpack');
    document.getElementById('productlabel1').innerHTML = "Drawstring Bag";
    document.getElementById('productimg2').setAttribute('src', 'img/everydaybag.png');
    document.getElementById('productlabel2').setAttribute('href', 'product.html#everydaybag');
    document.getElementById('productlabel2').innerHTML = "Everyday Bag";
    document.getElementById('productimg3').setAttribute('src', 'img/laptopbag.png');
    document.getElementById('productlabel3').setAttribute('href', 'product.html#laptopbag');
    document.getElementById('productlabel3').innerHTML = "Laptop Bag";
    document.getElementById('productimg4').setAttribute('src', 'img/tacticalbag.png');
    document.getElementById('productlabel4').setAttribute('href', 'product.html#tacticalbag');
    document.getElementById('productlabel4').innerHTML = "Tactical Backpack";
  }
  if (location.hash === '#mixer') {
    document.getElementById("productimg").setAttribute('src', 'img/mixer.png');
    document.getElementById("item").innerHTML = "Mixer";
    document.getElementById("description").innerHTML = "Make up to 9 dozen cookies in a single batch with the KitchenAid Artisan Series 5 Quart Tilt-Head Stand Mixer. This mixer also features 10 speeds to thoroughly mix, knead and whip ingredients quickly and easily and is available in a variety of colors to perfectly match your kitchen design or personality. Includes: (1) Coated Flat Beater, (1) Coated Dough Hook, (1) 6-Wire Whip, (1) Pouring Shield";
    sessionStorage.setItem("price1" , "35");
    sessionStorage.setItem("price2" , "25");
    sessionStorage.setItem("price3" , "17");
    sessionStorage.setItem("price4" , "12");
    sessionStorage.setItem("price5" , "7.5");
    sessionStorage.setItem("price6" , "5");
    document.getElementById('price1').innerHTML = "$" + sessionStorage.getItem("price1");
    document.getElementById('price2').innerHTML = "$" + sessionStorage.getItem("price2");
    document.getElementById('price3').innerHTML = "$" + sessionStorage.getItem("price3");
    document.getElementById('price4').innerHTML = "$" + sessionStorage.getItem("price4");
    document.getElementById('price5').innerHTML = "$" + sessionStorage.getItem("price5");
    document.getElementById('price6').innerHTML = "$" + sessionStorage.getItem("price6");
    document.getElementById('productimg1').setAttribute('src', 'img/diamondfridge.png');
    document.getElementById('productlabel1').setAttribute('href', 'product.html#diamondfridge');
    document.getElementById('productlabel1').innerHTML = "Diamond Fridge";
    document.getElementById('productimg2').setAttribute('src', 'img/headphones.png');
    document.getElementById('productlabel2').setAttribute('href', 'product.html#headphones');
    document.getElementById('productlabel2').innerHTML = "Headphones";
    document.getElementById('productimg3').setAttribute('src', 'img/chair.png');
    document.getElementById('productlabel3').setAttribute('href', 'product.html#Chair');
    document.getElementById('productlabel3').innerHTML = "Chair";
    document.getElementById('productimg4').setAttribute('src', 'img/goldshovel.png');
    document.getElementById('productlabel4').setAttribute('href', 'product.html#goldenshovel');
    document.getElementById('productlabel4').innerHTML = "Golden Shovel";
  }
  //sets price onload
  let quantity = document.getElementById('amount').value;
  if (quantity === "1") {
    document.getElementById('price').innerHTML = "$" + sessionStorage.getItem("price1");
  }
  if (quantity === "10") {
    document.getElementById('price').innerHTML = "$" + sessionStorage.getItem("price2") * 10;
  }
  if (quantity === "25") {
    document.getElementById('price').innerHTML = "$" + sessionStorage.getItem("price3") * 25;
  }
  if (quantity === "50") {
    document.getElementById('price').innerHTML = "$" + sessionStorage.getItem("price4") * 50;
  }
  if (quantity === "100") {
    document.getElementById('price').innerHTML = "$" + sessionStorage.getItem("price5") * 100;
  }
  if (quantity === "200") {
    document.getElementById('price').innerHTML = "$" + sessionStorage.getItem("price6") * 200;
  }
}
//shows/hides cart
function showcart() {
//records the show cart as img
  var img = document.getElementById('showcartimg');
//checks if 'activeshowcart' is in the classlist
  if (document.body.classList.contains('activeshowcart')) {
    //sets image to default image
    img.setAttribute('src', 'img/cart1.png');
    //removes activeshowcart from classlist
    document.body.classList.remove('activeshowcart');
    //sets class to showcart and remove other classes
    img.className = "showcart";
    // hides table and clear button
    document.getElementById('ordertable').style.display = "none";
    document.getElementById('clearcart').style.display = "none";
  } else {
    //sets image to selected version
    img.setAttribute('src', 'img/cart2.png');
    //adds activeshowcart to classlist
    document.body.classList.add('activeshowcart');
    // adds rotate class to cart to rotate 90 degrees right
    img.className += " rotate";
    //reveals table and clear button
    document.getElementById('ordertable').style.display = "block";
    document.getElementById('clearcart').style.display = "block";
  }
}
// changes page to catalogue
function tocatalogue() {
  location.href = "catalogue.html";
}
//changes page to order
function toorder() {
  location.href = "order.html";
}
//changes page to catalogue and clears cart
function tocatalogueclear() {
  location.href = "catalogue.html";
  sessionStorage.clear();
}
function adddash(r){
var key = event.keyCode || event.CharCode;
if (key == 8 || key == 46){

}
else if(r.value.length == 4){
  r.value += "-";
}
else if(r.value.length == 9){
  r.value += "-";
}
else if(r.value.length == 14){
  r.value += "-";
}
}
// sets item based on day
function dayitem(){
// gets date
var date = new Date()
//gets day from date
var day = date.getDay();
//displays item based on day
//monday
if (day === 1){
document.getElementById("dayitem").setAttribute('src', 'img/diamondfridge.png');
document.getElementById("dayitemcap").innerHTML = "Diamond Fridge for holding assortments of items";
}
//tuesday
if (day === 2){
document.getElementById("dayitem").setAttribute('src', 'img/headphones.png');
document.getElementById("dayitemcap").innerHTML = "High Quality headphones";
}
//wednesday
if (day === 3){
document.getElementById("dayitem").setAttribute('src', 'img/cuttingboard.png');
document.getElementById("dayitemcap").innerHTML = "Fidget Spinners to keep entertained";
}
//thursday
if (day === 4){
document.getElementById("dayitem").setAttribute('src', 'img/laptopbag.png');
document.getElementById("dayitemcap").innerHTML = "Fully customizable Quality laptop bag";
}
//friday
if (day === 5){
document.getElementById("dayitem").setAttribute('src', 'img/replicabuic.png');
document.getElementById("dayitemcap").innerHTML = "1/8th scale, Replica Buick";
}
//saturday
if (day === 6){
document.getElementById("dayitem").setAttribute('src', 'img/tacticalbag.png');
document.getElementById("dayitemcap").innerHTML = "Efficient Tactical Bag";
}
}
