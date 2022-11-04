const axios = require('axios');
let arg = process.argv.slice(2);

axios.get(`http://localhost:3000/${arg}`)
    .then(resp => {
        data = resp.data;
        console.log(data);
    })
    .catch(error => {
        console.log(`O seguinte erro aconteceu: ${error}`);
    });
