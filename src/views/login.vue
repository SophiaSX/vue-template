<template>
  <div class="login-container-father">
    <i class="logo">奥鹏教育</i>
    <!--v-on:keydown="enterLogin(e)"-->
    <div class="login-container">
      <p class="lead text-center">
        <!--<img style="width:90px;height:90px" src="../../static/img/logo.png" alt="">-->
        <!--<lang-select class="set-language"/>-->
      </p>
      <p class="lead text-center" style="padding-bottom: 25px">
        {{ $t('login.title') }}
        <!--<img style="" src="../icons/svg/language.svg" alt="">-->
        <!--<lang-select class="set-language"/>-->
      </p>
      <el-form ref="loginForm" class="demo-ruleForm" :model="loginForm" status-icon :rules="rules">
        <el-form-item prop="username">
          <el-input type="text" autocomplete="on" :placeholder="$t('login.username')" v-model.trim="loginForm.username" v-on:input="inputFunc"></el-input>
        </el-form-item>
        <div>
          <el-form-item prop="password">
            <el-input type="password" autocomplete="on" :placeholder="$t('login.password')" v-model.trim="loginForm.password" v-on:input="inputFunc"></el-input>
          </el-form-item>
        </div>
        <p>
          <el-checkbox v-model="loginForm.checked" label="记住密码" @change="rememberMe"></el-checkbox>
        </p>
        <p class="text-center text-danger" v-if="isTrue" v-cloak>{{errorMsg}}</p>
        <el-form-item class="text-center">
          <el-button type="primary" style="margin-top: 10px;width:100%;" @click="handleLogin()">{{ $t('login.logIn') }}</el-button>
        </el-form-item>

      </el-form>
    </div>
    <em> © 版权所有：奥鹏教育</em>
  </div>
</template>
<script>
  import { isvalidUsername } from '@/utils/validate'
  import LangSelect from '@/components/LangSelect'
  import Cookies from 'js-cookie'
  export default {
    name: 'Login',
    components: { LangSelect },
    beforeRouteLeave (to, from, next) {
      // console.log(this.keyUpEvent, 222)
      document.body.onkeyup = ''
      next()
    },
    beforeMount () {
      this.loginForm.checked = Cookies.get('checked') === 'true'
    },
    mounted () {
      var _this = this
      document.body.onkeyup = function (e) {
        e = e || window.event
        if (Number(e.keyCode) === 13) {
          _this.handleLogin()
        }
      }
    },
    data () {
      // 用户名输入验证
      let validateUser = (rule, value, callback) => {
        if (value === ''||!isvalidUsername(value)) {
          callback(new Error(this.$t('login.userNameError')))
        } else {
          callback()
        }
      }
      // 密码输入验证
      let validatePwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error(this.$t('login.passWordError')))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          username: Cookies.get('username') || 'admin',
          password: Cookies.get('pwd') || '111111',
          checked: false
        },
        rules: {
          username: [
            {validator: validateUser, trigger: 'blur'}
          ],
          password: [
            {validator: validatePwd, trigger: 'blur'}
          ]
        },
        isTrue: false,
        errorMsg: this.$t('login.errorMsg'),
        academyItems: []
      }
    },
    methods: {
      rememberMe () {
        Cookies.set('checked', this.loginForm.checked)
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true
            this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
              this.loading = false
              this.$router.push({ path: this.redirect || '/Select' })
            }).catch(() => {
              this.loading = false
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      inputFunc () {
        // 获取焦点去除验证提示
        if (this.isTrue === true) {
          this.isTrue = false
        }
      }
    }
  }
</script>
<style scoped="scoped" lang="scss">
  .login-container-father{
    width: 100vw;
    height: 100vh;
    background: url(/static/img/back2.jpg) 0 0 no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    overflow: hidden;
    position: relative;
    .logo{
      position: absolute;
      top:40px;
      left:40px;
      text-indent: -9999em;
      height:50px;
      width: 201px;
      background: url(/static/img/open_logo_spring.png) 0 0 no-repeat;
      -webkit-background-size: 100% 100%;
      background-size: 100% 100%;
    }
    >em{
      font-style: normal;
      position: absolute;
      bottom: 20px;
      font-size: 16px;
      color: #fff ;
      width: 100%;
      text-align: center;
      z-index: 1;
    }
  }
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 15px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    /*margin: 12% auto;*/
    position: absolute;
    z-index: 2;
    left:50%;
    top:50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 400px;
    padding: 15px 35px 20px 35px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: #889aa4;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .text-danger{
    color:#fa5555;
  }

  .lead {
    position: relative;
    .title {
      font-size: 26px;
      color: #eee;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .set-language {
      color: #fff;
      position: absolute;
      top: 5px;
      right: 0px;
    }
  }

</style>
