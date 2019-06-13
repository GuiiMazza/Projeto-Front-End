const initialState = {
  articles: [{
    source: {},
  }],
}

export default function news(state = initialState, action) {
  switch (action.type) {

    case 'FILTER_SUCCESS':
      return {
        articles: action.payload.articles,
        error: false,
      }
    case 'FILTER_ERROR':
      return {
        articles: [{
          sources: [],
        }],
        error: true,
      }     
    default:
      return state;
  }
};