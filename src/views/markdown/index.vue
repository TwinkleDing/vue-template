<template>
    <div class='pages-markdown'>
        <div class='file'>
        <div class='file-title'>
            <i class='el-icon-back' @click="backDir"></i>
            <span>当前文件夹： {{ dirName }}</span>
            <div>
                <el-button class='addBtn' type='primary' @click="addFile">{{ dirType === 'file' ? '保存文件' : '新建文件' }}</el-button>
                <el-button v-if="dirType !== 'file'" class='addBtn' type='primary' @click='addDir'>新建文件夹</el-button>
            </div>
        </div>
        <div class='file-content'>
            <div v-for="(item, index) in fileList" :key='index'>
                <div class='file-item' @dblclick="openFile(item)">
                    <i :class='item.type === "file" ? "el-icon-files" : "el-icon-folder"' :style='`color:${themeColor}`'></i>
                    {{ item.name }}
                    <el-popconfirm
                    title="这是一段内容确定删除吗？"
                    @onConfirm="delFile(item)"
                    >
                        <el-button slot="reference" type='text'>删除</el-button>
                    </el-popconfirm>
                </div>
            </div>
        </div>
        </div>
        <div class='edit-box'>
        <mavon-editor v-model='content'
            ref='md'
            v-if='dirType === "file" || editShow'
            @change='change'
            :subfield='false'
            style='height:100%'
            @imgAdd='$imgAdd' />
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
// 导入组件 及 组件样式
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import { fileList, fileInfo, filePath, fileAdd, fileDel, dirAdd, dirDel } from "@/api/markdown";
import { mapGetters } from "vuex";

export default {
    name: "MarkDowns",
    components: {
        mavonEditor,//mavon-editor组件
    },
    data() {
        return {
            content:"", // 输入的markdown
            html:"",// 转成的html,
            fileList: [],
            dirName: "",
            dirType: "folder",
            editShow: false
        };
    },
    created() {
        this.getFilePath();
    },
    computed: mapGetters(["themeColor"]),
    methods: {
        getFilePath() {
            filePath({dirName: this.dirName}).then( res => {
                this.dirName = res;
                this.getFileList();
            });
        },
        getFileList() {
            this.dirType = "folder";
            fileList({dirName: this.dirName}).then( res => {
                this.fileList = res;
            });
        },
        getFileInfo() {
            this.dirType = "file";
            fileInfo({file: this.dirName}).then( res => {
                this.content = res.toString();
            });
        },
        openFile(item) {
            this.editShow = false;
            this.dirName += "\\" + item.name;
            if(item.type === "file") {
                this.fileList = [];
                this.getFileInfo();
            }else {
                this.getFileList();
            }
        },
        backDir() {
            this.editShow = false;
            let index= this.dirName.lastIndexOf("\\");
            this.dirName = this.dirName.slice(0, index);
            this.getFileList();
            this.content = "";
        },
        addFile() {
            if(!this.editShow || this.dirType === "file") {
                this.editShow = true;
                return false;
            }
            let currentName = "";
            let currentFloder = this.dirName;
            if(this.dirType === "file") {
                let arr = this.dirName.split("\\");
                currentName = arr.pop();
                currentFloder = arr.join("\\");
            }
            this.$prompt("请输入文件名", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                inputValue: currentName,
                // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                // inputErrorMessage: '邮箱格式不正确'
            }).then(({ value }) => {
                let params = {
                    file: currentFloder + "\\" + value,
                    content: this.content
                };
                fileAdd(params).then( res => {
                    this.$message({
                        type: "success",
                        message: res
                    });
                    this.getFileList();
                });
            });
        },
        addDir() {
            this.$prompt("请输入文件夹名", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                // inputErrorMessage: '邮箱格式不正确'
            }).then(({ value }) => {
                let params = {
                    dir: this.dirName + "\\" + value,
                };
                dirAdd(params).then(res => {
                    this.$message({
                        type: "success",
                        message: res
                    });
                    this.getFileList();
                });
            });
        },
        delFile(item) {
            if(item.type === "file") {
                let params = {
                    file: this.dirName + "\\" + item.name
                };
                fileDel(params).then(res => {
                    this.$message({
                        type: "success",
                        message: res
                    });
                    this.getFileList();
                });
            }else {
                let params = {
                    dir: this.dirName + "\\" + item.name
                };
                dirDel(params).then(res => {
                    this.$message({
                        type: "success",
                        message: res
                    });
                    this.getFileList();
                });
            }
        },
        change(value, render) {
            //实时获取转成html的数据
            this.html = render;
        },
        // 将图片上传到服务器，返回地址替换到md中
        $imgAdd(pos, $file){
            let formdata = new FormData();
            formdata.append("image", $file);
            this.$ajax({
                url: "http://local.basic.com/index.php?r=markdown/upload",
                method: "post",
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
  display: flex;

  .file{
    text-align: left;
    padding: 10px;
    font-size: 20px;
    width: 600px;
    &-title{
      padding: 10px;
      .addBtn{
        margin: 10px;
      }
    }
    &-content{
      padding: 10px;
      box-sizing: border-box;
      overflow: auto;
    }
    .file-item{
      display: inline-block;
      cursor: pointer;
    }
    .el-icon-back{
      cursor: pointer;
    }
  }
  .edit-box{
    width: calc(100% - 600px);
    height: 800px;
  }
}
</style>