import app from "./src/app.js";

const PORT = 3000;

const routes = {
  "/": "Curso de Express API",
  "/livros": "Entrei na rota livros",
  "/autores": "Entrei na rota autores",
};

app.listen(PORT, () => {
  console.log("Servidor escutando!");
});
