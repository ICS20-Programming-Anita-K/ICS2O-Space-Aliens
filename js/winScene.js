/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Anita Kay
// Created on: June 2022
// Modified by: Anita Kay
// This is the Win Scene

class WinScene extends Phaser.Scene {
  constructor () {
    super({ key: 'winScene' })

    // Create variables to hold images
    this.winSceneBackgroundImage = null
    this.fairyButton = null
    this.winSceneText = null
    this.winSceneTextStyle = { font: '120px Georgia', fill: '#ffffff', align: 'center'}
  }

  //Initialize to activate scene
  init (data) {
    this.cameras.main.setBackgroundColor('#abcfa9')
  }

  //Print to the console what scene we are going to be on
  preload () {
    console.log('Win Scene')
    //Load images
    this.load.image('winSceneBackground', 'images/win_scene_background.jpg')
    this.load.image('fairyButton', 'images/fairy.png')
    
    //Load sounds
    this.load.audio('click', 'sounds/click.wav')
  }

  //Show and center the image
  create (data) {
    this.winSceneBackgroundImage = this.add.sprite(0, 0, 'winSceneBackground').setScale(3)
    this.winSceneBackgroundImage.x = 1920 / 2
    this.winSceneBackgroundImage.y = 1080 / 2
    // Add text
    this.winSceneText = this.add.text(1920 /2, 300, 'You Win!\nClick the fairy to play again.', this.winSceneTextStyle).setOrigin(0.5)
    
    //Show the button and make it interactive
    
    this.fairyButton = this.add.sprite(1920 / 2, (1080 / 1.8) + 150, 'fairyButton')
    this.fairyButton.setInteractive({useHandCursor: true })
    this.fairyButton.on('pointerdown', () => this.clickFairyButton())
    
  }

  update (time, delta) {
  }

  clickFairyButton () {
    this.scene.start('gameScene')
    this.sound.play('click')
  }
}

export default WinScene