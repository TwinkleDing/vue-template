<template>
  <div>
    404
    <el-button @click="goIndex">返回首页</el-button>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  methods: {
    goIndex() {
      this.$router.push('/index');
    }
  }
};
</script>

<style lang="less">
</style>