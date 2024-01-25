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
  document.getElementById("state-info-p").innerText =
    "Uttarakhand has a highly varied topography, with snow-covered \n peaks, glaciers, deep canyons, roaring streams, beautiful lakes, and\n a few patches of dusty plains in the south. ";
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
  document.getElementById("state-info-p").innerText =
    "Arunachal Pradesh's diverse terrain, climate, and soils are reflected \n in its fauna and flora. About two-thirds of the state is forested,\n with a wide belt of swampy rainforest lying along the foothills.";
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
  document.getElementById("state-info-p").innerText =
    "Delhi has been the centre of a succession of mighty empires and powerful\n kingdoms. Numerous ruins scattered throughout the territory offer\n a constant reminder of the areas history.";
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
  document.getElementById("state-info-p").innerText =
    "Rajasthan, meaning “The Abode of the Rajas,” was formerly called Rajputana,\n “The Country of the Rajputs” \nMost of Rajasthans population consists of Indians of various social,\n occupational, and religious backgrounds. \nThe Rajputs (various clans of landowning rulers and their descendants)";
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
  document.getElementById("state-info-p").innerText =
    "The word Punjab is a compound of two Persian words,\n panj (“five”) and āb (“water”),\n thus signifying the land of five waters, or five rivers\n (the Beas, Chenab, Jhelum, Ravi, and Sutlej). ";
}
