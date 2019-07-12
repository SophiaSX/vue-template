<template>
  <div class="todo-devin">
    <div class="row">
      <div class="col-md-3" style="padding-right: 0;width: 28%;">
        <div class="side-todo">
          <ul>
            <li class="clearfix"><img :src="photo" alt="avatar" width="100px">
              <div class="about">
              <div class="name" v-cloak>{{ username }}</div>
                <div class="status">
                  <i class="fa fa-circle online"></i>
                  {{ $t('select.onLine') }}
                </div>
              </div>
            </li>
            <li v-for="(item, index) in academyItems" class="academyId" v-bind:key="item.id" @click="selectAcademy(index)" :class="switchClass(clicked==index)">
              {{ item.name }}
              <!--<b>{{ $t('select.selectRole') }}&nbsp;-->
                <!--<i class="ti-shift-right"></i>-->
              <!--</b>-->
              <div class="triangle_border_left">
                <span></span>
              </div>
            </li>
            <!--<li v-for="(item, index) in academyItems" class="academyId" v-bind:key="item.id" @click="selectAcademy(index)" :class="switchClass(clicked==index)">-->
              <!--{{ item.name }}额带娃挖空我哦调度我弟弟都啊啊我dawe-->
              <!--&lt;!&ndash;<b>{{ $t('select.selectRole') }}&nbsp;&ndash;&gt;-->
              <!--&lt;!&ndash;<i class="ti-shift-right"></i>&ndash;&gt;-->
              <!--&lt;!&ndash;</b>&ndash;&gt;-->
              <!--&lt;!&ndash;<i style="position: absolute;right:10px;top:50%;transform: translateY(-50%)" class="el-icon-arrow-up"></i>&ndash;&gt;-->
              <!--<div class="triangle_border_left">-->
                <!--<span></span>-->
              <!--</div>-->
            <!--</li>-->
          </ul>
          <div class="triangle_border_left">
            <span></span>
          </div>
          <el-button class="user-login-out" style="float: left;position: relative" type="text" @click="loginOut">{{ $t('select.logOut') }}<i style="position: absolute"></i></el-button>
        </div>
      </div>
      <div class="col-md-9 is-scroll-right role-select-sty" style="height:100%;padding-left:0;width: 72%">
        <div style="border-left:1px solid #ddd !important;height:940px; overflow-y:auto;">
        <el-alert :title="$t('select.Reminder')" style="font-size: 14px" type="error" :closable="false"></el-alert>
          <!--v-bind:isShow="isShow"-->
        <role-list v-bind:roleLists="roleLists"></role-list>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import RoleList from './common/RoleList.vue'
  export default {
    name: 'Select',
    components: {
      RoleList
    },
    data: function () {
      return {
        username: localStorage.username,
        photo: localStorage.photo,
        academyItems: [],
        roleLists: [],
        // isShow: true,
        firstLists: [],
        clicked: '0',
        bgColor: ['completed', 'pending', 'threeClass', 'fourClass'],
        roleBgColor: ['todo-completed', 'todo-pending', 'todo-threeClass', 'todo-fourClass']
      }
    },
    methods: {
      selectAcademy (index) {
        this.clicked = index
        this.roleLists = this.academyItems[index].roleItems
        for (let j = 0; j < this.roleLists.length; j++) {
          this.roleLists[j].academyId = this.academyItems[index].id
        }
        // 判断默认显示的角色列表是否为空
        // if (this.roleLists.length === 0) {
        //   this.isShow = false
        // } else {
        //   this.isShow = true
        // }
      },
      loginOut () {
        // 安全退出
        this.$store.commit('REMOVE_TOKEN')
        this.$router.push('/')
      },
      switchClass (con) {
        if (con) {
          return this.bgColor[0] + ' active'
        } else {
          return this.bgColor[1]
        }
      }
    },
    beforeMount: function () {
      this.academyItems = [{"id":3,"code":"HNKF","name":"河南开放省校","roleItems":[{"id":1,"code":"JXGLY","name":"教学管理员","remark":"该角色是内置角色","structCode":"HNKF","structName":"河南开放省校","level":"省校"}]},{"id":135,"code":"HNGZ","name":"HNGZ","roleItems":[{"id":243,"code":"JXGLY","name":"教学管理员","remark":"该角色是内置角色","structCode":"HNGZ","structName":"HNGZ","level":"省校"}]}]

      for (let j = 0; j < this.academyItems[0].roleItems.length; j++) {
              this.academyItems[0].roleItems[j].academyId = this.academyItems[0].id
              // this.academyItems[0].roleItems[j].bgColor = this.roleBgColor[0]
              this.academyItems[0].roleItems[j].academyName = this.academyItems[0].name
              // localStorage.structName = this.academyItems[0].roleItems[0].structName
              this.roleLists.push(this.academyItems[0].roleItems[j])
            }

      //   if (this.$store.state.token) {
    //     // 获取角色列表信息
    //     this.$store.dispatch('getRoleList', this.loginForm).then(response => {
    //       // 成功后解析数据
    //       if (response.data.code === '1') {
    //         // 省校列表
    //         this.academyItems = response.data.body
    //         for (let j = 0; j < this.academyItems[0].roleItems.length; j++) {
    //           this.academyItems[0].roleItems[j].academyId = this.academyItems[0].id
    //           // this.academyItems[0].roleItems[j].bgColor = this.roleBgColor[0]
    //           this.academyItems[0].roleItems[j].academyName = this.academyItems[0].name
    //           // localStorage.structName = this.academyItems[0].roleItems[0].structName
    //           this.roleLists.push(this.academyItems[0].roleItems[j])
    //         }
    //         // 判断默认显示的角色列表是否为空
    //         // if (this.roleLists.length === 0) {
    //         //   this.isShow = false
    //         // } else {
    //         //   this.isShow = true
    //         // }
    //       } else {
    //         console.log('getRoles获取失败' + response.data)
    //         this.$store.commit('REMOVE_TOKEN')
    //         this.$router.replace('/Login')
    //       }
    //     }).catch(error => {
    //       if (this.$store.state.token) {
    //         this.$message.error('服务器忙碌，请稍后再试')
    //       }
    //       console.log('role:' + error.msg)
    //       // this.errorMsg = error.response.body.msg
    //       return false
    //     })
    //   } else {
    //     this.$message.error('请重新登录')
    //     this.$store.commit('REMOVE_TOKEN')
    //     this.$router.replace('/Login')
    //   }
     }
  }
</script>
<style scoped="scoped">
.side-todo ul .pending {
  padding: 0 0 30px;
  margin: 0 0 15px;
  border-bottom: 1px solid #eee;
}

.side-todo ul .completed b {
  float: right;
  background: #409eff;
  color: #fff;
  display: table;
  padding: 1px 10px;
  font-weight: 300;
  font-size: 12px;
  border-radius: 50px;
}

.side-todo ul .pending b {
  float: right;
  background: #CCC;
  color: #fff;
  display: table;
  padding: 1px 10px;
  font-weight: 300;
  font-size: 12px;
  border-radius: 50px;
}

/*.threeClass b{*/
  /*background: #26c6da;*/
/*}*/

/*.fourClass b{*/
  /*background: #f06292;*/
/*}*/

/*.todo-threeClass{*/
  /*background: #26c6da;*/
/*}*/
/*.todo-fourClass{*/
  /*background: #f06292;*/
/*}*/

  /*#academyId{*/
    /*font-size: 20px;*/
    /*height: 60px;*/
    /*line-height: 60px;*/
    /*padding-left: 15px;*/
    /*color:#fff;*/
    /*font-weight: 700;*/
  /*}*/

  .name{
    font-size: 20px !important;
  }

.side-todo ul li img {
  float: left;
  border-radius: 50%;
  width: 60px;
  border: 2px solid #eee;
  height:60px
}

.side-todo ul li .about {
  float: left;
  /*margin-top: 34px;*/
  position: relative;
  left: 20px;
}
#academyId b{
  padding: 10px 20px;
}
</style>

