document
.getElementById("reservationForm")
.addEventListener("submit",function(e){

e.preventDefault();

let nama=document.getElementById("name").value;
let tanggal=document.getElementById("date").value;
let jam=document.getElementById("time").value;
let orang=document.getElementById("guest").value;
let hp=document.getElementById("phone").value;

let pesan=
`Halo Tahu Gejrot Pakde Burung

Saya ingin reservasi.

Nama : ${nama}
Tanggal : ${tanggal}
Jam : ${jam}
Jumlah Orang : ${orang}
WhatsApp : ${hp}`;

window.open(
`https://wa.me/6281234567890?text=${encodeURIComponent(pesan)}`,
"_blank");

});