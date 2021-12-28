import metronomeSheet from '../assets/noteSheet.json'

export default class TutorialScene extends Phaser.Scene {
	constructor() {
		super({key: 'TutorialScene'});
	}

    create()
    {
        this.noteCount = 0;
        this.currentCount = 0;
        this.didGood = 0;
        this.currentSheet = this.createNotes();
        this.currentMusic = this.sound.add('metronome');

        this.dialogue = this.add.text(500, 350, "", { font: "20px Courier" }).setOrigin(0.5);

        this.keys = this.input.keyboard.addKeys('A, W, D, SPACE, J, I, L');

        this.keyPositions = [];

        this.keyPositions[0] = this.add.rectangle(60, 600, 100, 100, 0x6666ff);
        this.keyPositions[1] = this.add.rectangle(170, 600, 100, 100, 0x6666ff);
        this.keyPositions[2] = this.add.rectangle(280, 600, 100, 100, 0x6666ff);
        this.keyPositions[3] = this.add.rectangle(500, 600, 300, 100, 0x6666ff);
        this.keyPositions[4] = this.add.rectangle(720, 600, 100, 100, 0x6666ff);
        this.keyPositions[5] = this.add.rectangle(830, 600, 100, 100, 0x6666ff);
        this.keyPositions[6] = this.add.rectangle(940, 600, 100, 100, 0x6666ff);

        this.keyNames = [];

        this.keyNames[0] = this.add.text(60, 600, "A", { font: "20px Courier" }).setOrigin(0.5).setAlpha(0.3);
        this.keyNames[1] = this.add.text(170, 600, "W", { font: "20px Courier" }).setOrigin(0.5).setAlpha(0.3);
        this.keyNames[2] = this.add.text(280, 600, "D", { font: "20px Courier" }).setOrigin(0.5).setAlpha(0.3);
        this.keyNames[3] = this.add.text(500, 600, "SPACE", { font: "20px Courier" }).setOrigin(0.5).setAlpha(0.3);
        this.keyNames[4] = this.add.text(720, 600, "J", { font: "20px Courier" }).setOrigin(0.5).setAlpha(0.3);
        this.keyNames[5] = this.add.text(830, 600, "I", { font: "20px Courier" }).setOrigin(0.5).setAlpha(0.3);
        this.keyNames[6] = this.add.text(940, 600, "L", { font: "20px Courier" }).setOrigin(0.5).setAlpha(0.3);       

        this.keyRegister = [];

        this.keyRegister[0] = this.add.text(60,  675, "", { font: "12px Courier" }).setOrigin(0.5);
        this.keyRegister[1] = this.add.text(170, 675, "", { font: "12px Courier" }).setOrigin(0.5);
        this.keyRegister[2] = this.add.text(280, 675, "", { font: "12px Courier" }).setOrigin(0.5);
        this.keyRegister[3] = this.add.text(500, 675, "", { font: "12px Courier" }).setOrigin(0.5);
        this.keyRegister[4] = this.add.text(720, 675, "", { font: "12px Courier" }).setOrigin(0.5);
        this.keyRegister[5] = this.add.text(830, 675, "", { font: "12px Courier" }).setOrigin(0.5);
        this.keyRegister[6] = this.add.text(940, 675, "", { font: "12px Courier" }).setOrigin(0.5); 

        this.currentMusic.play()
    }

    update()
    {
        var timing = ((this.currentMusic.getCurrentTime()) / (60 / 120) - 8); // - 8 is the offeset
        if (timing < 0)
            console.log("Timing: " + timing)

        this.playNote();
        this.checkNote(timing);



        this.keyPositions[0].setAlpha((this.keys.A.isDown) ? 1 : 0.2);
        if(Phaser.Input.Keyboard.JustDown(this.keys.A))
        {
            if (!this.currentSheet[this.currentCount])
            {
                console.log("End Tap A");
            }
            else if (timing < -0.5)
            {
                console.log("Negative A");
            }
            else if (-0.5 <= (timing - this.currentSheet[this.currentCount].time) &&
                             (timing - this.currentSheet[this.currentCount].time) <= 0.5 &&
                             this.currentSheet[this.currentCount].note == "A")
            {
                console.log("Good A");
                this.keyRegister[0].setText("Good!");
                this.addEvent(500, function() {
                    this.keyRegister[0].setText("");
                });
                this.currentSheet[this.currentCount].position.destroy();
                this.currentCount++;
                this.didGood++;
            }
            else
            {
                console.log("Bad A");
                this.keyRegister[0].setText("Bad!");
                this.addEvent(500, function() {
                    this.keyRegister[0].setText("");
                });
            }
        }
        this.keyPositions[1].setAlpha((this.keys.W.isDown) ? 1 : 0.2);
        if(Phaser.Input.Keyboard.JustDown(this.keys.W))
        {
            if (!this.currentSheet[this.currentCount])
            {
                console.log("End Tap W");
            }
            else if (timing < -0.5)
            {
                console.log("Negative W");
            }
            else if (-0.5 <= (timing - this.currentSheet[this.currentCount].time) &&
                                (timing - this.currentSheet[this.currentCount].time) <= 0.5 &&
                                this.currentSheet[this.currentCount].note == "W")
            {
                console.log("Good W");
                this.keyRegister[1].setText("Good!");
                this.addEvent(500, function() {
                    this.keyRegister[1].setText("");
                });
                this.currentSheet[this.currentCount].position.destroy();
                this.currentCount++;
                this.didGood++;
            }
            else
            {
                console.log("Bad W");
                this.keyRegister[1].setText("Bad!");
                this.addEvent(500, function() {
                    this.keyRegister[1].setText("");
                });
            }     
        }
        this.keyPositions[2].setAlpha((this.keys.D.isDown) ? 1 : 0.2);
        if(Phaser.Input.Keyboard.JustDown(this.keys.D))
        {
            if (!this.currentSheet[this.currentCount])
            {
                console.log("End Tap D");
            }
            else if (timing < -0.5)
            {
                console.log("Negative D");
            }
            else if (-0.5 <= (timing - this.currentSheet[this.currentCount].time) &&
                                (timing - this.currentSheet[this.currentCount].time) <= 0.5 &&
                                this.currentSheet[this.currentCount].note == "D")
            {
                console.log("Good D");
                this.keyRegister[2].setText("Good!");
                this.addEvent(500, function() {
                    this.keyRegister[2].setText("");
                });
                this.currentSheet[this.currentCount].position.destroy();
                this.currentCount++;
                this.didGood++;
            }
            else
            {
                console.log("Bad D");
                this.keyRegister[2].setText("Bad!");
                this.addEvent(500, function() {
                    this.keyRegister[2].setText("");
                });
            }
        }
        this.keyPositions[3].setAlpha((this.keys.SPACE.isDown) ? 1 : 0.2);
        if(Phaser.Input.Keyboard.JustDown(this.keys.SPACE))
        {
            if (!this.currentSheet[this.currentCount])
            {
                console.log("End Tap Space");
            }
            else if (timing < -0.5)
            {
                console.log("Negative Space");
            }
            else if (-0.5 <= (timing - this.currentSheet[this.currentCount].time) &&
                                (timing - this.currentSheet[this.currentCount].time) <= 0.5 &&
                                this.currentSheet[this.currentCount].note == "Space")
            {
                console.log("Good Space");
                this.keyRegister[3].setText("Good!");
                this.addEvent(500, function() {
                    this.keyRegister[3].setText("");
                });
                this.currentSheet[this.currentCount].position.destroy();
                this.currentCount++;
                this.didGood++;
            }
            else
            {
                console.log("Bad Space");
                this.keyRegister[3].setText("Bad!");
                this.addEvent(500, function() {
                    this.keyRegister[3].setText("");
                });
            }
        }
        this.keyPositions[4].setAlpha((this.keys.J.isDown) ? 1 : 0.2);
        if(Phaser.Input.Keyboard.JustDown(this.keys.J))
        {
            if (!this.currentSheet[this.currentCount])
            {
                console.log("End Tap J");
            }
            else if (timing < -0.5)
            {
                console.log("Negative J");
            }
            else if (-0.5 <= (timing - this.currentSheet[this.currentCount].time) &&
                                (timing - this.currentSheet[this.currentCount].time) <= 0.5 &&
                                this.currentSheet[this.currentCount].note == "J")
            {
                console.log("Good J");
                this.keyRegister[4].setText("Good!");
                this.addEvent(500, function() {
                    this.keyRegister[4].setText("");
                });
                this.currentSheet[this.currentCount].position.destroy();
                this.currentCount++;
                this.didGood++;
            }
            else
            {
                console.log("Bad J");
                this.keyRegister[4].setText("Bad!");
                this.addEvent(500, function() {
                    this.keyRegister[4].setText("");
                });
            }
        }
        this.keyPositions[5].setAlpha((this.keys.I.isDown) ? 1 : 0.2);
        if(Phaser.Input.Keyboard.JustDown(this.keys.I))
        {
            if (!this.currentSheet[this.currentCount])
            {
                console.log("End Tap I");
            }
            else if (timing < -0.5)
            {
                console.log("Negative I");
            }
            else if (-0.5 <= (timing - this.currentSheet[this.currentCount].time) &&
                                (timing - this.currentSheet[this.currentCount].time) <= 0.5 &&
                                this.currentSheet[this.currentCount].note == "I")
            {
                console.log("Good I");
                this.keyRegister[5].setText("Good!");
                this.addEvent(500, function() {
                    this.keyRegister[5].setText("");
                });
                this.currentSheet[this.currentCount].position.destroy();
                this.currentCount++;
                this.didGood++;
            }
            else
            {
                console.log("Bad I");
                this.keyRegister[5].setText("Bad!");
                this.addEvent(500, function() {
                    this.keyRegister[5].setText("");
                });
            }
        }
        this.keyPositions[6].setAlpha((this.keys.L.isDown) ? 1 : 0.2);
        if(Phaser.Input.Keyboard.JustDown(this.keys.L))
        {
            if (!this.currentSheet[this.currentCount])
            {
                console.log("End Tap L");
            }
            else if (timing < -0.5)
            {
                console.log("Negative L");
            }
            else if (-0.5 <= (timing - this.currentSheet[this.currentCount].time) &&
                                (timing - this.currentSheet[this.currentCount].time) <= 0.5 &&
                                this.currentSheet[this.currentCount].note == "L")
            {
                console.log("Good L");
                this.keyRegister[6].setText("Good!");
                this.addEvent(500, function() {
                    this.keyRegister[6].setText("");
                });
                this.currentSheet[this.currentCount].position.destroy();
                this.currentCount++;
                this.didGood++;
            }
            else
            {
                console.log("Bad L");
                this.keyRegister[6].setText("Bad!");
                this.addEvent(500, function() {
                    this.keyRegister[6].setText("");
                });
            }
        }
    }

    addEvent(delay, callback, callbackScope=this) {
		return this.time.addEvent({delay, callback, callbackScope});
	}

    createNotes()
    {
        var sheet = [];
        
        metronomeSheet.forEach(element => {
            var position;
            var timeline;
            var time = (element.time);
            var note = (element.note);

            switch(element.note)
            {
                case "A":
                    position = this.add.rectangle(60, -50, 100, 100, 0x6666ff);
                    position.setStrokeStyle(3, 0xFF0000);
                    timeline = this.tweens.createTimeline({  })
            
                    timeline.add({
                        targets: position,
                        y: 550,
                        duration: 2000,
                        ease: 'Linear'
                    });

                    timeline.add({
                        targets: position,
                        y: 1150,
                        duration: 1500,
                        ease: 'Linear'
                    });
                    break;
                case "W":
                    position = this.add.rectangle(170, -50, 100, 100, 0x6666ff);
                    position.setStrokeStyle(3, 0xFF0000);
                    timeline = this.tweens.createTimeline({  })
            
                    timeline.add({
                        targets: position,
                        y: 550,
                        duration: 2000,
                        ease: 'Linear'
                    });

                    timeline.add({
                        targets: position,
                        y: 1150,
                        duration: 1500,
                        ease: 'Linear'
                    });
                    break;
                case "D":
                    position = this.add.rectangle(280, -50, 100, 100, 0x6666ff);
                    position.setStrokeStyle(3, 0xFF0000);
                    timeline = this.tweens.createTimeline({  })
            
                    timeline.add({
                        targets: position,
                        y: 550,
                        duration: 2000,
                        ease: 'Linear'
                    });

                    timeline.add({
                        targets: position,
                        y: 1150,
                        duration: 1500,
                        ease: 'Linear'
                    });
                    break;
                case "Space":
                    position = this.add.rectangle(500, -50, 300, 100, 0x6666ff);
                    position.setStrokeStyle(3, 0xFF0000);
                    timeline = this.tweens.createTimeline({  })
            
                    timeline.add({
                        targets: position,
                        y: 550,
                        duration: 2000,
                        ease: 'Linear'
                    });

                    timeline.add({
                        targets: position,
                        y: 1150,
                        duration: 1500,
                        ease: 'Linear'
                    });
                    break;
                case "J":
                    position = this.add.rectangle(720, -50, 100, 100, 0x6666ff);
                    position.setStrokeStyle(3, 0xFF0000);
                    timeline = this.tweens.createTimeline({  })
            
                    timeline.add({
                        targets: position,
                        y: 550,
                        duration: 2000,
                        ease: 'Linear'
                    });

                    timeline.add({
                        targets: position,
                        y: 1150,
                        duration: 1500,
                        ease: 'Linear'
                    });
                    break;
                case "I":
                    position = this.add.rectangle(830, -50, 100, 100, 0x6666ff);
                    position.setStrokeStyle(3, 0xFF0000);
                    timeline = this.tweens.createTimeline({  })
            
                    timeline.add({
                        targets: position,
                        y: 550,
                        duration: 2000,
                        ease: 'Linear'
                    });

                    timeline.add({
                        targets: position,
                        y: 1150,
                        duration: 1500,
                        ease: 'Linear'
                    });
                    break;
                case "L":
                    position = this.add.rectangle(940, -50, 100, 100, 0x6666ff);
                    position.setStrokeStyle(3, 0xFF0000);
                    timeline = this.tweens.createTimeline({  })
            
                    timeline.add({
                        targets: position,
                        y: 550,
                        duration: 2000,
                        ease: 'Linear'
                    });

                    timeline.add({
                        targets: position,
                        y: 1150,
                        duration: 1500,
                        ease: 'Linear'
                    });
                    break;
            }
            sheet.push({position, timeline, time, note})
        });
        return sheet;
    }

    playNote()
    {   
        if(!this.currentSheet[this.noteCount])
            {
                //console.log("End of song")
            }        
        else if (((this.currentMusic.getCurrentTime() - 4) / (60 / 120)) >= (this.currentSheet[this.noteCount].time - 4))
        {
                this.currentSheet[this.noteCount].timeline.play();
                this.noteCount++;
        }
    }

    checkNote(timing)
    {
        if(!this.currentSheet[this.currentCount] && this.didGood >= 5)
        {
            this.currentMusic.stop();
            this.cameras.main.fadeEffect.start(true, 2000, 0x11, 0x11, 0x11);
            this.addEvent(2000, function() {
                this.scene.start("FirstTextScene");
            });
        }
        else if(!this.currentSheet[this.currentCount])
        {
            
            this.dialogue.setText("Not great. Let's try that again")
            this.currentMusic.stop();
            this.addEvent(2000, function() {
 
                this.scene.restart();
            });
        }  
        else if (timing >= this.currentSheet[this.currentCount].time + .5)
        {
            this.playerHealth -= 10;
            this.currentCount++;
        }
    }
}