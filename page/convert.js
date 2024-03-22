// universal nav
var pnav = document.querySelectorAll("header a");
// -----

//   Converter satuan panjang
var selectcv = document.querySelectorAll("#converter select");
var inputcv = document.querySelectorAll("#converter input");
var buttoncv = document.querySelectorAll("#converter button");

// Pangkat satu
buttoncv[0].onclick = function () {
  let cv1 = selectcv[0].value;
  let cv2 = selectcv[1].value;
  let angkacv1 = Number(inputcv[0].value);

  if (inputcv[0].value !== "" && cv1 !== cv2) {
    inputcv[1].style.borderColor = " #15f5ba";
    pnav[3].style.color = "#ff8080";
    setTimeout(function () {
      inputcv[1].style.borderColor = "black";
      pnav[3].style.color = "#176b87";
    }, 450);
  }

  if (inputcv[0].value === "") {
    alert("Masukan nilai yang mau di konversi 😉");
  } else if (cv1 === cv2) {
    inputcv[1].value = angkacv1;
  } else if (cv1 === "km" && cv2 === "hm") {
    let hasil = angkacv1 * 10;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Km =  ${hasil}Hm </span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "km" && cv2 === "dam") {
    let hasil = angkacv1 * 100;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Km = ${hasil}Dam</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "km" && cv2 === "m") {
    let hasil = angkacv1 * 1000;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Km = ${hasil}M</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "km" && cv2 === "dm") {
    let hasil = angkacv1 * 10000;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Km = ${hasil}Dm</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "km" && cv2 === "cm") {
    let hasil = angkacv1 * 100000;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Km = ${hasil}Cm</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "km" && cv2 === "mm") {
    let hasil = angkacv1 * 1000000;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Km = ${hasil}Mm</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "hm" && cv2 === "km") {
    let hasil = angkacv1 / 10;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Hm = ${hasil}Km</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "hm" && cv2 === "dam") {
    let hasil = angkacv1 * 10;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Hm = ${hasil}Dam</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "hm" && cv2 === "m") {
    let hasil = angkacv1 * 100;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Hm = ${hasil}M</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "hm" && cv2 === "dm") {
    let hasil = angkacv1 * 1000;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Hm = ${hasil}Dm</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "hm" && cv2 === "cm") {
    let hasil = angkacv1 * 10000;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Hm = ${hasil}Cm</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "hm" && cv2 === "mm") {
    let hasil = angkacv1 * 100000;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Hm = ${hasil}Mm</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "dam" && cv2 === "km") {
    let hasil = angkacv1 / 100;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Dam = ${hasil}Km</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "dam" && cv2 === "hm") {
    let hasil = angkacv1 / 10;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Dam = ${hasil}Hm</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "dam" && cv2 === "m") {
    let hasil = angkacv1 * 10;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Dam = ${hasil}M</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "dam" && cv2 === "dm") {
    let hasil = angkacv1 * 100;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Dam = ${hasil}Dm</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "dam" && cv2 === "cm") {
    let hasil = angkacv1 * 1000;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Dam = ${hasil}Cm</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "dam" && cv2 === "mm") {
    let hasil = angkacv1 * 10000;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Dam = ${hasil}Mm</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "m" && cv2 === "km") {
    let hasil = angkacv1 / 1000;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}M = ${hasil}Km</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "m" && cv2 === "hm") {
    let hasil = angkacv1 / 100;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}M = ${hasil}Hm</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "m" && cv2 === "dam") {
    let hasil = angkacv1 / 10;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}M = ${hasil}Dam</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "m" && cv2 === "dm") {
    let hasil = angkacv1 * 10;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}M = ${hasil}Dm</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "m" && cv2 === "cm") {
    let hasil = angkacv1 * 100;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}M = ${hasil}Cm</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "m" && cv2 === "mm") {
    let hasil = angkacv1 * 1000;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}M = ${hasil}Mm</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "dm" && cv2 === "km") {
    let hasil = angkacv1 / 10000;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Dm = ${hasil}Km</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "dm" && cv2 === "hm") {
    let hasil = angkacv1 / 1000;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Dm = ${hasil}Hm</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "dm" && cv2 === "dam") {
    let hasil = angkacv1 / 100;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Dm = ${hasil}Dam</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "dm" && cv2 === "m") {
    let hasil = angkacv1 / 10;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Dm = ${hasil}M</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "dm" && cv2 === "cm") {
    let hasil = angkacv1 * 10;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Dm = ${hasil}Cm</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "dm" && cv2 === "mm") {
    let hasil = angkacv1 * 100;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Dm = ${hasil}Mm</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "cm" && cv2 === "km") {
    let hasil = angkacv1 / 100000;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Cm = ${hasil}Km</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "cm" && cv2 === "hm") {
    let hasil = angkacv1 / 10000;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Cm = ${hasil}Hm</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "cm" && cv2 === "dam") {
    let hasil = angkacv1 / 1000;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Cm = ${hasil}Dam</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "cm" && cv2 === "m") {
    let hasil = angkacv1 / 100;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Cm = ${hasil}M</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "cm" && cv2 === "dm") {
    let hasil = angkacv1 / 10;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Cm = ${hasil}Dm</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "cm" && cv2 === "mm") {
    let hasil = angkacv1 * 10;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Cm = ${hasil}Mm</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "mm" && cv2 === "km") {
    let hasil = angkacv1 / 1000000;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Mm = ${hasil}Km</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "mm" && cv2 === "hm") {
    let hasil = angkacv1 / 100000;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Mm = ${hasil}Hm</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "mm" && cv2 === "dam") {
    let hasil = angkacv1 / 10000;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Mm = ${hasil}Dam</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "mm" && cv2 === "m") {
    let hasil = angkacv1 / 1000;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Mm = ${hasil}M</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "mm" && cv2 === "dm") {
    let hasil = angkacv1 / 100;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Mm = ${hasil}Dm</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "mm" && cv2 === "cm") {
    let hasil = angkacv1 / 10;
    inputcv[1].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang <p><input type='checkbox' /> <span>${angkacv1}Mm = ${hasil}Cm</span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  }
};

//   Pamgkat dua
buttoncv[1].onclick = function () {
  let cv1 = selectcv[2].value;
  let cv2 = selectcv[3].value;
  let angkacv1 = Number(inputcv[2].value);

  if (inputcv[2].value !== "" && cv1 !== cv2) {
    inputcv[3].style.borderColor = " #15f5ba";
    pnav[3].style.color = "#ff8080";
    setTimeout(function () {
      inputcv[3].style.borderColor = "black";
      pnav[3].style.color = "#176b87";
    }, 450);
  }

  if (inputcv[2].value === "") {
    alert("Masukan nilai yang mau di konversi 😉");
  } else if (cv1 === cv2) {
    inputcv[3].value = angkacv1;
  } else if (cv1 === "km" && cv2 === "hm") {
    let hasil = angkacv1 * 100;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Km<sup>2</sup> = ${hasil}Hm<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "km" && cv2 === "dam") {
    let hasil = angkacv1 * 10000;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Km<sup>2</sup> = ${hasil}Dam<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "km" && cv2 === "m") {
    let hasil = angkacv1 * 1000000;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Km<sup>2</sup> = ${hasil}M<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "km" && cv2 === "dm") {
    let hasil = angkacv1 * 100000000;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Km<sup>2</sup> = ${hasil}Dm<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "km" && cv2 === "cm") {
    let hasil = angkacv1 * 10000000000;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Km<sup>2</sup> = ${hasil}Cm<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "km" && cv2 === "mm") {
    let hasil = angkacv1 * 1000000000000;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Km<sup>2</sup> = ${hasil}Mm<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "hm" && cv2 === "km") {
    let hasil = angkacv1 / 100;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Hm<sup>2</sup> = ${hasil}Km<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "hm" && cv2 === "dam") {
    let hasil = angkacv1 * 100;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Hm<sup>2</sup> = ${hasil}Dam<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "hm" && cv2 === "m") {
    let hasil = angkacv1 * 10000;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Hm<sup>2</sup> = ${hasil}M<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "hm" && cv2 === "dm") {
    let hasil = angkacv1 * 1000000;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Hm<sup>2</sup> = ${hasil}Dm<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "hm" && cv2 === "cm") {
    let hasil = angkacv1 * 100000000;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Hm<sup>2</sup> = ${hasil}Cm<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "hm" && cv2 === "mm") {
    let hasil = angkacv1 * 10000000000;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Hm<sup>2</sup> = ${hasil}Mm<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "dam" && cv2 === "km") {
    let hasil = angkacv1 / 10000;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Dam<sup>2</sup> =${hasil}Km<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "dam" && cv2 === "hm") {
    let hasil = angkacv1 / 100;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Dam<sup>2</sup> = ${hasil}Hm<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "dam" && cv2 === "m") {
    let hasil = angkacv1 * 100;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Dam<sup>2</sup> = ${hasil}M<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "dam" && cv2 === "dm") {
    let hasil = angkacv1 * 10000;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Dam<sup>2</sup> = ${hasil}Dm<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "dam" && cv2 === "cm") {
    let hasil = angkacv1 * 1000000;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Dam<sup>2</sup> = ${hasil}Cm<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "dam" && cv2 === "mm") {
    let hasil = angkacv1 * 100000000;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Dam<sup>2</sup> = ${hasil}Mm<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "m" && cv2 === "km") {
    let hasil = angkacv1 / 1000000;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}M<sup>2</sup> = ${hasil}Km<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "m" && cv2 === "hm") {
    let hasil = angkacv1 / 10000;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}M<sup>2</sup> = ${hasil}Hm<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "m" && cv2 === "dam") {
    let hasil = angkacv1 / 100;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}M<sup>2</sup> = ${hasil}Dam<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "m" && cv2 === "dm") {
    let hasil = angkacv1 * 100;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}M<sup>2</sup> = ${hasil}Dm<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "m" && cv2 === "cm") {
    let hasil = angkacv1 * 10000;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}M<sup>2</sup> = ${hasil}Cm<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "m" && cv2 === "mm") {
    let hasil = angkacv1 * 10000000000;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}M<sup>2</sup> = ${hasil}Mm<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "dm" && cv2 === "km") {
    let hasil = angkacv1 / 100000000;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Dm<sup>2</sup> = ${hasil}Km<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "dm" && cv2 === "hm") {
    let hasil = angkacv1 / 1000000;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Dm<sup>2</sup> = ${hasil}Hm<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "dm" && cv2 === "dam") {
    let hasil = angkacv1 / 10000;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Dm<sup>2</sup> = ${hasil}Dam<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "dm" && cv2 === "m") {
    let hasil = angkacv1 / 100;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Dm<sup>2</sup> = ${hasil}M<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "dm" && cv2 === "cm") {
    let hasil = angkacv1 * 100;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Dm<sup>2</sup> = ${hasil}Cm<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "dm" && cv2 === "mm") {
    let hasil = angkacv1 * 10000;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Dm<sup>2</sup> = ${hasil}Mm<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "cm" && cv2 === "km") {
    let hasil = angkacv1 / 10000000000;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Cm<sup>2</sup> = ${hasil}Km<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "cm" && cv2 === "hm") {
    let hasil = angkacv1 / 100000000;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Cm<sup>2</sup> = ${hasil}Hm<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "cm" && cv2 === "dam") {
    let hasil = angkacv1 / 1000000;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Cm<sup>2</sup> = ${hasil}Dam<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "cm" && cv2 === "m") {
    let hasil = angkacv1 / 10000;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Cm<sup>2</sup> = ${hasil}M<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "cm" && cv2 === "dm") {
    let hasil = angkacv1 / 100;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Cm<sup>2</sup> = ${hasil}Dm<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "cm" && cv2 === "mm") {
    let hasil = angkacv1 * 100;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Cm<sup>2</sup> = ${hasil}Mm<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "mm" && cv2 === "km") {
    let hasil = angkacv1 / 1000000000000;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Mm<sup>2</sup> = ${hasil}Km<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "mm" && cv2 === "hm") {
    let hasil = angkacv1 / 10000000000;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Mm<sup>2</sup> = ${hasil}Hm<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "mm" && cv2 === "dam") {
    let hasil = angkacv1 / 100000000;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Mm<sup>2</sup> = ${hasil}Dam<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "mm" && cv2 === "m") {
    let hasil = angkacv1 / 1000000;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Mm<sup>2</sup> = ${hasil}M<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "mm" && cv2 === "dm") {
    let hasil = angkacv1 / 10000;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Mm<sup>2</sup> = ${hasil}Dm<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  } else if (cv1 === "mm" && cv2 === "cm") {
    let hasil = angkacv1 / 100;
    inputcv[3].value = hasil;
    var existingHTML = memo.innerHTML;
    var newMemo =
      `<div>History Konversi satuan panjang pangkat<sup>2</sup> <p><input type='checkbox' /> <span>${angkacv1}Mm<sup>2</sup> = ${hasil}Cm<sup>2</sup></span></p></div>` +
      existingHTML;
    memo.innerHTML = newMemo;

    localStorage.setItem("memo", memo.innerHTML);
  }
};
// -----
