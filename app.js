resultados = "";

function pesquisar() {
  let termoPesquisa = document
    .querySelector('input[type="text"]')
    .value.toLowerCase();


  let section = document.getElementById("resultados-pesquisa");
  section.innerHTML = "";

  if (termoPesquisa.trim() === "") {
    return;
  }

  let resultadosFiltrados = dados.filter((dado) =>
    dado.titulo.toLowerCase().startsWith(termoPesquisa)
  );

  if (resultadosFiltrados.length === 0) {
    section.innerHTML = "<p>Nenhum resultado encontrado.</p>";
    return;
  }

  let resultados = "";
  for (let dado of resultadosFiltrados) {
    resultados += `
        <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Aprenda mais sobre na Alura</a>
        </div>
        `;
  }

  section.innerHTML = resultados;
}

// let section = document.getElementById("resultados-pesquisa");

// let resultados = "";

// for (let dado of dados) {
//   resultados += `
//     <div class="item-resultado">
//           <h2>${dado.titulo}</h2>
//           <p class="descricao-meta">${dado.descricao}</p>
//           <a href="${dado.link}" target="_blank">Aprenda mais sobre na Alura</a>
//         </div>
// `;
// }

// section.innerHTML = resultados;
