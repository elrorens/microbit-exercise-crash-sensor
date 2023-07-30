input.onButtonPressed(Button.A, function () {
    servos.P2.setAngle(90)
})
input.onButtonPressed(Button.B, function () {
    servos.P2.setAngle(180)
})
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        servos.P2.setAngle(135)
    } else {
        servos.P2.setAngle(45)
    }
    basic.showNumber(pins.digitalReadPin(DigitalPin.P1))
})
