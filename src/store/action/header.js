export const Types = {
  FILTER_SUCCESS: 'FILTER_SUCCESS',
  FILTER_ERROR: 'FILTER_ERROR',
  SET_FILTER: 'SET_FILTER',
}

export const filterSuccess = (articles) => {
  return {
    type: 'FILTER_SUCCESS',
    payload: {
      articles,
    }
  }
}

export const filterError = () => {
  return {
    type: 'FILTER_ERROR',
    payload: {
      articles: [{
        source: [],
      }],
      error: true,
    }
  }
}

export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    payload: {
      filter,
    }
  }
}

export const fetchFilter = () => {
  return dispatch => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=35440d07648e430bbf3aad8c32c0b8a5', {apikey: '35440d07648e430bbf3aad8c32c0b8a5' })
    .then(res => res.json())
    .then((data) => dispatch(filterSuccess(data.articles)))
    .catch(() => dispatch(filterError()));
  }
}