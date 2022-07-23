const TreasureChest = (function () {
  "use strict";

  const loot = {
    types: ["bronze", "silver", "gold"],
    quantities: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    ],
  };

  /**
   * Create a new TreasureChest instance.
   * @constructor
   */
  function TreasureChest() {
    this.bronze = 0;
    this.silver = 0;
    this.gold = 0;
  }

  /**
   * Generate random loot.
   * @returns {{ type: string, quantity: number }} The type and quantity of loot found.
   */
  TreasureChest.getRandomLoot = function () {
    const [type] = shuffle(loot.types);
    const [quantity] = shuffle(loot.quantities);
    return { type, quantity };
  };

  /**
   * Add some bronze to the treasure chest.
   * @param {number} bronze The quantity of bronze to add.
   * @returns {TreasureChest} The current TreasureChest instance.
   */
  TreasureChest.prototype.addBronze = function (bronze = 0) {
    this.bronze += bronze;
    return this;
  };

  /**
   * Add some silver to the treasure chest.
   * @param {number} silver The quantity of silver to add.
   * @returns {TreasureChest} The current TreasureChest instance.
   */
  TreasureChest.prototype.addSilver = function (silver = 0) {
    this.silver += silver;
    return this;
  };

  /**
   * Add some gold to the treasure chest.
   * @param {number} gold The quantity of gold to add.
   * @returns {TreasureChest} The current TreasureChest instance.
   */
  TreasureChest.prototype.addGold = function (gold = 0) {
    this.gold += gold;
    return this;
  };

  /**
   * Get the total loot in the treasure chest.
   * @returns {string} The total loot.
   */
  TreasureChest.prototype.getLoot = function () {
    return `You have ${this.gold} gold, ${this.silver} silver, and ${this.bronze} bronze.`;
  };

  /**
   * Randomly shuffle an array.
   * https://stackoverflow.com/a/2450976/1293256
   * @param {any[]} array The array to shuffle.
   * @returns {any[]} The shuffled array.
   */
  function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  return TreasureChest;
})();
