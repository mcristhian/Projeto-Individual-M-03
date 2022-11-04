const axios = require('axios');

axios.delete('http://localhost:3000/rotas/1')
    .then(resp => {
        console.log('Deletado.');
    })
    .catch(error => {
        console.log(`O seguinte erro aconteceu: ${error}`);
    })
