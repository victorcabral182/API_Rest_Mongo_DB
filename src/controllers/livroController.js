import livro from "../models/Livro.js"
import { autor } from "../models/Autor.js"

class LivroController {
  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({})
      res.status(200).json(listaLivros)
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição` })
    }
  }

  static async listarLivroPorId(req, res) {
    try {
      const livroEncontrado = await livro.findById(req.params.id)
      res.status(200).json(livroEncontrado)
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição do livro` })
    }
  }

  static async cadastrarLivro(req, res) {
    const novoLivro = req.body
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor)
      const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } }
      const livroCriado = await livro.create(livroCompleto)
      res
        .status(201)
        .json({ message: "Criado com sucesso.", livro: livroCriado })
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar livro` })
    }
  }

  static async atualizarLivro(req, res) {
    try {
      await livro.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).json({ message: "Livro atualizado" })
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na atualização do livro` })
    }
  }

  static async excluirLivro(req, res) {
    try {
      await livro.findByIdAndDelete(req.params.id)
      res.status(200).json({ message: "Livro excluído com sucesso" })
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na exclusão do livro` })
    }
  }
}

export default LivroController
