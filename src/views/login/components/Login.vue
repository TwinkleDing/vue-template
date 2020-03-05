<template>
  <div class="login">
    <el-form ref="form" :model="form" label-width="0px">
      <el-form-item>
        <el-input v-model="form.account" placeholder="请输入用户ID"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="regest">注册</el-button>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {}
    };
  },
  methods: {
    login() {},
    regest() {
      this.$emit("regest");
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  .el-input {
    input {
      background: transparent;
      margin-bottom: 20px;
      height: 40px;
    }
  }
}
</style>
