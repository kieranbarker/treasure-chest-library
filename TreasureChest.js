class TreasureChest {
  #bronze;
  #silver;
  #gold;
  #message;

  static #loot = {
    types: ["bronze", "silver", "gold"],
    quantities: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    ],
  };

  /**
   * Randomly shuffle an array.
   * https://stackoverflow.com/a/2450976/1293256
   * @param {any[]} array The array to shuffle.
   * @returns {any[]} The shuffled array.
   */
  static #shuffle(array) {
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

  /**
   * Generate random loot.
   * @returns {{ type: string, quantity: number }} The type and quantity of loot found.
   */
  static getRandomLoot() {
    const [type] = this.#shuffle(this.#loot.types);
    const [quantity] = this.#shuffle(this.#loot.quantities);
    return { type, quantity };
  }

  /**
   * Create a new TreasureChest instance.
   * @param {Object} options Any user-provided options.
   * @param {number} [options.bronze] The initial quantity of bronze.
   * @param {number} [options.silver] The initial quantity of silver.
   * @param {number} [options.gold] The initial quantity of gold.
   * @param {string} [options.message] The message for the TreasureChest.prototype.loot property.
   */
  constructor(options = {}) {
    const defaults = {
      bronze: 0,
      silver: 0,
      gold: 0,
      message:
        "You have {{ gold }} gold, {{ silver }} silver, and {{ bronze }} bronze.",
    };

    const settings = Object.assign(defaults, options);

    this.#bronze = settings.bronze;
    this.#silver = settings.silver;
    this.#gold = settings.gold;
    this.#message = settings.message;
  }

  get bronze() {
    return this.#bronze;
  }

  set bronze(bronze) {
    if (!isNaN(bronze)) this.#bronze = Number(bronze);
  }

  get silver() {
    return this.#silver;
  }

  set silver(silver) {
    if (!isNaN(silver)) this.#silver = Number(silver);
  }

  get gold() {
    return this.#gold;
  }

  set gold(gold) {
    if (!isNaN(gold)) this.#gold = Number(gold);
  }

  get loot() {
    return this.#message
      .replace(/{{\s*gold\s*}}/g, this.gold)
      .replace(/{{\s*silver\s*}}/g, this.silver)
      .replace(/{{\s*bronze\s*}}/g, this.bronze);
  }

  /**
   * Add some bronze to the treasure chest.
   * @param {number} bronze The quantity of bronze to add.
   * @returns {TreasureChest} The current TreasureChest instance.
   */
  addBronze(bronze = 0) {
    if (!isNaN(bronze)) this.#bronze += Number(bronze);
    return this;
  }

  /**
   * Add some silver to the treasure chest.
   * @param {number} silver The quantity of silver to add.
   * @returns {TreasureChest} The current TreasureChest instance.
   */
  addSilver(silver = 0) {
    if (!isNaN(silver)) this.#silver += Number(silver);
    return this;
  }

  /**
   * Add some gold to the treasure chest.
   * @param {number} gold The quantity of gold to add.
   * @returns {TreasureChest} The current TreasureChest instance.
   */
  addGold(gold = 0) {
    if (!isNaN(gold)) this.#gold += Number(gold);
    return this;
  }
}
