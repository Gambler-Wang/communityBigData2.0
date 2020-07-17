<template>
  <section id="headerLogin">
    <div>
      <div class="left">
        <img src="../assets/img/logo.png" alt="">
        <h3>智慧社区大数据看板</h3>
      </div>
      <div class="right">
        <div class="community-btn">
           <el-select @change="changeCommunity"  v-if="accType==='1'|| accType==='3'" v-model="communityCode"
                  placeholder="请选择社区">
              <el-option v-for="item of communityData" :key="item.keyValue" 
                :label="item.keyValue"
                :value="item.keyCode">
              </el-option>
            </el-select>
        </div>
        <div class="full-btn" @click="handleFullScreen">
          <i :class="(isFullScreen)?'el-icon-small':'el-icon-full'"></i>
          <span>{{(isFullScreen)?'退出全屏':'全屏'}}</span>
        </div>
        <div class="exit-btn" @click="exit">
          <i class="el-icon-switch-button"></i>
          退出
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name:'headerLogin',
  props:{
     
  },
  inject:['reload'],
  data() {
    return {
      accType: this.getCookie('accType'),
      communityCode:'YT-A2',
      communityData:[
        {
          keyCode: "YT-A2",
          keyValue: "元泰未来城",
        }
      ],
      isFullScreen:false,
    }
  },
  created(){
    this.communityCodeSelect();
  },
  mounted() {

  },
  methods: {
    changeCommunity(communityCode){
      this.request(this.api.getToken, {
        account: this.getCookie('account'),
        communityCode: communityCode
      }, 'post').then(res => {
        if (res.code === 200) {
          // this.delCookie('token');
          this.setCookie('token', res.data.accessToken, res.data.expiresIn);
          this.$message({
            message: res.msg,
            type: 'success'
          });
          this.$emit('_changeCommunity')
          // this.$refs.vTags.closeAll()
          // this.$go('/index')
        }
      })
    },
    communityCodeSelect() {
      let _this = this
      this.request(this.api.communityCodeSelect, {account: this.getCookie('account'),}, 'post').then(res => {
        if (res.code === 200) {
          if (res.data.length > 0) {
            this.communityData = res.data
            this.communityData.forEach(function (item) {
              if (item.isDefault === 1) {
                _this.communityCode = item.keyCode;
              }
            })
          }
        }
      })
    },
    handleFullScreen(){
      if(this.isFullScreen){
        this.$exitFullScreen();
        this.isFullScreen=false;
      }else{
        this.$fullScreen();
        this.isFullScreen=true;
      }
    },
    exit(){
      this.$exitFullScreen();
      window.location.href='/zhsq/serverIndex';
      // this.$go('/login')
    }
  }
}
</script>

<style scoped lang="less">
  #headerLogin {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 30px;
    &>div{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      &>div{
        display: flex;
        align-items: center;
        &.left{
          img{
            width: 84px;
            height: 31px;
            margin-right: 16px;
          }
          h3{
            color: #B5EFFE;
            font-size: 22px;
            font-weight: normal;
          }
        }
        &.right{
          color: #B5EFFE;
          &>div{
            margin-right: 40px;
            cursor: pointer;
            &:nth-last-of-type(1){
              margin-right: 0;
            }
            &.full-btn{
              &:hover{
                opacity: 0.8; 
                transition: all .2s;
              }
            }
            &.exit-btn{
              &:hover{
                opacity: 0.8; 
                transition: all .2s;
              }
            }
          }
        }
      }
    }
  }
</style>
<style>
#headerLogin .community-btn .el-input__inner{
  background: transparent;
  border-color: transparent;
  width: 168px;
  height: 43px;
  color: #B5EFFE;
}
#headerLogin .community-btn .el-select__caret.el-input__icon{
  color: #B5EFFE;
}
</style>

