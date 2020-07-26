export const createIsFavouritedSelector = id => state => state.favourites.favorites && state.favourites.favorites.indexOf(id) > -1
export const isLoadingFavorites = state => !!state.favourites.loading
export const getFavourites = state => state.favourites.favorites
