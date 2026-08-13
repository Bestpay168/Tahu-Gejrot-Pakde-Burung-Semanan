const modal=document.getElementById("reservationModal");

document
.getElementById("openReservation")
.onclick=function(e){

e.preventDefault();

modal.classList.add("show");

}

document
.getElementById("closeReservation")
.onclick=function(){

modal.classList.remove("show");

}

// Klik area gelap untuk menutup
modal.onclick=function(e){

if(e.target===modal){

modal.classList.remove("show");

}

}