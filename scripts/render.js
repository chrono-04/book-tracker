import { loadFromLocalStorage } from "./storage.js";

function clearField() {
  const bookName = document.getElementById("bookName");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");

  bookName.value = "";
  author.value = "";
  pages.value = "";
}

function renderInterface() {
  const database = loadFromLocalStorage();
  const table = document.querySelector(".table-el");

  while (table.children.length > 1) {
    table.removeChild(table.lastChild);
  }

  database.map(({ id, ...item }) => {
    const tr = document.createElement("tr");
    Object.values(item).forEach((value) => {
      const td = document.createElement("td");
      td.textContent = value;
      tr.appendChild(td);
    });

    const actionTd = document.createElement("td");
    const editBtn = document.createElement("button");
    const delBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.dataset.id = id;
    delBtn.textContent = "Delete";
    delBtn.dataset.id = id;
    actionTd.appendChild(editBtn);
    actionTd.appendChild(delBtn);
    tr.appendChild(actionTd);

    table.appendChild(tr);

    editBtn.addEventListener("click", () => {
      console.log(editBtn.dataset.id);
    });
    delBtn.addEventListener("click", () => {
      console.log(delBtn.dataset.id);
    });
  });
}

export { renderInterface };
