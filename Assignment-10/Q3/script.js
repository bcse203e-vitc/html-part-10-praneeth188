document.getElementById("pizzaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const size = document.querySelector('input[name="size"]:checked').value;
  const toppings = Array.from(
    document.querySelectorAll('input[name="toppings"]:checked')
  ).map((checkbox) => checkbox.value);

  const summary = `
        <h2>Order Summary</h2>
        <p><strong>Size:</strong> ${size}</p>
        <p><strong>Toppings:</strong> ${
          toppings.length ? toppings.join(", ") : "No toppings selected"
        }</p>
    `;

  document.getElementById("orderSummary").innerHTML = summary;
});
