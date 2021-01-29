
const firstclassPrice = 150;
const economyPrice = 100;
var totalCost = 0;

function handleProductChange(ticket, doIncrease) {

    const ticketCount = readInput(ticket);
    let ticketCountNew = ticketCount;

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

    let totalTicketCost = 0;
    if (ticket == 'firstclass') {
        totalTicketCost = ticketCountNew * firstclassPrice;
    }
    if (ticket == 'economy') {
        totalTicketCost = ticketCountNew * economyPrice;
    }

    calculateTotalCost();
}

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

function readInput(ticketID) {

    const ticketCount = document.getElementById(ticketID).value;
    const ticketCountConverted = parseInt(ticketCount);

    return ticketCountConverted;
}

function showDetails() {
    const totalFirstClassTickets = parseFloat(document.getElementById('firstclass').value);
    const totalEconomyTickets = parseFloat(document.getElementById('economy').value);
    const totalTickets = totalFirstClassTickets + totalEconomyTickets;

    const travellingFrom = document.getElementById('from').value;
    const travellingTo = document.getElementById('from').value;

    const startDate = document.getElementById('start-date').value;
    const returnDate = document.getElementById('return-date').value;

    if (travellingFrom == "" || travellingTo == "") {
        alert('You must enter the starting and ending destination.');
    }
    else {

        if (startDate == "") {
            alert("You must select the departure date");
        }
        else {
            if (totalTickets == 0) {
                alert('You must buy at least 1 ticket to travel.');
            }
            else {



            }
        }
    }
}

