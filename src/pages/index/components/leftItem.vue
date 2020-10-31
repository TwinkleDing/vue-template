<template>
  <div>
    <template v-for='item in menu'>
      <el-menu-item v-if='!item.children || !item.children.length'
                    :key='item.key'
                    :index='item.key'
                    @click='open(item)'>
        <template slot='title'>
          <i class='el-icon-menu'></i>
          <span>{{item.label}}</span>
        </template>
      </el-menu-item>
      <el-submenu v-if='item.children && item.children.length'
                  :key='item.key'
                  :index='item.key'>
        <template slot='title'>
          <i class='el-icon-menu'></i>
          <span>{{item.label}}</span>
        </template>
        <left-item :menu='item.children' />
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: 'LeftItem',
  props: {
    menu: {
      type: Array,
      default() {
        return {};
      }
    }
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

<style lang='scss'>
</style>