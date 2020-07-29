<template>
  <div class='home-index'>
    <card-panel :list='cardPanel'></card-panel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CardPanel from './components/CardPanel';

export default {
  name: 'Pages',
  components: {
    CardPanel
  },
  data() {
    return {
      cardPanel: [
        {
          title: 'qwe',
          content: 'rty'
        },
        {
          title: 'asd',
          content: 'uio'
        },
        {
          title: 'zxc',
          content: 'fgh'
        },
        {
          title: 'jkl',
          content: 'bnm'
        },
      ]
    };
  },
  computed: {
    ...mapGetters(['userInfo']),
  },
  mounted() {
  }
};
</script>

<style lang='scss'>
.home-index {
  min-height: calc(100% - 20px);
  padding-top: 20px;
  box-sizing: border-box;
}
</style>