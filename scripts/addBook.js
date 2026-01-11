import { loadFromLocalStorage, saveToLocalStorage } from "./storage.js";
import { renderInterface } from "./render.js";

function clearField() {
  const bookName = document.getElementById("bookName");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");

  bookName.value = "";
  author.value = "";
  pages.value = "";
}

function addBook() {
  const bookName = document.getElementById("bookName");
  const author = document.getElementById("author");
  const pagesTotal = document.getElementById("pages");
  const status = document.getElementById("status");

  const data = {
    id: crypto.randomUUID(),
    bookName: bookName.value,
    author: author.value,
    pagesTotal: Number(pagesTotal.value),
    status: status.value,
  };

  const database = loadFromLocalStorage();
  database.push(data);
  saveToLocalStorage(database);
  renderInterface();
  clearField();
}

export { addBook };
