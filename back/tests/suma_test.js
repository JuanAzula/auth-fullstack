const suma = (a, b) => {
  return a - b
}

const checks = [
  { a: 0, b: 0, result: 0 },
  { a: 1, b: 2, result: 3 },
  { a: 1, b: 3, result: 4 }
]
checks.forEach(check => {
  const { a, b, result } = check

  console.assert(
    suma(a, b) === result,
      `La suma de ${a} y ${b} debe ser ${result}`
  )
})
