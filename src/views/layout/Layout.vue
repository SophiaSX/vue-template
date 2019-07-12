<template>
  <div v-loading="loading">
    <app-header></app-header>

    <!-- Left side column. contains the sidebar -->
    <app-sidebar></app-sidebar>

    <!-- Content Wrapper. Contains page content -->
    <router-view></router-view>
    <!-- /.content-wrapper -->

    <app-footer></app-footer>
  </div>
</template>

<script>
  import Sidebar from '@/views/common/Sidebar.vue'
  import Header from '@/views/common/Header.vue'
  import Footer from '@/views/common/Footer.vue'

  export default {
    name: 'index',
    data: function () {
      return {
        loading: false
      }
    },
    components: {
      'app-sidebar': Sidebar,
      'app-header': Header,
      'app-footer': Footer
    }
  }
</script>
