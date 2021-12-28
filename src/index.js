import Phaser from 'phaser';
import PreloadScene from "./scenes/PreloadScene.js"
import TutorialTextScene from "./scenes/TutorialTextScene"
import TutorialScene from "./scenes/TutorialScene"
import FirstTextScene from './scenes/FirestTextScene.js';
import FirstLevelScene from "./scenes/FirstLevelScene.js"
import LoseScene from "./scenes/LoseScene.js"
import WinScene from "./scenes/WinScene.js"

const config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 700,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: [
        PreloadScene,
        TutorialTextScene,
        TutorialScene,
        FirstTextScene,
        FirstLevelScene,
        WinScene,
        LoseScene
    ]
};

const game = new Phaser.Game(config);