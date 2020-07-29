import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '../components/HomePage'
import ColorManiak from '../components/ColorManiak'
import CrazyCalculater from '../components/CrazyCalculater'
import Users from '../components/usrs/Users'
import UserProfile from '../components/usrs/UserProfile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'HelloWorld',component: HelloWorld},
    {path: '/home', name: 'HomePage', component: HomePage},
    {path: '/color', name: 'ColorManiak', component: ColorManiak},
    {path: '/calculator', name: 'CrazyCalculater', component: CrazyCalculater},
    {path: '/users', name: 'Users', component: Users},
    {path: '/users/:id', name: 'User-Profile', component: UserProfile},
  ]
})
