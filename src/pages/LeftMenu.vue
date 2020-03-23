<template>
  <div class='left-menu'>
    <el-menu  default-active='1'
              mode='vertical'
              class="el-menu-vertical-demo">
      <template v-for="item in menu">
        <el-menu-item v-if='!item.children || !item.children.length'
                      :key='item.key'
                      :index='item.key'
                      @click='open(item)'>
           <span slot="title">{{item.label}}</span>
        </el-menu-item>
        <el-submenu v-if='item.children && item.children.length'
                    :key='item.key'
                    :index='item.key'>
          <span slot="title">{{item.label}}</span>
          <template v-for="children in item.children">
            <el-menu-item :index='children.key'
                          :key='children.key'
                          @click='open(children)'>
              <span slot="title">{{children.label}}</span>
            </el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['user'])
  },
  data() {
    return {
      menu: [
        {
          label: '首页',
          name: 'Pages',
          path: '/index',
          key: '1'
        },
        {
          label: '常用',
          name: 'normal',
          path: '/normal',
          key: '2',
          children: [
            {
              label: '列表',
              name: 'Lists',
              path: '/lists',
              key: '2-1',
            },
            {
              label: '表单',
              name: 'Forms',
              path: '/forms',
              key: '2-2',
            },
          ]
        },
        {
          label: '图表',
          name: 'Charts',
          path: '/charts',
          key: '5',
        },
        {
          label: '地图',
          name: 'Maps',
          path: '/maps',
          key: '6',
        },
      ]
    };
  },
  methods: {
    open(item) {
      if(this.$route.name !== item.name) {
        this.$router.push(item);
      }
    }
  }
};
</script>
<style lang='less' scoped>
.left-menu {
}
</style>
