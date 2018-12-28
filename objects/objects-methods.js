let restaurant = {
    name: 'ABC Test',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return seatsLeft >= partySize
    }
}

console.log(restaurant)

console.log(restaurant.checkAvailability(33))
console.log(restaurant.checkAvailability(40))
console.log(restaurant.checkAvailability(99))