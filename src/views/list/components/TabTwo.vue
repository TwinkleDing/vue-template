<template>
  <div class="tab-two">
    <div class="item">
      <el-button class="btn"
        type="primary"
        @click="openFullScreen1"
        v-loading.fullscreen.lock="fullscreenLoading">
        指令方式
      </el-button>
      <el-button class="btn"
        type="primary"
        @click="openFullScreen2">
        服务方式
      </el-button>
    </div>
    <div class="item">
      <el-button class="btn" :plain="true" @click="openVn">VNode</el-button>
    </div>
    <div class="item">
      <el-button class="btn" @click="openm">点击打开 Message Box</el-button>
      <el-button class="btn" @click="openmc">点击打开 Message Box</el-button>
    </div>
    <div class="item">
      <el-button class="btn" plain @click="open1">
        可自动关闭
      </el-button>
      <el-button class="btn" plain @click="open2">
        不会自动关闭
      </el-button>
      <el-button class="btn" plain @click="open3">
        左下角
      </el-button>
      <el-button class="btn" plain @click="open4">
        左上角
      </el-button>
    </div>
    <div class="item">
      <el-tooltip content="Top center" placement="top">
        <el-button class="btn">Dark</el-button>
      </el-tooltip>
      <el-tooltip content="Bottom center" placement="bottom" effect="light">
        <el-button class="btn">Light</el-button>
      </el-tooltip>
    </div>
    <div class="item">
      <el-popover
        placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <el-button class="btn" slot="reference">hover 激活</el-button>
      </el-popover>
      <el-popover
        placement="bottom"
        title="标题"
        width="200"
        trigger="click"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <el-button class="btn" slot="reference">click 激活</el-button>
      </el-popover>
      <el-popover
        ref="popover"
        placement="right"
        title="标题"
        width="200"
        trigger="focus"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      </el-popover>
      <el-button class="btn" v-popover:popover>focus 激活</el-button>
      <el-popover
        placement="bottom"
        title="标题"
        width="200"
        trigger="manual"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        v-model="visible">
        <el-button class="btn" slot="reference" @click="visible = !visible">手动激活</el-button>
      </el-popover>
    </div>
    <div class="item">
      <el-popconfirm title="这是一段内容确定删除吗？">
        <el-button class="btn" slot="reference">删除</el-button>
      </el-popconfirm>
      <el-popconfirm
        confirmButtonText='好的'
        cancelButtonText='不用了'
        icon="el-icon-info"
        iconColor="red"
        title="这是一段内容确定删除吗？">
        <el-button class="btn" slot="reference">删除</el-button>
      </el-popconfirm>
    </div>
    <div class="item">
      <el-radio-group v-model="direction">
        <el-radio label="ltr">从左往右开</el-radio>
        <el-radio label="rtl">从右往左开</el-radio>
        <el-radio label="ttb">从上往下开</el-radio>
        <el-radio label="btt">从下往上开</el-radio>
      </el-radio-group>
      <el-button class="btn" @click="drawer = true" type="primary" style="margin-left: 16px;">
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
    <div class="item">
      <el-dropdown>
        <el-button class='btn' type="primary">
          更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown class='btn' split-button type="primary" @click="handleClick">
        更多菜单
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabTwo',
  data() {
    return {
      fullscreenLoading: false,
      visible: false,
      direction: 'rtl',
      drawer: false,

    };
  },
  methods: {
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
    open3() {
      this.$notify({
        title: '自定义位置',
        message: '左下角弹出的消息',
        position: 'bottom-left'
      });
    },
    open4() {
      this.$notify({
        title: '自定义位置',
        message: '左上角弹出的消息',
        position: 'top-left'
      });
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
    },
    handleClick() {
      alert('button click');
    }
  },
};
</script>

<style lang="scss" scoped>
  .tab-two{
    padding: 100px;
    .item{
      text-align: left;
      margin-bottom: 20px;
      .btn{
        margin-right: 20px;
      }
    }
  }
</style>