const initialState = {
  articles: [{
    source: {}
  }],
  filter: "",
}

export default function header(state = initialState, action) {
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

      case 'SET_FILTER': 
        return {
          articles: state.articles,
          filter: action.payload.filter,
        }
    default:
      return state;
  }
};