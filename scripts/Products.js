import { getProducts } from "./database.js";

const products = getProducts();

document.addEventListener("click", (ClickEvent) => {
  const elementClicked = ClickEvent.target;

  // let priceAnnouncement = ""

  if (elementClicked.dataset.type === "product") {
    window.alert(
      `This ${elementClicked.dataset.name} costs:\n ${elementClicked.dataset.price}`
    );
  }
});

export const Products = () => {
  let html = "<ul>";

  for (const product of products) {
    html += `<li data-type="product" data-name=${product.name} data-price=${product.price}>${product.name}</li>`;
  }

  html += "</ul>";

  return html;
};
