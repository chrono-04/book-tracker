function loadFromLocalStorage() {
  return JSON.parse(localStorage.getItem("books-items") || "[]");
}

function saveToLocalStorage(arr) {
  localStorage.setItem("books-items", JSON.stringify(arr));
}

export { loadFromLocalStorage, saveToLocalStorage };
