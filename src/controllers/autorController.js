import { autor, autorSchema } from "../models/Autor.js"

class AutorController {
  static async listarAutores(req, res) {
    try {
      const listaLivros = await autor.find({})
      res.status(200).json(listaLivros)
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição` })
    }
  }

  static async listarAutorPorId(req, res) {
    try {
      const livroEncontrado = await autor.findById(req.params.id)
      res.status(200).json(livroEncontrado)
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição do autor` })
    }
  }

  static async cadastrarAutor(req, res) {
    try {
      const novoLivro = await autor.create(req.body)
      res.status(201).json({ message: "Criado com sucesso.", autor: novoLivro })
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar autor` })
    }
  }

  static async atualizarAutor(req, res) {
    try {
      await autor.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).json({ message: "Livro atualizado" })
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na atualização do autor` })
    }
  }

  static async excluirAutor(req, res) {
    try {
      await autor.findByIdAndDelete(req.params.id)
      res.status(200).json({ message: "Livro excluído com sucesso" })
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na exclusão do autor` })
    }
  }
}

export default AutorController
