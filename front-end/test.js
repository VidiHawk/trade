// const obj = { USD: "0.00" };

// console.log(Object.keys(obj)[0]);

// let todoList = [
//   {
//     item_name: "Apple",
//     price: "$5",
//     quantity: 1,
//     brand_details: { name: "Golden Delicious", location: "San Francisco" },
//     isChecked: true,
//   },

//   {
//     item_name: "Bannana",
//     price: "$3",
//     quantity: 2,
//     brand_details: { name: "Fuji", location: "San Diego" },
//     isChecked: false,
//   },

//   {
//     item_name: "Pears",
//     price: "$7",
//     quantity: 4,
//     brand_details: { name: "Golden Delicious", location: "San Francisco" },
//     isChecked: true,
//   },

//   {
//     item_name: "Milk",
//     price: "$4",
//     quantity: 3,
//     brand_details: { name: "Mother Dairy", location: "California" },
//     isChecked: false,
//   },
// ];

// todoList.map(({ price, quantity, item_name }) => {
//   console.log(`${item_name} with quantity ${quantity} with price ${price}`);
// });

// var example = {
//   foo1: {
//     /* stuff1 */
//   },
//   foo2: {
//     /* stuff2 */
//   },
//   foo3: {
//     /* stuff3 */
//   },
// };

// let [first] = Object.keys(todoList[0]);
// console.log(first);

// for (const k in todoList) {
//   console.log(Object.keys(k));
//   break;
// }

// let a = ["loading..."];
// console.log(a[0]);

// const obj = [{ USD: "0.00" }, { EUR: "10.00" }];

// console.log(obj[0].USD);

getQuote = {
  settlementCutOffTime: "2022-08-02T15:30:00Z",
  currencyPair: "EURUSD",
  clientBuyCurrency: "USD",
  clientSellCurrency: "EUR",
  clientBuyAmount: "100.0",
  clientSellAmount: "84.35",
  fixedSide: "buy",
  clientRate: "1.1856",
  partnerRate: null,
  coreRate: "1.1856",
  depositRequired: false,
  depositAmount: "0.0",
  depositCurrency: "EUR",
  midMarketRate: "1.1858",
};
