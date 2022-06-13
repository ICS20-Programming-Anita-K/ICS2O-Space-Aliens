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
    this.instructionSceneTextStyle = { font: '200px Georgia', fill: '#298c43', align: 'center'}
    
  }

  //Initialize to activate scene
  init (data) {
    this.cameras.main.setBackgroundColor('#abcfa9')
  }

  //Print to the console what scene we are going to be on
  preload () {
    console.log('Instruction Scene')
  // Load image
    this.load.image('instructionSceneBackground', 'images/fairies_screen_image.jpg')
  }

  // Show, center, and make the images bigger.
  create (data) {
    this.instructionSceneBackgroundImage = this.add.sprite(0, 0, 'instructionSceneBackground').setScale(2.75)
    this.instructionSceneBackgroundImage.x = 1920 / 2
    this.instructionSceneBackgroundImage.y = 1080 / 2
    // Add text
    
    this.instructionSceneText = this.add.text(1920 /2, 150, 'Forest Fairies', this.instructionSceneTextStyle).setOrigin(0.5)  
  }

    // Update so that after a certain time, the next scene plays
  update (time, delta) {
    
    }
  }
}

export default TitleScene