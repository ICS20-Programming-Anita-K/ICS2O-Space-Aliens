/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Anita Kay
// Created on: June 2022
// Modified by: Anita Kay
// This is the Menu Scene

class GameScene extends Phaser.Scene {

  //Create a goblin
  createGoblin () {
    //Random number generators for location and velocity.
    const goblinXLocation = Math.floor(Math.random() * 1920) + 1
    let goblinXVelocity = Math.floor(Math.random() * 50) + 1
    goblinXVelocity *= Math.round(Math.random()) ? 1 : -1
    const aGoblin = this.physics.add.sprite(goblinXLocation, -100, 'goblin')
    aGoblin.body.velocity.y = 200
    aGoblin.body.velocity.x = goblinXVelocity
    this.goblinGroup.add(aGoblin)
  }
  constructor () {
    super({ key: 'gameScene' })

    this.fairy = null
    this.fireSparkles = false
    this.score = 0
    this.scoreText = null
    this.scoreTextStyle = { font: '65px Times', fill: '#ff0303', align: 'center'}
    this.gameOverTextStyle = { font: '65px Arial', fill: '#ff0000', align: 'center'}
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
    this.load.image('sparkles', 'images/sparkles.png')
    this.load.image('goblin', 'images/goblin.png')
    //Load sound files
    this.load.audio('twinkle', 'sounds/twinkle.wav')
    this.load.audio('groan', 'sounds/groan.wav')
    this.load.audio('lose', 'sounds/lose.wav')
  }

  // Show the images to the user and adjust them
  create (data) {
    this.background = this.add.image(0, 0, 'forestBackground').setScale(3.5)
    this.background.setOrigin(0,0)

    //Show the score
    this.scoreText = this.add.text(10, 10, 'Score: ' + this.score.toString(), this.scoreTextStyle)

    // Show the sprite
    this.fairy = this.physics.add.sprite(1920 / 2, 1080 - 200, 'fairy').setScale(0.7)

    // Create a group for the sparkles
    this.sparklesGroup = this.physics.add.group() 

    //Create a group for the goblins.
    this.goblinGroup = this.add.group()
    this.createGoblin()

    //Code that runs if there is a collision between the sparkles and goblins.
    this.physics.add.collider(this.sparklesGroup, this.goblinGroup, function (sparklesCollide, goblinCollide) {
      goblinCollide.destroy()
      sparklesCollide.destroy()
      this.sound.play('groan')
      this.score = this.score + 1
      this.scoreText.setText('Score: ' + this.score.toString())
      this.createGoblin()
    }.bind(this))

    //Code that runs if there is a collision between the fairies and goblins.
    this.physics.add.collider(this.fairy, this.goblinGroup, function (fairyCollide, goblinCollide) {
      this.sound.play('lose')
      this.physics.pause()
      goblinCollide.destroy()
      fairyCollide.destroy()
      this.gameOverText = this.add.text(1920 / 2, 1080 / 2, 'Game Over!\nClick to play again.', this.gameOverTextStyle).setOrigin(0.5)
      this.gameOverText.setInteractive({ userHandCursor: true })
      this.score = 0
      this.gameOverText.on('pointerdown', () => this.scene.start('gameScene'))
    }.bind(this))
  }

  // Update so that the sprite can move. Called 60 times a second.
  update (time, delta) {

    const keyLeftObj = this.input.keyboard.addKey('LEFT')
    const keyRightObj = this.input.keyboard.addKey('RIGHT')
    const keySpaceObj = this.input.keyboard.addKey('SPACE')

    //Use an if statement so that the sprite can move left.
    if (keyLeftObj.isDown === true) {
      this.fairy.x -= 15
      if (this.fairy.x < 0) {
        this.fairy.x = 1920
      }
    }

    //Use an if statement so that the sprite can move right.
    if (keyRightObj.isDown === true) {
      this.fairy.x += 15
      if (this.fairy.x > 1920) {
        this.fairy.x = 0
      }
    }

    //Use an if statement so that the sprite shoots sparkles.
    if (keySpaceObj.isDown === true) {
      if (this.fireSparkles === false) {
        // Fire sparkles
        this.fireSparkles = true
        const aNewSparkles = this.physics.add.sprite(this.fairy.x, this.fairy.y, 'sparkles')
        this.sparklesGroup.add(aNewSparkles)
        //Add sound to sparkles
        this.sound.play('twinkle')
      }
    }

    if (keySpaceObj.isUp === true) {
      this.fireSparkles = false
    }
    //Allow sparkles to move upwards.
    this.sparklesGroup.children.each(function (item) {
      item.y = item.y - 15
      // Destroy sparkles once they have left the screen.
      if (item.y < 0) {
        item.destroy()
      }
    })
  }
}

export default GameScene