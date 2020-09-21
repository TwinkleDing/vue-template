<template>
  <div class='pages-markdown'>
    <div class='file'>
      <div class='file-title'>
        <i class='el-icon-back' @click="backDir"></i>
        <span>当前文件夹： {{ dirName }}</span>
        <el-button @click="addFile">新增文件</el-button>
      </div>
      <div class='file-content'>
        <div v-for="(item, index) in fileList" :key='index'>
          <div class='file-item' @dblclick="openFile(item)">
            <i :class='item.type === "file" ? "el-icon-files" : "el-icon-folder"'></i>
            {{ item.name }}</div>
        </div>
      </div>
    </div>
    <mavon-editor v-model='content'
      ref='md' @change='change'
      @imgAdd='$imgAdd'
      style='min-height: 600px' />
  </div>
</template>

<script type='text/ecmascript-6'>
// 导入组件 及 组件样式
import { mavonEditor } from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import { fileList, fileInfo, filePath, fileAdd } from '@/api/markdown';

export default {
  name: 'MarkDowns',
  components: {
    mavonEditor,//mavon-editor组件
  },
  data() {
    return {
      content:'', // 输入的markdown
      html:'',// 转成的html,
      fileList: [],
      dirName: ''
    };
  },
  created() {
    this.getFilePath();
  },
  methods: {
    getFileList() {
      fileList({dirName: this.dirName}).then( res => {
        this.fileList = res;
      });
    },
    getFilePath() {
      filePath({dirName: this.dirName}).then( res => {
        this.dirName = res;
        this.getFileList();
      });
    },
    getFileInfo() {
      fileInfo({file: this.dirName}).then( res => {
        this.content = res.toString();
      });
    },
    addFile() {
      if(!this.content) {
        this.$message({
          type: 'warning',
          message: '未添加内容'
        });
        return false;
      }
      this.$prompt('请输入文件名', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        // inputErrorMessage: '邮箱格式不正确'
      }).then(({ value }) => {
        let params = {
          file: this.dirName + '\\' + value,
          content: this.content
        };
        fileAdd(params).then( res => {
          console.log(res);
          this.getFileList();
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    },
    openFile(item) {
      this.dirName += '\\' + item.name;
      if(item.type === 'file') {
        this.fileList = [];
        this.getFileInfo();
      }else {
        this.getFileList();
      }
    },
    backDir() {
      let index= this.dirName.lastIndexOf('\\');
      this.dirName = this.dirName.slice(0, index);
      this.getFileList();
      this.content = '';
    },
    change(value, render) {
      //实时获取转成html的数据
      this.html = render;
    },
    // 将图片上传到服务器，返回地址替换到md中
    $imgAdd(pos, $file){
      let formdata = new FormData();
      formdata.append('image', $file);
      this.$ajax({
        url: 'http://local.basic.com/index.php?r=markdown/upload',
        method: 'post',
        data: formdata,
      }).then((data) => {
        //将返回的url替换到文本原位置
        if (data.data.success === 1) {
          this.$refs.md.$img2Url(pos, data.data.url);
          console.log(data.data.url);
        }
      });
    },
  }
};
</script>

<style lang='scss'>
.pages-markdown{
  height: calc(100% - 20px);
  .file{
    text-align: left;
    padding: 10px;
    font-size: 20px;
    &-title{
      padding: 10px;
    }
    &-content{
      padding: 10px;
      max-height: 200px;
      box-sizing: border-box;
      overflow: auto;
    }
    .file-item{
      cursor: pointer;
    }
    .el-icon-back{
      cursor: pointer;
    }
  }
}
</style>