const initialState = {
    articles: [],
}
    
export default function news(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_NEWS':
      return {
        articles: [],
        erro: false,
      }

    case 'SUCCESS_NEWS':
      return {
        articles: action.payload.articles,
        error: false,
      }
    case 'ERROR_NEWS':
      return {
        articles: [],
        error: true,
      }     
    default:
      return state;
  }
};