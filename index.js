import { getResponseFromGetRequest } from './modules/network.js';
import { setLocalStorageItem, getLocalStorageFromSingleKey} from './modules/storage.js';
import { createItemCard } from './modules/ui.js';

const cardContainer = document.getElementById("card-container");

const storeData = await getResponseFromGetRequest('https://fakestoreapi.com/products');

console.log(storeData);

storeData.forEach(element => {
    const itemId = self.crypto.randomUUID();
    const newItemCard = createItemCard(element, itemId);

    cardContainer.appendChild(newItemCard);
});

shoppingCartArray = [];











