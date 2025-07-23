import fs from 'fs'
import path from 'path'

export default async (req, res) => {
  const data = req.body || {nome: "desconhecido", entrada: [1,1,1]}
  fs.writeFileSync(path.resolve('./db/dados.json'), JSON.stringify(data))
  res.status(200).json({status: "salvo"})
}
