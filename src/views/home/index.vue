<template>
  <div class='home-index'>
    <card-panel :list='cardPanel'></card-panel>
    <div class='content'>
      <el-row>
        <e-charts :setOption='setOptionLine' height='300px' width='100%' />
      </el-row>
      <el-row>
        <e-charts :setOption='setOptionBar' height='400px' width='100%' />
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CardPanel from './Components/CardPanel';
import ECharts from '@/components/Charts';

export default {
  name: 'Pages',
  components: {
    CardPanel,
    ECharts
  },
  data() {
    return {
      dSlot: {
        userName: 'ding'
      },
      cardPanel: [
        {
          left: '类型一',
          title: '标题',
          content: '我是内容一'
        },
        {
          left: '类型二',
          title: '标题',
          content: '我是内容二'
        },
        {
          left: '类型三',
          title: '标题',
          content: '我是内容三'
        },
        {
          left: '类型四',
          title: '标题',
          content: '我是内容四'
        },
      ],
      setOptionLine: {
        id: 'lineChart',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        toolbox: {
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: {},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      },
      setOptionBar: {
        id: 'barChart',
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        toolbox: {
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        legend: {
          data: ['利润', '支出', '收入']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'value'
          }
        ],
        yAxis: [
          {
            type: 'category',
            axisTick: {
              show: false
            },
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        series: [
          {
            name: '利润',
            type: 'bar',
            label: {
                show: true,
                position: 'inside'
            },
            data: [200, 170, 240, 244, 200, 220, 210]
          },
          {
            name: '收入',
            type: 'bar',
            stack: '总量',
            label: {
                show: true
            },
            data: [320, 302, 341, 374, 390, 450, 420]
          },
          {
            name: '支出',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'left'
            },
            data: [-120, -132, -101, -134, -190, -230, -210]
          }
        ]
      }
    };
  },
  computed: {
    ...mapGetters(['userInfo']),
  },
  mounted() {
  }
};
</script>

<style lang='scss'>
.home-index {
  height: 100%;
  padding-top: 20px;
  box-sizing: border-box;
  .content {
    width: 100%;
    height: auto;
  }
}
</style>