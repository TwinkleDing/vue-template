import Maps from '@/views/map';
import Charts from '@/views/chart';
import Lists from '@/views/list';
import Forms from '@/views/form';
export default [
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
  }
];