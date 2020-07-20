<template>
  <div class='tab-three'>
    <div class='item'>
      <el-page-header @back='goBack' content='详情页面'></el-page-header>
    </div>
    <div class='item'>
      <el-alert
        title='成功提示的文案'
        type='success'
        @close='closed'
        effect='dark'>
      </el-alert>
      <el-alert
        title='消息提示的文案'
        type='info'
        effect='dark'>
      </el-alert>
      <el-alert
        title='警告提示的文案'
        type='warning'
        effect='dark'>
      </el-alert>
      <el-alert
        title='错误提示的文案'
        type='error'
        effect='dark'>
      </el-alert>
    </div>
    <div class='item'>
      <el-row>
        <el-col :span='5' v-for='(o, index) in 2' :key='o' :offset='index > 0 ? 2 : 0'>
          <el-card body-style='padding:0px'>
            <img src='https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png' class='image'>
            <div style='padding: 14px;'>
              <span>好吃的汉堡</span>
              <div class='bottom clearfix'>
                <time class='time'>{{ currentDate }}</time>
                <el-button type='text' class='button'>操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class='item'>
      <el-carousel :interval='4000' type='card' height='200px'>
        <el-carousel-item v-for='item in 6' :key='item'>
          <h3 class='medium'>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabThree',
  data() {
    return {
      count: 0,
      currentDate: new Date(),
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    closed() {
      console.log('关闭');
    }
  },
};
</script>

<style lang='scss' scoped>
.tab-three{
}
</style>