// ------------------------------Himachal
function himachalPradesh() {
  var currClass = himachal.getAttribute("class");
  console.log(currClass);

  var exchangeClass = document.getElementsByClassName("card1")[0].id;
  var changeClass = document.getElementById(exchangeClass);

  changeClass.classList.add(currClass);
  changeClass.classList.remove("card1");

  himachal.classList.remove(currClass);
  himachal.classList.add("card1");

  // ---background image change-------
  var currClass = blur_img_back.getAttribute("class");
  blur_img_back.classList.remove(currClass);
  blur_img_back.classList.add("himachal_back");

  // ---inner text---------------
  document.getElementById("state-info-h").innerText = "Himachal Pradesh";
  document.getElementById("state-info-p").innerText =
    "Himachal Pradesh occupies a region of scenic splendour in the western\n Himalayas, offering a multitextured display of lofty snow-clad\n mountains, deep gorges, thickly forested valleys, large lakes,\n terraced fields, and cascading streams.";
}

// -----------------------------Uttarakhand
function uttarakhand() {
  var currClass = uttar.getAttribute("class");
  console.log(currClass);

  var exchangeClass = document.getElementsByClassName("card1")[0].id;
  var changeClass = document.getElementById(exchangeClass);

  changeClass.classList.add(currClass);
  changeClass.classList.remove("card1");

  uttar.classList.remove(currClass);
  uttar.classList.add("card1");

  // ---background image change-------
  var currClass = blur_img_back.getAttribute("class");
  blur_img_back.classList.remove(currClass);
  blur_img_back.classList.add("uttar_back");

  // ---inner text---------------
  document.getElementById("state-info-h").innerText = "Uttarakhand";
}
// -----------------------------Arunachal
function arunachal() {
  var currClass = aruna.getAttribute("class");
  console.log(currClass);

  var exchangeClass = document.getElementsByClassName("card1")[0].id;
  var changeClass = document.getElementById(exchangeClass);

  changeClass.classList.add(currClass);
  changeClass.classList.remove("card1");

  aruna.classList.remove(currClass);
  aruna.classList.add("card1");

  // ---background image change-------
  var currClass = blur_img_back.getAttribute("class");
  blur_img_back.classList.remove(currClass);
  blur_img_back.classList.add("aruna_back");

  // ---inner text---------------
  document.getElementById("state-info-h").innerText = "Arunachal Pradesh";
}
// ---------------------------Delhi
function delhi() {
  var currClass = delh.getAttribute("class");
  console.log(currClass);

  var exchangeClass = document.getElementsByClassName("card1")[0].id;
  var changeClass = document.getElementById(exchangeClass);

  changeClass.classList.add(currClass);
  changeClass.classList.remove("card1");

  delh.classList.remove(currClass);
  delh.classList.add("card1");

  // ---background image change-------
  var currClass = blur_img_back.getAttribute("class");
  blur_img_back.classList.remove(currClass);
  blur_img_back.classList.add("delhi_back");

  // ---inner text---------------
  document.getElementById("state-info-h").innerText = "Delhi";
}
// ---------------------------Rajasthan
function rajasthan() {
  var currClass = rajas.getAttribute("class");
  console.log(currClass);

  var exchangeClass = document.getElementsByClassName("card1")[0].id;
  var changeClass = document.getElementById(exchangeClass);

  changeClass.classList.add(currClass);
  changeClass.classList.remove("card1");

  rajas.classList.remove(currClass);
  rajas.classList.add("card1");

  // ---background image change-------
  var currClass = blur_img_back.getAttribute("class");
  blur_img_back.classList.remove(currClass);
  blur_img_back.classList.add("rajas_back");

  // ---inner text---------------
  document.getElementById("state-info-h").innerText = "Rajasthan";
}
// ---------------------------Punjab
function punjab() {
  var currClass = punj.getAttribute("class");
  console.log(currClass);

  var exchangeClass = document.getElementsByClassName("card1")[0].id;
  var changeClass = document.getElementById(exchangeClass);

  changeClass.classList.add(currClass);
  changeClass.classList.remove("card1");

  punj.classList.remove(currClass);
  punj.classList.add("card1");

  // ---background image change-------
  var currClass = blur_img_back.getAttribute("class");
  blur_img_back.classList.remove(currClass);
  blur_img_back.classList.add("punj_back");

  // ---inner text---------------
  document.getElementById("state-info-h").innerText = "Punjab";
}
