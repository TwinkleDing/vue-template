<template>
  <div @click='changeColor' class='top-color'>
    切换颜色
    <!-- <el-color-picker v-model="color2"></el-color-picker> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      color1: '#409eff',
      color2: '#F56C6C'
    };
  },
  computed: {
    ...mapGetters(['color'])
  },
  methods: {
    changeColor() {
      if (this.color === this.color1) {
        this.$store.commit('SET_COLOR', this.color2);
      } else {
        this.$store.commit('SET_COLOR', this.color1);
      }
    }
  }
};
</script>

<style lang="less">
.top-color {
  cursor: pointer;
}
</style>