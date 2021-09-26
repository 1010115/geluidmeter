let greenPauser = false;
let orangePauser = false;
let redPauser = false;

input.buttonA.onEvent(ButtonEvent.Click, function () {
    greenPauser = false;
    orangePauser = false;
    redPauser = false;
})

loops.forever(function () {
    console.log
    if (!greenPauser) {
        if (input.soundLevel() < 120) {
            light.setAll(0x00ff00);
        }
    }
    if (!orangePauser) {
        if (input.soundLevel() > 120 && input.soundLevel() < 191) {
            greenPauser = true;
            light.setAll(0xffa500);
            pause(3000);
            greenPauser = false;
        }
    }

    if (input.soundLevel() > 191) {
        greenPauser = true;
        orangePauser = true;
        redPauser = true;
    }

    if (redPauser) {
        light.setAll(0xff0000);
        pause(500);
        light.setAll(0);
    }

})
