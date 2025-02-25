// GET ALL PLANETS
// https://dragonball-api.com/api/planets

// FILTRAR PLANETAS
// https://dragonball-api.com/api/planets?isDestroyed=true


// crea la tarjeta del planeta
function crearCard(elemento) {
/*
planeta.image
planeta.name
planeta.id
*/
  return ` <div class="card">
        <div class="card-image">
            <figure class="image">
                <img src="${elemento.image}" alt="${elemento.name}">
            </figure>
        </div>
        <div class="card-content">
            <h4 class="title is-4"><a href="#" id="${elemento.id}">${elemento.name}</a></h3>
        </div>
    </div>     
`;
}

// modal para cuando hago click sobre el planeta
function modalPlanet(planeta) {}

// esta función medio funciona

// mostrarCharacters();
