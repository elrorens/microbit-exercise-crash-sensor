input.onButtonPressed(Button.A, function () {
    servos.P1.setAngle(90)
})
input.onButtonPressed(Button.B, function () {
    servos.P1.setAngle(180)
})
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        servos.P1.setAngle(135)
    } else {
        servos.P1.setAngle(45)
    }
    basic.showNumber(pins.digitalReadPin(DigitalPin.P2))
})
