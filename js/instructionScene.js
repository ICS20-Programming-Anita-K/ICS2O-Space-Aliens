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
    this.instructionSceneTextStyle = { font: '50px Georgia', fill: '#298c43', align: 'center'}
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

  // Show, center, and make the images bigger.
  create (data) {
    this.instructionSceneBackgroundImage = this.add.sprite(0, 0, 'instructionSceneBackground').setScale(2.75)
    this.instructionSceneBackgroundImage.x = 1920 / 2
    this.instructionSceneBackgroundImage.y = 1080 / 2
    
    // Add text
    this.instructionSceneText = this.add.text(1920 /2, 50, 'Hello and welcome to Forest Fairies. To play the game, you (the forest fairy), must dodge and shoot spells at evil goblins in order to keep playing. Every time you collide with a goblin, you will lose one of five lives. Everytime you shoot a goblin, you will gain one point. For a bonus of 10 points, collect mushrooms. Once you reach 100 point while you still have more than zero lives, you win!', this.instructionSceneTextStyle).setOrigin(0.5).setScale(0.2) 

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