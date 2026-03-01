console.log("Site carregado com sucesso!");

document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector("h1");
  h1.addEventListener("click", () => {
    h1.style.color = "#" + Math.floor(Math.random()*16777215).toString(16);
  });
});