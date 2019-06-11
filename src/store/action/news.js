
export const Types = {
  LOAD_NEWS: 'LOAD_NEWS',
  ERROR_NEWS: 'ERROR_NEWS',
}


export const startNews = () => {
  return{
    type: 'LOAD_NEWS',
  };
}

export const errorNews = () => {
  return {
    type: 'ERROR_NEWS'
  }
}


export const fetchNews = () => {
  return dispatch => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=35440d07648e430bbf3aad8c32c0b8a5', {apikey: '35440d07648e430bbf3aad8c32c0b8a5' })
    .then(res => res.json())
    .then((data) => {
      console.log(data)
    })
     .catch((error) => {
       dispatch()
     })
  }
}