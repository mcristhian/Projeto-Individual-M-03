const axios = require('axios');
let arg = process.argv.slice(2);

axios.get(`https://projeto-individual-m-03.onrender.com/${arg}`)
    .then(resp => {
        data = resp.data;
        console.log(data);
    })
    .catch(error => {
        console.log(`O seguinte erro aconteceu: ${error}`);
    });
