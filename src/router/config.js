import Login from '../views/Login';
import Manage from '../views/Manage/index';
import User from '../views/User';
import Detail from '../views/User/detail';
import List from '../views/List';
import Dashboard from '../views/Dashboard';
import WordCloud from '../views/Wordscloud'
const menuConfig = [
  {
    path: '/manage/user',
    component: User,
    title: '用户模块',
    icon: 'user',
    routes: [{
      path: '/manage/user/:id',
      component: Detail,
    }]
  },
  {
    path: '/manage/wordscloud',
    component: WordCloud,
    title: '词云',
    icon: 'dashboard',
    children:[
      {
        name: '华语歌手歌词词云',
        path: '/manage/wordscloud',
        component:WordCloud
      },{
      name:'话题热度榜'
      }


    ]
  },
  {
    path: '/manage/dashboard',
    component: Dashboard,
    title: '统计模块',
    icon: 'dashboard',
  },
  {
    path: '/manage/list',
    component: List,
    title: '列表页',
    icon: 'ordered-list',
  }
]

const config = [{
  path: '/',
  exact: true,
  component: Manage,
}, {
  path: '/login',
  exact: true,
  component: Login,
}, {
  path: '/manage',
  component: Manage,
  routes: menuConfig,
}]

export default config;
export { menuConfig }