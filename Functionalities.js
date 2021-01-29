
const firstclassPrice = 150;
const economyPrice = 100;
var totalCost = 0;


//Handling tickets on click on plus-minus buttons
function handleTickets(ticket, doIncrease) {

    const ticketCount = readInput(ticket);
    let ticketCountNew = ticketCount;
    let totalTicketCost = 0;

    if (doIncrease == true) {
        ticketCountNew = ticketCount + 1;
    }
    if (doIncrease == false) {

        if (ticketCount > 0)
            ticketCountNew = ticketCount - 1;
        else
            alert("Ticket amount can't be lower than 0.");
    }

    document.getElementById(ticket).value = ticketCountNew;

    if (ticket == 'firstclass') {
        totalTicketCost = ticketCountNew * firstclassPrice;
    }
    if (ticket == 'economy') {
        totalTicketCost = ticketCountNew * economyPrice;
    }

    calculateTotalCost();
}


//Calculate the total price
function calculateTotalCost() {

    const firstclassTicketCount = readInput('firstclass');
    const economyTicketCount = readInput('economy');

    const totalPrice = firstclassTicketCount * 150 + economyTicketCount * 100;
    document.getElementById('sub-total').innerText = '$' + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax').innerText = '$' + tax;

    const finalPrice = totalPrice + tax;
    totalCost = finalPrice;
    document.getElementById('total-price').innerText = '$' + finalPrice;
}


//Reading value from input
function readInput(ticketID) {

    const ticketCount = document.getElementById(ticketID).value;
    const ticketCountConverted = parseInt(ticketCount);

    if(ticketCount == ""){
        document.getElementById(ticketID).value = 1;
        ticketCountConverted = 1;
    }

    return ticketCountConverted;
}


//Pop up details when press Book Now
function showDetails() {

    const totalFirstClassTickets = parseFloat(document.getElementById('firstclass').value);
    const totalEconomyTickets = parseFloat(document.getElementById('economy').value);
    const totalTickets = totalFirstClassTickets + totalEconomyTickets;

    const travellingFrom = document.getElementById('from').value;
    const travellingTo = document.getElementById('to').value;

    const startDate = document.getElementById('start-date').value;
    const returnDate = document.getElementById('return-date').value;

    if (travellingFrom == "" || travellingTo == "") {
       
        showPopUp('Not enough information!','You must select cities', 'error', 'Close', function(){});
    }
    else {

        if (startDate == "" || returnDate == "") {
           
            showPopUp('Not enough information!','You must select the departure and return date', 'error', 'Close', function(){});
        }
        else {
            if (totalTickets == 0) {

                showPopUp('Not enough tickets!','You must buy at least 1 ticket to travel', 'error', 'Close',function(){});
            }
            else {
                showPopUp('Review details',
                `First Class Tickets: ${totalFirstClassTickets} 
                \n Economy Tickets: ${totalEconomyTickets}
                \n Total Tickets: ${totalTickets}
                \n Total Price: ${totalCost}
                \n Travelling From: ${travellingFrom}
                \n Travelling To: ${travellingTo}
                \n Travelling At: ${startDate}
                \n Returning At: ${returnDate}
                \n Have A Safe Journey! Stay With Cruise Queen.`, 
                'success', 
                'Confirm', resetInputs);
            }
        }
    }
}


//Resetting inputs
function resetInputs (){

    document.getElementById('firstclass').value = "0";
    document.getElementById('economy').value ="0" ;
    document.getElementById('from').value = "";
    document.getElementById('to').value = "";
    document.getElementById('start-date').value = "";
    document.getElementById('return-date').value = "";
    document.getElementById('total-price').innerText = "0";
    document.getElementById('tax').innerText = "0";
    document.getElementById('sub-total').innerText = "0";
}


//Showing the pop ups
function showPopUp(title, text, icon, buttonText, task){
   
    swal({
        title: title,
        text: text,
        icon: icon,
        button: buttonText
      }).then((value) => {
        task();
      });
}

