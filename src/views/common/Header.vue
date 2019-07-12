<template>
  <header class="home-header-part">
    <transition>
      <a :class="{'small-width':isChangeWidth}" href="javascript:;" class="logo">
        <span>
          <img :class="{'scale-change':isChangeWidth}" src="/static/img/logo.png" alt="">
          <b v-show="!isChangeWidth">教学管理</b>
        </span>
      </a>
    </transition>
    <nav>
      <i class="nav-sidebar-icon" data-toggle="offcanvas" role="button">
        <svg
          :fill="fillColor"
          t="1544161532431"
          class="nav-sidebar-icon-svg"
          style=""
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2070"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="30"
          height="30"
          @mouseenter="fillHover"
          @mouseleave="fillLeave"
          @click="changeWidth">
          <defs/>
          <path
            d="M233.184 263.16c-22.936 0-43.448 20.512-43.448 43.448s20.512 42.24 43.448 42.24c22.928 0 42.24-19.312 42.24-42.24s-19.312-43.448-42.24-43.448zM865.336 306c0 18.776-13.68 34-30.544 34H370.72c-16.864 0-30.536-15.224-30.536-34S353.856 272 370.72 272h464.072c16.864 0 30.544 15.224 30.544 34zM233.184 472.496c-22.936 0-43.448 20.512-43.448 43.448s20.512 42.24 43.448 42.24c22.928 0 42.24-19.312 42.24-42.24s-19.312-43.448-42.24-43.448zM865.336 515.336c0 18.776-13.68 34-30.544 34H370.72c-16.864 0-30.536-15.224-30.536-34 0-18.784 13.672-34 30.536-34h464.072c16.864 0 30.544 15.216 30.544 34z"
            p-id="2071"/>
          <path
            d="M233.184 681.832c-22.936 0-43.448 20.512-43.448 43.448s20.512 42.24 43.448 42.24c22.928 0 42.24-19.312 42.24-42.24s-19.312-43.448-42.24-43.448zM865.336 724.672c0 18.776-13.68 34-30.544 34H370.72c-16.864 0-30.536-15.224-30.536-34 0-18.784 13.672-34 30.536-34h464.072c16.864 0 30.544 15.216 30.544 34z"
            p-id="2072"/>
        </svg>
      </i>
      <div class="fr">
        <div class="user-img-box fr">
          <img src="/static/img/boy.png" alt="">
        </div>
        <p class="fr"><span>您好，<i>张三</i>，欢迎来到教学管理系统！</span><span>河南开放省校</span><b>|</b><span>教学管理员</span></p>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'Header',
  props: ['isChangeWidth'],
  data: function() {
    return {
      fillColor: '#ccc'
    }
  },
  methods: {
    changeWidth() {
      this.$parent.$emit('changeWidth')
    },
    // 鼠标滑过菜单图标颜色改变
    fillHover() {
      this.fillColor = '3c8dbc'
    },
    fillLeave() {
      this.fillColor = '#ccc'
    }
  }
}
</script>
<style lang="less" scoped="scoped">
  header.home-header-part{
    /*overflow: hidden;*/
    white-space: nowrap;
    z-index: 10;
    box-shadow: rgba(0, 0, 0, 0.5) -5px 4px 20px -4px;
    text-size-adjust: 100%;
    height: 65px;
    line-height: 65px;
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    -webkit-box-shadow: 2px 4px 20px -4px rgba(0, 0, 0, 0.1);
    box-shadow: 2px 4px 20px -4px rgba(0, 0, 0, 0.1);
    .logo{
      -webkit-box-shadow: -5px 4px 20px -4px rgba(0, 0, 0, 0.5);
      box-shadow: -5px 4px 20px -4px rgba(0, 0, 0, 0.5);
      background-color: rgb(51, 51, 51);
      width: 230px;
      height: 100%;
      float: left;
      padding: 0 15px 10px;
      transition: all 0.3s;
      span{
        img{
          height: 35px;
          margin-right: 15px;
        }
        b{
          font-weight: 700;
          font-size: 18px;
          color:#fff;
          text-decoration: none;
        }
      }
    }
    .logo.small-width{
      width:55px;
    }
    nav{
      height: 100%;
      overflow: hidden;
      background: #fff;
      i.nav-sidebar-icon{
        display: inline-block;
        height: 100%;
        width: 65px;
        line-height: 65px;
        text-align: center;
        position: relative;
        .nav-sidebar-icon-svg{
          vertical-align: middle;
        }
      }
      .fr{
        .user-img-box{
          width: 50px;
          height: 50px;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          margin-top: 7px;
          overflow: hidden;
          margin-right: 25px;
          img{
            height: 50px;
            vertical-align: top;
          }
        }
        p.fr{
          color:rgb(51,51,51);
          font-weight: 500;
          span:last-child{
            margin-right: 15px;
          }
          span{
            i{
              font-style: normal;
              color:#a94442;
              font-weight: 700;
            }
          }
          b{
            margin-left: 10px;
            margin-right: 10px;
            color:rgb(204, 204, 204);
          }
        }
      }
    }
  }
</style>
