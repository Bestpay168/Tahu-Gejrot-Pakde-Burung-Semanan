const btn=document.getElementById("openReservation");
const modal=document.getElementById("reservationModal");

btn.addEventListener("click",(e)=>{

e.preventDefault();

modal.classList.add("show");
