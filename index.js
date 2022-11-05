const data = require("./db.json");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

//Get
server.get('/servicos', (req, res) => {

    return res.json(data.servicos)
});

//Post
server.post('/servicos', (req, res) => {
    const { name } = req.body;
    data.servicos.push(name);

    return res.json(data.servicos);
});

//Put
server.put('/servicos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    data.servicos[index] = name;

    return res.json(data.servicos);
});

//Delete
server.delete('/servicos/:index', (req, res) => {
    const { index } = req.params;

    data.splice(index, 1);
    return res.json({ message: "O item foi deletado" });
})

server.delete("/servicos/:index", (req, res) => {
    const item = item.deleteOne({ _id: req.params.id }, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Item não foi apagada com sucesso!"
        });
        return res.json({
            error: false,
            message: "Artigo apagado com sucesso!"
        });
    });
});

server.listen(port, () => {
    console.log(`Server is running in http://localhost:${port}`);
});
