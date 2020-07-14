<template>
  <div class='left-menu' v-ding='ding'>
    <el-menu  :default-active='metaKey'
              mode='vertical'
              class="el-menu-vertical-demo">
      <left-item :menu='menu' />
    </el-menu>
  </div>
</template>

<script>
import leftItem from './components/leftItem';
import {mapGetters} from 'vuex';

export default {
  name: 'leftMenu',
  components: {
    leftItem
  },
  data() {
    return {
      menu: [],
      metaKey: 'Homes',
      ding: 'ding'
    };
  },
  created() {
    this.metaKey = this.$route.name;
    this.menu = this.route[0].children;
  },
  computed: {
    ...mapGetters(['route'])
  }
};
</script>
<style lang='scss' scoped>
.left-menu {
}
</style>
