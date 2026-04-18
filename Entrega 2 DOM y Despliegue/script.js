const saveBtn = document.getElementById("saveBtn");
const container = document.getElementById("productsContainer");

const COUPON = "DESC50";

saveBtn.addEventListener("click", () => {
  const image = document.getElementById("image").value;
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  let price = parseFloat(document.getElementById("price").value);
  const coupon = document.getElementById("coupon").value;

  if (!image || !title || !description || !price) {
    alert("Completa todos los campos");
    return;
  }

  // aplicar descuento
  if (coupon === COUPON) {
    price = price * 0.5;
  }

  createCard(image, title, description, price);
});

function createCard(image, title, description, price) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${image}" alt="${title}">
    <h3>${title}</h3>
    <p>${description}</p>
    <strong>$${price}</strong>
    <button class="delete-btn">Eliminar</button>
  `;

  // eliminar tarjeta
  card.querySelector(".delete-btn").addEventListener("click", () => {
    card.remove();
  });

  container.appendChild(card);
}