import { connectsApi } from "./conectApi.js";

const form = document.querySelector("[data-form]");

async function creatVideo(event) {
  event.preventDefault();
  const imagem = document.querySelector("[data-imagem]").value;
  const url = document.querySelector("[data-url]").value;
  const title = document.querySelector("[data-title]").value;
  const descricao = Math.floor(Math.random() * 10).toString();
 
  await connectsApi.creatVideos(title, descricao, url, imagem);
  console.log(imagem);
  console.log(url);
  console.log(title);
  console.log(descricao);
  console.log(creatVideo(event));

  window.location.href = "../pages/envio-concluido.html";
}

form.addEventListener("submit", (event) => creatVideo(event));
