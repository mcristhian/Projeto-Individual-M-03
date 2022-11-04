const g = require('axios');
const po = require('axios');
const pu = require('axios');
const d = require('axios');
// let arg = process.argv.slice(2);
let g_arg = 'rotas';

let po_arg = 'planos';

let pu_arg = 'rotas';
let pu_arg_id = 2;

let d_arg = 'planos';
let d_arg_id = 4;

//Get
function f_get(){
    g.get(`http://localhost:3000/${g_arg}`)
    .then(resp_g => {
        data = resp_g.data;
        console.log(data);
    })
    .catch(error => {
        console.log(`O seguinte erro aconteceu: ${error}`);
    });
}

//Post
function f_post(){
    po.post(`http://localhost:3000/${po_arg}`, {
    id: 6,
    name: "Avulso 3",
    description: "Plano alternativo",
    price: "R$ 55.000"
    })
    .then(resp_po => {
        console.log('Adicionado.');
    })
    .catch(error => {
        console.log(`O seguinte erro aconteceu: ${error}`);
    });
}


//Put
function f_put(){
    pu.put(`http://localhost:3000/${pu_arg}/${pu_arg_id}`, {
    // id: 1,
    name: "RJ x VT",
    description: 'Trajeto médio.',
    distance: "436,85 km"
    })
    .then(resp_pu => {
        console.log('Modificado.')
    })
    .catch(error => {
        console.log(`O seguinte erro aconteceu: ${error}`);
    });
}


//Delete
function f_delete(){
    d.delete(`http://localhost:3000/${d_arg}/${d_arg_id}`)
    .then(resp_d => {
        console.log('Deletado.');
    })
    .catch(error => {
        console.log(`O seguinte erro aconteceu: ${error}`);
    });
}

f_get();
