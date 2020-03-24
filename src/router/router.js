import Maps from '@/views/map';
import Charts from '@/views/chart';
import Lists from '@/views/list';
import Forms from '@/views/form';
import Infos from '@/views/list/info';
import Pages from '@/views/pages';
export default [
  {
    path: '/index',
    name: 'Pages',
    component: Pages,
    meta: {
      key: 'Pages'
    }
  },
  {
    path: '/maps',
    name: 'Maps',
    component: Maps,
    meta: {
      key: 'Maps'
    }
  },
  {
    path: '/charts',
    name: 'Charts',
    component: Charts,
    meta: {
      key: 'Charts'
    }
  },
  {
    path: '/lists',
    name: 'Lists',
    component: Lists,
    meta: {
      key: 'Lists'
    }
  },
  {
    path: '/forms',
    name: 'Forms',
    component: Forms,
    meta: {
      key: 'Forms'
    }
  },
  {
    path: '/info/:name',
    name: 'Infos',
    component: Infos,
    meta: {
      key: 'Infos'
    }
  }
];