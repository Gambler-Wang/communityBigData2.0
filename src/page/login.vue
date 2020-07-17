<template>
  <div id="login">
    <el-row>
      <el-col :span="16">
        <div class="bg-purple-dark">
          <div class="header"><img src="../assets/img/logo.png" alt=""><span>智慧社区云</span></div>
          <h3>建立社区生态 实现多方共赢</h3>
          <p> 成熟的运营方案和配套功能让智慧社区平台具备运营能力</p>
          <img src="../assets/img/login.png" alt="">
        </div>
      </el-col>
      <el-col :span="8" style="height: 100vh;">
        <div class="loginBox">
          <p class="welcome">welcome</p>
          <p >登录到智慧社区云</p>
          <img src="../assets/img/admin.png" alt="">
          <div>
            <el-form  :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100" class="form">
              <el-form-item  prop="account">
                <el-input type="text" v-model="ruleForm2.account" placeholder="请输入账号" autocomplete="off" @keyup.enter.native="submitForm('ruleForm2')">
                  <i slot="prefix" class="el-icon-user"></i>
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input type="password" v-model="ruleForm2.password" placeholder="请输入密码" autocomplete="off" @keyup.enter.native="submitForm('ruleForm2')">
                  <i slot="prefix" class="el-icon-lock"></i>
                </el-input>
              </el-form-item>
              <!--<el-form-item prop="tenantCode">-->
              <!--<el-input type="text"  v-model.number="ruleForm2.tenantCode"></el-input>-->
              <!--</el-form-item>-->
              <el-form-item>
                <el-button type="primary" style="width: 100%;" @click="submitForm('ruleForm2')">登录</el-button>
                <!--<el-button @click="resetForm('ruleForm2')">重置</el-button>-->
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        ruleForm2: {
          account: 'admin',
          password: 'admin',
          tenantCode: '000000'
        },
        rules2: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          tenantCode: [
            { required: true, message: '请填写验证码', trigger: 'blur' }
          ]
        }
      };
    },
    created(){
      this.delCookie("token");
      // this.testAPI();
    },
    methods: {
      testAPI(){
        this.request(this.api.HouseDataAPI, {}, 'get').then(res => {
          if (res.code === 200) {
            console.log(res)
          }
        })

      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.login()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      // 获取按钮权限
      getBtnLimitData(){
        // window.limitData={};
        var that =this;
        const limitData={};
        this.request(this.api.menuList, {module:this.BASE.CURRENT_MODEL,category:2}, 'post').then(res => {
          if (res.code === 200) {
            const limitList=res.data;
            limitList.forEach(function(value,index){
              //全局对象
              //limitData[value.code] = true;
              limitData[value.code] = true;
            })
            this.limitData=limitData;
            // window.localStorage.setItem('limit',JSON.stringify(limitData));
          }
        })
      },
      login(){
        this.postRequest(this.api.login,this.ruleForm2).then(res=>{
          if(res.code === 200){
            this.setCookie('token', res.data.accessToken, res.data.expiresIn)
            this.setCookie('account', res.data.account, res.data.expiresIn)
            this.setCookie('accType', res.data.accType, res.data.expiresIn)
            this.setCookie('avatar', res.data.avatar)
            this.getBtnLimitData();
            this.$message({
              message: res.msg,
              type: 'success'
            });
            this.$go('/index')
          }else {
            // this.$message({
            //   message: res.msg,
            //   type: 'error'
            // });
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="less">
  #login {
    .bg-purple-dark {
      height: 100vh;
      text-align: center;
      background: -webkit-radial-gradient(#2651c7, #072898); /* Safari 5.1 - 6.0 */
      background: -o-radial-gradient(#2651c7, #072898); /* Opera 11.6 - 12.0 */
      background: -moz-radial-gradient(#2651c7, #072898); /* Firefox 3.6 - 15 */
      background: radial-gradient(#2651c7, #072898); /* 标准的语法（必须放在最后） */
      .header{
        padding: 30px;
        font-size: 18px;
        background-color: transparent;
        text-align: left;
        color:rgba(188,214,255,1);
        line-height: 60px;
        img {
          padding-right: 8px;
        }
        span{
          vertical-align: text-bottom;
        }
      }
      h3 {
        font-size: 44px;
        color:rgba(188,214,255,1);
        line-height: 48px;
      }
      p {
        font-size: 18px;
        color:rgba(188,214,255,1);
        line-height: 48px;
      }
    }

    .welcome {
      text-align: center;
      font-size: 30px;
      font-weight:400;
      color:rgba(51,51,51,1);
      line-height:48px;
    }
    .loginBox {
      position: relative;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      text-align: center;
      font-size: 18px;
      font-weight:400;
      color:rgba(51,51,51,1);
      line-height:48px;
      .el-input__inner {
        border-radius: 50px;
      }
    }
    .form{
      display: inline-block;
      width: 340px;
    }
  }
</style>
