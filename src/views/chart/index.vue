<template>
  <div class='charts'>
    <div class="item">
    <e-charts :setOption='setOptionLine' height='300px' width='400px' />
    </div>
    <div class="item">
    <e-charts :setOption='setOptionBar' height='300px' width='400px' />
    </div>
    <div class="item">
    <e-charts :setOption='setOptionPie' height='300px' width='400px' />
    </div>
    <div class="item">
    <e-charts :setOption='setOptionCar' height='450px' width='600px' />
    </div>
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
      setOptionLine: {
        id: 'lineChart',
        title: { text: '衣服销量' },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {backgroundColor: '#6a7985'},
          }
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }],
        yAxis: {
          type: 'value'
        },
        series: [{
          name: '销量',
          type: 'line',
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          smooth: true
        }]
      },
      setOptionBar: {
        id: 'barChart',
        tooltip: {
          trigger: 'axis',
          axisPointer: {// 坐标轴指示器，坐标轴触发有效
              type: 'shadow'// 默认为直线，可选为：'line' | 'shadow'
          }
        },
        xAxis: [{
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: {
          type: 'value'
        },
        series: [{
          name: '销量',
          type: 'bar',
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          smooth: true,
          barWidth: '40%',
        }]
      },
      setOptionPie: {
        id: 'pieChart',
        title: {
          text: '某站点用户访问来源',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            {value: 335, name: '直接访问'},
            {value: 310, name: '邮件营销'},
            {value: 234, name: '联盟广告'},
            {value: 135, name: '视频广告'},
            {value: 1548, name: '搜索引擎'}
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }]
      },
      setOptionCar: {
        id: 'carChart',
        title: {
          text: '汽车仪表盘',
          left: 'center'
        },
        series: [
          {
              name: '速度',
              type: 'gauge',
              min: 0,
              max: 220,
              splitNumber: 11,
              radius: '50%',
              axisLine: {// 坐标轴线
                  lineStyle: {// 属性lineStyle控制线条样式
                      color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                      width: 3,
                      shadowColor: '#fff', //默认透明
                      shadowBlur: 10
                  }
              },
              axisLabel: {// 坐标轴小标记
                  fontWeight: 'bolder',
                  color: '#fff',
                  shadowColor: '#fff', //默认透明
                  shadowBlur: 10
              },
              axisTick: {// 坐标轴小标记
                  length: 15,// 属性length控制线长
                  lineStyle: {// 属性lineStyle控制线条样式
                      color: 'auto',
                      shadowColor: '#fff', //默认透明
                      shadowBlur: 10
                  }
              },
              splitLine: {// 分隔线
                  length: 25,// 属性length控制线长
                  lineStyle: {// 属性lineStyle（详见lineStyle）控制线条样式
                      width: 3,
                      color: '#fff',
                      shadowColor: '#fff', //默认透明
                      shadowBlur: 10
                  }
              },
              pointer: {// 分隔线
                  shadowColor: '#fff', //默认透明
                  shadowBlur: 5
              },
              title: {
                  textStyle: {// 其余属性默认使用全局文本样式，详见TEXTSTYLE
                      fontWeight: 'bolder',
                      fontSize: 20,
                      fontStyle: 'italic',
                      color: '#fff',
                      shadowColor: '#fff', //默认透明
                      shadowBlur: 10
                  }
              },
              detail: {
                  backgroundColor: 'rgba(30,144,255,0.8)',
                  borderWidth: 1,
                  borderColor: '#fff',
                  shadowColor: '#fff', //默认透明
                  shadowBlur: 5,
                  offsetCenter: [0, '50%'],// x, y，单位px
                  textStyle: {// 其余属性默认使用全局文本样式，详见TEXTSTYLE
                      fontWeight: 'bolder',
                      color: '#fff'
                  }
              },
              data: [{value: 40, name: 'km/h'}]
          },
          {
              name: '转速',
              type: 'gauge',
              center: ['25%', '55%'],// 默认全局居中
              radius: '30%',
              min: 0,
              max: 7,
              endAngle: 45,
              splitNumber: 7,
              axisLine: {// 坐标轴线
                  lineStyle: {// 属性lineStyle控制线条样式
                      color: [[0.29, 'lime'], [0.86, '#1e90ff'], [1, '#ff4500']],
                      width: 2,
                      shadowColor: '#fff', //默认透明
                      shadowBlur: 10
                  }
              },
              axisLabel: {// 坐标轴小标记
                  fontWeight: 'bolder',
                  color: '#fff',
                  shadowColor: '#fff', //默认透明
                  shadowBlur: 10
              },
              axisTick: {// 坐标轴小标记
                  length: 12,// 属性length控制线长
                  lineStyle: {// 属性lineStyle控制线条样式
                      color: 'auto',
                      shadowColor: '#fff', //默认透明
                      shadowBlur: 10
                  }
              },
              splitLine: {// 分隔线
                  length: 20,// 属性length控制线长
                  lineStyle: {// 属性lineStyle（详见lineStyle）控制线条样式
                      width: 3,
                      color: '#fff',
                      shadowColor: '#fff', //默认透明
                      shadowBlur: 10
                  }
              },
              pointer: {
                  width: 5,
                  shadowColor: '#fff', //默认透明
                  shadowBlur: 5
              },
              title: {
                  offsetCenter: [0, '-30%'], // x, y，单位px
                  textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                      fontWeight: 'bolder',
                      fontStyle: 'italic',
                      color: '#fff',
                      shadowColor: '#fff', //默认透明
                      shadowBlur: 10
                  }
              },
              detail: {
                  //backgroundColor: 'rgba(30,144,255,0.8)',
                  // borderWidth: 1,
                  borderColor: '#fff',
                  shadowColor: '#fff', //默认透明
                  shadowBlur: 5,
                  width: 80,
                  height: 30,
                  offsetCenter: [25, '20%'], // x, y，单位px
                  textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                      fontWeight: 'bolder',
                      color: '#fff'
                  }
              },
              data: [{value: 1.5, name: 'x1000 r/min'}]
          },
          {
              name: '油表',
              type: 'gauge',
              center: ['75%', '50%'], // 默认全局居中
              radius: '30%',
              min: 0,
              max: 2,
              startAngle: 135,
              endAngle: 45,
              splitNumber: 2,
              axisLine: { // 坐标轴线
                  lineStyle: { // 属性lineStyle控制线条样式
                      color: [[0.2, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
                      width: 2,
                      shadowColor: '#fff', //默认透明
                      shadowBlur: 10
                  }
              },
              axisTick: { // 坐标轴小标记
                  length: 12, // 属性length控制线长
                  lineStyle: { // 属性lineStyle控制线条样式
                      color: 'auto',
                      shadowColor: '#fff', //默认透明
                      shadowBlur: 10
                  }
              },
              axisLabel: {
                  fontWeight: 'bolder',
                  color: '#fff',
                  shadowColor: '#fff', //默认透明
                  shadowBlur: 10,
                  formatter: function (v){
                      switch (v + ' ') {
                          case '0': return 'E';
                          case '1': return 'Gas';
                          case '2': return 'F';
                      }
                  }
              },
              splitLine: { // 分隔线
                  length:15, // 属性length控制线长
                  lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                      width:3,
                      color: '#fff',
                      shadowColor: '#fff', //默认透明
                      shadowBlur: 10
                  }
              },
              pointer: {
                  width:2,
                  shadowColor: '#fff', //默认透明
                  shadowBlur: 5
              },
              title: {
                  show: false
              },
              detail: {
                  show: false
              },
              data: [{value: 0.5, name: 'gas'}]
          },
          {
              name: '水表',
              type: 'gauge',
              center: ['75%', '50%'], // 默认全局居中
              radius: '30%',
              min: 0,
              max: 2,
              startAngle: 315,
              endAngle: 225,
              splitNumber: 2,
              axisLine: { // 坐标轴线
                  lineStyle: { // 属性lineStyle控制线条样式
                      color: [[0.2, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
                      width: 2,
                      shadowColor: '#fff', //默认透明
                      shadowBlur: 10
                  }
              },
              axisTick: { // 坐标轴小标记
                  show: false
              },
              axisLabel: {
                  fontWeight: 'bolder',
                  color: '#fff',
                  shadowColor: '#fff', //默认透明
                  shadowBlur: 10,
                  formatter: function(v){
                      switch (v + ' ') {
                          case '0': return 'H';
                          case '1': return 'Water';
                          case '2': return 'C';
                      }
                  }
              },
              splitLine: { // 分隔线
                  length: 15, // 属性length控制线长
                  lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                      width: 3,
                      color: '#fff',
                      shadowColor: '#fff', //默认透明
                      shadowBlur: 10
                  }
              },
              pointer: {
                  width: 2,
                  shadowColor: '#fff', //默认透明
                  shadowBlur: 5
              },
              title: {
                  show: false
              },
              detail: {
                  show: false
              },
              data:[{value: 0.5, name: 'gas'}]
          }
        ]
      },
    };
  },
  mounted(){
  },
  methods: {
  }
};
</script>

<style lang="less">
.charts {
  height: 100%;
  width: 100%;
  .item {
    float: left;
    width: 30%;
  }
}
</style>