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
  }

  //Initialize to activate scene
  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  //Print to the console what scene we are going to be on
  preload () {
    console.log('Title Scene')
  }

  
  create (data) {
  }

  update (time, delta) {
  }
}

export default TitleScene