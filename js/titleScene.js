/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Anita Kay
// Created on: June 2022
// Modified by: Anita Kay
// This is the Title Scene

class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: 'titleScene' })

    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
    this.titleSceneTextStyle = { font: '200px Times', fill: '#e1e0d3', align: 'center'}
    
  }

  //Initialize to activate scene
  init (data) {
    this.cameras.main.setBackgroundColor('#B2AC88')
  }

  //Print to the console what scene we are going to be on
  preload () {
    console.log('Title Scene')
    this.load.image('titleSceneBackground', 'images/fairies_screen_image.jpg')
  }

  // Load, center, and make the image bigger. Also, add text.
  create (data) {
    this.titleSceneBackgroundImage = this.add.sprite(0, 0, 'titleSceneBackground').setScale(2.75)
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2

    this.titleSceneText = this.add.text(1920 /2, (1080 / 2) + 350, 'Forest Fairies', this.titleSceneTextStyle).setOrigin(0.5)  
  }

  update (time, delta) {
  }
}

export default TitleScene