<template>
  <theme-picker style="float: right;height: 26px;margin: -3px 8px 0 0;" @change="themeChange" />
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

<style>
.theme-picker .el-color-picker__trigger {
  vertical-align: middle;
}

.theme-picker-dropdown .el-color-dropdown__link-btn {
  display: none;
}
</style>
