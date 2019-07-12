<template>
    <div style="text-align:right;padding-bottom: 30px;" class="block">
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="isCurrentPage"
                :page-sizes="pageSizeList"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, slot"
                :total="total">
            <!--自定义的前往多少页 slot   原来是jumper部分-->
            <span class="el-pagination__jump">前往 <div class="el-input el-pagination__editor is-in-pagination">
                <input class="el-input__inner" min="1" onkeyup="this.value=this.value.replace(/[^\d]/g,'') " onafterpaste="this.value=this.value.replace(/[^\d]/g,'') " type="number" @blur="BlurEvent(copyCurrentPage)" @keydown="KeydownEvent(copyCurrentPage, $event)" @change="ChangeEvent(copyCurrentPage)" v-model="copyCurrentPage"></div>页
            </span>
        </el-pagination>
    </div>
</template>

<script>
  export default {
    name: 'pagination',
    props: ['total', 'pageSizeList', 'currentPage', 'pageSize'],
    data () {
      return {
        copyCurrentPage: this.currentPage,
        flag: true,
        isCurrentPage: this.currentPage,
        inIE: this.isIE()
      }
    },
    methods: {
      // 判断ie或者edge
      isIE () {
        // ie
        if (!!window.ActiveXObject || 'ActiveXObject' in window) return true
        // edge
        else if (navigator.userAgent.indexOf('Edge') > -1) return true
        else return false
      },
      // 分页
      handleSizeChange (val) {
        // console.log(`每页 ${val} 条`)
        this.$emit('changePageSize', val)
      },
      // 组件原来的分页
      handleCurrentChange (val) {
        // console.log(`当前 ${val} 业`)
        this.$emit('changePage', val)
      },
      // 自定义当前业 查询的时候让回到第一页
      fatherHandleCurrentChange (val) {
        this.copyCurrentPage = val
        this.$emit('changePage', val)
        this.isCurrentPage = val
      },
      // 自定义分页调整 事件  即右下方输入第几页
      inputChangeEvent (val) {
        val = Number(val)
        // 小于一业去第一页
        if (val < 1) {
          val = 1
          this.copyCurrentPage = 1
        } else if (val > parseInt(this.total / this.pageSize) + 1) {
          if (this.total === 0) {
            val = 1
            this.copyCurrentPage = 1
          } else {
            // 大于总页数跳到最大页数
            if (this.total % this.pageSize === 0) {
              val = parseInt(this.total / this.pageSize)
              this.copyCurrentPage = parseInt(this.total / this.pageSize)
            } else {
              val = parseInt(this.total / this.pageSize) + 1
              this.copyCurrentPage = parseInt(this.total / this.pageSize) + 1
            }
          }
        }
        this.isCurrentPage = Number(this.copyCurrentPage)
        this.$emit('changePage', val)
      },
      // change事件，多数浏览器可以
      ChangeEvent (val) {
        // 在非ie中生效
        if (!this.inIE) {
          this.inputChangeEvent(val)
        }
      },
      // blur和keyDown事件兼容ie和Edge
      BlurEvent (val) {
        if (this.inIE && this.isCurrentPage !== Number(val)) {
          this.inputChangeEvent(val)
        }
      },
      KeydownEvent (val, e) {
        var e = e || window.event
        // 在非ie中生效
        if (this.inIE && e.keyCode === 13 && this.isCurrentPage !== Number(val)) {
          this.inputChangeEvent(val)
        }
      }
    },
    watch: {
      total: function (v) {
        if (v === 0) {
          this.copyCurrentPage = 1
        }
        if (v > 0 && this.flag) {
          this.flag = false
          this.isCurrentPage = this.currentPage
        }
      },
      currentPage: function (v) {
        // this.isCurrentPage = v
        // console.log(this.isCurrentPage, typeof this.isCurrentPage)
        // var _this = this
        // setTimeout(function () { _this.isCurrentPage = v }, 0)
        if (Number(this.copyCurrentPage) !== v) {
          this.copyCurrentPage = v
          // this.isCurrentPage = v
        }
      }
      // copyCurrentPage: function (v) {
      //   console.log(v, this.total, 12121)
      //   if (this.total === 0) {
      //     alert(123)
      //     v = 1
      //   }
      // }
    }
  }
</script>
