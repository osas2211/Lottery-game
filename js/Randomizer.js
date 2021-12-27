
const getTicket = ()=>{
    const randomizer = document.querySelector(".randomizer");
    const ticketBTN = document.querySelector(".get-ticket");
    const getting = document.querySelector(".getting")
    let counter = 0;
    
    function updater(){
        randomizer.innerHTML = `<span>${Math.random(1076).toString().slice(2,10)}</span>`;
        getting.innerHTML = "Getting Ticket...";
        ticketBTN.style.display = "none";
        counter++

        if (counter === 40){
            clearInterval(refresh)
            randomizer.innerHTML = ` <img src="images/ticket (1).png" alt="" class="ticket-img"> <span>${Math.random(1076).toString().slice(2,10)}</span>`;
            ticketBTN.style.display = "block";
            ticketBTN.innerHTML = "Get Another Ticket";
            getting.innerHTML = "";
        }
    }

    let refresh = setInterval(updater, 50);
}


   