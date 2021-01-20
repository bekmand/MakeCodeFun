let CurrentSelected = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        CurrentSelected = 0
    } else if (receivedNumber == 1) {
        CurrentSelected = 0
    }
})
input.onButtonPressed(Button.A, function () {
    CurrentSelected = 0
})
// Button Press to cycle through list of object and display them
input.onButtonPressed(Button.AB, function () {
    if (CurrentSelected == 0) {
        basic.showIcon(IconNames.Duck)
    }
    if (CurrentSelected == 1) {
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.B, function () {
    CurrentSelected = 1
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.sendString("" + (CurrentSelected))
})
