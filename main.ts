input.onButtonPressed(Button.A, function () {
    servos.P2.setAngle(90)
})
input.onButtonPressed(Button.B, function () {
    servos.P2.setAngle(180)
})
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        servos.P2.setAngle(135)
    } else {
        servos.P2.setAngle(45)
    }
    basic.showNumber(pins.digitalReadPin(DigitalPin.P1))
})
