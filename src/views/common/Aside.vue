<template>
  <aside
    ref="HomeAsidePart"
    :class="{'small-width':isChangeWidth}"
    class="home-aside-part"
    @click="homeAsideClick($event)">
    <div v-show="!isChangeWidth" class="sub-nav">教学管理</div>
    <ul>
      <li>
        <div
          :class="{'checked':heightAuto[0],'show-overflow':isChangeWidth}"
          class="item"
          @click="showItem(0)">
          <i class="fa-icon-16 fa-icon-font icon-fl-zuzhi"/>
          <div v-show="!isChangeWidth" style="display: inline-block">
            <span>组织权限管理</span>
            <span :class="{'rotate':heightAuto[0]}" class="pull-right-box">
              <i class="fa-top fa-icon-font icon-zuo"/>
            </span>
          </div>
          <div v-show="isChangeWidth" class="min-ul">
            <ul>
              <li>
                <span class="link-top-ul">教学角色管理教学角色教学角色</span>

              </li>
              <li>
                <span class="link-top-ul">教学角色</span>
              </li>
            </ul>
          </div>
        </div>
        <div v-show="!isChangeWidth" class="big-ul">

          <transition
            :css="false"
            name="fade-li"
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave">
            <ul v-show="heightAuto[0]==true">
              <li>
                <span class="link-bottom-ul">教学角色管理</span>

              </li>
              <li>
                <span class="link-bottom-ul">教学角色</span>
              </li>
            </ul>
          </transition>

        </div>
      </li>
      <li>
        <div
          :class="{'checked':heightAuto[1],'show-overflow':isChangeWidth}"
          class="item"
          @click="showItem(1)">
          <i class="fa-icon-font icon-jichuxinxi"/>
          <div v-show="!isChangeWidth" style="display: inline-block">
            <span>基础信息管理基础信息管理基础信息管理</span>
            <span :class="{'rotate':heightAuto[1]}" class="pull-right-box">
              <i class="fa-top fa-icon-font icon-zuo"/>
            </span>
          </div>
          <div v-show="isChangeWidth" class="min-ul">
            <ul>
              <li>
                <span class="link-top-ul">教学角色管理</span>
              </li>
              <li>
                <span class="link-top-ul">教学角色</span>
              </li>
            </ul>
          </div>
        </div>
        <div v-show="!isChangeWidth" class="big-ul">
          <keep-alive>
            <transition
              :css="false"
              name="fade"
              @before-enter="beforeEnter"
              @enter="enter"
              @leave="leave">
              <ul v-show="heightAuto[1]==true">
                <li>
                  <span class="link-bottom-ul">教学角色管理</span>

                </li>
                <li>
                  <span class="link-bottom-ul">教学角色</span>
                </li>
              </ul>
            </transition>
          </keep-alive>
        </div>
      </li>
      <!--<li>-->
      <!--<div :class="{'checked':heightAuto[2],'show-overflow':isChangeWidth}" class="item" @click="showItem(2)">-->
      <!--<i class="fa-icon-font icon-jiaoshishezhi"></i>-->
      <!--<div v-show="!isChangeWidth" style="display: inline-block">-->
      <!--<span>教师</span>-->
      <!--<span :class="{'rotate':heightAuto[2]}" class="pull-right-box">-->
      <!--<i class="fa-top fa-icon-font icon-zuo"></i>-->
      <!--</span>-->
      <!--</div>-->
      <!--<div v-show="isChangeWidth" class="min-ul">-->
      <!--<ul>-->
      <!--<li>-->
      <!--<span class="link-top-ul">教学角色管理1</span>-->

      <!--</li>-->
      <!--<li>-->
      <!--<span class="link-top-ul">教学角色</span>-->
      <!--</li>-->
      <!--</ul>-->
      <!--</div>-->
      <!--</div>-->
      <!--<div class="big-ul" v-show="!isChangeWidth">-->
      <!--<keep-alive>-->
      <!--<transition name="fade"-->
      <!--v-on:before-enter="beforeEnter"-->
      <!--v-on:enter="enter"-->
      <!--v-on:leave="leave"-->
      <!--v-bind:css="false">-->
      <!--<ul style="display: block" v-if="heightAuto[2]==true">-->
      <!--<li>-->
      <!--<span  class="link-bottom-ul">教学角色管理</span>-->

      <!--</li>-->
      <!--<li>-->
      <!--<span  class="link-bottom-ul">教学角色</span>-->
      <!--</li>-->
      <!--</ul>-->
      <!--</transition>-->
      <!--</keep-alive>-->
      <!--</div>-->
      <!--</li>-->
      <!--<li>-->
      <!--<div :class="{'checked':heightAuto[3],'show-overflow':isChangeWidth}" class="item" @click="showItem(3)">-->
      <!--<i class="fa-icon-16 fa-icon-font icon-xuesheng"></i>-->
      <!--<div v-show="!isChangeWidth" style="display: inline-block">-->
      <!--<span>学生</span>-->
      <!--<span :class="{'rotate':heightAuto[3]}" class="pull-right-box">-->
      <!--<i class="fa-top fa-icon-font icon-zuo"></i>-->
      <!--</span>-->
      <!--</div>-->
      <!--<div v-show="isChangeWidth" class="min-ul">-->
      <!--<ul>-->
      <!--<li>-->
      <!--<span  class="link-top-ul">教学角色管理1</span>-->

      <!--</li>-->
      <!--<li>-->
      <!--<span  class="link-top-ul">教学角色</span>-->
      <!--</li>-->
      <!--</ul>-->
      <!--</div>-->
      <!--</div>-->
      <!--<div class="big-ul" v-show="!isChangeWidth">-->
      <!--<keep-alive>-->
      <!--<transition name="fade"-->
      <!--v-on:before-enter="beforeEnter"-->
      <!--v-on:enter="enter"-->
      <!--v-on:leave="leave"-->
      <!--v-bind:css="false">-->
      <!--<ul style="display: block" v-if="heightAuto[3]==true">-->
      <!--<li>-->
      <!--<span  class="link-bottom-ul">教学角色管理</span>-->

      <!--</li>-->
      <!--<li>-->
      <!--<span  class="link-bottom-ul">教学角色</span>-->
      <!--</li>-->
      <!--</ul>-->
      <!--</transition>-->
      <!--</keep-alive>-->
      <!--</div>-->
      <!--</li>-->
      <!--<li>-->
      <!--<div :class="{'checked':heightAuto[4],'show-overflow':isChangeWidth}" class="item" @click="showItem(4)">-->
      <!--<i class="fa-icon-font icon-kechengguanli"></i>-->
      <!--<div v-show="!isChangeWidth" style="display: inline-block">-->
      <!--<span>课程</span>-->
      <!--<span :class="{'rotate':heightAuto[4]}" class="pull-right-box">-->
      <!--<i class="fa-top fa-icon-font icon-zuo"></i>-->
      <!--</span>-->
      <!--</div>-->
      <!--<div v-show="isChangeWidth" class="min-ul">-->
      <!--<ul>-->
      <!--<li>-->
      <!--<span class="link-top-ul">教学角色管理</span>-->

      <!--</li>-->
      <!--<li>-->
      <!--<span class="link-top-ul">教学角色</span>-->
      <!--</li>-->
      <!--</ul>-->
      <!--</div>-->
      <!--</div>-->
      <!--<div class="big-ul" v-show="!isChangeWidth">-->
      <!--<keep-alive>-->
      <!--<transition name="fade"-->
      <!--v-on:before-enter="beforeEnter"-->
      <!--v-on:enter="enter"-->
      <!--v-on:leave="leave"-->
      <!--v-bind:css="false">-->
      <!--<ul style="display: block" v-if="heightAuto[4]==true">-->
      <!--<li>-->
      <!--<span class="link-bottom-ul">教学角色管理</span>-->

      <!--</li>-->
      <!--<li>-->
      <!--<span class="link-bottom-ul">教学角色</span>-->
      <!--</li>-->
      <!--</ul>-->
      <!--</transition>-->
      <!--</keep-alive>-->
      <!--</div>-->
      <!--</li>-->
    </ul>
    <!--<div v-show="!isChangeWidth" class="sub-nav">教学管理2</div>-->
    <!--<ul>-->
    <!--<li>-->
    <!--<div :class="{'checked':heightAuto[5],'show-overflow':isChangeWidth}" class="item" @click="showItem(5)">-->
    <!--<i class="fa-icon-font icon-xuanke-xian"></i>-->
    <!--<div v-show="!isChangeWidth" style="display: inline-block">-->
    <!--<span>选课</span>-->
    <!--<span  :class="{'rotate':heightAuto[5]}" class="pull-right-box">-->
    <!--<i class="fa-top fa-icon-font icon-zuo"></i>-->
    <!--</span>-->
    <!--</div>-->
    <!--<div v-show="isChangeWidth" class="min-ul">-->
    <!--<ul>-->
    <!--<li>-->
    <!--<span class="link-top-ul">教学角色管理</span>-->

    <!--</li>-->
    <!--<li>-->
    <!--<span class="link-top-ul">教学角色</span>-->
    <!--</li>-->
    <!--</ul>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="big-ul" v-show="!isChangeWidth">-->
    <!--<keep-alive>-->
    <!--<transition name="fade-li"-->
    <!--v-on:before-enter="beforeEnter"-->
    <!--v-on:enter="enter"-->
    <!--v-on:leave="leave"-->
    <!--v-bind:css="false">-->
    <!--<ul style="display: block" v-if="heightAuto[5]==true">-->
    <!--<li>-->
    <!--<span class="link-bottom-ul">教学角色管理</span>-->

    <!--</li>-->
    <!--<li>-->
    <!--<span class="link-bottom-ul">教学角色</span>-->
    <!--</li>-->
    <!--</ul>-->
    <!--</transition>-->
    <!--</keep-alive>-->
    <!--</div>-->
    <!--</li>-->
    <!--<li>-->
    <!--<div :class="{'checked':heightAuto[6],'show-overflow':isChangeWidth}" class="item" @click="showItem(6)">-->
    <!--<i class="fa-icon-font icon-baobiao"></i>-->
    <!--<div v-show="!isChangeWidth" style="display: inline-block">-->
    <!--<span>报表</span>-->
    <!--<span  :class="{'rotate':heightAuto[6]}" class="pull-right-box">-->
    <!--<i class="fa-top fa-icon-font icon-zuo"></i>-->
    <!--</span>-->
    <!--</div>-->
    <!--<div v-show="isChangeWidth" class="min-ul">-->
    <!--<ul>-->
    <!--<li>-->
    <!--<span class="link-top-ul">教学角色管理</span>-->

    <!--</li>-->
    <!--<li>-->
    <!--<span class="link-top-ul">教学角色</span>-->
    <!--</li>-->
    <!--</ul>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="big-ul" v-show="!isChangeWidth">-->
    <!--<keep-alive>-->
    <!--<transition name="fade-li"-->
    <!--v-on:before-enter="beforeEnter"-->
    <!--v-on:enter="enter"-->
    <!--v-on:leave="leave"-->
    <!--v-bind:css="false">-->
    <!--<ul style="display:block;" v-if="heightAuto[6]">-->
    <!--<li>-->
    <!--<span class="link-bottom-ul">教学角色管理</span>-->

    <!--</li>-->
    <!--<li>-->
    <!--<span class="link-bottom-ul">教学角色</span>-->
    <!--</li>-->
    <!--</ul>-->
    <!--</transition>-->
    <!--</keep-alive>-->
    <!--</div>-->
    <!--</li>-->
    <!--</ul>-->
  </aside>
</template>

<script>
export default {
  name: 'Aside',
  props: ['isChangeWidth'],
  data() {
    return {
      heightAuto: [false, false, false, false, false, false, false],
      // 选择某一项
      targetEvent: null,
      linkTopUls: null,
      linkUlBottoms: null,
      clickFlag: true
    }
  },
  methods: {
    homeAsideClick(e) {
      if (this.clickFlag) {
        this.clickFlag = false
        var _this = this
        this.targetEvent = e.target || window.event.srcElement
        this.linkTopUls = Array.from(this.$refs.HomeAsidePart.querySelectorAll('.link-top-ul'))
        this.linkUlBottoms = Array.from(this.$refs.HomeAsidePart.querySelectorAll('.link-bottom-ul'))
        if (this.targetEvent.classList.contains('link-bottom-ul')) {
          this.linkUlBottoms.forEach(function(item, i) {
            if (_this.targetEvent === item) {
              _this.targetEvent.classList.add('checked')
              _this.linkTopUls[i].classList.add('checked')
            } else {
              item.classList.remove('checked')
              _this.linkTopUls[i].classList.remove('checked')
            }
          })
        } else if (this.targetEvent.classList.contains('link-top-ul')) {
          this.linkTopUls.forEach(function(item, i) {
            if (_this.targetEvent === item) {
              _this.targetEvent.classList.add('checked')
              _this.linkUlBottoms[i].classList.add('checked')
            } else {
              item.classList.remove('checked')
              console.log(_this.linkUlBottoms[i], 133)
              _this.linkUlBottoms[i].classList.remove('checked')
            }
          })
        }
        this.targetEvent = null
        this.linkTopUls = null
        this.linkUlBottoms = null
        this.clickFlag = true
      }
    },
    // 选择某项动画赋值
    showItem(x) {
      var _this = this
      if (!this.isChangeWidth) {
        this.rotate = !this.rotate
        this.heightAuto.forEach(function(item, i) {
          if (x !== i) {
            _this.$set(_this.heightAuto, i, false)
          } else {
            _this.$set(_this.heightAuto, i, !_this.heightAuto[i])
          }
        })
      } else {
        this.heightAuto.forEach(function(item, i) {
          if (x !== i) {
            _this.$set(_this.heightAuto, i, false)
          } else {
            _this.$set(_this.heightAuto, i, true)
          }
        })
      }
    },
    beforeEnter(el, done) {
      Velocity(el, { height: 42 * el.querySelectorAll('li').length + 'px' }, { duration: 300 }, { complete: done })
    },
    enter(el, done) {
    },
    leave(el, done) {
      Velocity(el, { height: 0 }, { duration: 300 }, { complete: done })
    }
  }
  // props: {
  //   status: {
  //     type: String,
  //     required: true,
  //     validator: function(value) {
  //       return [
  //         'heightAuto',
  //         'isChangeWidth'
  //       ].indexOf(value) !== -1
  //     }
  //   }
  // }
}
</script>
<style lang="less" scoped>
    aside.home-aside-part{
        -webkit-transition: width 0.3s;
        -moz-transition: width 0.3s;
        -ms-transition: width 0.3s;
        -o-transition: width 0.3s;
        transition: width 0.3s;
        width: 230px;
        top:0;
        left:0;
        position: fixed;
        height: 100vh;
        padding-top: 65px;
        background-color: rgb(51, 51, 51);
        z-index: 9;
        .sub-nav{
            color: #fff;
            background: rgba(0, 0, 0, 0.5);
            overflow: hidden;
            text-overflow: clip;
            display: inline-block;
            margin:30px 0 15px 0;
            padding-left: 10px;
            padding-right: 10px;
            height: 28px;
            line-height: 28px;
            text-align: center;
            -webkit-border-radius: 14px;
            -moz-border-radius: 14px;
            border-radius: 14px;
            position: relative;
            left:15px;
        }
        ul{
            cursor: pointer;
            li{
                font-weight: 400;
                font-size: 14px;
                line-height: 42px;
                position: relative;
                color:#fff;
                div.item{
                    position: relative;
                    padding-left: 15px;
                    border-left:3px solid transparent;
                    height: 42px;
                    padding-right: 5px;
                    white-space: nowrap;
                    overflow: hidden;
                    /*隐藏部分。。。显示*/
                    text-overflow:ellipsis;
                    >i{
                        font-weight: 700;
                        margin-right: 7px;
                        vertical-align: middle;
                    }
                    >div{
                        width: 180px;
                        span:first-child{
                            width: 152px;
                            overflow: hidden;
                            text-overflow:ellipsis;
                            display: inline-block;
                            vertical-align: middle;
                        }
                        span.pull-right-box{
                            transition: transform 0.3s;
                            -webkit-transform: none;
                            -moz-transform: none;
                            -ms-transform: none;
                            -o-transform: none;
                            transform: none;
                            float: right;
                            height: 14px;
                            width: 14px;
                            margin-right: 8px;
                            margin-top: 14px;
                            -webkit-border-radius: 7px;
                            -moz-border-radius: 7px;
                            border-radius: 7px;
                            overflow: hidden;
                            background: #fff;
                            text-align: center;
                            i{
                                display: inline-block;
                                width: 14px;
                                height: 14px;
                            }
                        }
                        span.pull-right-box.rotate{
                            -webkit-transform: rotate(-90deg);
                            -moz-transform: rotate(-90deg);
                            -ms-transform: rotate(-90deg);
                            -o-transform: rotate(-90deg);
                            transform: rotate(-90deg);
                        }
                    }
                    >div.min-ul{
                        display: none;
                        position: absolute;
                        width:160px;
                        background: #000;
                        right:-158px;
                        top:0;
                        padding-right: 10px;
                        .link-top-ul{
                            overflow: hidden;
                            text-overflow:ellipsis;
                            position: relative;
                            padding-left: 30px;
                        }
                        .link-top-ul.checked::before{
                            position: absolute;
                            background: #fff;
                            display: inline-block;
                            height: 8px;
                            width: 8px;
                            -webkit-border-radius: 50%;
                            -moz-border-radius: 50%;
                            border-radius: 50%;
                            content: '';
                            left:15px;
                            top:50%;
                            -webkit-transform: translateY(-50%);
                            -moz-transform: translateY(-50%);
                            -ms-transform: translateY(-50%);
                            -o-transform: translateY(-50%);
                            transform: translateY(-50%);
                        }
                    }
                    &:hover{
                        border-left:3px solid #fff;
                        background: #000;
                        .min-ul{
                            display: block;
                        }
                    }
                }
                div.item.checked{
                    border-left:3px solid #fff;
                    background: #000;
                }
                div.big-ul{
                    >ul{
                        height:0;
                        display: block!important;
                        overflow: hidden;
                        li{
                            height: 42px;
                            a{
                                color:#fff;
                                display: block;
                                padding-left: 43px;
                                position: relative;
                            }
                            span{
                                display: block;
                                padding-left: 43px;
                                position: relative;
                            }
                            a.checked::before,span.checked::before{
                                position: absolute;
                                background: #fff;
                                display: inline-block;
                                height: 8px;
                                width: 8px;
                                -webkit-border-radius: 50%;
                                -moz-border-radius: 50%;
                                border-radius: 50%;
                                content: '';
                                left:25px;
                                top:17px;
                            }
                        }
                    }
                }
            }
        }
    }
    aside.home-aside-part.small-width{
        width:55px;
    }
</style>
