<template>
  <div class='left-menu'>
    <el-menu  :default-active='metaKey'
              mode='vertical'
              :active-text-color='colors'
              class="el-menu-vertical-demo">
      <template v-for="item in menu">
        <el-menu-item v-if='!item.children || !item.children.length'
                      :key='item.key'
                      :index='item.key'
                      @click='open(item)'>
           <span slot="title" >{{item.label}}</span>
        </el-menu-item>
        <el-submenu v-if='item.children && item.children.length'
                    :key='item.key'
                    :index='item.key'>
          <span slot="title" >{{item.label}}</span>
          <template v-for="children in item.children">
            <el-menu-item :index='children.key'
                          :key='children.key'
                          @click='open(children)'>
              <span slot="title" >{{children.label}}</span>
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
  data() {
    return {
      menu: [],
      metaKey: 'Homes'
    };
  },
  created() {
    this.metaKey = this.$route.meta.key;
    this.$store.dispatch('route').then(res=> {
      this.menu = [...this.menu, ...res];
    });
  },
  computed: {
    ...mapGetters(['user', 'colorName']),
    colors() {
      return this.colorName;
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
<style lang='less' scoped>
.left-menu {
}
</style>
