
export const Types = {
  LOAD_NEWS: 'LOAD_NEWS',
  SUCCESS_NEWS: 'SUCCESS_NEWS',
  ERROR_NEWS: 'ERROR_NEWS',
  SHOW_BUTTON: 'SHOW_BUTTON',
}


export const startNews = () => {
  return{
    type: 'LOAD_NEWS',
    payload: {
      articles: [],
      erro: false,
    }
  };
    
}

export const successNews = (articles) => {
  return {
    type: 'SUCCESS_NEWS',
    payload: {
      articles,
    }
  };
}

export const errorNews = () => {
  return {
    type: 'ERROR_NEWS',
    payload: {
      articles: [],
      erro: true,
    }
  };
}

export const showButton = (pagination) => {
  return {
    type: 'SHOW_BUTTON',
    payload: {
      pagination,
    }
  }
}


export const fetchNews = () => {
  return dispatch => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=35440d07648e430bbf3aad8c32c0b8a5', {apikey: '35440d07648e430bbf3aad8c32c0b8a5' })
    .then(res => res.json())
    .then((data) => dispatch(successNews(data.articles)))
    .catch(() => dispatch(errorNews()));
  }
}
