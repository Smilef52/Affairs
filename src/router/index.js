import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Message from '@/pages/message/Message'
import UserHome from '@/pages/user/home/Home'
import UserMyAffairs from '@/pages/user/myAffairs/myAffairs'
import UserMyGroup from '@/pages/user/myGroup/myGroup'
import UserMyDrafts from '@/pages/user/myDrafts/myDrafts'
import UserMyHistory from '@/pages/user/myHistory/myHistory'
import Person from '@/pages/person/Person'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/user',
      name: 'UserHome',
      component: UserHome
    }, {
      path: '/user/myAffairs',
      name: 'UserMyAffairs',
      component: UserMyAffairs
    }, {
      path: '/user/myGroup',
      name: 'UserMyGroup',
      component: UserMyGroup
    }, {
      path: '/user/myDrafts',
      name: 'UserMyDrafts',
      component: UserMyDrafts
    }, {
      path: '/user/myHistory',
      name: 'UserMyHistory',
      component: UserMyHistory
    }, {
      path: '/message',
      name: 'Message',
      component: Message
    }, {
      path: '/person',
      name: 'Person',
      component: Person
    }
  ]
})
