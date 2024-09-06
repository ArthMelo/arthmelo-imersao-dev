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

let topLinguagens = [
  {
    titulo: "JavaScript",
    descricao: "JavaScript é essencial para o desenvolvimento web.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
  },
  {
    titulo: "Python",
    descricao: "Python é amplamente utilizado em ciência de dados.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
  },
  {
    titulo: "Java",
    descricao: "Java é popular em grandes sistemas corporativos.",
    imagem: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
  }
];

function renderizarTopLinguagens() {
  const listaLinguagens = document.getElementById("lista-linguagens");
  let conteudo = "";

  topLinguagens.forEach((linguagem) => {
    conteudo += `
      <li class="linguagem-item">
        <img src="${linguagem.imagem}" alt="${linguagem.titulo}">
        <h3>${linguagem.titulo}</h3>
        <p>${linguagem.descricao}</p>
      </li>
    `;
  });

  listaLinguagens.innerHTML = conteudo;
}

window.onload = function() {
  renderizarTopLinguagens();
};







