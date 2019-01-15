var config = {
    type: Phaser.AUTO,
    width: 700,
    height: 450,
    physics: {
        default: 'arcade',
            arcade: {
                gravity: { y : 200}
            }
    },
    scene: [ splash, outskirts ]
}

var game = new Phaser.Game(config)