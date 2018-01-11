class ForagerBee extends Bee {
  // TODO..
  constructor () {
    super ();
    this.age = 10;
    this.job = 'find pollen';
    // a color property inherited from bee that is set to yellow
    // a food property that is inherited from grub
    this.canFly = true;
    this.treasureChest = [];

  }
  // an eat method that is inherited from grub
  forage (treasure) {
    this.treasureChest.push(treasure);
  }
};
