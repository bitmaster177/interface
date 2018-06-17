import Layout from './components/Layout'
import Feed from './components/Feed'
import Callback from './components/Callback'
import Single from './components/Single'
import Editor from './components/Editor'
import Profile from './components/Profile'

const routes = [
  {
    component: Layout,
    routes: [
      {
        path: '/',
        exact: true,
        component: Feed
      },
      {
        path: '/callback',
        exact: true,
        component: Callback
      },
      {
        path: '/@:author/:permlink',
        component: Single
      },
      {
        path: '/:category/@:author/:permlink',
        component: Single
      },
      {
        path: '/write',
        exact: true,
        component: Editor
      },
      {
        path: '/@:username',
        exact: true,
        component: Profile
      }
    ]
  }
]

export default routes
