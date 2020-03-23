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
      default: ''
    }
  }
};
</script>

<style lang="less">
@url: '../../assets/img/go-top.jpg';
.go-top {
  position: fixed;
  right: 20px;
  bottom: 20px;
  line-height: 80px;
  height: 80px;
  width: 80px;
  background-image: url(@url);
  background-size: 110px 110px;
  background-position: -15px -15px;
  border-radius: 50%;
  cursor: pointer;
}
</style>