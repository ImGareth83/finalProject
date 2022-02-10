class Product {
  // properties
  productItems = [];

  // constructor
  constructor() {}

  // methods
  // (1) addProduct method
  addProduct(name, description, priceShipping, soldReview, quantity) {
    const item = {
      name: name,
      description: description,
      priceShipping: priceShipping,
      soldReview: soldReview,
      quantity: quantity,
    };
    this.productItems.push(item);
  } // end of addProduct method

  // (2) displayProduct method
  displayProduct() {
    let productDetails = "";
    let index = 0;
    let moreBtnId = "";
    this.productItems.forEach((item) => {});
  } // end of displayProduct method
}
