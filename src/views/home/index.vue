<template>
  <div class='home-index'>
    <three />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Three from './components/three1';
export default {
  name: 'Pages',
  components: {
    Three
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['userInfo']),
  },
  mounted() {
    console.log(this.userInfo);
  },
};
</script>

<style lang="less">
.home-index {
  min-height: calc(100% - 20px);
}
</style>