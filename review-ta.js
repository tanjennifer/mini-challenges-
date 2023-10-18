// NUMBER 2 - MAKE MONEY ---------------------------------------------------------
// selectors & variables:
const form = document.querySelector(".main-form");
const coinContainer = document.querySelector(".coin-container");
// EVENTS:
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const coinAmount = document.querySelector("#amount").value;
  const coinType = document.querySelector("#type").value;
  for (let i = 0; i < coinAmount; i++) {
    // creating coin (section)
    const newSection = document.createElement("section");
    newSection.textContent = coinType;
    newSection.classList.add(coinType);
    // we have to still add content and class
    coinContainer.append(newSection);
  }
});




