import Types from '../action/news';


const initialState = {
    news: {},
    filters: {},
    pagination: 1,
    source: "",
}
    
    export default (state = initialState, action) => {
      switch (action.type) {
        case Types.LOAD_NEWS:
          return {
            ...state,
            articles: state.news.articles,
          }
        default:
          return state;
      }
    };