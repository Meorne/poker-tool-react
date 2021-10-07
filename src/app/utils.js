export const getRealRandom = (min, max, prevRand) => {
  if (min === max) return max

  const newRand = Math.floor(Math.random() * (max - min) + min)
  if (newRand === prevRand) {
    return getRealRandom(min, max, newRand)
  }
  return newRand
}

export const a = {}
