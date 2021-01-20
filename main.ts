// Button Press to cycle through list of object and display them
input.onButtonPressed(Button.A, function () {
    for (let value of list) {
        if (value == 0) {
            basic.showIcon(IconNames.Duck)
            CurrentSelected = 0
        }
        if (value == 1) {
            basic.showIcon(IconNames.Heart)
            CurrentSelected = 1
        }
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Duck") {
        basic.showIcon(IconNames.Duck)
    } else if (receivedString == "Heart") {
        basic.showIcon(IconNames.Heart)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.sendString("" + (CurrentSelected))
})
let CurrentSelected = 0
let list: number[] = []
list = [0, 1]
CurrentSelected = 0
