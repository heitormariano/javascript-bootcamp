let restaurant = {
    name: 'ABC Test',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return seatsLeft >= partySize;
    },
    seatParty: function (partySize) {
        if (this.checkAvailability(partySize)) {
            this.guestCount = this.guestCount + partySize;
            return true;
        } else {
            return false;
        }
    },
    removeParty: function (partySize) {
        if (this.guestCount - partySize >= 0) {
            this.guestCount = this.guestCount - partySize;
            return true;
        } else {
            return false;
        }
    }
};

console.log(restaurant);

let addResult = restaurant.seatParty(70);
// Using conditional (ternary) operator
console.log(addResult ? 'Seats added' : 'Seats not added');

let removeResult = restaurant.removeParty(20);
// Using conditional (ternary) operator
console.log(removeResult ? 'Seats removed' : 'Seats not removed');


addResult = restaurant.seatParty(90);
console.log(addResult ? 'Seats added' : 'Seats not added');

removeResult = restaurant.removeParty(300);
console.log(removeResult ? 'Seats removed' : 'Seats not removed');