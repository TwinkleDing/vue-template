<template>
  <div class='info'>
    {{name}}
    <el-tabs v-model='activeName' @tab-click='handleClickTabs'>
      <el-tab-pane label='静态样式' name='first'>
        <tab-one />
      </el-tab-pane>
      <el-tab-pane label='点击交互' name='second'>
        <tab-two />
      </el-tab-pane>
      <el-tab-pane label='用来看的' name='third'>
        <tab-three />
      </el-tab-pane>
      <!-- <el-tab-pane label='定时任务补偿' name='fourth'>
        <tab-four />
      </el-tab-pane> -->
    </el-tabs>
  </div>
</template>

<script>
import TabOne from './components/TabOne';
import TabTwo from './components/TabTwo';
import TabThree from './components/TabThree';
// import TabFour from './components/TabFour';

export default {
  name: 'Infos',
  components: {
    TabOne,
    TabTwo,
    TabThree,
    // TabFour
  },
  data() {
    return {
      name: '',
      activeName: 'first',
    };
  },
  mounted() {
    this.name = this.$route.query.name;
  },
  methods: {
    handleClickTabs() {}
  },
};
</script>

<style lang='scss' scoped>
.info {
  height: 100%;
  overflow: auto;
}
.progress{
  width: 400px;
}
.progress2{
  width: 600px;
}
.item{
  margin: 10px;
  text-align: left;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>