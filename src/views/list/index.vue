<template>
  <div class='pages-lists'>
    <div class='list-add'>
      <el-input
        type="textarea"
        placeholder="请输入内容"
        v-model="addData"
        maxlength="140"
        show-word-limit
        resize='none'
      >
      </el-input>
      <el-button @click='addComment' type='primary'>添加留言</el-button>
      <el-button v-if='deleteBatchBtn' @click='deleteBatch' type='primary'>批量删除</el-button>
    </div>
    <div class='list-1'>
      <el-table
        :data='tableData'
        style='width: 1000px'
        @selection-change='handleSelectionChange'>
        <el-table-column
          type='selection'
          width='55'>
        </el-table-column>
        <el-table-column
          prop='name'
          label='姓名'
          width='140'>
          <template slot-scope='scope'>
            <el-tag size='medium'>{{ scope.row.name }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop='avatar'
          label='头像'
          width='100'>
          <template slot-scope='scope'>
            <el-avatar :src="scope.row.avatar" />
          </template>
        </el-table-column>
        <el-table-column
          prop='date'
          label='评论日期'
          width='180'>
        </el-table-column>
        <el-table-column
          prop='content'
          label='评论内容'>
          <template slot-scope='scope'>
            <div style="white-space:pre-wrap">{{ scope.row.content }}</div>
          </template>
        </el-table-column>
        <el-table-column
          fixed='right'
          label='操作'
          width='180'>
          <template slot-scope='scope'>
            <el-button @click='deleteComment(scope.row.id)' type='danger' size='small'>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change='handleSizePage'
        @current-change='handleCurrentPage'
        :current-page='pagination.page'
        :page-sizes='[10, 20, 30, 50]'
        :page-size='100'
        layout='total, sizes, prev, pager, next, jumper'
        :total='pagination.total'>
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { commentList, addComment, deleteComment } from '@/api/comment';

export default {
  name: 'Lists',
  data() {
    return {
      addData: '',
      pagination: {
        page:1,
        size: 10
      },
      tableData: [],
      deleteBatchBtn: false,
      deleteBatchList: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      let params = {...this.pagination};
      commentList(params).then(res=> {
        this.pagination = res.data.pagination;
        this.tableData = res.data.list.map(item=> {
          return {
            id: item._id,
            date: new Date(Number(item.create_time)).toLocaleString(),
            name: item.user_name,
            content: item.content,
            avatar: item.avatar
          };
        });
      });
    },
    handleSelectionChange(val) {
      this.deleteBatchList = val;
      if(val.length) {
        this.deleteBatchBtn = true;
      }else {
        this.deleteBatchBtn = false;
      }
    },
    handleSizePage(val) {
      this.pagination.page = 1;
      this.pagination.size = val;
      this.getList();
    },
    handleCurrentPage(val) {
      this.pagination.page = val;
      this.getList();
    },
    addComment() {
      let params = {
        content: this.addData,
        _id: this.$store.getters.userInfo._id
      };
      addComment(params).then(res => {
        this.$message({
          message: res.msg,
          type: 'success'
        });
        this.addData = '';
        this.getList();
      });
    },
    deleteComment(id) {
      this.$confirm('此操作将永久删除该评论, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let params = {
          id: id
        };
        deleteComment(params).then(res => {
          this.$message({
            message: res.msg,
            type: 'success'
          });
          this.getList();
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    deleteBatch() {
      let params = this.deleteBatchList.map(item => {
        return item.id;
      }).join(',');
      this.deleteComment(params);
    }
  }
};
</script>

<style lang='scss'>
.pages-lists{
  height: auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.list-add{
  width: 1000px;
  height: 200px;
  textarea{
    height: 100px;
    background: none;
    font-size: 18px;
    color: darkcyan;
  }
  .el-textarea .el-input__count{
    background: none;
    font-size: 18px;
    color: darkcyan;
  }
  .el-button{
    margin-top: 30px;
    margin-left: 30px;
    float: right;
  }
}
.list-1{
  width: 1000px;
  .el-table, .el-table th, .el-table tr{
    background: none;
  }
  .el-pagination{
    margin-top: 5px;
    .el-dialog, .el-pager li, .el-pagination__editor.el-input .el-input__inner{
      background: none;
    }
    input, button, button:disabled{
      background: none;
    }
  }
}
</style>