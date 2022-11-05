const data = require("./db.js");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

//Get
server.get('/rotas', (req, res) => {

    return res.json(data.rotas)
});

//Post
server.post('/rotas', (req, res) => {
    const { name } = req.body;
    data.servicos.push(name);

    return res.json(data.rotas);
});

//Put
server.put('/rotas/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    data.rotas[index] = name;

    return res.json(data.rotas);
});

//Delete
server.delete('/rotas/:index', (req, res) => {
    const { index } = req.params;

    data.splice(index, 1);
    return res.json({ message: "Item deletado." });
})

server.delete("/rotas/:index", (req, res) => {
    const item = item.deleteOne({ _id: req.params.id }, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Erro."
        });
        return res.json({
            error: false,
            message: "Item apagado."
        });
    });
});

server.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});
