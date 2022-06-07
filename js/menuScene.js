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
  }

  //Initialize to activate scene
  init (data) {
    this.cameras.main.setBackgroundColor('#B2AC88')
  }

  //Print to the console what scene we are going to be on
  preload () {
    console.log('Menu Scene')
  }

  
  create (data) {
  }

  update (time, delta) {
  }
}

export default MenuScene