<template>
  <div class='personal'>
    <div class='title' @click="openPdf">丁玉亮的简历</div>
  </div>
</template>

<script>

export default {
  name: 'personal',
  data() {
    return {

    };
  },
  mounted() {
  },
  methods: {
    openPdf() {
      window.open('/static/丁玉亮的简历.pdf');
    }
  }
};
</script>

<style lang='scss' scoped>
.personal{
  width: 1000px;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .title{
    text-align: center;
    font-size: 24px;
    line-height: 48px;
    margin-bottom: 200px;
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>