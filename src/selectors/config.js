export const getEventsApiUrl = state => process.env.EVENTS_API_URL || state.config.eventsApi
export const getFavoritesApiUrl = state => process.env.FAVORITES_API_URL || state.config.favoritesApi
