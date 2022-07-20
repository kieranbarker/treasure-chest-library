const TreasureChest = (function () {
  "use strict";

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
   * Get the total quantity of loot in the treasure chest.
   * @returns {number} The total quantity of loot.
   */
  TreasureChest.prototype.getLoot = function () {
    return this.bronze + this.silver + this.gold;
  };

  return TreasureChest;
})();
