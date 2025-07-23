module.exports = {
  executarRede: (entrada, pesos) => {
    const w = pesos["0.weight"][0]
    const b = pesos["0.bias"][0]
    let soma = 0
    for (let i = 0; i < entrada.length; i++) soma += entrada[i] * w[i]
    soma += b
    return 1 / (1 + Math.exp(-soma)) // sigmoid
  },
  pesosPadrao: {
    "0.weight": [[1, 1, 1]],
    "0.bias": [0]
  }
}
