input.onButtonPressed(Button.A, function () {
    radio.sendString("blue")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("green")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("red")
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("off")
})
radio.setGroup(255)
