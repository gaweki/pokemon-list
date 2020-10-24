export const handleSortingId = (arr) => {
  const newArr = arr.map((val, i) => {
    return {
      ...val,
      id: i + 1
    }
  })
  return newArr
}