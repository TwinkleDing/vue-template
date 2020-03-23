<template>
  <div id='app1' class='go-top' @click="goTop">
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'GoTop',
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  mounted() {
    window.addEventListener('scroll', this.showbtn, true);
  },
  methods: {
    showbtn(){
      let that = this;
      let scrollTop = document.getElementsByClassName('right')[0].scrollTop;
      that.scrollTop = scrollTop;
    },
    goTop() {
      let timer = setInterval( ()=> {
        let osTop = document.getElementsByClassName('right')[0].scrollTop;
        let ispeed = Math.floor(-osTop / 5);
        document.getElementsByClassName('right')[0].scrollTop = osTop + ispeed;
        this.isTop = true;
        if(osTop === 0){
          clearInterval(timer);
        }
      }, 30);
    }
  }
};
</script>

<style lang="less">
@url: '../../assets/img/go-top.jpg';
.go-top {
  position: fixed;
  right: 20px;
  bottom: 20px;
  line-height: 80px;
  height: 80px;
  width: 80px;
  background-image: url(@url);
  background-size: 110px 110px;
  background-position: -15px -15px;
  border-radius: 50%;
  cursor: pointer;
}
</style>