<template>
  <main :class="{'big-width':isChangeWidth}" class="home-main-part">
    <article class="home-article-part">
      <div class="main-box">
        <router-view></router-view>
      </div>
    </article>
    <transition>
      <footer-part :is-change-width="isChangeWidth"></footer-part>
    </transition>
  </main>
</template>
<script>
const Footer = () => import('@/views/common/Footer.vue')
export default {
  name: 'Main',
  props: ['isChangeWidth'],
  components:{
    'footer-part': Footer
  }
}
</script>
<style lang="less" scoped>
    main.home-main-part.big-width{
        padding-left: 55px;
    }
    main.home-main-part{
        transition: all 0.3s;
        /*min-height: 100vh;*/
        /*padding-top: 65px;*/
        padding-left: 230px;
        position: relative;
        article.home-article-part{
            background: #eee;
            /*width: 100%;*/
            /*height: 100%;*/
            min-height: 100vh;
            padding:80px 15px 65px;
            display: flex;
            .main-box{
                flex:1;
                /*height: 200px;*/
                /*min-height: 100vh;*/
                /*padding:65px 0px 50px;*/
                /*padding:80px 15px 65px;*/
                /*border:15px solid #eee;*/
                background: #fff;
                -webkit-border-radius: 5px;
                -moz-border-radius: 5px;
                border-radius: 5px;
                -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
            }
        }
    }
</style>
