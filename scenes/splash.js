class splash extends Phaser.Scene {
    constructor() {
        super({ ket: 'splash'})
    }

    preload() {

    }

    create() {
        this.text = this.add.text(100, 100, "welcome player. . .")
        this.text = this.add.text(100,130, "starting script . . .")
        this.text = this.add.text(100,160, "press any key to continue. . .")

        this.input.keyboard.on('keyup', function(e) {
            this.scene.start('outskirts')
        }, this)   
    }

    
}