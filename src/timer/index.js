class Timer {
  /**
   * Represents a timer
   * @constructor
   * @param {HTMLElement} Timer - HTMLElement input representing the timer
   * @param {HTMLElement} PlayButton - HTMLElement button representing the play button
   * @param {HTMLElement} pauseButton - HTMLElement button representing the pause button
   */
  constructor(timer, playButton, pauseButton) {
    this.timer = timer;
    this.playButton = playButton;
    this.pauseButton = pauseButton;
  }

  start() {}

  pause() {}

  tick() {}

  get timeRemaining() {}

  set timeRemaining(timeRemaining) {}
}

export default Timer;
