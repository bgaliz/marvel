import Vue from 'vue'
import Router from 'vue-router'
import Hero from '@/components/Heroes.vue'
import MarvelComicsAPI from '@/components/MarvelComicsAPI'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'MarvelComicsAPI',
      component: MarvelComicsAPI
    },
    {
      path: '/heroes',
      name: 'Hero',
      component: Hero
    }
  ]
})
