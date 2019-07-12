<template>
    <transition name="el-zoom-in-top">
        <div class="content-wrapper">
            <!-- Main content -->
            <!--<section class="content-header">-->
                <!--<ol class="breadcrumb">-->
                    <!--<li>-->
                        <!--<a href="#/" class="open active">-->
                            <!--<i class="ti-home"></i>-->
                        <!--</a>-->
                    <!--</li>-->
                    <!--<li>-->
                        <!--<a href="javascript:;">{{msg}}</a>-->
                    <!--</li>-->
                <!--</ol>-->
            <!--</section>-->
            <section ref="boxContent" class="content">
                <div class="row">
                    <div>
                        <div class="box">
                            <!--<ol v-if="navSetting.navList.length>0&&!navSetting.custom" class="clearfix nav-top">-->
                                <!--<li :class="{'active':(item =  navSetting.nowNav)}" v-for="(item, i) in  navSetting.navList" :key="i">-->
                                    <!--<a href="javascript:;">{{item}}</a>-->
                                <!--</li>-->
                            <!--</ol>-->
                            <!--<ol v-if="nowNav" class="clearfix nav-top">-->
                                <!--<li class="active">-->
                                    <!--<a href="javascript:;">{{nowNav}}</a>-->
                                <!--</li>-->
                            <!--</ol>-->
                            <!-- /.box-body -->
                            <router-view ref="viewContent"></router-view>
                        </div>
                        <!-- /.box -->
                    </div>
                    <!-- /.col -->
                </div>
                <!-- /.box -->
            </section>
            <!-- /.content -->
        </div>
    </transition>

</template>

<script>
  export default {
    name: 'PublicBody',
    data () {
      return {
        nowNav: ''
      }
    },
    mounted () {
      var _this = this
      function getMinHeight () {
        // 最小高度等于可视高度-头部65-底部50
        var height = document.documentElement.clientHeight - 115 || document.body.clientHeight - 115
        // console.log()
        _this.$refs.boxContent.style.minHeight = height + 'px'
        var boxNode = _this.$refs.boxContent.querySelector('.box')
        boxNode.style.minHeight = height - 35 + 'px'
      }
      getMinHeight()
      window.onresize = function () {
        debounce(getMinHeight, window)
      }
      // 去抖
      function debounce (method, context) {
        clearTimeout(method.timeout)
        method.timeout = setTimeout(function () {
          method.call(context)
        }, 50)
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        // console.log(vm.$router)
        // vm.nowNav = vm.$refs.viewContent.nowNav
        // vm.navSetting = vm.$refs.viewContent.navSetting
      })
    },
    // 替换的时候先给赋初始值
    beforeRouteUpdate (to, from, next) {
      // this.nowNav = ''
      // this.navSetting.navList = ''
      // this.navSetting.nowNav = ''
      // this.navSetting.custom = false
      // this.msg = this.$refs.viewContent.navMsg
      next()
    },
    beforeRouteLeave (to, from, next) {
      window.onresize = ''
      next()
    }
  }
</script>

