import mongoose from "mongoose"

async function conectaNaDatabase() {
  mongoose.connect(
    "mongodb+srv://admin:admin123@cluster0.prl6rfu.mongodb.net/livraria?retryWrites=true&w=majority"
  )
  return mongoose.connection
}

export default conectaNaDatabase
