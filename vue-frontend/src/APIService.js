import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';

export class APIService{

  constructor(){
  }

  getArticles() {
      const url = `${API_URL}/journal/articles/`;
      return axios.get(url).then(response => response.data);
  }

  getArticle(pk) {
      const url = `${API_URL}/journal/articles/${pk}`;
      return axios.get(url).then(response => response.data);
  }

}


