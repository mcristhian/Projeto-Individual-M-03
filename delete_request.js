const axios = require('axios');

axios.delete('https://projeto-individual-m-03.onrender.com/rotas/1')
    .then(resp => {
        console.log('Deletado.');
    })
    .catch(error => {
        console.log(`O seguinte erro aconteceu: ${error}`);
    })
