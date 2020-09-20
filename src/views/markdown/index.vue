<template>
  <div class='pages-markdown'>
    <div class='file-content'>
      <div>当前文件夹： {{ dirName }}</div>
      <div v-for="(item, index) in fileList" :key='index'>
        <div class='file-item' @dblclick="openFile(item)">
          <i :class='item.type === "file" ? "el-icon-postcard" : "el-icon-files"'></i>
          {{ item.name }}</div>
      </div>
    </div>
    <mavon-editor v-model='content'
      ref='md' @change='change'
      @imgAdd='$imgAdd'
      style='min-height: 600px' />
      <div v-html='html'></div>
  </div>
</template>

<script type='text/ecmascript-6'>
// 导入组件 及 组件样式
import { mavonEditor } from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import { fileList, fileInfo, fileStat } from '@/api/markdown';

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
      dirName: 'file'
    };
  },
  mounted() {
    this.getFileList();
    this.getFileStat();
  },
  methods: {
    getFileList() {
      fileList({dirName: this.dirName}).then( res => {
        console.log(res);
        this.fileList = res;
      });
    },
    getFileStat() {
      fileStat({file: this.dirName}).then( res => {
        console.log(res);
      });
    },
    openFile(item) {
      if(item.type === 'file') {
        fileInfo({file: this.dirName+ '/' +item.name}).then( res => {
          console.log(res);
        });
      }else {
        fileList({dirName: this.dirName+ '/' +item.name}).then( res => {
          console.log(res);
          this.fileList = res;
        });
      }
    },
    change(value, render) {
      //实时获取转成html的数据
      this.html = render;
      console.log(this.html);
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
  .file-content{
    height: 200px;
    text-align: left;
    padding: 30px;
    font-size: 20px;
    .file-item{
      cursor: pointer;
    }
  }
}
</style>