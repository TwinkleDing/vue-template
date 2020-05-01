<template>
  <div class='login-box'>
    <div class='login-box-content'>
      <login v-if='!regest' @regest='regestOpen' />
      <Registered v-else @regest='regestClose' />
    </div>
  </div>
</template>

<script>
import Login from './components/Login';
import Registered from './components/Registered';
export default {
  name: 'loginBox',
  components: {
    Login,
    Registered
  },
  data() {
    return {
      regest: false
    };
  },
  mounted() {
    this.$store.dispatch('logOut');
  },
  methods: {
    regestOpen() {
      this.regest = true;
    },
    regestClose() {
      this.regest = false;
    }
  }
};
</script>

<style lang='less' scoped>
@url: '../../assets/img/girl.png';
.login-box {
  background-image: url(@url);
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 800px;
  &-content {
    width: 500px;
    box-sizing: border-box;
    padding: 70px;
    border: 2px solid #148ec3;
    border-radius: 20px;
  }
}
</style>
