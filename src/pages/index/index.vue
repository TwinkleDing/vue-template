<template>
    <div class='pages'>
        <vue-particles
            color="#47CD88"
            linesColor="#47CD88"
            shapeType="star"
            hoverMode="grab"
            clickMode="remove"
            :particleOpacity="0.7"
            :particlesNumber="80"
            :particleSize="4"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            :clickEffect="true">
        </vue-particles>
        <top-bar />
        <div class='pages-content'>
            <div class='left'>
                <left-menu/>
            </div>
            <div class='right'>
                <div class='main-content'>
                <router-view />
                </div>
                <div class='copy-right'>Copyright ©2020 , All Rights Reserved.</div>
            </div>
            <go-top :message='message' />
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
import TopBar from "./TopBar";
import LeftMenu from "./LeftMenu";

export default {
    name: "Pages",
    components: {
        TopBar,
        LeftMenu
    },
    data() {
        return {
            message: "",
        };
    },
    computed: {
        ...mapGetters(["user"])
    },
    methods: {
        logout() {
            this.$store.dispatch("logOut").then(() => {
                this.$router.push({ path: "/login" });
            });
        }
    }
};
</script>
<style lang='scss' scoped>
// $url: '../../assets/img/beach.jpg';
.pages {
  // background-image: url($url);
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  &-content {
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
      overflow-x: hidden;
      user-select:none;
      .main-content{
        min-height: calc(100% - 40px);
        box-sizing: border-box;
      }
    }
  }
  .copy-right {
    height: 40px;
    line-height: 40px;
    position: relative;
  }
  #particles-js{
    background: oldlace;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
  }
}
</style>