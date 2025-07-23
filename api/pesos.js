import { pesosPadrao } from '../../utils/neural'

export default async (req, res) => {
  res.status(200).json(pesosPadrao)
}
