class Product {
  // properties
  productItems = [];

  // constructor
  constructor() {}

  // methods
  // (1) addProduct method
  addProduct(name, description, image, price, sold, quantity) {
    const item = {
      name: name,
      description: description,
      image: image,
      price: price,
      sold: sold,
      quantity: quantity,
    };

    this.productItems.push(item);
  } // end of addProduct method

  // (2) displayProduct method
  displayProduct() {
    console.log(this.productItems);

    let productDetails = "";
    let index = 0;
    let moreBtnId = "";
    this.productItems.forEach((item) => {
      moreBtnId = "item" + index;
      console.log(`moreBtnId displayProduct = ${moreBtnId}`);

      productDetails += `
        <!-- item start -->
        <div class="card col-lg-3 col-md-6 col-12 border">
          <img
            src="${item.image}"
            class="card-img-top"
            alt="item image"
          />
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.name}</p>
            <a id="${moreBtnId}" href="#" class="btn btn-primary" data-toggle="modal" data-target="#productModal">More</a>
          </div>
        </div>
        <!-- item end -->
      `;
      index++;

      document.querySelector("#row").innerHTML = productDetails;
    }); // end of forEach loop

    // display item information when button clicked
    index = 0;
    this.productItems.forEach((item) => {
      moreBtnId = "#item" + index;

      // console log
      console.log(`moreBtnId = ${moreBtnId}`);
      console.log(item);
      console.log(document.querySelector("#moreBtnId"));

      document.querySelector(moreBtnId).addEventListener("click", function () {
        displayItemDetail(item);
      });

      index++;
    });
  } // end of displayProduct method
} // end of Product class

// displayItemDetail function for modal
const displayItemDetail = (item) => {
  // console log
  console.log(item.name);
  console.log(item.description);
  console.log(item.image);
  console.log(item.price);
  console.log(item.sold);
  console.log(item.quantity);

  document.querySelector("#itemName").innerText = item.name;
  document.querySelector("#itemDescription").innerText = item.description;
  document.querySelector("#itemImage").src = item.image;
  document.querySelector("#itemPrice").innerText = item.price;
  document.querySelector("#itemSold").innerText = item.sold;
  document.querySelector("#itemQuantity").innerText = item.quantity;
};
