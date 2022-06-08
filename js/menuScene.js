/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Anita Kay
// Created on: June 2022
// Modified by: Anita Kay
// This is the Menu Scene

class MenuScene extends Phaser.Scene {
  constructor () {
    super({ key: 'menuScene' })

    // Create variables to hold images
    this.menuSceneBackgroundImage = null
    this.startButton = null
  }

  //Initialize to activate scene
  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  //Print to the console what scene we are going to be on
  preload () {
    console.log('Menu Scene')
    //Load images
    this.load.image('menuSceneBackground', 'images/fairies_screen_image2.jpg')
    this.load.image('startButton', 'images/start.png')
  }

  //Load and center the image
  create (data) {
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'menuSceneBackground')
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2
    //Load the button and make it interactive
    
    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, 'startButton')
    this.startButton.setInteractive({useHandCursor: true })
    this.startButton.on('pointerdown', () => this.clickButton())
    
  }

  update (time, delta) {
  }

  clickButton () {
    this.scene.start('gameScene')
  }
}

export default MenuScene