input.onButtonPressed(Button.A, function () {
    guess_number += 1
    basic.showNumber(guess_number)
})
input.onButtonPressed(Button.AB, function () {
    if (guess_number == random_number) {
        basic.showString("equal")
    } else if (guess_number > random_number) {
        basic.showString("lower")
    } else {
        basic.showString("higher")
    }
})
input.onButtonPressed(Button.B, function () {
    guess_number += -1
    basic.showNumber(guess_number)
})
let guess_number = 0
let random_number = 0
random_number = randint(0, 20)
guess_number = 1
basic.showNumber(guess_number)
basic.forever(function () {
	
})
