// var productName = document.getElementById("productName");
// var productPrice = document.getElementById("productPrice");
// var category = document.getElementById("category");
// var description = document.getElementById("description");
// var allProducts = [];
// function addProduct() {
//   var product = {
//     productName: productName.value,
//     productPrice: productPrice.value,
//     category: category.value,
//     description: description.value,
//     image: "../image/about.jpg",
//   };
//   allProducts.push(product);
//   console.log(allProducts);
//   clearForm();
//   displayData();
// }

// function clearForm() {
//   document.getElementById("productName").value = null;
//   document.getElementById("productPrice").value = null;
//   document.getElementById("category").value = null;
//   document.getElementById("description").value = null;
// }

// function displayData() {
//   var boxData = ``;
//   for (var i = 0; i < allProducts.length; i++) {
//     boxData += `
//      <div class="col-lg-3 col-md-6 gy-3">
//           <div class="text-center border border-2 rounded-3">
//             <img
//               class="w-50 m-auto mt-3 rounded-3"
//               src="${allProducts[i].image}"
//               alt="product"
//             />
//             <p class="mt-3">${allProducts[i].productName}</p>
//             <p>product Price : <span> ${allProducts[i].productPrice}</span></p>
//             <p>product Category : <span> ${allProducts[i].category}</span></p>
//             <p>description : <span>${allProducts[i].description}</span></p>
//           </div>
//         </div>
//     `;
//   }
//   // document.getElementById("allData").innerHTML = boxData;
// }
// displayData();

const quoteBtn = document.getElementById("quoteBtn");
const paragraph = document.getElementById("paragraph");
const quotes = [
  "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.\n― Albert Einstein",
  "A room without books is like a body without a soul.\n― Marcus Tullius Cicero",
  "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.\n― Bernard M. Baruch",
  "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.\n― William W. Purkey",
  "You know you're in love when you can't fall asleep because reality is finally better than your dreams.\n― Dr. Seuss",
];
quoteBtn.addEventListener("click", function () {
  const randomFn = Math.floor(Math.random() * 6);
  paragraph.textContent = quotes[randomFn];
  console.log(randomFn);
});
