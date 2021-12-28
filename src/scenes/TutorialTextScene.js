import scriptText from '../assets/script.json'

export default class TutorialTextScene extends Phaser.Scene {
	constructor() {
		super({key: 'TutorialTextScene'});
	}

    create()
    {
        this.textCount = 0;

        this.dialogue = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, ``, { font: "20px Courier" });
        this.dialogue.setOrigin(0.5);
        this.add.text(500, 675, 'Click to continue', { font: "12px Courier" }).setOrigin(0.5).setAlpha(0.3);

        this.scrollText(scriptText.tutorial[0]);
        this.input.on('pointerup', function() {
            console.log(this.textCount)
            switch(this.textCount)
            {
                case 0:
                    this.scrollText(scriptText.tutorial[1]);
                    break;
                case 1:
                    this.scrollText(scriptText.tutorial[2]);
                    break;
                case 2:
                    this.scrollText(scriptText.tutorial[3]);
                    break;
                case 3:
                    this.scene.start("TutorialScene");
            }
            this.textCount++;
        }, this)
//        this.scrollText(scriptText.tutorial[0]);
        
//        this.scrollText(scriptText.tutorial[1]);

        
    }

    addEvent(delay, callback, callbackScope=this) {
		return this.time.addEvent({delay, callback, callbackScope});
	}

    scrollText(line)
    {
        var text = "";
        for (let i = 0; i < line.length; i++)
        {
            this.addEvent(50 * (i + 1), function() {
                text += line[i];
                this.dialogue.setText(`${text}`);
            });

        }
    }

}