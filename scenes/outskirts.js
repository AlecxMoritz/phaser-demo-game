class outskirts extends Phaser.Scene {
    constructor() {
        super({key: 'outskirts'})
    }

    preload() {
        this.load.image('outskirts', 'assets/town.png')
        this.load.image('sprite', 'spriteIdle.png')
    }

    create() {
        this.add.image(200,200, 'outskirts')
        this.text = this.add.text(20, 20, "level_one: outskirts")

        
        player = this.physics.add.sprite(100, 400, 'tempSrite');

        player.setBounce(0.2);
        player.setCollideWorldBounds(true);  


    }

    update(delta) {

    }

    
}