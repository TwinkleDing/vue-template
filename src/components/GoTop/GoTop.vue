<template>
  <div class='go-top'>
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'GoTop',
  props: {
    message: {
      type: String,
      default: '上去'
    }
  }
};
</script>

<style lang="less">
.go-top {
  position: fixed;
  right: 20px;
  bottom: 20px;
  line-height: 80px;
  height: 80px;
  width: 80px;
  background: red;
}
</style>