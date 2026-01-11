import { addBook } from "./addBook.js";
import { renderInterface } from "./render.js";

const submitBtn = document.querySelector(".submit-btn");

renderInterface();

submitBtn.addEventListener("click", addBook);
