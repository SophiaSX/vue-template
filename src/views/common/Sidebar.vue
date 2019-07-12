<template>
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <div>
      <section class="sidebar">
        <!-- /.search form -->
        <!-- Sidebar user panel -->
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu">
          <li class="header">教学管理</li>
          <li class="treeview">
            <a href="#"> <i class="fa fa-sitemap"></i> <span>{{ $t('route.OrganizationalAuthority') }}</span> <span
              class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span> </a>
            <ul class="treeview-menu">
              <li>
                <router-link to="/teaching-role-manage">
                  <span v-cloak>{{ $t('route.TeacherRole') }}</span>
                </router-link>
              </li>
              <li>
                <router-link to="/struct-manage">
                  <span v-cloak>{{ $t('route.Organization') }}</span>
                </router-link>
              </li>
            </ul>
          </li>
          <!-- 基础信息管理 -->
          <li class="treeview">
            <a href="#"> <i class="ti-settings"></i> <span v-cloak>{{ $t('route.BasicInformation') }}</span> <span
              class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
            </a>
            <ul class="treeview-menu">
              <li>
                <router-link to="/Semester">
                  <span v-cloak>{{ $t('route.Semester') }}</span>
                </router-link>
              </li>
              <li>
                <router-link to="/Department">
                  <span v-cloak>{{ $t('route.Department') }}</span>
                </router-link>
              </li>
            </ul>
          </li>
          <!--教师及账号管理-->
          <li class="treeview">
            <a href="#"> <i class="ti-user"></i> <span v-cloak>{{ $t('route.TeachersAndAccounts') }}</span> <span
              class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span> </a>
            <ul class="treeview-menu">
              <li>
                <router-link :to="{name:'ManagementInfo'}">
                  <span v-cloak>{{ $t('route.TeacherInfo') }}</span>
                </router-link>
              </li>
              <li>
                <router-link :to="{name:'ManagementUser'}">
                  <span v-cloak>{{ $t('route.TeacherAdmin') }}</span>
                </router-link>
              </li>
            </ul>
          </li>
          <!--学生信息管理-->
          <li class="treeview">
            <a href="#"> <i class="fa fa-graduation-cap"></i> <span v-cloak>{{ $t('route.StudentInformation') }}</span> <span
              class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span> </a>
            <ul class="treeview-menu">
              <li>
                <router-link to="/StudentInfo">
                  <span v-cloak>{{ $t('route.StudentInfo') }}</span>
                </router-link>
              </li>
            </ul>
          </li>
          <!--课程信息管理ti-desktop-->
          <li class="treeview">
            <a href="#"> <i class="ti-agenda"></i> <span v-cloak>{{ $t('route.CourseInformation') }}</span> <span
              class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span> </a>
            <ul class="treeview-menu">
              <li>
                <router-link to="/coursein-formation-manage">
                  <span v-cloak>{{ $t('route.Course') }}</span>
                </router-link>
              </li>
              <li>
                <router-link :to="{name: 'CourseResources'}">
                  <span v-cloak>{{ $t('route.CourseResources') }}</span>
                </router-link>
              </li>
              <li>
                <router-link to="/CourseTeacher">
                  <span v-cloak>{{ $t('route.CourseTeachers') }}</span>
                </router-link>
              </li>
              <li>
                <router-link to="/coursein-observer-manage">
                  <span v-cloak>{{ $t('route.CourseObserver') }}</span>
                </router-link>
              </li>
            </ul>
          </li>
          <!--选课管理-->
          <li class="treeview">
            <a href="#"> <i class="ti-book"></i> <span v-cloak>{{ $t('route.ElectiveCourse') }}</span> <span
              class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span> </a>
            <ul class="treeview-menu">
              <li>
                <router-link :to="{name: 'ElectiveCourse'}">
                  <span v-cloak>{{ $t('route.StudentCourse') }}</span>
                </router-link>
              </li>
              <li>
                <router-link :to="{name: 'CourseCount'}">
                  <span v-cloak>{{ $t('route.ElectiveStatistics') }}</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <br>
            <br>
            <br>
          </li>
        </ul>
      </section>
      <!-- /.sidebar -->
    </div>
  </aside>
</template>
<script>
  export default {
    name: 'Sidebar',
    mounted: function () {
      // $(document).ready(function ($) {
      //   $('.main-sidebar > div').slimScroll({
      //     width: '230px',
      //     position: 'left',
      //     size: '5px',
      //     height: '95vh'
      //   })
      // })
    }
  }
</script>
