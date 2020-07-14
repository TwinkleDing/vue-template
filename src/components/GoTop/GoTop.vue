<template>
  <div v-if="show" class='go-top' @click="goTop">
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
  data() {
    return {
      show: false,
      dom: {}
    };
  },
  mounted() {
    this.dom = document.getElementsByClassName('right')[0];
    window.addEventListener('scroll', this.showbtn, true);
  },
  methods: {
    showbtn(){
      let that = this;
      let scrollTop = that.dom.scrollTop;
      that.scrollTop = scrollTop;
      if(scrollTop > 100) {
        this.show = true;
      }else {
        this.show = false;
      }
    },
    goTop() {
      let timer = setInterval( ()=> {
        let osTop = this.dom.scrollTop;
        let ispeed = Math.floor(-osTop / 5);
        this.dom.scrollTop = osTop + ispeed;
        this.isTop = true;
        if(osTop === 0){
          clearInterval(timer);
        }
      }, 30);
    }
  }
};
</script>

<style lang="scss" scoped>
  $url: '../../assets/img/go-top.jpg';
  .go-top {
    position: fixed;
    right: 20px;
    bottom: 20px;
    line-height: 80px;
    height: 80px;
    width: 80px;
    background-image: url($url);
    background-size: 110px 110px;
    background-position: -15px -15px;
    border-radius: 50%;
    cursor: pointer;
  }
</style>