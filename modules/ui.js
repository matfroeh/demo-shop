// DOM manipulation functions

export function createItemCard(dataObject) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add(
    
    "bg-white",
    "shadow-lg",
    "rounded-lg",
    "overflow-hidden",
    "content-end"
  );
  const cardImg = document.createElement("img");
  cardImg.classList.add("w-full", "h-32", "object-contain", "object-center");
  cardImg.src = dataObject.image;
  cardImg.alt = `Image of ${dataObject.title}`;
  const cardDetails = document.createElement("div");
  cardDetails.classList.add("p-4");
  const cardHeader = document.createElement("h3");
  cardHeader.classList.add("text-gray-700", "font-bold", "text-base");
  cardHeader.textContent = dataObject.title;
  const cardPrize = document.createElement("p");
  cardPrize.classList.add("mt-2", "text-gray-600");
  cardPrize.textContent = dataObject.price;
  const cardBtn = document.createElement("a");
  cardBtn.classList.add(
    "block",
    "mt-4",
    "px-3",
    "py-2",
    "bg-blue-500",
    "text-white",
    "text-center",
    "rounded",
    "hover:bg-blue-600"
  );
  // cardBtn.href = objectId;
  cardBtn.textContent = "Add to Shopping Cart"

  cardDetails.appendChild(cardHeader);
  cardDetails.appendChild(cardPrize);
  cardDetails.appendChild(cardBtn);

  cardContainer.appendChild(cardImg);
  cardContainer.appendChild(cardDetails);

  return [cardContainer, dataObject.title, cardBtn];
}










{
  /* <div class="bg-white shadow-lg rounded-lg overflow-hidden">
<img class="w-full h-56 object-cover object-center" src="https://via.placeholder.com/400x300" alt="Product Image">
<div class="p-4">
    <h3 class="text-gray-700 font-bold text-xl">Product Name 1</h3>
    <p class="mt-2 text-gray-600">$29.99</p>
    <a href="#" class="block mt-4 px-3 py-2 bg-blue-500 text-white text-center rounded hover:bg-blue-600">Add to Cart</a>
</div>
</div> */
}

// function createItemInContainer(containerObject, itemText, idemId) {
//     const newItem = document.createElement("li");

//     if (!tasksArray.find((element) => element.taskId === taskId)) {
//       taskObject = {
//         taskTitle: itemText,
//         taskId: self.crypto.randomUUID(),
//       };
//       tasksArray.push(taskObject);
//     } else {
//       taskObject = {
//         taskTitle: itemText,
//         taskId: taskId,
//       };
//     }

//     newItem.className =
//       "flex items-center justify-between bg-gray-100 p-2 mt-2 rounded-md";
//     const span = document.createElement("span");
//     span.className = "flex-grow";

//     const btnDelete = document.createElement("button");
//     btnDelete.textContent = "Delete";
//     btnDelete.className = "text-red-500 ml-2";
//     btnDelete.addEventListener("click", () =>
//       deleteTodoItem(newItem, taskObject.taskId)
//     );

//     span.textContent = itemText;

//     newItem.appendChild(span);
//     newItem.appendChild(btnDelete);
//     listObject.insertBefore(newItem, listObject.firstChild);

//     newItem.scrollIntoView({ behavior: "instant", block: "end" });
//   }
