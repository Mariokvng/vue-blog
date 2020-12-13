import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Posts from '@/components/Posts'
import Create from '@/components/Create'
import Edit from '@/components/Edit'
import Topics from '@/components/Topics'
import CreateTopic from '@/components/CreateTopic'
import EditTopic from '@/components/EditTopic'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/posts/edit/:id',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/topics',
      name: 'Topics',
      component: Topics
    },
    {
      path: '/topics/create',
      name: 'CreateTopic',
      component: CreateTopic
    },
    {
      path: '/topics/edit/:id',
      name: 'EditTopic',
      component: EditTopic
    }
  ]
})
