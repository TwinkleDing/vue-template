import Maps from '@/views/map';
import Charts from '@/views/chart';
import Lists from '@/views/list';
import Forms from '@/views/form';
export default [
  {
    path: '/maps',
    name: 'Maps',
    component: Maps
  },
  {
    path: '/charts',
    name: 'Charts',
    component: Charts
  },
  {
    path: '/lists',
    name: 'Lists',
    component: Lists
  },
  {
    path: '/forms',
    name: 'Forms',
    component: Forms
  }
];