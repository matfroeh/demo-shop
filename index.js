import { getResponseFromGetRequest } from "./modules/network.js";
import {
  setLocalStorageItem,
  getLocalStorageFromSingleKey,
} from "./modules/storage.js";
import { createItemCard } from "./modules/ui.js";

const cardContainer = document.getElementById("card-container");
const storeData = await getResponseFromGetRequest(
  "https://fakestoreapi.com/products"
);
const shoppingCartArray = getLocalStorageFromSingleKey("shoppingCart") || [];

storeData.forEach((element) => {
  const itemId = self.crypto.randomUUID();
  const [newItemCard, itemName, btnAddToCart] = createItemCard(element, itemId);
  cardContainer.appendChild(newItemCard);

  btnAddToCart.addEventListener("click", (e) => {
    const item = {
      itemName: itemName,
      itemId: itemId,
    };
    shoppingCartArray.unshift(item);
    setLocalStorageItem("shoppingCart", shoppingCartArray);
    btnAddToCart.classList.remove("bg-blue-500");
    btnAddToCart.classList.remove("hover:bg-blue-600");
    btnAddToCart.classList.add("bg-red-500");
    btnAddToCart.classList.add("hover:bg-red-600");
    btnAddToCart.textContent = "Article added to Shopping Cart";

  });

});
