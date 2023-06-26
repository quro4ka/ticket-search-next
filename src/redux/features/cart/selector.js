export const selectCartModule = (state) => {
  return state.cart
}

export const selectProductAmount = (state, id) => {
  return selectCartModule(state)[id] || 0
}
