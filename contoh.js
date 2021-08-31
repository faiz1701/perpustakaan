var namaBuku = ["We Are Inevitable    ", "Stories to Tell A Memoir", "Songs in Ursa Major", "Lady Sunshine A Novel", "Spies, Lies, and Exile"];
var gambarBuku = [
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610748064l/55664091.jpg",
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1625673554l/55711716._SY475_.jpg",
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1617706629l/55502881.jpg",
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1617080812l/55004512.jpg",
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618294306l/57067190.jpg",
];

var listruang = document.getElementById("listruang");

var namaBuku_keranjang = [];

function showlistruang() {
  listruang.innerHTML = "";
  for (let i = 0; i < namaBuku.length; i++) {
    listruang.innerHTML +=
      '<div class="card float-left mr-3 mb-3 shadow bg-white rounded " style="width: 12rem">' +
      "<img src=" +
      gambarBuku[i] +
      ' class="card-img-top" alt="..." />' +
      '<div class="card-body">' +
      '<h5 class="card-title">' +
      namaBuku[i] +
      "</h5>" +
      '<a href="#" class="btn btn-primary" onclick="addlistitem(' +
      i +
      ')">Pilih</a>' +
      "</div>" +
      "</div>";
  }
}

function addlistitem(id) {
  namaBuku_keranjang.push(namaBuku[id]);

  showlistkeranjang();
}

var listkeranjang = document.getElementById("listkeranjang");

function showlistkeranjang() {
  listkeranjang.innerHTML = "";
  for (let i = 0; i < namaBuku_keranjang.length; i++) {
    listkeranjang.innerHTML +=
      '<div class="listkeranjang" id="listkeranjang">' +
      '<div class="card-body">' +
      '<h5 class="card-title">' +
      namaBuku_keranjang[i] +
      "</h5>" +
      "<p>Buku : 1</p>" +
      '<a href="#" class="btn btn-danger float-right" Onclick="deleteitem(' +
      i +
      ')">Batal</a>' +
      '<a href="#" class="btn btn-primary float-right>Batal</a>' +
      "</div>" +
      "</div>";
  }
}

showlistruang();

function deleteitem(id) {
  namaBuku_keranjang.splice(id, 1);

  showlistkeranjang();
}

// input form data peminjam
var namapeminjam = [];
var nopeminjam = [];
var noid = [];
var waktupinjam = [];
var waktupulang = [];

var tampil = document.getElementById("datatampil");

function showData() {
  tampil.innerHTML = "";

  for (let i = 0; i < namapeminjam.length; i++) {
    var nodata = i + 1;

    tampil.innerHTML +=
      " <tr>" +
      " <th>" +
      nodata +
      " </th>" +
      " <td>" +
      namapeminjam[i] +
      " </td>" +
      " <td>" +
      nopeminjam[i] +
      " </td>" +
      " <td>" +
      noid[i] +
      " </td>" +
      " <td>" +
      waktupinjam[i] +
      " </td>" +
      " <td>" +
      waktupulang[i] +
      " </td>" +
      " <td>" +
      namaBuku_keranjang[i] +
      "</td>" +
      " <td>" +
      "<button class='btn btn-primary'onclick='selesaiData(" +
      i +
      ")'>Selesai</button>" +
      "</td>" +
      " </tr>";
  }
}
showData();

function add() {
  var namapinjamnew = document.getElementById("floatingInput").value;
  var nopinjamnew = document.getElementById("floatingNumber1").value;
  var noidnew = document.getElementById("floatingNumber2").value;
  var waktupinjamnew = document.getElementById("floatingDate1").value;
  waktupulangnew = document.getElementById("floatingDate2").value;

  namapeminjam.push(namapinjamnew);
  nopeminjam.push(nopinjamnew);
  noid.push(noidnew);
  waktupinjam.push(waktupinjamnew);
  waktupulang.push(waktupulangnew);

  showData();
}

function selesaiData(i) {
  var hapusnamapinjam = document.getElementById("floatingInput").value;
  var hapusnopinjam = document.getElementById("floatingNumber1").value;
  var hapusnoid = document.getElementById("floatingNumber2").value;
  var hapuswaktupinjam = document.getElementById("floatingDate1").value;
  var hapuswaktupulang = document.getElementById("floatingDate2").value;

  namapeminjam.splice(i, 1);
  nopeminjam.splice(i, 1);
  noid.splice(i, 1);
  waktupinjam.splice(i, 1);
  waktupulang.splice(i, 1);

  showData();
}
// akhir input form data peminjam
