<template>
  <div class='tab-one'>
    <div class='item progress'>
      <el-progress :percentage='50' />
      <el-progress :percentage='100' :format='format' />
      <el-progress :percentage='100' status='success' />
      <el-progress :percentage='100' status='warning' />
      <el-progress :percentage='50' status='exception' />
    </div>
    <div class='item btn'>
      <div>
        <el-button @click='btnClick("默认按钮")'>默认按钮</el-button>
        <el-button type='primary' @click='btnClick("主要按钮")'>主要按钮</el-button>
        <el-button type='success' @click='btnClick("成功按钮", "success")'>成功按钮</el-button>
      </div>
      <div>
        <el-button type='info' @click='btnClick("信息按钮", "info")'>信息按钮</el-button>
        <el-button type='warning' @click='btnClick("警告按钮", "warning")'>警告按钮</el-button>
        <el-button type='danger' @click='btnClick("危险按钮", "error")'>危险按钮</el-button>
      </div>
      <div>
        <el-button type='primary' icon='el-icon-edit'></el-button>
        <el-button type='primary' icon='el-icon-share'></el-button>
        <el-button type='primary' icon='el-icon-delete'></el-button>
        <el-button type='primary' icon='el-icon-search'>搜索</el-button>
        <el-button type='primary'>上传<i class='el-icon-upload el-icon--right'></i></el-button>
      </div>
      <div>
        <el-button-group>
          <el-button type='primary' icon='el-icon-arrow-left'>上一页</el-button>
          <el-button type='primary'>下一页<i class='el-icon-arrow-right el-icon--right'></i></el-button>
        </el-button-group>
        <el-button-group>
          <el-button type='primary' icon='el-icon-edit'></el-button>
          <el-button type='primary' icon='el-icon-share'></el-button>
          <el-button type='primary' icon='el-icon-delete'></el-button>
        </el-button-group>
      </div>
    </div>
    <div class='item badge'>
      <div>
        <el-link href='' target='_blank'>默认链接</el-link>
        <el-link type='primary'>主要链接</el-link>
        <el-link type='success'>成功链接</el-link>
        <el-link type='warning'>警告链接</el-link>
        <el-link type='danger'>危险链接</el-link>
        <el-link type='info'>信息链接</el-link>
      </div>
      <div>
        <el-badge :value='12' class='item'>
          <el-button size='small'>评论</el-button>
        </el-badge>
        <el-badge :value='3' class='item'>
          <el-button size='small'>回复</el-button>
        </el-badge>
        <el-badge :value='1' class='item' type='primary'>
          <el-button size='small'>评论</el-button>
        </el-badge>
        <el-badge :value='2' class='item' type='warning'>
          <el-button size='small'>回复</el-button>
        </el-badge>
        <el-dropdown class='drop-down' trigger='click'>
          <span class='el-dropdown-link'>
            点我查看<i class='el-icon-caret-bottom el-icon--right'></i>
          </span>
          <el-dropdown-menu slot='dropdown'>
            <el-dropdown-item class='clearfix'>
              评论
              <el-badge class='mark' :value='12' />
            </el-dropdown-item>
            <el-dropdown-item class='clearfix'>
              回复
              <el-badge class='mark' :value='3' />
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class='item tags'>
      <div>
        <el-tag>标签一</el-tag>
        <el-tag type='success'>标签二</el-tag>
        <el-tag type='info'>标签三</el-tag>
        <el-tag type='warning'>标签四</el-tag>
        <el-tag type='danger'>标签五</el-tag>
      </div>
      <div>
        <el-tag
          :key='tag'
          v-for='tag in dynamicTags'
          closable
          :disable-transitions='false'
          @close='handleClose(tag)'>
          {{tag}}
        </el-tag>
        <el-input
          class='input-new-tag'
          v-if='inputVisible'
          v-model='inputValue'
          ref='saveTagInput'
          size='small'
          @keyup.enter.native='handleInputConfirm'
          @blur='handleInputConfirm'
        >
        </el-input>
        <el-button v-else class='button-new-tag' size='small' @click='showInput'>+ New Tag</el-button>
      </div>
    </div>
    <div class='item huadong'>
      <el-slider v-model='value1'></el-slider>
      <el-rate v-model='valuet' show-text />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tab1One',
  data() {
    return {
      value1: 0,
      valuet: null,
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: ''
    };
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? '满' : `${percentage}%`;
    },
    btnClick(name, type) {
      this.$message({
        message: '点击了' + name,
        type: type
      });
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    }
  }
};
</script>

<style lang='scss' scoped>
.tab-one{
  padding: 100px;
  .item{
    margin: 20px;
  }
  .progress{
    width: 400px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .badge{
    width: 400px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    div{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .drop-down{
        cursor: pointer;
      }
    }
  }
  .btn{
    width: 400px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  .tags{
    width: 400px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    div{
      display: flex;
      justify-content: space-between;
    }
  }
  .huadong{
    display: block;
    width: 400px;
    height: 100px;
  }
}
</style>