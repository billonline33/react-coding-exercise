const initialState = {
  eventsApi: process.env.CLIENT_EVENTS_API_URL,
  favoritesApi: process.env.CLIENT_FAVORITES_API_URL
}

const config = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default config
