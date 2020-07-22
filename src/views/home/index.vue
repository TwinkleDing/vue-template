<template>
  <div class='home-index'>
    首页
    <el-tree
      :data="data"
      default-expand-all
      node-key="id"
      ref="tree"
      :default-checked-keys="[5]"
      highlight-current
    ></el-tree>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Pages',
  data() {
    return {
      data: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  computed: {
    ...mapGetters(['userInfo']),
  },
  watch: {
    defaultProps: {
      handler() {

      },
      deep: true
    }
  },
  mounted() {
    this.$refs.tree.setCurrentKey(5);
  }
};
</script>

<style lang='scss'>
.home-index {
  min-height: calc(100% - 20px);
}
</style>