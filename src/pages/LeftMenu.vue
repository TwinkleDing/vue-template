<template>
  <div class='left-menu'>
    <el-menu  default-active='1'
              mode='vertical'
              @open="handleOpen"
              @close="handleClose"
              class="el-menu-vertical-demo">
      <template v-for="item in menu">
        <el-menu-item v-if='!item.children || !item.children.length'
                      :key='item.key'
                      :index='item.key'
                      @click='open(item)'>
           <span slot="title">{{item.name}}</span>
        </el-menu-item>
        <el-submenu v-if='item.children && item.children.length'
                    :key='item.key'
                    :index='item.key'>
          <span slot="title">{{item.name}}</span>
          <template v-for="children in item.children">
            <el-menu-item :index='children.key'
                          :key='children.key'
                          @click='open(children)'>
              <span slot="title">{{children.name}}</span>
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
          name: '首页',
          path: '/idnex',
          key: '1'
        },
        {
          name: '常用',
          path: '/normal',
          key: '2',
          children: [
            {
              name: '列表',
              path: '/list',
              key: '2-1',
            },
            {
              name: '表单',
              path: '/form',
              key: '2-2',
            },
          ]
        },
        {
          name: '图表',
          path: '/chart',
          key: '5',
        },
        {
          name: '地图',
          path: '/map',
          key: '6',
        },
      ]
    };
  },
  methods: {
    open(item) {
      console.log(item);
      this.$router.push(item);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang='less' scoped>
.left-menu {
  width: 200px;
  height: 100%;
  border-right: 1px solid #999;
}
</style>
