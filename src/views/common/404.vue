<template>
    <div class="content-wrapper" style="overflow: hidden;">
        <main class="wrapper-404" id="wrapper-404" ref="wrapper" style="overflow: hidden">
            <div class="demo">
                <p><span>4</span><span>0</span><span>4</span></p>
                <p>该页面不存在(´･ω･`) <router-link :to="{path:'index'}">返回个人中心</router-link></p>
            </div>
            <!--<div>-->
            <!--</div>-->
            <!--<div id="text">-->
                <!--<strong>-->
                    <!--<span></span>-->
                    <!--<a href="http://www.17sucai.com/">返回首页</a>-->
                    <!--<a href="javascript:history.back()">返回上一页</a>-->
                <!--</strong>-->
            <!--</div>-->
        </main>
        <!--<main class="wrapper-404" ref="wrapper" style="overflow: hidden">-->
            <!--<div class="error-404">-->
                <!--<div class="error-number"><span>4</span><span><img class="icon has-animation" src="https://image.flaticon.com/icons/svg/179/179595.svg" alt=""/></span><span>4</span></div>-->
                <!--<h1> <vue-typer-->
  <!--:text='["Oops! Page not found","We could not find the page you were looking for", "Meanwhile", "you may return to dashboard", "or try using the search form."]'-->
  <!--:repeat='Infinity'-->
  <!--:shuffle='false'-->
  <!--initial-action='typing'-->
  <!--:pre-type-delay='70'-->
  <!--:type-delay='70'-->
  <!--:pre-erase-delay='2000'-->
  <!--:erase-delay='250'-->
  <!--erase-style='clear'-->
  <!--:erase-on-complete='false'-->
  <!--caret-animation='solid'-->
<!--&gt;</vue-typer></h1> </div>-->
        <!--</main>-->
        <!--<div class="moon"></div>-->
    </div>
</template>
<script>
export default {
  name: 'NotFound',
  mounted () {
    var _this = this
    function getMinHeight () {
      // 最小高度等于可视高度-头部65-底部50
      var height = document.documentElement.clientHeight - 50 || document.body.clientHeight - 50
      // console.log()
      _this.$refs.wrapper.style.minHeight = height + 'px'
      // var boxNode = _this.$refs.boxContent.querySelector('.box')
      // boxNode.style.minHeight = height + 'px'
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
  beforeRouteLeave (to, from, next) {
    window.onresize = ''
    next()
  }
}
</script>
<style lang="less" scoped="scoped">
    #wrapper-404{
        padding-top: 130px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        /*margin: 130px auto 0;*/
        /*width: 399px;*/
        .demo{
            width: 600px;
            margin: 0 auto;
            overflow: hidden;
            p {
                display: block;
                /*-webkit-margin-before: 1em;*/
                /*-webkit-margin-after: 1em;*/
                /*-webkit-margin-start: 0px;*/
                /*-webkit-margin-end: 0px;*/
            }
            p:first-child{
                margin-top: 120px;
                margin-bottom: 120px;
                text-align: center;
                font-family: cursive;
                font-size: 150px;
                font-weight: bold;
                line-height: 100px;
                letter-spacing: 5px;
                color: #fff;
                span{
                    cursor: pointer;
                    text-shadow: 0px 0px 2px #686868, 0px 1px 1px #ddd, 0px 2px 1px #d6d6d6, 0px 3px 1px #ccc, 0px 4px 1px #c5c5c5, 0px 5px 1px #c1c1c1, 0px 6px 1px #bbb, 0px 7px 1px #777, 0px 8px 3px rgba(100, 100, 100, 0.4), 0px 9px 5px rgba(100, 100, 100, 0.1), 0px 10px 7px rgba(100, 100, 100, 0.15), 0px 11px 9px rgba(100, 100, 100, 0.2), 0px 12px 11px rgba(100, 100, 100, 0.25), 0px 13px 15px rgba(100, 100, 100, 0.3);
                    -webkit-transition: all .1s linear;
                    transition: all .1s linear;
                }
                span:hover{
                    text-shadow: 0px 0px 2px #686868, 0px 1px 1px #ddd, 0px 2px 1px #d6d6d6, 0px 3px 1px #ccc, 0px 4px 1px #c5c5c5, 0px 5px 1px #c1c1c1, 0px 6px 1px #bbb, 0px 7px 1px #777, 0px 8px 3px rgba(100, 100, 100, 0.4), 0px 9px 5px rgba(100, 100, 100, 0.1), 0px 10px 7px rgba(100, 100, 100, 0.15), 0px 11px 9px rgba(100, 100, 100, 0.2), 0px 12px 11px rgba(100, 100, 100, 0.25), 0px 13px 15px rgba(100, 100, 100, 0.9);
                }
            }
            p:not(:first-child){
                text-align: center;
                color: #666;
                font-family: cursive;
                font-size: 20px;
                text-shadow: 0 1px 0 #fff;
                letter-spacing: 1px;
                line-height: 2em;
                margin-top: -50px;
                a{
                    display:inline-block;
                    height: 100%;
                    padding: 0 0.5em;
                    color: #686868;
                    border:1px solid #686868;
                    border-radius: 0.5em;
                    margin-left: 0.5em;
                    &:hover{
                        border-color:#000;
                        color:#000;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>
