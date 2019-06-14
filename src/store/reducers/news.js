const initialState = {
    articles: [],
    pagination: 1,
}
    
export default function news(state = initialState, action) {
  switch (action.type) {

    case 'SUCCESS_NEWS':
      return {
        ...state,
        articles: action.payload.articles,
        error: false,
      }
    case 'ERROR_NEWS':
      return {
        ...state,
        articles: [],
        error: true,
      }
      
    case 'SHOW_BUTTON':
      return {
        ...state,
        pagination: action.payload.pagination,
        error: false,
      }  
    default:
      return state;
  }
};