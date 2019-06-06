import axios from 'axios';



export const fetchNews = () => (dispatch) => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=35440d07648e430bbf3aad8c32c0b8a5', {apikey: '35440d07648e430bbf3aad8c32c0b8a5' }).then(
      (payload) => {
        dispatch({
          type: `NEWS_FETCH_FULFILLED`,
          payload,
        });
      },
    );
  };