/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Anita Kay
// Created on: June 2022
// Modified by: Anita Kay
// This is the Menu Scene

class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'gameScene' })

    this.background = null
    this.fairy = null
  }

  //Initialize to activate scene
  init (data) {
    this.cameras.main.setBackgroundColor('#abcfa9')
  }

  //Print to the console what scene we are going to be on
  preload () {
    console.log('Game Scene')

    //Load images
    this.load.image('forestBackground', 'images/forestBackground.jpg')
    this.load.image('fairy', 'images/fairy.png')
    
  }

  // Show the images to the user and center them
  create (data) {
    this.background = this.add.image(0, 0, 'forestBackground').setScale(3.5)
    this.background.setOrigin(0,0)

    // Show the sprite
    this.fairy = this.physics.add.sprite(1920 / 2, 1080 - 200, 'fairy').setScale(0.7)
  }

  // Update so that the sprite can move. Called 60 times a second.
  update (time, delta) {

    const keyLeftObj = this.input.keyboard.addKey('LEFT')
    const keyRightObj = this.input.keyboard.addKey('RIGHT')

    if (keyLeftObj.isDown == true) {
      this.fairy.x -= 15
      if (this.fairy.x < 0) {
        this.fairy.x = 0
      }
    }

    if(keyRightObj.isDown == true) {
      this.fairy.x += 15
      if (this.fairy.x > 1920) {
        this.fairy.x = 1920
      }
    }
  }
}

export default GameScene