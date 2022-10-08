input.onButtonPressed(Button.A, function () {
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.plot(X, Y)
            basic.pause(200)
            led.unplot(X, Y)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    for (let X = 0; X <= 4; X++) {
        for (let Y = 0; Y <= 4; Y++) {
            led.plot(X, Y)
            basic.pause(200)
        }
    }
})
basic.forever(function () {
	
})
