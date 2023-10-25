import http from "http";

const PORT = 3000;

const routes = {
  "/": "Curso de Express API",
  "/livros": "Entrei na rota livros",
  "/autores": "Entrei na rota autores",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(routes[req.url]);
});

server.listen(PORT, () => {
  console.log("Servidor escutando!");
});
