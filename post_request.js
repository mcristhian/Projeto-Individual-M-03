const axios = require('axios');
let arg = process.argv.slice(2);

axios.post(`https://projeto-individual-m-03.onrender.com/${arg}`, {
    id: 5,
    name: "Avulso 2",
    description: "Plano alternativo",
    price: "R$ 50.000"
})
    .then(resp => {
        console.log('Adicionado.');
    })
    .catch(error => {
        console.log(`O seguinte erro aconteceu: ${error}`);
    })
