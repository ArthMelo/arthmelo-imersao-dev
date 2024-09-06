resultados = "";

document.querySelector('input[type="text"]').addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    pesquisar();
  }
});

function pesquisar() {
    let termoPesquisa = document.querySelector('input[type="text"]').value.toLowerCase();
  
    let section = document.getElementById("resultados-pesquisa");
    section.innerHTML = "";
  
    if (termoPesquisa.trim() === "") {
      section.innerHTML = '<p class="mensagem-aviso">Por favor, insira um termo de pesquisa.</p>';
      return;
    }
  
    let resultadosFiltrados = dados.filter((dado) =>
      dado.titulo.toLowerCase().includes(termoPesquisa)
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






