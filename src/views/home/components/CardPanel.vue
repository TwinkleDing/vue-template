<template>
    <el-row class='card-panel' :gutter="40">
        <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6" class='box' :key='index' v-for='(item, index) in list'>
            <div class='box-content'>
                <div class='l'>
                    {{ item.left }}
                </div>
                <div class='r'>
                    <div class='r-t'>
                        {{ item.title }}
                    </div>
                    <div class='r-b'>
                        {{ item.content }}
                    </div>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "CardPanel",
    props: {
        list: {
            type: Array,
            default() {
                return [];
            }
        }
    }
};
</script>

<style lang='scss'>
.card-panel{
  width: 100%;
  margin: 0!important;
  .box{
    &-content{
      min-width: 200px;
      height: 120px;
      box-sizing: border-box;
      border: 1px solid #ac0;
      margin: 10px 0;
    }
    .l{
      float: left;
      height: 100px;
      width: 100px;
      line-height: 100px;
      text-align: center;
      font-size: 26px;
      margin: 10px;
      border: 1px solid #ac0;
      box-sizing: border-box;
    }
    .r{
      float: right;
      height: 100%;
      width: calc( 100% - 120px);
      &-t{
        margin-top: 25px;
        font-size: 20px;
      }
      &-b{
        margin-top: 15px;
      }
    }
  }
}
</style>