<template>
  <div>
    <div :id='setOption.id' :style='{width: width, height: height}'></div>
  </div>
</template>

<script>
import echarts from 'echarts';
import resize from './resize';

export default {
  mixins: [resize],
  name: 'Charts',
  props: {
    height: {
      type: String,
      default: '300px'
    },
    width: {
      type: String,
      default: '100%'
    },
    setOption: {
      type: Object,
      required: true,
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
  data() {
    return {
      myChart: null
    };
  },
  watch: {
    setOption: {
      handler(data) {
        console.log(data);
      },
      deep: true
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
      this.myChart = echarts.init(document.getElementById(this.setOption.id));
      this.myChart.setOption(this.setOption);
    }
  }
};
</script>

<style lang='scss' scoped>

</style>