/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Anita Kay
// Created on: June 2022
// Modified by: Anita Kay
// This is the Splash Scene

class SplashScene extends Phaser.Scene {
  constructor () {
    super({ key: 'splashScene' })
  }

  //Initialize to activate scene
  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  //Print to console what scene we are going to be on and the image for our scene
  preload () {
    console.log('Splash Scene')
    this.load.image('splashSceneBackground', './images/splashSceneImage.jpg')
  }

  // Show and center the image
  create (data) {
    this.splashSceneBackgroundImage = this.add.sprite(0, 0, 'splashSceneBackground')
   this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
  }
  
  // Update so that after a certain time, the next scene plays
  update (time, delta) {
    if (time > 4000) {
      this.scene.switch('titleScene')
    }
  }
}

export default SplashScene