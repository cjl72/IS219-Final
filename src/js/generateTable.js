/* global document */
export default function generateTable(table, data) {
  for (const element of data) {
    const row = table.insertRow();
    console.log(element);
    for (const key in element) {
      const cell = row.insertCell();
      const text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
    const cell = row.insertCell();
    const b = document.createElement('button');
    b.innerText = 'Edit';
    cell.appendChild(b);
    const cell2 = row.insertCell();
    const b2 = document.createElement('button');
    b2.innerText = 'Delete';
    cell2.appendChild(b2);
  }
}
