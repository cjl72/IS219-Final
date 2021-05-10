export default function generateTable(table, data) {
  for (const element of data) {
    const row = table.insertRow();
    console.log(element);
    for (const key in element) {
      const cell = row.insertCell();
      const text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }

  }
}
