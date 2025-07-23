import fs from 'fs'
import path from 'path'
import { pesosPadrao } from '../../utils/neural'

export default async (req, res) => {
  const entrada = req.body?.entrada || [1, 0, 1]
  // Simula pequeno ajuste
  pesosPadrao["0.weight"][0][0] += 0.01
  fs.writeFileSync(path.resolve('./db/dados.json'), JSON.stringify(pesosPadrao))
  res.status(200).json({msg: "treinado", pesos: pesosPadrao})
}
