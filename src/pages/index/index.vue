<template>
  <div class='pages'>
    <top-bar />
    <div class='content'>
      <div class='left'>
        <left-menu/>
      </div>
      <div class='right'>
        <div class='main-content'>
          <router-view />
        </div>
        <div class='copy-right'>Copyright ©2020 , All Rights Reserved.</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
import TopBar from './TopBar';
import LeftMenu from './LeftMenu';

export default {
  name: 'Pages',
  components: {
    TopBar,
    LeftMenu
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    logout() {
      this.$store.dispatch('logOut').then(() => {
        this.$router.push({ path: '/login' });
      });
    }
  }
};
</script>
<style lang='scss' scoped>
$url: '../../assets/img/beach.jpg';
.pages {
  background-image: url($url);
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  .content {
    height: calc(100% - 61px);
    .left {
      width: 200px;
      height: 100%;
      box-sizing: border-box;
      border-right: 1px solid #999;
      float: left;
      overflow-y: auto;
      overflow-x: hidden;
    };
    .right {
      height: 100%;
      width: calc(100% - 200px);
      float: right;
      box-sizing: border-box;
      overflow-y: auto;
      .main-content{
        height: calc(100% - 40px);
        box-sizing: border-box;
      }
    }
  }
  .copy-right {
    height: 40px;
    line-height: 40px;
    position: relative;
  }
}
</style>