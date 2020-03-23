<template>
  <div class="regest">
    <el-form ref="form" :model="form" label-width="0px">
      <el-form-item>
        <el-input v-model="form.account" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.account" placeholder="请输入注册ID"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="goBack">返回登录</el-button>
        <el-button type="primary" @click="regest">确认注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'regest',
  data() {
    return {
      form: {}
    };
  },
  methods: {
    regest() {},
    goBack() {
      this.$emit('regest');
    }
  }
};
</script>

<style lang="less" scoped>
.regest {
  .el-input {
    input {
      background: none !important;
      margin-bottom: 20px;
      height: 40px;
    }
  }
}
</style>
