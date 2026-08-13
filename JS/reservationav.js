document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("reservationModal");
    const open = document.getElementById("openReservation");
    const close = document.getElementById("closeReservation");

    open.addEventListener("click", function(e){
        e.preventDefault();
        modal.classList.add("show");
    });

    close.addEventListener("click", function(){
        modal.classList.remove("show");
    });

    modal.addEventListener("click", function(e){
        if(e.target === modal){
            modal.classList.remove("show");
        }
    });

});
