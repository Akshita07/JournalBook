<template>
    <div class="columns">
      <div class="column is-full">
        <h2 class="subtitle">Articles</h2>

        <div class="articles">
          <div class="card" v-for="article in articles">
            <div class="card-content">
              <h3 class="content">
                {{ article.title }}
              </h3>

            </div>

            <footer class="card-footer">
              <a class="card-footer-item">Edit</a>
            </footer>

          </div>
        </div>
      </div>
    </div>
</template>


<script>
import {APIService} from '../APIService';

const API_URL = 'http://127.0.0.1:8000';
const apiService = new APIService();

export default {

  name: 'ListArticles',
  components: {},
  data() {
    return {
      articles: [],
      numberOfArticles:0,
      };
  },
  methods: {
    getArticles(){
      apiService.getArticles().then((data) => {

        this.articles = data.data;
        this.numberOfArticles= data.count;
      });
    },
  },
  mounted() {
    this.getArticles();
  },
}
</script>
