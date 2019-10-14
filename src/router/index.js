import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home/Home'
import UnGetted from '@/pages/home/toBeGetted/toBeGetted'
import Social from '@/pages/social/Social'
import Message from '@/pages/message/Message'
import UserHome from '@/pages/user/home/Home'
import UserMyAffairs from '@/pages/user/myAffairs/myAffairs'
import UserMyGroup from '@/pages/user/myGroup/myGroup'
import UserMyGroupDetail from '@/pages/user/myGroupDetail/myGroupDetail'
import UserMyDrafts from '@/pages/user/myDrafts/myDrafts'
import UserMyHistory from '@/pages/user/myHistory/myHistory'

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
      path: '/user/myGroup/detail',
      name: 'UserMyGroupDetail',
      component: UserMyGroupDetail
    }, {
      path: '/user/myDrafts',
      name: 'UserMyDrafts',
      component: UserMyDrafts
    }, {
      path: '/user/myHistory',
      name: 'UserMyHistory',
      component: UserMyHistory
    }, {
      path: '/social',
      name: 'Social',
      component: Social
    }, {
      path: '/message',
      name: 'Message',
      component: Message
    },{
      path:'/ungetted',
      name:'unGetted',
      component:UnGetted
    }
  ]
})
