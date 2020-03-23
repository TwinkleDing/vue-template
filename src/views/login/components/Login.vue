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
import { loginByUsername } from '@/api/user';
import md5 from 'js-md5';
export default {
  name: 'login',
  data() {
    return {
      form: {
        loginType: 1,
        account: 'admin',
        password: 'admin'
      }
    };
  },
  methods: {
    login() {
      if (!this.form.account) {
        this.$message({
          type: 'error',
          message: '请输入账号'
        });
      } else {
        let params = { ...this.form };
        params.password = md5(params.password);
        loginByUsername(params)
          .then(res => {
            console.log(res);
          })
          .then(() => {
            this.$store
              .dispatch('LogIn', this.form.account)
              .then(() => {
                // 页面跳转
                this.$router.push({ path: '/index' });
              })
              .catch(e => {
                console.log(e);
              });
          });
      }
    },
    regest() {
      this.$emit('regest');
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
