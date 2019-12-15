import Login from '../views/Login';
import Manage from '../views/Manage';
import User from '../views/User';
import Detail from '../views/User/detail';
import List from '../views/List';
import Dashboard from '../views/Dashboard';

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
  }, {
    path: '/manage/dashboard',
    component: Dashboard,
    title: '统计模块',
    icon: 'dashboard',
  }, {
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