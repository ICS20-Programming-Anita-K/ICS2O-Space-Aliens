/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Anita Kay
// Created on: June 2022
// Modified by: Anita Kay
// This is the Instruction Scene

class InstructionScene extends Phaser.Scene {
  constructor () {
    super({ key: 'instructionScene' })

    // Create variables to hold images and text
    this.instructionSceneBackgroundImage = null
    this.instructionSceneText = null
    this.instructionSceneTextStyle = { font: '50px Georgia', fill: '#ffffff', align: 'center'}
    this.backButton = null
  }

  //Initialize to activate scene
  init (data) {
    this.cameras.main.setBackgroundColor('#abcfa9')
  }

  //Print to the console what scene we are going to be on
  preload () {
    console.log('Instruction Scene')
    
  // Load images
    this.load.image('instructionSceneBackground', 'images/forest2.jpg')
    this.load.image('backButton', 'images/back.png')

    //Load sounds
    this.load.audio('click', 'sounds/click.wav')
  }

  create (data) {
    // Show, center, and make the images bigger
    this.instructionSceneBackgroundImage = this.add.sprite(0, 0, 'instructionSceneBackground').setScale(2.75)
    this.instructionSceneBackgroundImage.x = 1920 / 2
    this.instructionSceneBackgroundImage.y = 1080 / 2
    
    // Add text
    this.instructionSceneText = this.add.text(1920 /2, 250, 'Hello, and welcome to Forest Fairies! \nTo play the game, you (the forest fairy), must \ndodge and shoot spells at evil goblins in order to keep playing. \nEvery time you collide with a goblin, \nyou will lose one of three lives. Every time \nyou shoot a goblin, you will gain five points. For bonus points, \ncollect mushrooms. Get 100 points before you run\n of lives to win!', this.instructionSceneTextStyle).setOrigin(0.5).setScale(0.8)

    //Add a button to get back to menuScene.js
    this.backButton = this.add.sprite(1920 / 2 , (1080 / 1.5) + 100, 'backButton')
    this.backButton.setInteractive({useHandCursor: true })
    this.backButton.on('pointerdown', () => this.clickButtonTwo())
  }

    // Update so that after a certain time, the next scene plays
  update (time, delta) {
  }
   //Function for the back button
  clickButtonTwo () {
    this.scene.start('menuScene')
    this.sound.play('click')
  }
}

export default InstructionScene