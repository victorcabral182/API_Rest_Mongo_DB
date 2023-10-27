import express from "express";
import connectOnDatabase from "./config/dbConnect.js";
import book from "./models/book.js";

const connection = await connectOnDatabase();

connection.on("error", (error) => {
  console.error("Erro de conexão", error);
});

connection.once("open", () => {
  console.log("Conexão com o banco feita com sucesso! :)");
});

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

app.get("/livros", async (req, res) => {
  const booksArray = await book.find({});
  res.status(200).json(booksArray);
});

app.get("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  res.status(200).json(books[index]);
});

app.post("/livros", (req, res) => {
  books.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso!");
});

app.put("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  books[index].title = req.body.title;
  res.status(200).json(books);
});

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  books.splice(index, 1);
  res.status(200).send("Livro removido com sucesso!");
});

export default app;
