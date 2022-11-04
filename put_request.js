const axios = require('axios');

axios.put('https://projeto-individual-m-03.onrender.com/rotas/1', {
    id: 1,
    name: "RJ x SP",
    description: 'Trajeto pequeno.',
    distance: "428,25 km"
})
    .then(resp => {
        console.log('Modificado.')
    })
    .catch(error => {
        console.log(`O seguinte erro aconteceu: ${error}`);
    })
