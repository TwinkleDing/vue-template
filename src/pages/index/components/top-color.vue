<template>
  <theme-picker @change="themeChange" />
</template>

<script>
import ThemePicker from './themePicker';

export default {
  name: 'topColor',
  components: {
    ThemePicker
  },
  data() {
    return {
    };
  },
  methods: {
    themeChange(val) {
      this.$store.dispatch('changeColor', val);
    }
  }
};
</script>

<style lang='scss' scoped>
</style>
