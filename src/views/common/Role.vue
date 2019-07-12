<template>
<div class="todo-content selecte-div" @click="goInto(role.academyId,role.id,role.name,role.structName)" v-on:mouseover="changeActive($event)" v-on:mouseout="removeActive($event)">
    <div>
      <h2 style="font-size:16px" v-cloak>{{ role.level }} -- {{ role.structName }} -- {{ role.name }}</h2>
      <!--<el-collapse v-model="activeNames">-->
        <!--<el-collapse-item :title="role.remark | remarkSub" name="1">-->
          <!--<div>{{role.remark}}</div>-->
        <!--</el-collapse-item>-->
      <!--</el-collapse>-->
      <!--<div>-->
        <!--<div class="acadmy-color"> {{ role.academyName }}</div>|-->
        <!--<span> {{ role.structName }} | {{ role.structName }}</span>-->
      <!--</div>-->
      <!--<ul class="list-inline blog-devin-tag txt-color">-->
        <!--<li>-->
            <!--&nbsp;<span class="ti-home"></span>&nbsp;{{ role.academyName }}-->
        <!--</li>-->
        <!--<li>-->
            <!--<span class="ti-bar-chart-alt"></span>&nbsp;{{ role.structName }}-->
        <!--</li>-->
        <!--<li>-->
            <!--<span class="ti-panel"></span>&nbsp;{{ role.structName }}-->
        <!--</li>-->
      <!--</ul>-->
    </div>
    <div class="todo-completed" v-cloak>{{ $t('select.system') }}</div>
    <!-- <div class="todo-pending" v-on:click="completeTodo(todo)" v-show="!isEditing && !todo.done"> Pending </div> -->
</div>
</template>
<script>
  export default {
    props: ['role'],
    data: function () {
      return {
        roleRemark: '角色描述',
        remark: '',
        isTrue: true,
        bgColor: ['#fe7a15', '#00bf8f', '#26c6da', '#f06292']
      }
    },
    methods: {
      goInto (academyId, roleId, roleName, structName) {
        // 将省校Id和角色Id存储localStorage中
        localStorage.academyId = academyId
        localStorage.roleName = roleName
        localStorage.structName = structName
        this.$store.commit('SET_ROLEID', roleId)
        this.$router.push('/index')
        // if (this.$store.state.loginRoleId) {
        //   this.Axios.get('/api/privilege/getPrivs', {
        //     params: {
        //       academyId: academyId
        //     }
        //   }).then(response => {
        //     localStorage.sideBarLists = JSON.stringify(response.data.body)
        //     this.$router.push('/index')
        //     localStorage.selectRole = false
        //   }).catch(error => {
        //     console.log('错误' + error)
        //     return false
        //   })
        // } else {
        //   console.log('没有roleId')
        //   this.$store.commit('REMOVE_TOKEN')
        //   this.$router.push('/Login')
        // }
      },
      changeActive ($event) {
        $event.currentTarget.className = 'todo-content selecte-div active'
      },
      removeActive ($event) {
        $event.currentTarget.className = 'todo-content selecte-div'
      }
    },
    filters: {
      remarkSub: function (remarkStr, pattern = '') {
        if (remarkStr.length > 90) {
          return remarkStr.substr(0, 90) + '...'
        } else if (remarkStr.length === 0) {
          return `该角色未给与详细描述`
        } else {
          return remarkStr
        }
      }
    }
  }
</script>
<style scoped="scoped">
.todo-threeClass,.todo-fourClass {
  color: #fff;
  position: absolute;
  top: 30px;
  right: 30px;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 11px;
}
.todo-devin .todo-list .todo-content{
  padding:30px 30px 10px 30px !important;
}
/*#fe7a15*/
  .txt-color{
    color:#555 !important;
  }

.todo-completed {
  background: #409eff;
  font-size: 14px;
}
  .active{
    border:1px solid #edf2fc !important;
    /*background: #edf2fc !important;*/
    cursor: pointer;
  }
</style>


