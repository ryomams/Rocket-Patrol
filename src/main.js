console.log("peepee")

//config is config is ocnifingi
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    parent: "gamegohere",
    scene: [Menu, Play],
}

// let there be light!
let game = new Phaser.Game(config);

//Set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;





