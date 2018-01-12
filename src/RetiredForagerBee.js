class RetiredForagerBee extends ForagerBee {
  // TODO..
  constructor () {
    super ();
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
    // a food property that is inherited from grub
    // an eat method that is inherited from grub
    // a treasureChest property inherited from ForagerBee that is set to an empty array []
  }
  forage () {
    super.forage()
    return 'I am too old, let me play cards instead';
  }
  gamble (treasure) {
    this.treasureChest.push(treasure);
  }
};
