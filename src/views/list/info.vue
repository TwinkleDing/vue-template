<template>
  <div>
    {{name}}
    <el-tabs v-model="activeName" @tab-click="handleClickTabs">
      <el-tab-pane label="不用点的" name="first">
        <div class="item progress">
          <el-progress :percentage="50" />
          <el-progress :percentage="100" :format="format" />
          <el-progress :percentage="100" status="success" />
          <el-progress :percentage="100" status="warning" />
          <el-progress :percentage="50" status="exception" />
        </div>
        <div class="item">
          <el-badge :value="12" class="item">
            <el-button size="small">评论</el-button>
          </el-badge>
          <el-badge :value="3" class="item">
            <el-button size="small">回复</el-button>
          </el-badge>
          <el-badge :value="1" class="item" type="primary">
            <el-button size="small">评论</el-button>
          </el-badge>
          <el-badge :value="2" class="item" type="warning">
            <el-button size="small">回复</el-button>
          </el-badge>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="clearfix">
                评论
                <el-badge class="mark" :value="12" />
              </el-dropdown-item>
              <el-dropdown-item class="clearfix">
                回复
                <el-badge class="mark" :value="3" />
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="item">
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="info">信息按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="danger">危险按钮</el-button>
        </div>
        <div class="item">
          <el-tag>标签一</el-tag>
          <el-tag type="success">标签二</el-tag>
          <el-tag type="info">标签三</el-tag>
          <el-tag type="warning">标签四</el-tag>
          <el-tag type="danger">标签五</el-tag>
        </div>
        <div class="item">
          <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
          <el-link type="primary">主要链接</el-link>
          <el-link type="success">成功链接</el-link>
          <el-link type="warning">警告链接</el-link>
          <el-link type="danger">危险链接</el-link>
          <el-link type="info">信息链接</el-link>
        </div>
        <div class="item progress">
          <el-slider v-model="value1"></el-slider>
        </div>
        <div class="item">
          <el-rate v-model="valuet" show-text />
        </div>
        <div class="item">
          <el-calendar v-model="valued"></el-calendar>
        </div>
      </el-tab-pane>
      <el-tab-pane label="用来点的" name="second">
        <div class="item">
          <el-button
            type="primary"
            @click="openFullScreen1"
            v-loading.fullscreen.lock="fullscreenLoading">
            指令方式
          </el-button>
          <el-button
            type="primary"
            @click="openFullScreen2">
            服务方式
          </el-button>
        </div>
        <div class="item">
          <el-button :plain="true" @click="openVn">VNode</el-button>
        </div>
        <div class="item">
          <el-button @click="openm">点击打开 Message Box</el-button>
          <el-button @click="openmc">点击打开 Message Box</el-button>
        </div>
        <div class="item">
          <el-button plain @click="open1">
            可自动关闭
          </el-button>
          <el-button plain @click="open2">
            不会自动关闭
            </el-button>
        </div>
        <div class="item">
          <el-tooltip content="Top center" placement="top">
            <el-button>Dark</el-button>
          </el-tooltip>
          <el-tooltip content="Bottom center" placement="bottom" effect="light">
            <el-button>Light</el-button>
          </el-tooltip>
        </div>
        <div class="item">
          <el-popover
            placement="top-start"
            title="标题"
            width="200"
            trigger="hover"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <el-button slot="reference">hover 激活</el-button>
          </el-popover>
          <el-popover
            placement="bottom"
            title="标题"
            width="200"
            trigger="click"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <el-button slot="reference">click 激活</el-button>
          </el-popover>
          <el-popover
            ref="popover"
            placement="right"
            title="标题"
            width="200"
            trigger="focus"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
          </el-popover>
          <el-button v-popover:popover>focus 激活</el-button>
          <el-popover
            placement="bottom"
            title="标题"
            width="200"
            trigger="manual"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
            v-model="visible">
            <el-button slot="reference" @click="visible = !visible">手动激活</el-button>
          </el-popover>
        </div>
        <div class="item">
          <el-popconfirm title="这是一段内容确定删除吗？">
            <el-button slot="reference">删除</el-button>
          </el-popconfirm>
          <el-popconfirm
            confirmButtonText='好的'
            cancelButtonText='不用了'
            icon="el-icon-info"
            iconColor="red"
            title="这是一段内容确定删除吗？">
            <el-button slot="reference">删除</el-button>
          </el-popconfirm>
        </div>
        <div class="item">
          <el-radio-group v-model="direction">
            <el-radio label="ltr">从左往右开</el-radio>
            <el-radio label="rtl">从右往左开</el-radio>
            <el-radio label="ttb">从上往下开</el-radio>
            <el-radio label="btt">从下往上开</el-radio>
          </el-radio-group>
          <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
            点我打开
          </el-button>

          <el-drawer
            title="我是标题"
            :visible.sync="drawer"
            :direction="direction"
            :before-close="handleClose">
            <span>我来啦!</span>
          </el-drawer>
        </div>
      </el-tab-pane>
      <el-tab-pane label="用来看的" name="third">
        <div class="item progress">
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </div>
        <div class="item">
          <el-row>
            <el-col :span="5" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <div class="item">
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
              <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">
        <div class="item progress2">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="一致性 Consistency" name="1">
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback" name="2">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="item">
          <div class="radio">
            排序：
            <el-radio-group v-model="reverse">
              <el-radio :label="true">倒序</el-radio>
              <el-radio :label="false">正序</el-radio>
            </el-radio-group>
          </div>

          <el-timeline :reverse="reverse">
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :timestamp="activity.timestamp">
              {{activity.content}}
            </el-timeline-item>
          </el-timeline>
        </div>
        <div class="item">
          <span>头上一片晴天，心中一个想念</span>
          <el-divider content-position="left">少年包青天</el-divider>
          <span>饿了别叫妈, 叫饿了么</span>
          <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
          <span>为了无法计算的价值</span>
          <el-divider content-position="right">阿里云</el-divider>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'Infos',
  data() {
    return {
      name: '',
      activeName: 'first',
      fullscreenLoading: false,
      value1: 0,
      valuet: null,
      visible: false,
      currentDate: new Date(),
      valued: new Date(),
      activeNames: ['1'],
      reverse: true,
      activities: [{
        content: '活动按期开始',
        timestamp: '2018-04-15'
      }, {
        content: '通过审核',
        timestamp: '2018-04-13'
      }, {
        content: '创建成功',
        timestamp: '2018-04-11'
      }],
      drawer: false,
      direction: 'rtl',
    };
  },
  mounted() {
    this.name = this.$route.params.name;
  },
  methods: {
    handleClickTabs(tab, event) {
      console.log(tab, event);
    },
    format(percentage) {
      return percentage === 100 ? '满' : `${percentage}%`;
    },
    openFullScreen1() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 2000);
    },
    openFullScreen2() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    },
    openVn() {
      const h = this.$createElement;
      this.$message({
        message: h('p', null, [
          h('span', null, '内容可以是 '),
          h('i', { style: 'color: teal' }, 'VNode')
        ])
      });
    },
    openm() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    openmc() {
      this.$prompt('请输入邮箱', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: '邮箱格式不正确'
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '你的邮箱是: ' + value
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    },
    open1() {
      const h = this.$createElement;
      this.$notify({
        title: '标题名称',
        message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
      });
    },
    open2() {
      this.$notify({
        title: '提示',
        message: '这是一条不会自动关闭的消息',
        duration: 0
      });
    },
    handleChange(val) {
      console.log(val);
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          console.log(_);
          done();
        })
        .catch(_ => {
          console.log(_);
        });
    }
  },
};
</script>

<style lang="less">
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