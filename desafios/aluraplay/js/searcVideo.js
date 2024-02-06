import { connectsApi } from "./conectApi.js";
import constructCard from "./showVideo.js";

async function searchVideo() {
  const filterValue = document.querySelector("[data-pesquisa]").value;

  const search = await connectsApi.searchVideos(filterValue);
  const list = document.querySelector("[data-list]");

  while (list.firstChild) {
    list.removeChild(list.firstChild)
  }

  search.forEach(itemVideo => list.appendChild(constructCard(itemVideo)) );
}

const buttonSearch = document.querySelector('[data-botao-pesquisa]')

buttonSearch.addEventListener('click', event => searchVideo(event))
