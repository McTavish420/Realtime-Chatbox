import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/auth/login.vue'
import Registration from '../components/auth/registration.vue'
import HelloWorld from '../components/HelloWorld'
import Chatting from '../components/Chatting.vue'
import NewRoom from '../components/CreateNewRoom.vue'
import UserInfo from '../components/UserInfo'
import UpdateUserInfo from '../components/UpdateUserInfo'
import Admin from '../views/Admin.vue'
import Rooms from '../components/adminPanel/Rooms.vue'
import AllUsers from '../components/adminPanel/Users.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    component: Home,
    children: [
      {
        path: 'home',
        component: HelloWorld
      },
      {
        path: 'thisroom/:id/:roomName',
        name: 'chat',
        component: Chatting
      },
      {
        path: 'create',
        name: 'createRoom',
        component: NewRoom
      },
      {
        path: 'myaccount',
        name: 'myaccount',
        component: UserInfo
      },
      {
        path: 'update',
        name: 'update',
        component: UpdateUserInfo
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    redirect: 'admin/allrooms',
    children: [
      {
        path: 'allrooms',
        name: 'allrooms',
        component: Rooms
      },
      {
        path: 'allusers',
        name: 'allusers',
        component: AllUsers
      },
      {
        path: 'userinfo/:id/:name',
        name: 'userinfo',
        component: UserInfo
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
