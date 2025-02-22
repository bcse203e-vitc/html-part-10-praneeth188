const statesByCountry = {
  usa: ["California", "Texas", "New York", "Florida"],
  india: ["Maharashtra", "Delhi", "Karnataka", "Tamil Nadu"],
  uk: ["England", "Scotland", "Wales", "Northern Ireland"],
};

document.getElementById("country").addEventListener("change", function () {
  const stateSelect = document.getElementById("state");
  const selectedCountry = this.value;

  stateSelect.innerHTML = '<option value="">Select State</option>';

  if (selectedCountry) {
    statesByCountry[selectedCountry].forEach((state) => {
      const option = document.createElement("option");
      option.value = state.toLowerCase();
      option.textContent = state;
      stateSelect.appendChild(option);
    });
  }
});
