import { createStore } from "redux";

const input = document.querySelector("#ans");
const form = document.querySelector("form");
const ul = document.querySelector("#ansList");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("first");
});
