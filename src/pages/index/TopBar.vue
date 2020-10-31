<template>
  <div class='top-bar'>
    <div class='logo'>
      <img src='@/assets/logo.png' alt='no' />
      <span>vue-template</span>
    </div>
    <div class='logout'>
      <top-language />
      <top-color />
      <i class='icon-font icon-home'></i>
      <div><i class='el-icon-user'></i>用户id：{{ user }}</div>
      <el-button type='primary' @click='logout'>{{$t('common.logout')}}</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TopColor from './Components/TopColor';
import TopLanguage from './Components/TopLanguage';
import Hello from '@/mixins/hello';

export default {
  components: {
    TopColor,
    TopLanguage
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
      this.$confirm('即将退出登录状态, 是否继续?', this.$t('common.tip'), {
        confirmButtonText: this.$t('common.confirm'),
        cancelButtonText: this.$t('common.cancle'),
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
    span{
      line-height: 60px;
      float: right;
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
