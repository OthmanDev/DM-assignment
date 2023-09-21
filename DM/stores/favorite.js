import { defineStore, acceptHMRUpdate } from 'pinia'

export const useFavoriteStore = defineStore({
  id: 'favorite',
  state: () => ({
    favoriteCars: [],
  }),
  getters: {
    getFavoriteCars () {
      return this.favoriteCars
    }
  },
  actions: {
    toggleFavoriteCar(car) {
      const carIndex = this.favoriteCars.findIndex((c) => c.id === car.id)
      if (carIndex === -1) {
        this.favoriteCars.push(car)
      } else {
        this.favoriteCars.splice(carIndex, 1)
      }
    }
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFavoriteStore, import.meta.hot))
}
