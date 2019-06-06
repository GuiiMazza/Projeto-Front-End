const initialState = {
    news: {},
    filters: {},
    pagination: 1,
    source: "",
}
    
    export default (state = initialState, action) => {
      switch (action.type) {
        case `NEWS_FATCH_FULFILLED`:
          return state.merge({
            news: action.payload.data.entries,
          });
        default:
          return state;
      }
    };