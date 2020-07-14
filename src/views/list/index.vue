<template>
  <div class='pages-lists'>
    <div class="list-1">
      <el-table
        :data="tableData"
        style="width: 800px"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
          <template slot-scope="scope">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)"
                        type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagination.page"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pagination.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { commentList } from '@/api/comment';
export default {
  name: 'Lists',
  data() {
    return {
      pagination: {
        page:1,
        size: 10
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
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
            date: new Date(Number(item.create_time)).toLocaleString(),
            name: item.user_name,
            address: item.user_id
          };
        });
      });
    },
    handleClick(row) {
      this.$router.push('/info?name='+row.name);
    },
    handleSelectionChange() {

    },
    handleSizeChange(val) {
      this.pagination.page = 1;
      this.pagination.size = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.pagination.page = val;
      this.getList();
    }
  }
};
</script>

<style lang="scss">
.pages-lists{
  height: auto;
  padding: 20px;
}
.list-1{
  background: #fff;
  width: 800px;
}
</style>