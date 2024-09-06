function pesquisar() {

    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-de-pesquisa").value
    console.log(campoPesquisa)



    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return
    }

    let resultados = "";
    let descricao = "";

    for (let dado of dados) {

        descricao = dado.descricao.toLowerCase()

        if (dado.titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {

            resultados += `
            <div class="item-resultado">
                <h3>${dado.titulo}</h3>
                <p><strong>Sinopse</strong></p>
                <p>${dado.descricao}</p>
                <p>Veja o Trailer abaixo: </p>
                <figure>
                    <iframe width="560" height="315"
                        src="${dado.trailer}"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                        alt="Trailer da Série Travelers"></iframe>
                </figure>
                <a href="${dado.link}">Para mais
                    informações da série clique Aqui.</a>
            </div>`

        }
    }
    section.innerHTML = resultados;

}
