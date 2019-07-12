<template>
  <transition name="el-zoom-in-top">
    <div class="content-wrapper">
      <!-- Main content -->
      <section class="content">
        <div class="row">
          <div class="col-md-12">
            <!--<div class="col-md-3">-->
            <!--<div class="box box-primary">-->
            <!--<div class="box-body box-profile">-->
            <!--<img class="profile-user-img img-responsive img-circle" :src="photo" alt="User profile picture">-->

            <!--<h3 class="profile-username text-center" v-cloak>{{ dataObj.tname }}</h3>-->

            <!--&lt;!&ndash;<p class="text-muted text-center" v-cloak>{{ roleName }}</p>&ndash;&gt;-->

            <!--<ul class="list-group list-group-unbordered">-->
            <!--<li class="list-group-item">-->
            <!--<b>登录账号:</b> <a class="pull-right" v-cloak>{{ dataObj.taccount }}</a>-->
            <!--</li>-->
            <!--<li class="list-group-item">-->
            <!--<b>所属组织：</b> <a class="pull-right" v-cloak>{{ dataObj.tstructName }}</a>-->
            <!--</li>-->
            <!--<li class="list-group-item">-->
            <!--<b>角色名称：</b> <a class="pull-right" v-cloak>{{ roleName }}</a>-->
            <!--</li>-->
            <!--</ul>-->

            <!--<a href="#" class="btn btn-primary btn-block" v-if="false"><b>修改密码</b></a>-->
            <!--</div>-->
            <!--&lt;!&ndash; /.box-body &ndash;&gt;-->
            <!--</div>-->
            <!--</div>-->



            <div class="col-md-12">
              <!-- Widget: user widget style 1 -->
              <div class="box box-widget widget-user">
              <!-- Add the bg color to the header using any of the bg-* classes -->
              <div class="widget-user-header bg-black" style="background:#000c14 url('/static/img/photo2.png') center right no-repeat;">
              <!--<h3 class="widget-user-username">{{ roleName }}</h3>-->
              <!--<h5 class="widget-user-desc">Web Designer</h5>-->
              </div>
              <div class="widget-user-image">
                <img alt="profile" class="profile-user-img img-responsive img-circle" style="width: 90px;height: 90px;" :src="photo">
              </div>
              <div class="box-footer">
              <div class="row">
                <!--border-right-->
              <div class="col-sm-4">
              <div class="description-block">
              <h5 class="description-header"> </h5>
                <!--登录账号{{ dataObj.tstructName }}-->
              <!--<span class="description-text"> </span>-->
              </div>
              <!-- /.description-block -->
              </div>
              <!-- /.col -->
              <div class="col-sm-4">
              <div class="description-block">
              <h5 class="description-header">{{ dataObj.tname }}</h5>
              <!--<span class="description-text">所属组织</span>-->
              </div>
              <!-- /.description-block -->
              </div>
              <!-- /.col -->
              <div class="col-sm-4">
              <div class="description-block">
              <h5 class="description-header"></h5>
              <!--<span class="description-text">角色名称</span>-->
              </div>
              <!-- /.description-block -->
              </div>
              <!-- /.col -->
              </div>
              <!-- /.row -->
              </div>
              </div>
              <!-- /.widget-user -->
            </div>



            <!--<div class="col-md-12">-->
              <!--<div class="box no-shadow">-->
                <!--<div class="box-body" style="padding: 0px;">-->
                  <!--<div class="events-nest">-->
                    <!--<div class="text-white lastest-post-nest-two palette-Deep-Purple-500 bg">-->
                      <!--<div class="wrap">-->
                        <!--<div class="row">-->
                          <!--<div class="col-md-4">-->
                            <!--<h1 class="text-white">-->
                            <!--<img alt="profile" style="width: 55px;height: 55px" src="http://api.randomuser.me/portraits/thumb/women/26.jpg"-->
                                 <!--class="img-circle palette-Grey-900 bg">-->
                          <!--</h1>-->
                          <!--</div>-->
                          <!--<div class="col-md-8"><h3>{{ dataObj.tname }}</h3>-->
                            <!--<p v-cloak>{{ dataObj.tstructName }}</p>-->
                            <!--<p v-cloak>{{ roleName }}</p>-->

                          <!--</div>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <div class="col-md-12">
              <div class="nav-tabs-custom">
                <ul class="nav nav-tabs">
                  <li class="active"><a href="#settings" data-toggle="tab">个人信息</a></li>
                  <li><a href="#roles" data-toggle="tab">授予角色</a></li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane active" id="settings">
                    <div>
                      <div class="table-responsive">
                        <table class="table">
                          <tbody>
                          <tr>
                            <th>账号：</th>
                            <td v-cloak>{{ dataObj.taccount }}</td>
                          </tr>
                          <tr>
                            <th>出生日期：</th>
                            <td v-cloak>{{ dataObj.tbirdate | timeFormat('YYYY-MM-DD') }}</td>
                          </tr>
                          <tr>
                            <th>性别：</th>
                            <td v-cloak>{{ dataObj.tsex | dataFormat }}</td>
                          </tr>
                          <tr>
                            <th>电子邮箱地址:</th>
                            <td v-cloak>{{ dataObj.teml | dataFormat }}</td>
                          </tr>
                          <tr>
                            <th>手机号码:</th>
                            <td v-cloak>{{ dataObj.tmobile | dataFormat }}</td>
                          </tr>
                          <tr>
                            <th>证件号码:</th>
                            <td v-cloak>{{ dataObj.tidcard | dataFormat}}</td>
                          </tr>
                          <tr>
                            <th>教职工号:</th>
                            <td v-cloak>{{ dataObj.tworkno | dataFormat }}</td>
                          </tr>
                          <tr>
                            <th>教职工类别:</th>
                            <td v-cloak>{{ dataObj.tcategory | dataFormat }}</td>
                          </tr>
                          <tr>
                            <th>所属组织:</th>
                            <td v-cloak>{{ dataObj.structName | dataFormat }}</td>
                          </tr>
                          <tr>
                            <th>所属部门:</th>
                            <td v-cloak>{{ dataObj.tdeptName | dataFormat }}</td>
                          </tr>
                          <tr>
                            <th>有无教师资格证:</th>
                            <td v-cloak>{{ dataObj.tqualification == null ? '' : (dataObj.tqualification?'有':'无')  | dataFormat }}</td>
                          </tr>
                          <tr>
                            <th>职称:</th>
                            <td v-cloak>{{ dataObj.title | dataFormat }}</td>
                          </tr>
                          <tr>
                            <th>学历:</th>
                            <td v-cloak>{{ dataObj.txueli | dataFormat }}</td>
                          </tr>
                          <tr>
                            <th>学位:</th>
                            <td v-cloak>{{ dataObj.tdegree | dataFormat }}</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <!-- /.tab-pane -->
                  <div class="tab-pane" id="roles">
                    <div>
                      <div class="table-responsive">
                        <table class="table text-center">
                          <thead>
                          <tr>
                            <th style="width: 30%;">管辖组织</th>
                            <th style="width: 20%;">组织层级</th>
                            <th style="width: 50%;">角色</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr v-for="(item,index) in roleLists" :key="index">
                            <td style="width: 33.3%;text-align: left" v-cloak>{{ item.structName }}</td>
                            <td style="width: 33.3%;text-align: left" class="bor-left bor-right" v-cloak>{{ item.level }}</td>
                            <td style="width: 33.3%;text-align: left" v-cloak>{{ item.name }}</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /.tab-content -->
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /.content -->
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'prolife',
    data: function () {
      return {
        dataObj: {
          protrait: '',
          tacademyCode: '',
          taccount: '',
          tcategory: '',
          tdegree: '',
          teml: '',
          tidcard: '',
          title: '',
          tmobile: '',
          tname: '',
          tqualification: '',
          tsex: '',
          tworkno: '',
          txueli: '',
          tstructName: '',
          tdeptName: ''
        },
        roleLists: [],
        roleName: localStorage.getItem('roleName'),
        photo: localStorage.photo
      }
    },
    beforeMount: function () {
      if (this.$store.state.token) {
        this.Axios.get('/api/teacherPersonal/teacherInformation').then(response => {
          if (response.data.code === '1') {
            // 成功后解析数据
            this.dataObj = response.data.body
            this.dataObj.structName = response.data.body.academyItems[0].roleItems[0].structName
            for (let i = 0; i < response.data.body.academyItems.length; i++) {
              for (let j = 0; j < response.data.body.academyItems[i].roleItems.length; j++) {
                this.roleLists.push(response.data.body.academyItems[i].roleItems[j])
              }
            }
          } else {
            console.log('获取教师个人信息失败' + response.data.msg)
          }
        }).catch(error => {
          this.$message.error('服务器忙碌，请稍后再试')
          console.log('prolife:' + error)
          return false
        })
      } else {
        this.$message.error('请重新登录')
        this.$store.commit('REMOVE_TOKEN')
        this.$router.replace('/Login')
      }
    },
    filters: {
      dataFormat: function (dataStr, pattern = '') {
        if (dataStr === '' || dataStr === undefined) {
          return '——'
        } else {
          return dataStr
        }
      }
    }
  }
</script>
<style scoped="scoped">
  .profile-username {
    margin: 20px 0px;
  }

  th, td {
    line-height: 40px !important;
    border-top: none !important;
    border-bottom: 1px solid #ddd;
  }

  .profile-user-img {
    margin: 0 auto;
    width: 100px;
    padding: 3px;
    border: 3px solid #d2d6de;
    height: 100px;
  }
</style>
