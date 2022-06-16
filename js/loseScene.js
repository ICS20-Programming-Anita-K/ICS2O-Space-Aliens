/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Anita Kay
// Created on: June 2022
// Modified by: Anita Kay
// This is the Lose Scene

class LoseScene extends Phaser.Scene {
  constructor () {
    super({ key: 'loseScene' })

    // Create variables to hold images
    this.loseSceneBackgroundImage = null
    this.goblinButton = null
    this.loseSceneText = null
    this.loseSceneTextStyle = { font: '120px Georgia', fill: '#ff0303', align: 'center'}
  }

  //Initialize to activate scene
  init (data) {
    this.cameras.main.setBackgroundColor('#abcfa9')
  }

  //Print to the console what scene we are going to be on
  preload () {
    console.log('Lose Scene')
    //Load images
    this.load.image('loseSceneBackground', 'images/lose_scene_background.jpeg')
    this.load.image('goblinButton', 'images/goblin.png')
    
    //Load sounds
    this.load.audio('click', 'sounds/click.wav')
  }

  //Show and center the image
  create (data) {
    this.loseSceneBackgroundImage = this.add.sprite(0, 0, 'loseSceneBackground').setScale(2.75)
    this.loseSceneBackgroundImage.x = 1920 / 2
    this.loseSceneBackgroundImage.y = 1080 / 2
    // Add text
    this.loseSceneText = this.add.text(1920 /2, 300, 'You Lose!\nClick the goblin to play again.', this.loseSceneTextStyle).setOrigin(0.5)
    
    //Show the button and make it interactive
    
    this.goblinButton = this.add.sprite(1920 / 2, (1080 / 1.8) + 150, 'goblinButton').setScale(2)
    this.goblinButton.setInteractive({useHandCursor: true })
    this.goblinButton.on('pointerdown', () => this.clickGoblinButton())
    
  }

  update (time, delta) {
  }

  clickGoblinButton () {
    this.scene.start('gameScene')
    this.sound.play('click')
  }
}

export default LoseScene