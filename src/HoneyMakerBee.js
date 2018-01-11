class HoneyMakerBee extends Bee {
  // TODO..
  constructor () {
    super();
    this.age = 10;
    this.job = 'make honey';
    // a color property inherited from bee that is set to yellow
    // a food property that is inherited from grub
    this.honeyPot = 0;
  }
    // an eat method that is inherited from grub
    makeHoney () {
      this.honeyPot++;
    }
    giveHoney () {
      this.honeyPot--;
    }
};
