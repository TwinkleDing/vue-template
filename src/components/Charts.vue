<template>
  <div>
    <div :id="setOption.id" :style="{width: width, height: height}"></div>
  </div>
</template>

<script>
import echarts from 'echarts';
export default {
  name: 'Charts',
  props: {
    height: {
      type: String,
      default: '300px'
    },
    width: {
      type: String,
      default: '400px'
    },
    setOption: {
      type: Object,
      default() {
        return {
          title: { text: '' },
          tooltip: {},
          xAxis: {},
          yAxis: {},
          series: [{
            name: '',
            type: 'line',
            data: []
          }]
        };
      }
    }
  },
  watch: {
    setOption: {
      handler(data) {
        console.log(data);
      },
      deep: true
    }
  },
  data () {
    return {

    };
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
      let myChart = echarts.init(document.getElementById(this.setOption.id));
      myChart.setOption(this.setOption);
    }
  }
};
</script>

<style lang="less">

</style>