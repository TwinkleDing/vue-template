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
export default {
  name: 'login',
  data() {
    return {
      form: {
        account: 'bilibili',
        password: 'bilibili'
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
        let params = {
          'user_id': this.form.account,
          'user_pwd': this.form.password
        };
        loginByUsername(params).then(res => {
          this.$store.dispatch('userInfo', res.data.data);
          this.$store.dispatch('route');
        }).then(() => {
          this.$store.dispatch('logIn', this.form.account).then(() => {
            // 页面跳转
            const loading = this.$loading({
              lock: true,
              text: 'Loading',
              spinner: 'el-icon-loading',
              background: 'rgba(0, 0, 0, 0.7)'
            });
            setTimeout(() => {
              loading.close();
              this.$router.push({ path: '/index' });
            }, 1000);
          }).catch(() => {
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
