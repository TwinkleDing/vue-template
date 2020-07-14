<template>
  <div id='container'>
  </div>
</template>

<script>
import MapLoader from '@/util/amap';

export default {
  name: 'Maps',
  mounted() {
    let that = this;
    MapLoader('c78ad69335744502aa0460c7a373ec3d').then(AMap => {
      console.log('地图加载成功');
      that.map = new AMap.Map('container', {
        resizeEnable: true
      });
    }, e => {
      console.log('地图加载失败' ,e);
    });
  }
};
</script>

<style lang="scss" scoped>
#container {
  height: 100%;
  width: 100%;
}
</style>