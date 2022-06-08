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
    this.cameras.main.setBackgroundColor('#ffffff')
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

    this.fairy = this.physics.add.sprite(1920 / 2, 1080 - 100, 'fairy')
  }

  update (time, delta) {
  }
}

export default GameScene