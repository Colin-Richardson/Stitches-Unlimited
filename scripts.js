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
var clear = document.getElementById('clearcart');
if(sessionStorage.getItem('item1') == null){
  clear.style.display = "none";
} else {
  clear.style.display = "block";
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
}
function clearcart(){
sessionStorage.clear();
location.reload();
}

function product(){
if (location.hash === '#goldenshovel'){
 document.getElementById("productimg").setAttribute('src', 'img/goldshovel.png');
 document.getElementById("item").innerHTML = "Goldenshovel";
 document.getElementById("description").innerHTML = "'Gold plated 6 1/2' recognition shovel on a piano wood plaque and a 6' x 1' blank plate.";
}
if (location.hash === '#fidgetspinner'){
 document.getElementById("productimg").setAttribute('src', 'img/cuttingboard.png');
 document.getElementById("item").innerHTML = "Fidget Spinner";
 document.getElementById("description").innerHTML = "Our Fidget spinner provides hours of fun and is great for those who like to keep busy. Helpful with those with ADHD to maintain focus. Center bearing plus 3 solid metal counterweights for smooth operation CPSIA TESTED COMPLIANT NOT FOR CHILDREN UNDER 3 YEARS OF AGE ";
}
 if (location.hash === '#petbowl'){
  document.getElementById("productimg").setAttribute('src', 'img/petbowl.png');
  document.getElementById("item").innerHTML = "Pet Bowl";
  document.getElementById("description").innerHTML = "These Collapsible Silicone Pet Bowls are perfect for on the go feeding and watering of your client's pet. Your client's will use them for traveling, camping, walks, dog park and events. Don't miss out on getting your logo on this practical, pet friendly promo item!";
}
if (location.hash === '#replicabuic'){
 document.getElementById("productimg").setAttribute('src', 'img/replicabuic.png');
 document.getElementById("item").innerHTML = "Replica Buic";
 document.getElementById("description").innerHTML = "It's a blast from the past with this 1/18 scaled replica of the 1953 Buick Skylark! Measuring 9' x 4.5' x 3', our highly detailed die cast precision model features full functioning doors, hood and steering wheel, as well as a detailed chassis with separate exhaust system. Makes a great gift for any car enthusiast or model collectors! Customize with a one-color imprint on both doors and use to promote businesses within the automotive industry.";
}
if (location.hash === '#slapbracelet'){
 document.getElementById("productimg").setAttribute('src', 'img/slapbracelet.png');
 document.getElementById("item").innerHTML = "Slap Bracelt Ruler";
 document.getElementById("description").innerHTML = "Slap band ruler bracelet made of eco-friendly silicone. Can be used as both a ruler and worn as a bracelet. Different sizes and colors available. Ideal for schools, office, company and etc.";
}
if (location.hash === '#suprisedduck'){
 document.getElementById("productimg").setAttribute('src', 'img/suprisedduck.png');
 document.getElementById("item").innerHTML = "Suprised Duck";
 document.getElementById("description").innerHTML = "Catch the eyes of your customers with the Surprised Duckling, a fully customizable plush duck toy. Created from soft velboa faux fur in a light white hue, this handsome ducky offers a tuft of hair atop its head, large child-safe embroidered eyes, a polka dotted ribbon, and contoured bill and feet, together with plenty of room for your custom logo. Looking to customize this item? Custom orders include unlimited modifications and a free preproduction sample. Take advantage of our complimentary design consultation and design services, 30 years of experience, and lowest price guarantee!";
}
if (location.hash === '#laptopbag'){
 document.getElementById("productimg").setAttribute('src', 'img/laptopbag.png');
 document.getElementById("item").innerHTML = "Laptop Bag";
 document.getElementById("description").innerHTML = "This water repellent bag has a padded handle and extra padding in the laptop compartment. Features include a hidden tech compartment, extra-thick insulation on laptop compartment, an easy-access front insert pocket with inside accessory pockets, hook & loop closure, and a lined front zipper pocket.";
}
if (location.hash === '#drawstringbackpack'){
 document.getElementById("productimg").setAttribute('src', 'img/drawstringbag.png');
 document.getElementById("item").innerHTML = "Drawstring Backpack";
 document.getElementById("description").innerHTML = "Provide successful closure to your marketing campaign with this Drawstring Backpack! Made from 210 denier polyester, our 17’W x 20’H pack features metal grommets that help to prevent tearing, and a nylon braided drawstring closure. A great promotion for schools and universities, this bag offers full color transfer, pad print or silkscreen imprint options to display your brand name. Order today and send your business on the road!";
}
if (location.hash === '#everydaybag'){
 document.getElementById("productimg").setAttribute('src', 'img/everydaybag.png');
 document.getElementById("item").innerHTML = "Everyday Bag";
 document.getElementById("description").innerHTML = "This backpack has multiple pockets with laptop pocket inside. Shoulder straps are color coordinated with the piping and are padded with mesh underneath. Fits a 17’ laptop.";
}
if (location.hash === '#marcopolobag'){
 document.getElementById("productimg").setAttribute('src', 'img/marcopolobag.png');
 document.getElementById("item").innerHTML = "Marco Polo Bag";
 document.getElementById("description").innerHTML = "This water-repellent backpack is great for overnight or short trips. It has compartments for toiletries, laptop, shirt, socks, underwear, pants, shoes, tech item, and more. It unzips to flat and can be hung in from a hook with many of the items still inside.";
}
if (location.hash === '#tacticalbag'){
 document.getElementById("productimg").setAttribute('src', 'img/tacticalbag.png');
 document.getElementById("item").innerHTML = "Tactical Backpack";
 document.getElementById("description").innerHTML = "This tactical backpack is made from durable, high density polyester with military grade webbing straps and loops. It has a reinforced top handle, an insert for a 17’ laptop and a large nylon zipper and zipper pulls. Also, it has adjustable waist and chest straps and a large front pocket. The back panel and shoulder straps are padded. In addition, there are rifle loops on top, mattress loops on the bottom and extra loops with D-rings for other applications. (For instance, make your own camoflauge with leaves and branches.) There is an access point for a hydration hose built in.";
}
if (location.hash === '#diamondfridge'){
 document.getElementById("productimg").setAttribute('src', 'img/diamondfridge.png');
 document.getElementById("item").innerHTML = "Diamond Fridge";
 document.getElementById("description").innerHTML = "Diamond plated counter display fridge. We can add diamond plating to all existing fridge sizes as well. This is a great display enhancer or dealer loader. 5 star rating for peace of mind.";
}
if (location.hash === '#headphones'){
 document.getElementById("productimg").setAttribute('src', 'img/headphones.png');
 document.getElementById("item").innerHTML = "Headphones";
 document.getElementById("description").innerHTML = "Become immersed in your music with the Optimus Bluetooth Headphones. The modern design will keep you at the front of the pack. Enjoy a full day of music with up to 12 hours of playback time. Listen to music, skip tracks, control volume, and accept a phone call all without touching your Bluetooth device. Includes a 3.5mm line-in audio cable, a USB to micro USB charging cable, and an EVA molded case to store and protect your headphones while not in use. Bluetooth working range is 10 meters (33 feet).Enjoy up to 12hrs. of music at max volume on a single charge.";
}
if (location.hash === '#Chair'){
 document.getElementById("productimg").setAttribute('src', 'img/chair.png');
 document.getElementById("item").innerHTML = "Collapsible Bucket";
 document.getElementById("description").innerHTML = "With an extra sturdy steel frame and durable 600D fabric this chair has a loading weight limit of 400lbs. Features a unique and comfortable rounded ‘moon’ design with padded construction and a front tech pocket. Includes a study 600D carrying bag.";
}
}
//if (location.hash === '#  '){
// document.getElementById("productimg").setAttribute('src', 'img/  ');
// document.getElementById("item").innerHTML = "   ";
// document.getElementById("description").innerHTML = "  ";
//}
function reload1(){
  document.location.href = 'tempproduct.html#petbowl';
  location.reload();
}
function reload2(){
  document.location.href = 'tempproduct.html#replicabuic';
  location.reload();
}
function reload3(){
  document.location.href = 'tempproduct.html#slapbracelet';
  location.reload();
}
function reload4(){
  document.location.href = 'tempproduct.html#suprisedduck';
  location.reload();
}
//if (location.hash === '#  '){
// document.getElementById("productimg").setAttribute('src', 'img/  ');
// document.getElementById("item").innerHTML = "   ";
// document.getElementById("description").innerHTML = "  ";
//}
