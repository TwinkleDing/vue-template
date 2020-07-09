<template>
  <div class='home-index'>
    首页
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Pages',
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['userInfo']),
  }
};
</script>

<style lang="less">
.home-index {
  min-height: calc(100% - 20px);
}
</style>