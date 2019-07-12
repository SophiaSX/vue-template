<template>
  <footer :class="{'big-width':isChangeWidth}" class="home-footer-part">
    <div class="footer-box clearfix">
      <span>北京奥鹏远程教育中心有限公司 © 2018
        <strong>OPEN.SK</strong>
      </span>
      <span class="f700 fr">Version
        <i style="font-style: normal">1.0</i>
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: ['isChangeWidth']
}
</script>
<style lang="less" scoped>
  footer.home-footer-part{
    transition: all 0.3s;
    background: #fff;
    padding-left: 230px;
    height: 50px;
    line-height: 50px;
    position: absolute;
    bottom:0;
    right:0;
    width: 100%;
    span:first-child{
      margin-left: 30px;
    }
    span:last-child{
      margin-right: 30px;
    }
  }
  footer.home-footer-part.big-width{
    padding-left: 55px;
  }
</style>

