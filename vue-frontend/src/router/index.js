import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListArticles from '@/components/ListArticles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      //name: 'HelloWorld',
      name: 'ListArticles',
      //component: HelloWorld
      component: ListArticles
    }
  ]
})
