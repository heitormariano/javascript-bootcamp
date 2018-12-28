let isAccountLocked = false
let userRole = 'user'

if (isAccountLocked) {
    console.log('The account is locked')
} else if (userRole === 'admin') {
    console.log('Welcome admin')
} else {
    console.log('Welcome')
}

let temp = 120

if (temp <= 32) {
    console.log('It is freezinf out side')
} else if (temp >= 110) {
    console.log('It is hot out side')
} else {
    console.log('Go for it. It is prety nice out')
}