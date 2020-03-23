<template>
  <div>
    <e-charts :id='id' :setOption='setOption' height='300px' width='400px' />
  </div>
</template>

<script>
import ECharts from '@/components/Charts';
export default {
  name: 'Charts',
  components: {
    ECharts
  },
  data () {
    return {
      id: 'myChart',
      setOption: {
        title: { text: '衣服销量' },
        tooltip: {},
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'line',
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          smooth: true
        }]
      }
    };
  },
  mounted(){
  },
  methods: {
  }
};
</script>

<style lang="less">

</style>