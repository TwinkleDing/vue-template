import {
  setStore,
  getStore,
  removeStore
} from '@/utils/store';

const common = {
  state: {
    userInfo: getStore( {
      name: 'userInfo'
    } ) || '',
    loginIn: getStore( {
      name: 'loginIn'
    } ) || false,
    user: getStore( {
      name: 'user'
    } ) || '',
    color: getStore( {
      name: 'color'
    } ) || '#409eff',
    route: getStore( {
      name: 'route'
    } ) || [],
    language: getStore( {
      name: 'language'
    } ) || 'zh',
  },
  mutations: {
    SET_USER_INFO: ( state, userInfo ) => {
      state.userInfo = userInfo;
      setStore( {
        name: 'userInfo',
        content: state.userInfo
      } );
    },
    SET_USER: ( state, user ) => {
      state.user = user;
      setStore( {
        name: 'user',
        content: state.user
      } );
    },
    REMOVE_USER_INFO: ( state ) => {
      state.userInfo = {};
      removeStore( {
        name: 'userInfo',
        type: 'local'
      } );
    },
    REMOVE_ROUTES: ( state ) => {
      state.route = [];
      removeStore( {
        name: 'route',
        type: 'local'
      } );
    },
    SET_COLOR: ( state, color ) => {
      state.color = color;
      setStore( {
        name: 'color',
        content: state.color
      } );
    },
    SET_ROUTE: ( state, route ) => {
      state.route = route;
      setStore( {
        name: 'route',
        content: state.route
      } );
    },
    SET_LOGIN_IN: ( state, loginIn ) => {
      state.loginIn = loginIn;
      setStore( {
        name: 'loginIn',
        content: state.loginIn
      } );
    },
    SET_LANGUAGE: ( state, language ) => {
      state.language = language;
      var head = document.getElementsByTagName( 'head' )[ 0 ];

      function loadStyles( url ) {
        var link = document.createElement( 'link' );
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = url;
        head.appendChild( link );
      }
      if ( process.env.NODE_ENV === 'production' ) {
        for ( let i in head.children ) {
          if ( head.children[ i ].attributes ) {
            if ( head.children[ i ].attributes[ 0 ] ) {
              if ( head.children[ i ].attributes[ 0 ].name === 'href' ) {
                if ( head.children[ i ].attributes[ 0 ].value.includes( 'public.css' ) ) {
                  head.removeChild( head.children[ i ] );
                  console.log( head.children[ i ] );
                }
              }
            }
          }
        }
        if ( language === 'en' ) {
          loadStyles( '/css/ar_public.css' );
        } else {
          loadStyles( '/css/public.css' );
        }
      }
      setStore( {
        name: 'language',
        content: state.language
      } );
    }
  },
  actions: {
    userInfo( {
      commit
    }, userInfo ) {
      return new Promise( resolve => {
        commit( 'SET_LOGIN_IN', true );
        commit( 'SET_USER_INFO', userInfo );
        resolve();
      } );
    },
    logOut( {
      commit
    } ) {
      return new Promise( resolve => {
        commit( 'SET_LOGIN_IN', false );
        commit( 'REMOVE_ROUTES' );
        commit( 'REMOVE_USER_INFO' );
        resolve();
      } );
    },
    route( {
      commit
    }, type ) {
      return new Promise( ( resolve, reject ) => {
        const routes1 = [ {
            path: '',
            name: 'Pages',
            component: 'Pages',
            children: [ {
                label: '首页',
                name: 'Homes',
                path: '/dashboard',
                key: 'Homes',
                component: 'home/index',
              },
              {
                label: '嵌套路由一',
                name: 'normal',
                path: '/normal',
                redirect: '/listss',
                key: 'normal',
                children: [ {
                    label: '嵌套路由二',
                    path: '/listss',
                    key: 'Lists',
                    redirect: '/lists',
                    children: [ {
                      label: '表格',
                      name: 'Lists',
                      path: '/lists',
                      key: 'Listss',
                      component: 'list/index',
                    }, ]
                  },
                  {
                    label: '表单',
                    name: 'Forms',
                    path: '/forms',
                    key: 'Forms',
                    component: 'form/index',
                  },
                ]
              },
              {
                label: '文本编辑器',
                name: 'MarkDowns',
                path: '/markdowns',
                key: 'MarkDowns',
                component: 'markdown/index',
              },
              {
                label: 'Tab',
                name: 'Tab',
                path: '/tab',
                redirect: '/info',
                key: 'Tab',
              },
              {
                label: '图表',
                name: 'Charts',
                path: '/charts',
                key: 'Charts',
                component: 'chart/index',
              },
              {
                label: '地图',
                name: 'Maps',
                path: '/maps',
                key: 'Maps',
                component: 'map/index',
              },
              {
                label: '模型',
                name: 'Model',
                path: '/models',
                key: 'Models',
                component: 'model/index',
              }
            ]
          },
          {
            path: '*',
            name: 'NotFound',
            redirect: '/404', //重定向
          }
        ];
        const routes2 = [ {
          path: '',
          name: 'Pages',
          component: 'Pages',
          children: [ {
              label: '首页',
              name: 'Homes',
              path: '/dashboard',
              key: 'Homes',
              component: 'home/index',
            },
            {
              label: '图表',
              name: 'Charts',
              path: '/charts',
              key: 'Charts',
              component: 'chart/index',
            },
            {
              label: '地图',
              name: 'Maps',
              path: '/maps',
              key: 'Maps',
              component: 'map/index',
            },
            {
              label: '模型',
              name: 'Model',
              path: '/models',
              key: 'Models',
              component: 'model/index',
            }
          ]
        },
        {
          path: '*',
          name: 'NotFound',
          redirect: '/404', //重定向
        }
        ];
        commit( 'SET_ROUTE', type === 'admin' ? routes1 : routes2);
        resolve( type === 'admin' ? routes1 : routes2 );
        if ( routes1.length === 0 ) {
          reject( new Error() );
        }
      } );
    }
  }
};
export default common;