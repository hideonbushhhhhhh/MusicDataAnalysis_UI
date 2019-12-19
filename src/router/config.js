import Login from '../views/Login';
import Manage from '../views/Manage/index';
import User from '../views/User';
import Detail from '../views/User/detail';
import List from '../views/List';
import Hygs from '../views/Wordscloud/subpage'
import Dashboard from '../views/Dashboard';
import WordCloud from '../views/Wordscloud/index'
import WorldGeo from  '../views/worldgeo/index'
import Singers from '../views/Singers'
import Ranklists from '../views/Ranklists'
import EDU from '../views/Dashboard/subpage/edu'
import MostT from "../views/MostT";
const menuConfig = [


  {
    path: '/manage/hygs',
    component: WordCloud,
    title: '词云展示',
    icon: 'dashboard',
  },
  {
    path: '/manage/worldgeo',
    component: WorldGeo,
    title: '歌手地区分析',
    icon: 'dashboard',
  },
  {
    path: '/manage/dashboard',
    component: Dashboard,
    title: '歌曲分析模块',
    icon: 'dashboard',
  },
  {
    path: '/manage/Singers',
    component: Singers,
    title: '歌手分析模块',
    icon: 'dashboard',
  },
  {
    path: '/manage/mostt',
    component: MostT,
    title: '各类之最',
    icon: 'dashboard',
  },
  {
    path: '/manage/list',
    component: List,
    title: '搜索页',
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
