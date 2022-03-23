let zufallszahl = 0
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        zufallszahl = randint(1, 3)
        if (zufallszahl == 1) {
            basic.setLedColor(0xff0000)
        }
        if (zufallszahl == 2) {
            basic.setLedColor(0x00ff00)
        }
        if (zufallszahl == 3) {
            basic.setLedColor(0x0000ff)
        }
    }
    basic.pause(1000)
})
