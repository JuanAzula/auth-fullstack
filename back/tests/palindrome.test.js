const { palindrome } = require('../utils/for_testing')
const { average } = require('../utils/for_testing')

test('palindrome of juanazula', () => {
  const result = palindrome('juanazula')
  console.log(result)
  expect(result).toBe('aluzanauj')
})

test('palindrome of empty string', () => {
  const result = palindrome('')
  console.log(result)
  expect(result).toBe('')
})

test('average of array', () => {
  const result = average([1, 2, 3, 4])
  console.log(result)
  expect(result).toBe(2.5)
})

describe('average', () => {
  test('of [1, 2, 3, 4, 5]', () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3)
  })
  test('of [1, 2, 3, 4, 5, 6]', () => {
    expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5)
  })
  test('of [1, 2, 3, 19,26', () => {
    expect(average([1, 2, 3, 19, 26])).toBe(10.2)
  })
})
