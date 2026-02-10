class VendingMachine {
  #items = [];
  #money = 0.0;

  constructor(items, money) {
    this.#items = structuredClone(items);
    this.#money = money;
  }

  vend(itemCode, cash) {
    const targetItem = this.#findItem(itemCode);

    if (!targetItem) {
      return `Invalid selection! : Money in vending machine = ${this.#money.toFixed(2)}`;
    }

    if (!this.#isCashEnough(targetItem, cash)) {
      return "Not enough money!";
    }

    if (this.#isOutOfStock(targetItem)) {
      return `${targetItem.name}: Out of stock!`;
    }

    const change = this.#itemCheckout(targetItem, cash);

    return (
      `Vending ${targetItem.name}` +
      (change ? ` with ${change.toFixed(2)} change.` : "")
    );
  }

  #isCashEnough(item, cash) {
    return cash >= item.price;
  }

  #isOutOfStock(item) {
    return item.quantity <= 0;
  }

  #itemCheckout(item, cash) {
    const change = cash - item.price;

    item.quantity--;
    this.#money += cash - change;

    return change > 0 && change;
  }

  #findItem(itemCode) {
    return this.#items.find(
      (item) => item.code.toUpperCase() === itemCode.toUpperCase(),
    );
  }
}

const items = [
  { name: "Smarties", code: "A01", quantity: 10, price: 0.6 },
  { name: "Caramac Bar", code: "A02", quantity: 5, price: 0.6 },
  { name: "Dairy Milk", code: "A03", quantity: 1, price: 0.65 },
  { name: "Freddo", code: "A04", quantity: 1, price: 0.25 },
];

const machine = new VendingMachine(items, 10);
const output = machine.vend("A01", 0.9);
console.log(output);
