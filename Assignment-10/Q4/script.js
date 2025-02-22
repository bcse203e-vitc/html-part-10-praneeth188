function generateTable() {
  const number = parseInt(document.getElementById("number").value);
  let tableHTML = "<table><tr><th>×</th>";

  for (let i = 1; i <= 10; i++) {
    tableHTML += `<th>${i}</th>`;
  }
  tableHTML += "</tr>";

  tableHTML += `<tr><td><strong>${number}</strong></td>`;
  for (let i = 1; i <= 10; i++) {
    tableHTML += `<td>${number * i}</td>`;
  }
  tableHTML += "</tr></table>";

  document.getElementById("tableOutput").innerHTML = tableHTML;
}
