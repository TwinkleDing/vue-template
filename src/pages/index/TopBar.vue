<template>
  <div class='top-bar'>
    <div class='logo'>
      <img src='@/assets/logo.png' alt='no' />
    </div>
    <div class='logout'>
      <top-color />
      <div>用户id：{{ user }}</div>
      <el-button type='primary' @click='logout'>退出登录</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TopColor from './components/top-color';
import Hello from '@/mixins/hello';
export default {
  components: {
    TopColor
  },
  mixins: [Hello],
  data() {
    return {
      mixxins: '_'
    };
  },
  computed: {
    ...mapGetters(['user'])
  },
  mounted() {
    this.hello();
  },
  methods: {
    logout() {
      this.$confirm('即将退出登录状态, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('logOut').then(() => {
          this.$router.push({ path: '/login' });
        }).then(() =>{
          this.$message({
            type: 'success',
            message: '退出登录'
          });
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消退出'
        });
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.top-bar {
  height: 60px;
  border-bottom: 1px solid #999;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  .logo {
    height: 60px;
    img {
      height: 100%;
    }
  }
  .logout {
    display: flex;
    align-items: center;
    padding: 10px;
    div {
      padding: 10px;
    }
  }
}
</style>
