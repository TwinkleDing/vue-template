<template>
  <theme-picker @change="themeChange" />
</template>

<script>
import ThemePicker from './ThemePicker';

export default {
  name: 'TopColor',
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

<style>
.theme-picker .el-color-picker__trigger {
  vertical-align: middle;
}

.theme-picker-dropdown .el-color-dropdown__link-btn {
  display: none;
}
</style>
