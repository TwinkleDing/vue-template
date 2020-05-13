<template>
  <div class='home-index'>
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