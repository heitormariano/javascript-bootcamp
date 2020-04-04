let temp = 68;

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out');
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go out');
} else {
    console.log('Eh. Do what you want');
}

let isGuestOneVegan = true; // guest 01
let isGuestTwoVegan = false; // guest 02

if (isGuestTwoVegan && isGuestTwoVegan) {
    console.log('Only offer up vegan dishes');
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure to offer up some vegan dishes');
} else {
    console.log('Offer up anything on the menu');
}