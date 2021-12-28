import metronomeSheet from '../assets/noteSheet.json'

export default class FirstLevelScene extends Phaser.Scene {
	constructor() {
		super({key: 'FirstLevelScene'});
	}

    create()
    {
        this.playerHealth = 50;
        this.visualHealth = this.playerHealth;
        this.noteCount = 0;
        this.currentCount = 0;
        this.currentSheet = this.createNotes();
        this.currentMusic = this.sound.add('metronome');

        this.keys = this.input.keyboard.addKeys('A, W, D, SPACE, J, I, L');

        this.keyPositions = [];

        this.keyPositions[0] = this.add.rectangle(60, 600, 100, 100, 0x6666ff);
        this.keyPositions[1] = this.add.rectangle(170, 600, 100, 100, 0x6666ff);
        this.keyPositions[2] = this.add.rectangle(280, 600, 100, 100, 0x6666ff);
        this.keyPositions[3] = this.add.rectangle(500, 600, 300, 100, 0x6666ff);
        this.keyPositions[4] = this.add.rectangle(720, 600, 100, 100, 0x6666ff);
        this.keyPositions[5] = this.add.rectangle(830, 600, 100, 100, 0x6666ff);
        this.keyPositions[6] = this.add.rectangle(940, 600, 100, 100, 0x6666ff);

        //this.healthBar = this.add.rectangle(500, 700, 500, 50, 0x2dff2d);
        this.healthBar = this.add.graphics();

        this.currentMusic.play()    
    }

    update()
    {
        var timing = ((this.currentMusic.getCurrentTime()) / (60 / 120) - 8); // - 8 is the offeset
        this.playNote();
        this.checkNote(timing);
//        this.updateVisHeatlth();



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
                this.playerHealth += 5;
                this.currentSheet[this.currentCount].position.destroy();
                this.currentCount++;
            }
            else
            {
                console.log("Bad A");
                this.playerHealth -= 2;
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
                this.playerHealth += 5;
                this.currentSheet[this.currentCount].position.destroy();
                this.currentCount++;
            }
            else
            {
                console.log("Bad W");
                this.playerHealth -= 2;
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
                this.playerHealth += 5;
                this.currentSheet[this.currentCount].position.destroy();
                this.currentCount++;
            }
            else
            {
                console.log("Bad D");
                this.playerHealth -= 2;
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
                this.playerHealth += 5;
                this.currentSheet[this.currentCount].position.destroy();
                this.currentCount++;
            }
            else
            {
                console.log("Bad Space");
                this.playerHealth -= 2;
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
                this.playerHealth += 5;
                this.currentSheet[this.currentCount].position.destroy();
                this.currentCount++;
            }
            else
            {
                console.log("Bad J");
                this.playerHealth -= 2;
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
                this.playerHealth += 5;
                this.currentSheet[this.currentCount].position.destroy();
                this.currentCount++;
            }
            else
            {
                console.log("Bad I");
                this.playerHealth -= 2;
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
                this.playerHealth += 5;
                this.currentSheet[this.currentCount].position.destroy();
                this.currentCount++;
            }
            else
            {
                console.log("Bad L");
                this.playerHealth -= 2;
            }
        }
        this.healthCheck();
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
        if(!this.currentSheet[this.currentCount])
        {
            //console.log("End of song")
            this.cameras.main.fadeEffect.start(true, 2000, 0x11, 0x11, 0x11);
            this.addEvent(2000, function() {
                this.currentMusic.stop();
                this.scene.start("WinScene");
            });
        }  
        else if (timing >= this.currentSheet[this.currentCount].time + .5)
        {
            console.log("Missed note: " + timing);
            this.playerHealth -= 10;
            this.currentCount++;
        }
    }


    updateVisHeatlth()
    {
        this.healthBar.clear()
        this.healthBar.fillStyle(0x2dff2d);
        this.healthBar.fillRect(0, 675, this.visualHealth * 10, 50);
    }

    healthCheck()
    {
        if (this.playerHealth <= 0)
        {
            console.log("Lose");
            this.playerHealth = 0;
            
            this.cameras.main.fadeEffect.start(true, 2000, 0x11, 0x11, 0x11);
            this.addEvent(2000, function() {
                this.currentMusic.stop();
                this.scene.start("LoseScene");
            });
        }
        else if (this.playerHealth > 100)
        {
            console.log(this.playerHealth);
            this.playerHealth = 100;
        }
        else
        {
            if (this.playerHealth != this.visualHealth)
            {
                if (this.playerHealth > this.visualHealth)
                {
                    this.visualHealth += 0.25;
                }
                else
                {
                    this.visualHealth -= 0.25;
                }
            }
        }
        this.updateVisHeatlth();
    }
}