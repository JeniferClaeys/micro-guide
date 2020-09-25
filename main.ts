input.onButtonPressed(Button.A, function () {
    basic.showString("Chocolate shop")
    basic.showString("Le comptoir de Mathilde")
    basic.showString("Boterstraat 17, 1000 Brussels")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Brasserie")
    basic.showString("La Roue d'Or ")
    basic.showString("Hoedenmakerstraat 26, 1000 Brussels")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Waffle store")
    basic.showString("Le Funambule")
    basic.showString("Stoofstraat 42, 1000 Brussels")
})
music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
basic.showString("Welcome to MicroGuide !")
basic.forever(function () {
	
})
