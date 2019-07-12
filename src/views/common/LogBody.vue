<template>
  <div class="box-body scorll-style-none">
    <el-table
      :data="tableData"
      border
      fit
      stripe
      highlight-current-row
      style="width: 100%;"
      v-loading="loading"
    >
      <el-table-column
        type="index"
        label="序号"
        width="50">
        <template slot-scope="scope" v-cloak>
          <span>{{scope.$index+(currentPage - 1) * pageSize + 1}} </span>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="任务名称">
      </el-table-column>
      <el-table-column
        label="当前进度"
        width="80">
        <template slot-scope="scope" v-cloak>
          {{ scope.row.ratio + '%'}}
        </template>
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态">
      </el-table-column>
      <el-table-column
        prop="remark"
        label="描述">
      </el-table-column>
      <el-table-column
        label="创建时间">
        <template slot-scope="scope" v-cloak>
          {{ scope.row.createTime | timeFormat('YYYY-MM-DD HH:mm:ss') }}
        </template>
      </el-table-column>
      <el-table-column
        label="完成时间">
        <template slot-scope="scope" v-cloak>
          {{ scope.row.finishTime | timeFormat('YYYY-MM-DD HH:mm:ss') }}
        </template>
      </el-table-column>
      <el-table-column
        prop="creator"
        label="创建账号">
      </el-table-column>
      <el-table-column
        label="结果"
        width="120">
        <template slot-scope="scope">
          <span v-if="scope.row.url !== ''">
            <a :href="scope.row.url">下载错误文件</a>
          </span>
          <span v-if="scope.row.url === ''">
            ——
          </span>
        </template>
      </el-table-column>
      <!--370-->
      <el-table-column  label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="medium" icon="el-icon-document" @click="delTask(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    name: 'LogBody',
    props: ['tableData', 'currentPage', 'pageSize', 'loading'],
    data () {
      return {
      }
    },
    methods: {
      // 删除
      delTask (id) {
        if (this.$store.state.token) {
          this.Axios.delete('/api/task/delete/' + id).then(response => {
            // 成功后解析数据
            console.log(this.$parent)
            this.$parent.$emit('searchData')
          }).catch(error => {
            console.log('任务列表删除:' + error)
            return false
          })
        } else {
          this.$store.commit('REMOVE_TOKEN')
          this.$router.replace('/Login')
          this.$message.error('请重新登录')
        }
      }
    }
  }
</script>
